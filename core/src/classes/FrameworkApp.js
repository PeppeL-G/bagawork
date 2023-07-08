import {FrameworkPage} from './FrameworkPage.js'
import {deepMergeObjects} from '../functions/deep-merge-objects.js'

const defaultRuntimeSettings = {
	isPreview: false,
}

export class FrameworkApp{
	
	app = null
	runtimeSettings = {}
	frameworkPage = null
	
	constructor(app, runtimeSettings=null){
		
		this.app = app
		this.runtimeSettings = deepMergeObjects(
			{},
			defaultRuntimeSettings,
			runtimeSettings,
		)
		
	}
	
	// Call this method when the GUI environment has been initialized
	// (when we have detected voices, microphone, etc.).
	start(){
		
		this.app.onBefore()
		
		const StartPage = this.app.createStartPage()
		
		this.loadPage(new StartPage())
		
	}
	
	loadPage(page){
		
		this.frameworkPage = new FrameworkPage(this, page)
		
		if(!this.runtimeSettings.isPreview){
			
			const beforeDirection = this.frameworkPage.getFirstTrueBeforeDirection()
			
			if(beforeDirection){
				this.loadPage(beforeDirection.createPage())
				return
			}
			
		}
		
		this.frameworkPage.runOnBefore()
		this.frameworkPage.initializeTheRest()
		
	}
	
	moveOn(){
		
		this.frameworkPage.runOnAfter()
		
		const afterDirection = this.frameworkPage.getFirstTrueAfterDirection()
		
		if(afterDirection){
			
			this.loadPage(afterDirection.createPage())
			
		}else{
			
			// No after direction is true. Then simply send
			// the user to the current page the user is on.
			this.loadPage(this.frameworkPage.page)
			
		}
		
	}
	
}