import {FrameworkPage} from './FrameworkPage.js'
import {deepMergeObjects} from '../functions/deep-merge-objects.js'
import { App } from './App.js'
import { Page } from './Page.js'
import { evalExpression } from '../functions/eval-expression.js'
import { getCopyWithRestoredClassInstances } from '../functions/get-copy-with-restored-class-instances.js'

const defaultRuntimeSettings = {
	isPreview: false,
	onPageShow: () => {},
	okToContinue: null, // async (nextToExecute = `some code`, continuesImmediately=false) => Promise.resolve(),
	onError: null, // (errorMessage) => {},
	onStateChange: (newState) => {},
	state: null,
	version: 1,
}

const constantNameRegExp = /^[A-Z0-9_]+$/

export class FrameworkApp{
	
	createApp = null // function or string with JS code that evaluate to createApp function.
	
	App = null
	app = null
	
	Pages = {}
	frameworkPage = null
	pageStates = {}
	
	errorMessage = ""
	
	runtimeSettings = {}
	
	constructor(createApp, runtimeSettings={}){
		
		const oldOnError = runtimeSettings?.onError
		
		this.createApp = createApp
		this.runtimeSettings = deepMergeObjects(
			{},
			defaultRuntimeSettings,
			runtimeSettings,
		)
		
		this.runtimeSettings.onError = (errorMessage) => {
			this.errorMessage = errorMessage
			oldOnError && oldOnError()
		}
		
	}
	
	// Call this method when the GUI environment has been initialized
	// (when we have detected voices, microphone, etc.).
	async start() {
		
		const {
			okToContinue,
			onError,
		} = this.runtimeSettings
		
		okToContinue ?
			await this.createAppInstance() :
			      this.createAppInstance()
		
		if(this.errorMessage){
			return
		}
		
		// If debugging, add steps to calling user defined methods.
		if (okToContinue) {
			
			// Add steps to App.
			for (const key of Object.getOwnPropertyNames(this.App.prototype)) {
				
				const value = this.App.prototype[key]
				
				if (typeof value == "function" && !App.prototype.hasOwnProperty(key)) {
					
					this.App.prototype[key] = function(...args){
						
						okToContinue(
							`${this.App.name}.${value.name}()`,
							true,
						)
						
						try {
							return value.apply(this, args)
						} catch (error) {
							onError(
								`Error in ${this.App.name}.${value.name}()`,
							)
							debugger
						}
						
					}
					
				}
				
			}
			
			// Add steps to all Pages.
			for(const UserPage of Object.values(this.Pages)){
				for (const key of Object.getOwnPropertyNames(UserPage.prototype)) {

					const value = UserPage.prototype[key]

					if (typeof value == "function" && !Page.prototype.hasOwnProperty(key)) {
						UserPage.prototype[key] = function(...args){

							okToContinue(
								`${UserPage.proxyName}.${value.name}()`,
								true,
							)

							try {
								return value.apply(this, args)
							} catch (error) {
								onError(
									`Error in ${UserPage.proxyName}.${value.name}()`,
								)
								debugger
							}

						}
					}

				}

			}
		}
		
		const state = this.runtimeSettings.state
		
		if(state){
			
			if(state.version < this.runtimeSettings.version){
				okToContinue ?
					await this.update() : 
					      this.update()
			}else{
				okToContinue ?
					await this.restoreFromState() :
					      this.restoreFromState()
			}
			
			return
			
		}
		
		okToContinue ?
			await this.runOnBefore() :
			      this.runOnBefore()
		
		if(this.errorMessage){
			return
		}
		
		const StartPage = this.runCreateStartPage()
		
		if(!StartPage){
			return
		}
		
		okToContinue ?
			await this.loadPage(StartPage) :
			      this.loadPage(StartPage)
		
	}
	
	async createAppInstance() {
		
		const {
			okToContinue,
			onError,
		} = this.runtimeSettings
		
		if (typeof this.createApp == "string") {
			
			try {
				this.createApp = evalExpression(this.createApp)
			} catch (error) {
				onError(
					`The code contains a Syntax Error: ${error}.`,
				)
				debugger
				return
			}
			
		}
		
		const frameworkApp = this
		
		const environment = {
			a: new Proxy({}, {
				get(target, prop, receiver) {
					return Reflect.get(
						frameworkApp.app,
						prop,
						frameworkApp.app,
					)
				},
				set(target, prop, value, receiver) {
					return Reflect.set(
						frameworkApp.app,
						prop,
						value,
						frameworkApp.app,
					)
				},
			}),
			p: new Proxy({}, {
				get(target, prop, receiver) {
					return Reflect.get(
						frameworkApp.frameworkPage.page,
						prop,
						frameworkApp.frameworkPage.page,
					)
				},
				set(target, prop, value, receiver) {
					return Reflect.set(
						frameworkApp.frameworkPage.page,
						prop,
						value,
						frameworkApp.frameworkPage.page,
					)
				},
			}),
		}
		
		let createAppResult
		
		try {
			createAppResult = this.createApp(environment)
		} catch (error) {
			onError(
				`Error when defining classes: ${error}.`
			)
			debugger
			return
		}
		
		if (!(createAppResult?.App?.prototype instanceof App)) {
			onError(
				`Error: Your own App class must inherit from the App class that comes from Bagawork.`,
			)
			debugger
			return
		}
		
		this.App = createAppResult.App
		this.Pages = createAppResult.Pages
		
		okToContinue && await okToContinue(
			`new ${this.App.name}`,
		)
		
		try {
			this.app = new this.App()
		} catch (error) {
			onError(
				`Error ocurred when creating a new instance of ${this.App.name}: ${error}.`,
			)
			debugger
			return
		}
		
	}
	
	async runOnBefore() {
		
		const {
			okToContinue,
			onError,
		} = this.runtimeSettings
		
		if (this.App.prototype.hasOwnProperty('onBefore')) {
			
			okToContinue && await okToContinue(
				`${this.App.name}.onBefore()`,
			)
			
			try {
				this.app.onBefore()
			} catch (error) {
				onError(
					`Error in ${this.App.name}.onBefore(): ${error}.`,
				)
				debugger
				return
			}
			
		}
		
	}
	
	async update() {
		
		const {
			state,
		} = this.runtimeSettings
		
		let PageToLoadAfterUpdate = null
		
		for (const stateKey of Object.keys(state.app)) {

			if (this.app.hasOwnProperty(stateKey)) {

				if (!constantNameRegExp.test(stateKey)) {
					this.app[stateKey] = state.app[stateKey]
				}

			}

		}

		PageToLoadAfterUpdate = await this.runOnUpdate()

		if (this.errorMessage) {
			return
		}

		if (
			!PageToLoadAfterUpdate &&
			!this.Pages.hasOwnProperty(state.currentPageName)
		) {

			PageToLoadAfterUpdate = this.runCreateStartPage()

			if (this.errorMessage) {
				return
			}

		}

		await this.updatePages()
		
		this.frameworkPage = new FrameworkPage(
			this,
			PageToLoadAfterUpdate ?? this.Pages[state.currentPageName],
		)
		await this.frameworkPage.loadFromState()
		this.runtimeSettings.onStateChange(
			this.getState(),
		)
		
	}
	
	async runOnUpdate(){
		
		const {
			okToContinue,
			onError,
		} = this.runtimeSettings
		
		let PageToLoad = null
		
		if (this.App.prototype.hasOwnProperty('onUpdate')) {
			
			okToContinue && await okToContinue(
				`${this.App.name}.onUpdate()`,
			)
			
			try {
				PageToLoad = this.app.onUpdate(
					this.runtimeSettings.state.app,
					this.runtimeSettings.state.version,
				)
			} catch (error) {
				onError(
					`Error in ${this.App.name}.onUpdate(): ${error}.`,
				)
				debugger
				return
			}
			
			if (PageToLoad && !(PageToLoad instanceof Page)) {
				onError(
					`Error in ${this.App.name}.onUpdate(): If returning a value, it must be a class inheriting from Page.`,
				)
				debugger
				return
			}
			
		}
		
		return PageToLoad
		
	}
	
	async updatePages() {
		
		const {
			state,
		} = this.runtimeSettings
		
		for (const pageName of Object.keys(state.pages)) {
			
			if (this.Pages.hasOwnProperty(pageName)){
				
				this.pageStates[pageName] = {}
				
				this.frameworkPage = new FrameworkPage(
					this,
					this.Pages[pageName],
				)
				this.frameworkPage.page = new this.frameworkPage.Page()
				
				const { page } = this.frameworkPage
				
				for (const stateKey of Object.keys(state.pages[pageName])) {
					
					if (page.hasOwnProperty(stateKey)) {
						
						if (!constantNameRegExp.test(stateKey)) {
							page[stateKey] = state.pages[pageName][stateKey]
						}
						
					}
					
				}
				
				await this.frameworkPage.runOnUpdate()
				this.frameworkPage.rememberState()
				
			}
			
		}
		
	}
	
	async restoreFromState(){
		
		const {
			state,
		} = this.runtimeSettings
		
		try{
			
			Object.assign(
				this.app,
				getCopyWithRestoredClassInstances(state.app),
			)
			
			this.pageStates = getCopyWithRestoredClassInstances(state.pages)
			
			this.frameworkPage = new FrameworkPage(
				this,
				this.Pages[state.currentPageName],
			)
			
			await this.frameworkPage.loadFromState()
			
		}catch(error){
			
			this.onError(`Error occurred when trying to restore the state: ${error}`)
			debugger
			return
			
		}
		this.runtimeSettings.onStateChange(
			this.getState(),
		)
		
	}
	
	runCreateStartPage(){
		
		const {
			okToContinue,
			onError,
		} = this.runtimeSettings
		
		okToContinue && okToContinue(
			`${this.App.name}.createStartPage() (note: when previewing/debugging your app, ${this.App.name}.createStartPage() will always return the page you are previewing/debugging, and not the one you have written in ${this.App.name}.createStartPage())`,
			true,
		)
		
		if(!this.App.prototype.hasOwnProperty('createStartPage')){
			onError(
				`Error in ${this.App.name}: Method createStartPage() is missing.`,
			)
			debugger
			return
		}
		
		let StartPage
		
		try{
			StartPage = this.app.createStartPage()
		}catch(error){
			onError(
				`Error in ${this.App.name}.createStartPage(): ${error}.`,
			)
			debugger
			return
		}
		
		if(!StartPage){
			onError(
				`Error in ${this.App.name}.createStartPage(): Does currently not return a value at all. Must return a class that inherits from the Page class that comes from Bagawork.`,
			)
			debugger
			return
		}
		
		if(!(StartPage.prototype instanceof Page)){
			onError(
				`Error in ${this.App.name}.createStartPage(): The returned value must be a class that inherits from the Page class that comes from Bagawork.`,
			)
			debugger
			return
		}
		
		return StartPage
		
	}
	
	async loadPage(UserPage) {
		
		const { okToContinue } = this.runtimeSettings
		
		this.frameworkPage = new FrameworkPage(this, UserPage)
		
		if(okToContinue){
			await this.frameworkPage.createPageInstance()
			await this.frameworkPage.createBeforeDirections()
		} else {
			this.frameworkPage.createPageInstance()
			this.frameworkPage.createBeforeDirections()
		}
		
		if(!this.runtimeSettings.isPreview){
			
			const beforeDirection = this.frameworkPage.getFirstTrueBeforeDirection()
			
			if(beforeDirection){
				if (okToContinue){
					await this.loadPage(beforeDirection.getPage())
				}else{
					this.loadPage(beforeDirection.getPage())
				}
				return
			}
			
		}
		
		if (okToContinue) {
			await this.frameworkPage.runOnBefore()
			this.runtimeSettings.onStateChange(
				this.getState(),
			)
			await this.frameworkPage.initializeTheRest()
			okToContinue(`Interact with the GUI`, true)
		} else {
			this.frameworkPage.runOnBefore()
			this.runtimeSettings.onStateChange(
				this.getState(),
			)
			this.frameworkPage.initializeTheRest()
		}
		
	}
	
	async moveOn(){
		
		await this.frameworkPage.runOnAfter()
		
		this.frameworkPage.refreshAfterDirections()
		const afterDirection = this.frameworkPage.getFirstTrueAfterDirection()
		
		this.frameworkPage.rememberState()
		
		if(afterDirection){
			
			await this.loadPage(afterDirection.getPage())
			
		}else{
			
			// No after direction is true. Then simply send
			// the user to the current page the user is on.
			await this.loadPage(
				this.frameworkPage.Page,
			)
			
		}
		
	}
	
	getState(){
		
		this.frameworkPage.rememberState()
		
		return JSON.parse(
			JSON.stringify({
				version: this.runtimeSettings.version,
				currentPageName: this.frameworkPage.Page.proxyName,
				app: this.app,
				pages: this.pageStates,
			}),
		)
		
	}
	
	createElement(){
		
		const appElement = document.createElement(`div`)
		appElement.classList.add(`app`)
		
		appElement.style.all = 'initial'
		appElement.style.boxSizing = 'border-box'
		appElement.style.display = 'block'
		appElement.style.height = '100%'
		appElement.style.backgroundColor = 'aqua'
		
		const updateGui = () => {
			
			appElement.innerHTML = ``
			
			if (this.errorMessage) {
				appElement.innerText = this.errorMessage
			}else{
				appElement.appendChild(
					this.frameworkPage.createElement(),
				)
			}
			
		}
		
		appElement.addEventListener('moveon', async () => {
			await this.moveOn()
			updateGui()
		})
		
		const oldOnError = this.runtimeSettings.onError
		
		this.runtimeSettings.onError = (errorMessage) => {
			oldOnError(errorMessage)
			updateGui()
		}
		
		updateGui()
		
		return appElement
		
	}
	
}