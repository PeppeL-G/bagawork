import { Component } from "../Component.js"
import { Page } from "@bagawork/core"
import { getState } from "../functions/get-state.js"

export class FrameworkPage{
	
	frameworkApp = null
	Page = null
	page = null
	beforeDirections = []
	rootGuiComponent = null
	afterDirections = []
	
	// The constructor only initializes so beforeDirections can be used.
	// The rest is initialized in initializeTheRest().
	constructor(frameworkApp, Page){
		
		this.frameworkApp = frameworkApp
		this.Page = Page
		
	}
	
	async createPageInstance() {
		
		const {
			okToContinue,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if(this.frameworkApp.pageStates[this.Page.proxyName]){
			
			const { Page, args } = this.Page.proxyGetPageAndArgs
			
			this.page = new Page()
			this.restoreState()
			Object.assign(
				this.page,
				args,
			)
			
		}else{
			
			if(okToContinue){
				
				// Add debug step listeners to all methods.
				for(const key of Object.getOwnPropertyNames(this.Page.prototype)){
					
					const value = this.Page.prototype[key]
					
					if(typeof value == "function" && !Page.prototype.hasOwnProperty(key)){
						this.Page.prototype[key] = (...args) => {
							
							okToContinue(
								`${this.Page.proxyName}.${value.name}()`,
								true,
							)
							
							try{
								return value.apply(this.page, args)
							}catch(error){
								onError(
									`Error in ${this.Page.proxyName}.${value.name}()`,
								)
								debugger
							}
							
						}
					}
					
				}
				
			}
			
			okToContinue && await okToContinue(
				`new ${this.Page.proxyName}`
			)
			
			try {
				const { Page, args } = this.Page.proxyGetPageAndArgs
				this.page = new Page()
				Object.assign(
					this.page,
					args,
				)
			} catch (error) {
				onError(
					`An error ocurred while creating the ${this.Page.proxyName} instance: ${error}.`,
				)
				debugger
				return
			}
			
		}
		
	}
	
	async loadFromState(){
		
		this.page = Object.create(this.Page.prototype)
		this.restoreState()
		await this.initializeTheRest()
		
	}

	async createBeforeDirections() {

		const {
			okToContinue,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if(this.Page.prototype.hasOwnProperty('createBeforeDirections')){
			
			okToContinue && await okToContinue(
				`${this.Page.proxyName}.createBeforeDirections()`,
			)

			let createdBeforeDirections

			try {
				createdBeforeDirections = this.page.createBeforeDirections()
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.createBeforeDirections(): ${error}.`,
				)
				debugger
				return
			}

			// TODO: Check that createdBeforeDirections is an array with
			// Direction instances.

			this.beforeDirections.push(
				...createdBeforeDirections
			)
			
		}

	}

	async createAfterDirections() {

		const {
			okToContinue,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if (this.Page.prototype.hasOwnProperty('createAfterDirections')) {
			
			okToContinue && await okToContinue(
				`${this.Page.proxyName}.createAfterDirections()`,
			)

			let createdAfterDirections

			try {
				createdAfterDirections = this.page.createAfterDirections()
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.createAfterDirections(): ${error}.`,
				)
				debugger
				return
			}

			// TODO: Check that createdAfterDirections is an array with
			// Direction instances.

			this.afterDirections.push(
				...createdAfterDirections
			)
			
		}

	}
	
	getFirstTrueBeforeDirection(){
		return this.beforeDirections.find(
			d => d.isTrue()
		)
	}
	
	async runOnBefore() {

		const {
			okToContinue,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if (this.Page.prototype.hasOwnProperty('onBefore')) {
			
			okToContinue && await okToContinue(
				`${this.Page.proxyName}.onBefore()`,
			)
			
			try {
				this.page.onBefore()
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.onBefore(): ${error}.`,
				)
				debugger
				return
			}
			
		}
		
	}
	
	async runOnUpdate(){
		
		const {
			okToContinue,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if(this.Page.prototype.hasOwnProperty('onUpdate')){
			
			okToContinue && await okToContinue(
				`${this.Page.proxyName}.onUpdate()`,
			)
			
			try{
				this.page.onUpdate(
					this.frameworkApp.runtimeSettings.state.pages[this.Page.proxyName],
					this.frameworkApp.runtimeSettings.state.version,
				)
			}catch(error){
				onError(
					`Error in ${this.Page.proxyName}.onUpdate(): ${error}.`,
				)
				debugger
				return
			}
			
		}
		
	}
	
	// This initializes the rest that wasn't initialized in createPageInstance.
	async initializeTheRest() {

		const {
			okToContinue,
			onError,
			onPageShow,
		} = this.frameworkApp.runtimeSettings
		
		okToContinue && await okToContinue(
			`${this.Page.proxyName}.createGui()`,
		)
		
		if(!this.Page.prototype.hasOwnProperty('createGui')){
			onError(
				`Error in ${this.Page.proxyName}: Must implement createGui().`
			)
			debugger
			return
		}
		
		let gui
		
		try {
			gui = this.page.createGui()
		} catch (error) {
			onError(
				`Error in ${this.Page.proxyName}.createGui(): ${error}.`,
			)
			debugger
			return
		}
		
		try{
			this.rootGuiComponent = gui.create
		} catch (error) {
			onError(
				`Error in ${this.Page.proxyName}.createGui(): must return a GUI component.`,
			)
			debugger
			return
		}
		
		if (!(this.rootGuiComponent instanceof Component)) {
			onError(
				`Error in ${this.Page.proxyName}.createGui(): must return a GUI component.`,
			)
			debugger
			return
		}
		
		onPageShow()
		
		this.afterDirections.push(
			...this.page.createAfterDirections()
		)
		this.afterDirections.push(
			...this.rootGuiComponent.createAfterDirections()
		)
		
	}
	
	async runOnAfter(){
		
		const {
			okToContinue,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		this.rootGuiComponent.onAfter(this.frameworkApp.app, this.page)
		
		if (this.Page.prototype.hasOwnProperty('onAfter')) {
			
			okToContinue && await okToContinue(
				`${this.Page.proxyName}.onAfter()`,
			)
			
			try{
				this.page.onAfter()
			}catch(error){
				onError(
					`Error in ${this.Page.proxyName}.onAfter(): ${error}.`,
				)
				debugger
				return
			}
			
		}
		
	}
	
	getFirstTrueAfterDirection(){
		return this.afterDirections.find(
			d => d.isTrue()
		)
	}
	
	rememberState(){
		
		this.frameworkApp.pageStates[this.Page.proxyName] = getState(
			this.page,
		)
		
	}
	
	restoreState(){
		
		const pageState = this.frameworkApp.pageStates[
			this.Page.proxyName
		] ?? {}
		
		Object.assign(
			this.page,
			pageState,
		)
		
	}
	
}