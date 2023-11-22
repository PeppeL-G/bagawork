import {FrameworkPage} from './FrameworkPage.js'
import {deepMergeObjects} from '../functions/deep-merge-objects.js'
import { App } from './App.js'
import { Page } from './Page.js'
import { evalExpression } from '../functions/eval-expression.js'

const defaultRuntimeSettings = {
	isPreview: false,
	onPageShow: () => {},
	okToContinue: null, // async (nextToExecute = `some code`, continuesImmediately=false) => Promise.resolve(),
	onError: null, // (errorMessage) => {},
	onStateChange: (newState) => {},
	state: null,
}

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
		
		if (typeof this.createApp == "string") {
			
			try {
				this.createApp = evalExpression(this.createApp)
			} catch (error) {
				onError(
					`Your code contains a Syntax Error: ${error}.`,
				)
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
			return
		}
		
		if (!(createAppResult?.App?.prototype instanceof App)) {
			onError(
				`Error: Your own App class must inherit from the App class that comes from Bagawork.`,
			)
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
								`${UserPage.name}.${value.name}()`,
								true,
							)

							try {
								return value.apply(this, args)
							} catch (error) {
								onError(
									`Error in ${UserPage.name}.${value.name}()`,
								)
							}

						}
					}

				}

			}
		}
		
		const state = this.runtimeSettings.state
		
		if(state){
			
			this.pageStates = state.pageStates
			
			for (const key of Object.keys(state.appState)) {
				this.app[key] = state.appState[key]
			}
			
			this.frameworkPage = new FrameworkPage(
				this,
				this.Pages[state.currentPageName],
			)
			await this.frameworkPage.loadFromState()
			this.runtimeSettings.onStateChange(
				this.getState(),
			)
			return
			
		}
		
		if(this.App.prototype.hasOwnProperty('onBefore')){
			
			okToContinue && await okToContinue(
				`${this.App.name}.onBefore()`,
			)
			
			try{
				this.app.onBefore()
			}catch(error){
				onError(
					`Error in ${this.App.name}.onBefore(): ${error}.`,
				)
				return
			}
			
		}
		
		okToContinue && await okToContinue(
			`${this.App.name}.createStartPage() (note: when previewing/debugging your app, ${this.App.name}.createStartPage() will always return the page you are previewing/debugging, and not the one you have written in ${this.App.name}.createStartPage())`,
		)
		
		if (!this.App.prototype.hasOwnProperty('createStartPage')) {
			onError(
				`Error in ${this.App.name}: Method createStartPage() is missing.`,
			)
			return
		}
		
		let StartPage
		
		try{
			StartPage = this.app.createStartPage()
		} catch (error) {
			onError(
				`Error in ${this.App.name}.createStartPage(): ${error}.`,
			)
			return
		}
		
		if(!(StartPage.prototype instanceof Page)){
			onError(
				`Error in ${this.App.name}.createStartPage(): must return a class that inherits from the Page class that comes from Bagawork.`,
			)
			return
		}
		
		if(okToContinue){
			await this.loadPage(StartPage)
		}else{
			this.loadPage(StartPage)
		}
		
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
					await this.loadPage(beforeDirection.createPage())
				}else{
					this.loadPage(beforeDirection.createPage())
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
		
		const afterDirection = this.frameworkPage.getFirstTrueAfterDirection()
		
		this.frameworkPage.rememberState()
		
		if(afterDirection){
			
			await this.loadPage(afterDirection.createPage())
			
		}else{
			
			// No after direction is true. Then simply send
			// the user to the current page the user is on.
			await this.loadPage(this.frameworkPage.page.constructor)
			
		}
		
	}
	
	getState(){
		
		this.frameworkPage.rememberState()
		
		return {
			pageStates: this.pageStates,
			currentPageName: this.frameworkPage.Page.name,
			appState: JSON.parse(
				JSON.stringify(this.app),
			),
		}
		
	}
	
}