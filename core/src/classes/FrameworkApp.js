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
}

export class FrameworkApp{
	
	createApp = null // function or string with JS code.
	app = null
	runtimeSettings = {}
	frameworkPage = null
	pageValues = {}
	errorMessage = ""
	
	constructor(createApp, runtimeSettings=null){
		
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
		
		let UserApp
		
		try {
			UserApp = this.createApp(environment)
		} catch (error) {
			onError(
				`Error when defining classes: ${error}.`
			)
			return
		}
		
		if (!(UserApp.prototype instanceof App)) {
			onError(
				`Error: Your own App class must inherit from the App class that comes from Bagawork.`,
			)
			return
		}
		
		okToContinue && await okToContinue(
			`new ${UserApp.name}`,
		)
		
		try {
			this.app = new UserApp()
		} catch (error) {
			onError(
				`Error ocurred when creating a new instance of ${UserApp.name}: ${error}.`,
			)
			return
		}
		
		if(UserApp.prototype.hasOwnProperty('onBefore')){
			
			okToContinue && await okToContinue(
				`${UserApp.name}.onBefore()`,
			)
			
			try{
				this.app.onBefore()
			}catch(error){
				onError(
					`Error in ${UserApp.name}.onBefore(): ${error}.`,
				)
				return
			}
			
		}
		
		okToContinue && await okToContinue(
			`${UserApp.name}.createStartPage() (note: when previewing/debugging your app, ${UserApp.name}.createStartPage() will always return the page you are previewing/debugging, and not the one you have written in ${UserApp.name}.createStartPage())`,
		)
		
		if (!UserApp.prototype.hasOwnProperty('createStartPage')) {
			onError(
				`Error in ${UserApp.name}: Method createStartPage() is missing.`,
			)
			return
		}
		
		let StartPage
		
		try{
			StartPage = this.app.createStartPage()
		} catch (error) {
			onError(
				`Error in ${UserApp.name}.createStartPage(): ${error}.`,
			)
			return
		}
		
		if(!(StartPage.prototype instanceof Page)){
			onError(
				`Error in ${UserApp.name}.createStartPage(): must return a class that inherits from the Page class that comes from Bagawork.`,
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
			await this.frameworkPage.initializeTheRest()
			okToContinue(`Interact with the GUI`, true)
		} else {
			this.frameworkPage.runOnBefore()
			this.frameworkPage.initializeTheRest()
		}
		
	}
	
	async moveOn(){
		
		await this.frameworkPage.runOnAfter()
		
		const afterDirection = this.frameworkPage.getFirstTrueAfterDirection()
		
		this.frameworkPage.rememberValues()
		
		if(afterDirection){
			
			await this.loadPage(afterDirection.createPage())
			
		}else{
			
			// No after direction is true. Then simply send
			// the user to the current page the user is on.
			await this.loadPage(this.frameworkPage.page.constructor)
			
		}
		
	}
	
}