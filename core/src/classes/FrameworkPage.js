export class FrameworkPage{
	
	frameworkApp = null
	page = null
	beforeDirections = []
	rootGuiComponent = null
	afterDirections = []
	
	// The constructor only initializes so beforeDirections can be used.
	// The rest is initialized in initializeTheRest().
	constructor(frameworkApp, page){
		
		this.frameworkApp = frameworkApp
		this.page = page
		
		this.beforeDirections.push(
			...this.page.createBeforeDirections()
		)
		
	}
	
	getFirstTrueBeforeDirection(){
		return this.beforeDirections.find(
			d => d.isTrue()
		)
	}
	
	// This initializes the rest that wasn't initialized in the constructor.
	initializeTheRest(){
		
		this.rootGuiComponent = this.page.createGui().create
		
		this.afterDirections.push(
			...this.page.createAfterDirections()
		)
		this.afterDirections.push(
			...this.rootGuiComponent.createAfterDirections()
		)
		
	}
	
	runOnBefore(){
		this.page.onBefore()
	}
	
	runOnAfter(){
		
		this.rootGuiComponent.onAfter(this.frameworkApp.app, this.page)
		
		this.page.onAfter()
		
	}
	
	getFirstTrueAfterDirection(){
		return this.afterDirections.find(
			d => d.isTrue()
		)
	}
	
}