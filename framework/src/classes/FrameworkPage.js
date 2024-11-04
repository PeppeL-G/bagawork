import { Component } from "../Component.js"
import { Page } from "@bagawork/framework"
import { getState } from "../functions/get-state.js"

export class FrameworkPage{
	
	frameworkApp = null
	Page = null
	page = null
	beforeDirections = []
	rootGuiComponent = null
	afterDirections = []
	currentlyRunningIntervalIds = []
	
	// The constructor only initializes so beforeDirections can be used.
	// The rest is initialized in initializeTheRest().
	constructor(frameworkApp, Page){
		
		this.frameworkApp = frameworkApp
		this.Page = Page
		
	}
	
	createPageInstance() {
		
		const {
			onLog,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if(this.frameworkApp.pageStates[this.Page.proxyName]){
			
			const { Page, args } = this.Page.proxyGetPageAndArgs
			
			this.page = new Page() // TODO: Instead of initializing (can error), create empty object?
			this.restoreState()
			Object.assign(
				this.page,
				args,
			)
			
		}else{
			
			try {
				onLog(`framework`, `Initializing variables in ${this.Page.proxyName}...`)
				const { Page, args } = this.Page.proxyGetPageAndArgs
				this.page = new Page()
				Object.assign(
					this.page,
					args,
				)
			} catch (error) {
				onError(
					`An error ocurred while initializing variables in ${this.Page.proxyName}: ${error}.`,
				)
				return
			}
			
			onLog(`framework`, `Initializing variables in ${this.Page.proxyName}... ✅`)
			
		}
		
	}
	
	loadFromState(){
		
		this.page = Object.create(this.Page.prototype)
		this.restoreState()
		this.initializeTheRest()
		
	}

	createBeforeDirections() {
		
		const {
			onLog,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if(this.Page.prototype.hasOwnProperty('createBeforeDirections')){
			
			let createdBeforeDirections
			
			try {
				onLog(`framework`, `Calling ${this.Page.proxyName}.createBeforeDirections()...`)
				createdBeforeDirections = this.page.createBeforeDirections()
				onLog(`framework`, `Calling ${this.Page.proxyName}.createBeforeDirections()... ✅`)
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.createBeforeDirections(): ${error}.`,
				)
				return
			}
			
			// TODO: Check that createdBeforeDirections is an array with
			// Direction instances.
			this.beforeDirections.push(
				...createdBeforeDirections,
			)
			
		}

	}

	createAfterDirections() {

		const {
			onLog,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if (this.Page.prototype.hasOwnProperty('createAfterDirections')) {

			let createdAfterDirections

			try {
				onLog(`framework`, `Calling ${this.Page.proxyName}.createAfterDirections()...`)
				createdAfterDirections = this.page.createAfterDirections()
				onLog(`framework`, `Calling ${this.Page.proxyName}.createAfterDirections()... ✅`)
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.createAfterDirections(): ${error}.`,
				)
				return
			}
			
			// TODO: Check that createdAfterDirections is an array with
			// Direction instances.
			this.afterDirections.push(
				...createdAfterDirections,
			)
			
		}

	}
	
	refreshAfterDirections(){
		
		this.afterDirections = []
		this.createAfterDirections()
		this.afterDirections.push(
			...this.rootGuiComponent.createAfterDirections(),
		)
		
	}
	
	getFirstTrueBeforeDirection(){
		return this.beforeDirections.find(
			d => d.getCondition()
		)
	}
	
	runOnBefore() {
		
		const {
			onLog,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if (this.Page.prototype.hasOwnProperty('onBefore')) {
			
			try {
				onLog(`framework`, `Calling ${this.Page.proxyName}.onBefore()...`)
				this.page.onBefore()
				onLog(`framework`, `Calling ${this.Page.proxyName}.onBefore()... ✅`)
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.onBefore(): ${error}.`,
				)
				return
			}
			
		}
		
	}
	
	runOnUpdate(){
		
		const {
			onLog,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		if(this.Page.prototype.hasOwnProperty('onUpdate')){
			
			try {
				onLog(`framework`, `Calling ${this.Page.proxyName}.onUpdate()...`)
				this.page.onUpdate(
					this.frameworkApp.runtimeSettings.state.pages[this.Page.proxyName],
					this.frameworkApp.runtimeSettings.state.version,
				)
				onLog(`framework`, `Calling ${this.Page.proxyName}.onUpdate()... ✅`)
			} catch (error) {
				onError(
					`Error in ${this.Page.proxyName}.onUpdate(): ${error}.`,
				)
				return
			}
			
		}
		
	}
	
	// This initializes the rest that wasn't initialized in createPageInstance.
	initializeTheRest() {

		const {
			onLog,
			onError,
			onPageShow,
		} = this.frameworkApp.runtimeSettings
		
		this.currentlyRunningIntervalIds = []
		
		if(!this.Page.prototype.hasOwnProperty('createGui')){
			onError(
				`Error: ${this.Page.proxyName}.createGui() is missing!`
			)
			return
		}
		
		try {
			onLog(`framework`, `Calling ${this.Page.proxyName}.createGui()...`)
			this.rootGuiComponent = this.page.createGui()
		} catch (error) {
			onError(
				`Error in ${this.Page.proxyName}.createGui(): ${error}.`,
			)
			return
		}
		
		if (!(this.rootGuiComponent instanceof Component)) {
			onError(
				`Error in ${this.Page.proxyName}.createGui(): must return a GUI component.`,
			)
			return
		}
		
		onLog(`framework`, `Calling ${this.Page.proxyName}.createGui()... ✅`)
		
		onPageShow()
		
		this.createAfterDirections()
		this.afterDirections.push(
			...this.rootGuiComponent.createAfterDirections()
		)
		
	}
	
	runOnAfter(){
		
		const {
			onLog,
			onError,
		} = this.frameworkApp.runtimeSettings
		
		this.rootGuiComponent.onAfter(this.frameworkApp.app, this.page)
		
		if (this.Page.prototype.hasOwnProperty('onAfter')) {
			
			try {
				onLog(`framework`, `Calling ${this.Page.proxyName}.onAfter()...`)
				this.page.onAfter()
				onLog(`framework`, `Calling ${this.Page.proxyName}.onAfter()... ✅`)
			}catch(error){
				onError(
					`Error in ${this.Page.proxyName}.onAfter(): ${error}.`,
				)
				return
			}
			
		}
		
	}
	
	getFirstTrueAfterDirection(){
		return this.afterDirections.find(
			d => d.getCondition()
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
	
	stopUpdaters(){
		for(const intervalId of this.currentlyRunningIntervalIds){
			clearInterval(intervalId)
		}
	}
	
	createElement(){
		
		const pageElement = document.createElement(`div`)
		pageElement.classList.add(`page`)
		
		pageElement.style.display = 'grid'
		pageElement.style.gridTemplateRows = "1fr"
		pageElement.style.gridTemplateColumns = "1fr"
		pageElement.style.height = "100%"
		
		const rootElement = this.rootGuiComponent.createElement(
			this.frameworkApp,
			this,
			null,
		)
		
		pageElement.appendChild(
			rootElement,
		)
		
		return pageElement
		
	}
	
}