import {FrameworkPage} from './FrameworkPage.js'
import {deepMergeObjects} from '../functions/deep-merge-objects.js'
import { App } from './App.js'
import { Page } from './Page.js'
import { evalExpression } from '../functions/eval-expression.js'
import { getCopyWithRestoredClassInstances } from '../functions/get-copy-with-restored-class-instances.js'
import { PaperFigure } from '../PaperFigure.js'
import { PaperComponent } from '../components/PaperComponent.js'

const defaultRuntimeSettings = {
	isPreview: false,
	onPageShow: () => {},
	onError: null, // (errorMessage) => {},
	onLog: (type, value) => {},
	onStateChange: (newState) => {},
	onIconCreated: (svgString) => {},
	onHardResetRequest: () => {}, // Only internal in the framework.
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
	
	intervalIds = []
	timeoutIds = []
	
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
			this.stop()
			oldOnError?.(errorMessage)
		}
		
	}
	
	// Call this method when the GUI environment has been initialized
	// (when we have detected voices, microphone, etc.).
	start() {
		
		this.createClasses()
		
		if(this.errorMessage){
			return
		}
		
		if(!this.runtimeSettings.state){
			this.startFromScratch()
		}else if(this.runtimeSettings.state.version < this.runtimeSettings.version){
			this.update()
		}else{
			this.restoreFromState()
		}
		
	}
	
	startFromScratch(){
		
		const {
			onLog,
			onError,
		} = this.runtimeSettings
		
		try {
			onLog(`framework`, `Initializing variables in ${this.App.name}...`)
			this.app = new this.App()
		} catch (error) {
			onError(
				`Error ocurred while initializing variables in ${this.App.name}: ${error}.`,
			)
			return
		}
		
		onLog(`framework`, `Initializing variables in ${this.App.name}... ✅`)
		
		this.runCreateIcon()
		
		this.runOnBefore()
		
		if (this.errorMessage) {
			return
		}
		
		const StartPage = this.runCreateStartPage()
		
		if (!StartPage) {
			return
		}
		
		this.loadPage(StartPage)
		
	}
	
	createClasses() {
		
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
			
			onLog(`framework`, `Parsing the code... ✅`)
			
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
			setInterval: (...theArgs) => {
				
				const [func, delay, ...funcArgs] = theArgs
				
				const runFunc = () => {
					try{
						func(...funcArgs)
					}catch(error){
						this.runtimeSettings.onError(
							`Error occurred when calling function passed to setInterval(): ${error}`,
						)
					}
				}
				
				if(!this.runtimeSettings.isPreview){
					
					const intervalId = setInterval(
						runFunc,
						delay,
						...funcArgs,
					)
					
					this.intervalIds.push(
						intervalId,
					)
					
					return intervalId
					
				}
				
			},
			setTimeout: (...theArgs) => {
				
				const [func, delay, ...funcArgs] = theArgs
				
				const runFunction = () => {
					try{
						func(...funcArgs)
					}catch(error){
						this.runtimeSettings.onError(
							`Error occurred when calling function passed to setTimeout(): ${error}`,
						)
					}
				}
				
				if(!this.runtimeSettings.isPreview){
					
					const timeoutId = setTimeout(
						runFunction,
						delay,
						...funcArgs,
					)
					
					this.timeoutIds.push(
						timeoutId,
					)
					
					return timeoutId
					
				}
				
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
		
		onLog(`framework`, `Creating classes... ✅`)
		
		this.App = createAppResult.App
		this.Pages = createAppResult.Pages
		
	}
	
	runOnBefore() {
		
		const {
			onError,
			onLog
		} = this.runtimeSettings
		
		if (this.App.prototype.hasOwnProperty('onBefore')) {
			
			try {
				onLog(`framework`, `Calling ${this.App.name}.onBefore()...`)
				this.app.onBefore()
				onLog(`framework`, `Calling ${this.App.name}.onBefore()... ✅`)
			} catch (error) {
				onError(
					`Error in ${this.App.name}.onBefore(): ${error}.`,
				)
				return
			}
			
			
		}
		
	}
	
	update() {
		
		const {
			version,
			state,
			onLog,
			onError,
		} = this.runtimeSettings
		
		onLog(`framework`, `Update from version ${state.version} to version ${version} detected!`)
		
		try {
			onLog(`framework`, `Initializing variables in ${this.App.name}...`)
			this.app = new this.App()
			onLog(`framework`, `Initializing variables in ${this.App.name}... ✅`)
		} catch (error) {
			onError(
				`Error ocurred while initializing variables in ${this.App.name}: ${error}.`,
			)
			return
		}
		
		onLog(`framework`, `Copying over values in app variables that exist in both versions from the old version to the new version...`)
		
		const appVariables = getCopyWithRestoredClassInstances(state.app)
		
		let PageToLoadAfterUpdate = null
		
		for (const appVariableName of Object.keys(appVariables)) {
			
			if (this.app.hasOwnProperty(appVariableName)) {
				
				if(!constantNameRegExp.test(appVariableName)){
					this.app[appVariableName] = appVariables[appVariableName]
				}
				
			}
			
		}
		
		onLog(`framework`, `Copying over values in app variables that exist in both versions from the old version to the new version... ✅`)
		
		PageToLoadAfterUpdate = this.runOnUpdate()
		
		if (this.errorMessage) {
			return
		}
		
		this.updatePages()
		
		if (
			!PageToLoadAfterUpdate &&
			!this.Pages.hasOwnProperty(state.currentPageName)
		) {
			
			PageToLoadAfterUpdate = this.runCreateStartPage()
			
			if (this.errorMessage) {
				return
			}
			
		}
		
		this.runCreateIcon()
		
		if(this.errorMessage){
			return
		}
		
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
				onLog(`framework`, `Calling${this.App.name}.onUpdate()... ✅`)
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
			onLog,
		} = this.runtimeSettings
		
		for (const pageName of Object.keys(state.pages)) {
			
			if (this.Pages.hasOwnProperty(pageName)){
				
				this.pageStates[pageName] = {}
				
				onLog(`framework`, `Copying over values in page variables that exist in both versions from the old version to the new version in ${pageName}...`)
				
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
				
				onLog(`framework`, `Copying over values in page variables that exist in both versions from the old version to the new version in ${pageName}... ✅`)
				
				this.frameworkPage.runOnUpdate()
				this.frameworkPage.rememberState()
				
			}
			
		}
		
	}
	
	restoreFromState(){
		
		const {
			state,
			onLog,
			onError,
		} = this.runtimeSettings
		
		onLog(`framework`, `Restoring app and page variables from state... ✅`)
		
		try{
			
			this.app = Object.setPrototypeOf(
				{},
				this.App.prototype,
			)
			
			Object.assign(
				this.app,
				getCopyWithRestoredClassInstances(state.app),
			)
			
			this.pageStates = getCopyWithRestoredClassInstances(state.pages)
			
		}catch(error){
			
			onError(`Error occurred when trying to restore the state: ${error}`)
			return
			
		}
		
		this.frameworkPage = new FrameworkPage(
			this,
			this.Pages[state.currentPageName],
		)
		
		this.frameworkPage.loadFromState()
		
		this.runCreateIcon()
		
		if(this.errorMessage){
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
		
		onLog(`framework`, `Calling ${this.App.name}.createStartPage()... ✅`)
		onLog(
			`framework`,
			`(note: when previewing a page in the editor, ${this.App.name}.createStartPage() is overwritten to always return the page you are previewing, and not the one you have actually specified in ${this.App.name}.createStartPage())`,
		)
		
		return StartPage

	}
	
	runCreateErrorRecoveringPage() {
		
		const {
			onLog,
			onError,
		} = this.runtimeSettings
		
		let ErrorRecoveringPage = null
		
		if (!this.App.prototype.hasOwnProperty('createErrorRecoveringPage')) {
			onLog(`framework`, `${this.App.name}.createErrorRecoveringPage() doesn't exist, so uses ${this.App.name}.createStartPage() instead.`)
			ErrorRecoveringPage = this.runCreateStartPage()
		}else{
			
			try {
				onLog(`framework`, `Calling ${this.App.name}.createErrorRecoveringPage()...`)
				ErrorRecoveringPage = this.app.createErrorRecoveringPage()
			} catch (error) {
				onError(
					`Error in ${this.App.name}.createErrorRecoveringPage(): ${error}.`,
				)
				return
			}
			
			if (!ErrorRecoveringPage) {
				onError(
					`Error in ${this.App.name}.createErrorRecoveringPage(): Does currently not return a value at all. Must return a class that inherits from the Page class that comes from BagaWork.`,
				)
				return
			}
			
			if (!(ErrorRecoveringPage.prototype instanceof Page)) {
				onError(
					`Error in ${this.App.name}.createErrorRecoveringPage(): The returned value must be a class that inherits from the Page class that comes from BagaWork.`,
				)
				return
			}
			
			onLog(`framework`, `Calling ${this.App.name}.createErrorRecoveringPage()... ✅`)
		}
		
		return ErrorRecoveringPage
		
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
		
		this.stop()
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
			this.frameworkPage.Page.proxyClearArgs
			this.loadPage(
				this.frameworkPage.Page,
			)
			
		}
		
	}
	
	stop(){
		this.frameworkPage?.stopUpdaters?.()
		this.stopAndClearTimeoutsAndIntervals()
	}
	
	stopAndClearTimeoutsAndIntervals(){
		
		for(const timeoutId of this.timeoutIds){
			clearTimeout(timeoutId)
		}
		this.timeoutIds = []
		
		for(const intervalId of this.intervalIds){
			clearInterval(intervalId)
		}
		this.intervalIds = []
		
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
	
	runCreateIcon(){
		
		const {
			onLog,
			onError,
		} = this.runtimeSettings
		
		if(!this.App.prototype.hasOwnProperty('createIcon')){
			return
		}
		
		let paperFigureIcon = null
		
		try {
			onLog(`framework`, `Calling ${this.App.name}.createIcon()...`)
			paperFigureIcon = this.app.createIcon()
		} catch (error) {
			onError(
				`Error in ${this.App.name}.createIcon(): ${error}.`,
			)
			return
		}
		
		if(!paperFigureIcon){
			onError(
				`Error in ${this.App.name}.createIcon(): Does currently not return a value at all. Must return an instance of a paper figure that comes from BagaWork.`,
			)
			return
		}
		
		if(!(paperFigureIcon instanceof PaperFigure)){
			onError(
				`Error in ${this.App.name}.createIcon(): The returned value must be an instance of a paper figure that comes from BagaWork.`,
			)
			return
		}
		
		onLog(`framework`, `Calling ${this.App.name}.createIcon()... ✅`)
		
		const paper = new PaperComponent()
		paper.children(paperFigureIcon)
		
		this.runtimeSettings.onIconCreated(
			paper.getAsSvgString(),
		)
		
	}
	
	createElement(){
		
		const appElement = document.createElement(`div`)
		appElement.classList.add(`app`)
		
		appElement.style.all = 'initial'
		appElement.style.boxSizing = 'border-box'
		appElement.style.display = 'block'
		appElement.style.height = '100%'
		appElement.style.backgroundColor = 'white'
		appElement.style.fontSize = `16px`
		
		if(this.runtimeSettings.isPreview){
			appElement.setAttribute(`inert`, ``)
		}
		
		const updateGui = () => {
			
			appElement.innerHTML = ``
			
			if (this.errorMessage) {
				
				const errorPageRootElement = document.createElement(`div`)
				errorPageRootElement.style.boxSizing = `border-box`
				errorPageRootElement.style.padding = `1em`
				errorPageRootElement.style.height = `100%`
				errorPageRootElement.style.overflow = `auto`
				errorPageRootElement.innerHTML = `
					<h1 style="margin: 0;">Error! 😭</h1>
					
					<p>Oh, no... The following error occurred in the app:</p>
					
					<blockquote style="font-style: italic;"></blockquote>
					
					<p>We are truly sorry for this. Hopefully we can take the app back to a state where it will run again, but the same error will probably still occur until the developer of the app has fixed the problem. So if clicking the button below takes you back here, you can wait until the developer of the app has released a new version of it that doesn't contain the problem, and then clicking on the button below will hopefully make the app work fine again 😃</p>
					
					<button>
						Try to make the app run again
					</button>
					
					<p>You also have the option to do a hard reset. A hard reset means that you delete all the data in the app, and then you start running it from scratch again. But if you do this, all your progress in the app will be lost. So only do this if you can live with that.</p>
					
					<button>
						Delete all data and start the app from scratch
					</button>
					
				`
				errorPageRootElement.querySelector(`blockquote`).innerText = this.errorMessage
				
				errorPageRootElement.querySelectorAll(`button`)[0].addEventListener(
					`click`,
					() => {
						
						this.errorMessage = ``
						
						let ErrorRecoveringPage = null
						
						try{
							ErrorRecoveringPage = this.runCreateErrorRecoveringPage()
						}catch(error){
							
							const errorNode = document.createElement(`p`)
							errorNode.innerText = `Nope, sorry, that didn't work 🙁`
							
							errorPageRootElement.replaceChild(
								errorNode,
								errorPageRootElement.querySelectorAll(`button`)[0],
							)
							
							return
							
						}
						
						this.loadPage(
							ErrorRecoveringPage,
						)
						updateGui()
						
					}
				)
				
				errorPageRootElement.querySelectorAll(`button`)[1].addEventListener(
					`click`,
					() => {
						this.runtimeSettings.onHardResetRequest()
					}
				)
				
				appElement.replaceChildren(
					errorPageRootElement,
				)
				
				return
				
			}
			
			
			try{
				
				const pageElement = this.frameworkPage.createElement()
				
				if(!this.errorMessage){
					appElement.replaceChildren(
						pageElement,
					)
				}
				
			}catch(errorMessage){
				
				this.errorMessage = errorMessage
				updateGui()
				
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