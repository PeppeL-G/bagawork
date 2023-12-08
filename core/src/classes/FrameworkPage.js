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
		
		if(this.frameworkApp.pageStates[this.Page.name]){
			
			this.page = Object.create(this.Page.prototype)
			this.restoreState()
			
		}else{
			
			if(okToContinue){
				
				// Add debug step listeners to all methods.
				for(const key of Object.getOwnPropertyNames(this.Page.prototype)){
					
					const value = this.Page.prototype[key]
					
					if(typeof value == "function" && !Page.prototype.hasOwnProperty(key)){
						this.Page.prototype[key] = (...args) => {
							
							okToContinue(
								`${this.Page.name}.${value.name}()`,
								true,
							)
							
							try{
								return value.apply(this.page, args)
							}catch(error){
								onError(
									`Error in ${this.Page.name}.${value.name}()`,
								)
							}
							
						}
					}
					
				}
				
			}
			
			okToContinue && await okToContinue(
				`new ${this.Page.name}`
			)
			
			try {
				this.page = new this.Page()
			} catch (error) {
				onError(
					`An error ocurred while creating the ${this.Page.name} instance: ${error}.`,
				)
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
				`${this.Page.name}.createBeforeDirections()`,
			)

			let createdBeforeDirections

			try {
				createdBeforeDirections = this.page.createBeforeDirections()
			} catch (error) {
				onError(
					`Error in ${this.Page.name}.createBeforeDirections(): ${error}.`,
				)
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
				`${this.Page.name}.createAfterDirections()`,
			)

			let createdAfterDirections

			try {
				createdAfterDirections = this.page.createAfterDirections()
			} catch (error) {
				onError(
					`Error in ${this.Page.name}.createAfterDirections(): ${error}.`,
				)
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
				`${this.Page.name}.onBefore()`,
			)
			
			try {
				this.page.onBefore()
			} catch (error) {
				onError(
					`Error in ${this.Page.name}.onBefore(): ${error}.`,
				)
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
				`${this.Page.name}.onUpdate()`,
			)
			
			try{
				this.page.onUpdate(
					this.frameworkApp.runtimeSettings.state.pages[this.Page.name],
					this.frameworkApp.runtimeSettings.state.version,
				)
			}catch(error){
				onError(
					`Error in ${this.Page.name}.onUpdate(): ${error}.`,
				)
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
			`${this.Page.name}.createGui()`,
		)
		
		if(!this.Page.prototype.hasOwnProperty('createGui')){
			onError(
				`Error in ${this.Page.name}: Must implement createGui().`
			)
			return
		}
		
		let gui
		
		try {
			gui = this.page.createGui()
		} catch (error) {
			onError(
				`Error in ${this.Page.name}.createGui(): ${error}.`,
			)
			return
		}
		
		try{
			this.rootGuiComponent = gui.create
		} catch (error) {
			onError(
				`Error in ${this.Page.name}.createGui(): must return a GUI component.`,
			)
			return
		}
		
		if (!(this.rootGuiComponent instanceof Component)) {
			onError(
				`Error in ${this.Page.name}.createGui(): must return a GUI component.`,
			)
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
				`${this.Page.name}.onAfter()`,
			)
			
			try{
				this.page.onAfter()
			}catch(error){
				onError(
					`Error in ${this.Page.name}.onAfter(): ${error}.`,
				)
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
		
		this.frameworkApp.pageStates[this.Page.name] = getState(
			this.page,
		)
		
	}
	
	restoreState(){
		
		const pageState = this.frameworkApp.pageStates[
			this.Page.name
		] ?? {}
		
		Object.assign(
			this.page,
			pageState,
		)
		
	}
	
}