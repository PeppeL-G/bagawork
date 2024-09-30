import {FrameworkPage} from './FrameworkPage.js'
import {deepMergeObjects} from '../functions/deep-merge-objects.js'
import { App } from './App.js'
import { Page } from './Page.js'
import { evalExpression } from '../functions/eval-expression.js'
import { getCopyWithRestoredClassInstances } from '../functions/get-copy-with-restored-class-instances.js'

const defaultRuntimeSettings = {
	isPreview: false,
	onPageShow: () => {},
	onError: null, // (errorMessage) => {},
	onLog: (type, value) => {},
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
		
		const oldOnError = runtimeSettings.onError
		
		this.createApp = createApp
		this.runtimeSettings = deepMergeObjects(
			{},
			defaultRuntimeSettings,
			runtimeSettings,
		)
		
		this.runtimeSettings.onError = (errorMessage) => {
			this.errorMessage = errorMessage
			oldOnError?.(errorMessage)
		}
		
	}
	
	// Call this method when the GUI environment has been initialized
	// (when we have detected voices, microphone, etc.).
	start() {
		
		this.createAppInstance()
		
		if(this.errorMessage){
			return
		}
		
		const {
			state
		} = this.runtimeSettings
		
		if(state){
			
			if(state.version < this.runtimeSettings.version){
				this.update()
			}else{
				this.restoreFromState()
			}
			
			return
			
		}
		
		this.runOnBefore()
		
		if(this.errorMessage){
			return
		}
		
		const StartPage = this.runCreateStartPage()
		
		if(!StartPage){
			return
		}
		
		this.loadPage(StartPage)
		
	}
	
	createAppInstance() {
		
		const {
			onError,
			onLog,
		} = this.runtimeSettings
		
		if (typeof this.createApp == "string") {
			
			try {
				onLog(`framework`, `Parsing the code...`)
				this.createApp = evalExpression(this.createApp)
			} catch (error) {
				onError(
					`Code parsing failed: ${error}.`,
				)
				return
			}
			
			onLog(`framework`, `Parsing the code  ✅`)
			
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
				ownKeys(target) {
					return Reflect.ownKeys(frameworkApp.app)
				},
				getOwnPropertyDescriptor(target, prop) {
					return Reflect.getOwnPropertyDescriptor(frameworkApp.app, prop)
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
				ownKeys(target){
					return Reflect.ownKeys(frameworkApp.frameworkPage.page)
				},
				getOwnPropertyDescriptor(target, prop) {
					return Reflect.getOwnPropertyDescriptor(frameworkApp.frameworkPage.page, prop)
				},
			}),
			log(value){
				onLog(`user`, JSON.stringify(value, null, `  `))
			},
		}
		
		let createAppResult
		
		try {
			onLog(`framework`, `Creating classes...`)
			createAppResult = this.createApp(environment)
		} catch (error) {
			onError(
				`Error when creating classes: ${error}.`
			)
			return
		}
		
		if (!(createAppResult?.App?.prototype instanceof App)) {
			onError(
				`Error: Your own App class must inherit from the App class that comes from BagaWork.`,
			)
			return
		}
		
		onLog(`framework`, `Creating classes ✅`)
		
		this.App = createAppResult.App
		this.Pages = createAppResult.Pages
		
		try {
			onLog(`framework`, `Initializing variables in ${this.App.name}...`)
			this.app = new this.App()
		} catch (error) {
			onError(
				`Error ocurred while initializing variables in ${this.App.name}: ${error}.`,
			)
			return
		}
		
		onLog(`framework`, `Initializing variables in ${this.App.name} ✅`)
		
	}
	
	runOnBefore() {
		
		const {
			onError,
			onLog
		} = this.runtimeSettings
		
		if (this.App.prototype.hasOwnProperty('onBefore')) {
			
			try {
				onLog(`framework`, `Calling ${this.App.name}.onBefore()... ✅`)
				this.app.onBefore()
				onLog(`framework`, `${this.App.name}.onBefore() ✅`)
			} catch (error) {
				onLog(`framework`, `${this.App.name}.onBefore()...`)
				onError(
					`Error in ${this.App.name}.onBefore(): ${error}.`,
				)
				return
			}
			
			
		}
		
	}
	
	update() {
		
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

		PageToLoadAfterUpdate = this.runOnUpdate()

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

		this.updatePages()
		
		this.frameworkPage = new FrameworkPage(
			this,
			PageToLoadAfterUpdate ?? this.Pages[state.currentPageName],
		)
		this.frameworkPage.loadFromState()
		this.runtimeSettings.onStateChange(
			this.getState(),
		)
		
	}
	
	runOnUpdate(){
		
		const {
			onError,
			onLog,
		} = this.runtimeSettings
		
		let PageToLoad = null
		
		if (this.App.prototype.hasOwnProperty('onUpdate')) {
			
			try {
				onLog(`framework`, `Calling ${this.App.name}.onUpdate()...`)
				PageToLoad = this.app.onUpdate(
					this.runtimeSettings.state.app,
					this.runtimeSettings.state.version,
				)
				onLog(`framework`, `${this.App.name}.onUpdate() ✅`)
			} catch (error) {
				onError(
					`Error in ${this.App.name}.onUpdate(): ${error}.`,
				)
				return
			}
			
			if (PageToLoad && !(PageToLoad instanceof Page)) {
				onError(
					`Error in ${this.App.name}.onUpdate(): If returning a value, it must be a class inheriting from Page.`,
				)
				return
			}
			
		}
		
		return PageToLoad
		
	}
	
	updatePages() {
		
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
				
				this.frameworkPage.runOnUpdate()
				this.frameworkPage.rememberState()
				
			}
			
		}
		
	}
	
	restoreFromState(){
		
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
			
			this.frameworkPage.loadFromState()
			
		}catch(error){
			
			this.onError(`Error occurred when trying to restore the state: ${error}`)
			return
			
		}
		
		this.runtimeSettings.onStateChange(
			this.getState(),
		)
		
	}
	
	runCreateStartPage(){
		
		const {
			onLog,
			onError,
		} = this.runtimeSettings
		
		if(!this.App.prototype.hasOwnProperty('createStartPage')){
			onError(
				`Error: ${this.App.name}.createStartPage() is missing.`,
			)
			return
		}
		
		let StartPage
		
		try{
			onLog(`framework`, `Calling ${this.App.name}.createStartPage()...`)
			StartPage = this.app.createStartPage()
		} catch (error) {
			onError(
				`Error in ${this.App.name}.createStartPage(): ${error}.`,
			)
			return
		}
		
		if(!StartPage){
			onError(
				`Error in ${this.App.name}.createStartPage(): Does currently not return a value at all. Must return a class that inherits from the Page class that comes from BagaWork.`,
			)
			return
		}
		
		if(!(StartPage.prototype instanceof Page)){
			onError(
				`Error in ${this.App.name}.createStartPage(): The returned value must be a class that inherits from the Page class that comes from BagaWork.`,
			)
			return
		}
		
		onLog(`framework`, `${this.App.name}.createStartPage() ✅`)
		onLog(
			`framework`,
			`(note: when previewing a page in the editor, ${this.App.name}.createStartPage() is overwritten to always return the page you are previewing, and not the one you have actually specified in ${this.App.name}.createStartPage())`,
		)
		
		return StartPage
		
	}
	
	loadPage(UserPage) {
		
		const {
			onLog,
		} = this.runtimeSettings
		
		this.frameworkPage = new FrameworkPage(this, UserPage)
		// TODO: Check errors here before calling methods?
		this.frameworkPage.createPageInstance()
		this.frameworkPage.createBeforeDirections()
		
		if(!this.runtimeSettings.isPreview){
			
			const beforeDirection = this.frameworkPage.getFirstTrueBeforeDirection()
			
			if(beforeDirection){
				
				const newPage = beforeDirection.getPage()
				
				onLog(`framework`, `Got a true before direction leading to ${newPage.proxyName}.`)
				this.loadPage(newPage)
				
				return
				
			}
			
		}
		
		// TODO: Check for errors here?
		this.frameworkPage.runOnBefore()
		this.runtimeSettings.onStateChange(
			this.getState(),
		)
		this.frameworkPage.initializeTheRest()
		
	}
	
	moveOn(){
		
		const {
			onLog,
		} = this.runtimeSettings
		
		this.frameworkPage.runOnAfter()
		
		this.frameworkPage.refreshAfterDirections()
		const afterDirection = this.frameworkPage.getFirstTrueAfterDirection()
		
		this.frameworkPage.rememberState()
		
		if(afterDirection){
			
			const page = afterDirection.getPage()
			
			onLog(`framework`, `Got a true after direction leading to ${page.proxyName}.`)
			
			this.loadPage(afterDirection.getPage())
			
		}else{
			
			// No after direction is true. Then simply send
			// the user to the current page the user is on.
			onLog(`framework`, `Got no true after direction, so reloads the current page.`)
			this.loadPage(
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
		
		appElement.addEventListener('moveon', () => {
			this.moveOn()
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