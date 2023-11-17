import { PageElement } from './PageElement.js'
import { FrameworkApp } from '@bagawork/core'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
		Function :
		HTMLElement
)

export class AppElement extends ParentElement {

	constructor() {
		super()

		// Prevent the one using this element to style this
		// element nor any of its children.
		this.style.all = 'initial'

		this.style.boxSizing = 'border-box'
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.backgroundColor = 'aqua'

		this.pageElement = new PageElement()

		const shadowRoot = this.attachShadow({
			mode: 'closed'
		})
		shadowRoot.appendChild(
			this.pageElement
		)
		shadowRoot.addEventListener(
			'moveon',
			this.moveOn.bind(this)
		)
		shadowRoot.addEventListener(
			'updateGui',
			this.updateGui.bind(this),
		)

	}

	// This is the "easy" interface other programmers should use.
	async showApp(createApp, runtimeSettings = {}) {
		
		const oldOnError = runtimeSettings.onError
		const oldOnPageShow = runtimeSettings.onPageShow

		runtimeSettings.onError = (errorMessage) => {
			this.showError(errorMessage)
			oldOnError && oldOnError(errorMessage)
		}

		runtimeSettings.onPageShow = () => {
			this.updateGui()
			oldOnPageShow && oldOnPageShow()
		}
		
		this.frameworkApp = new FrameworkApp(createApp, runtimeSettings)
		
		await this.frameworkApp.start()
		
		this.updateGui()
		
	}
	
	// This is the "hard" interface only the editor/docs website should use.
	// The editor/docs website should call createAppInstance(), start(), etc.
	// themselves.
	showSinglePageFrameworkApp(frameworkApp) {
		
		this.frameworkApp = frameworkApp
		
		// Add an error listener.
		const oldOnError = frameworkApp.runtimeSettings.onError
		const oldOnPageShow = frameworkApp.runtimeSettings.onPageShow
		
		frameworkApp.runtimeSettings.onError = (errorMessage) => {
			this.showError(errorMessage)
			oldOnError && oldOnError(errorMessage)
		}
		
		frameworkApp.runtimeSettings.onPageShow = () => {
			this.updateGui()
			oldOnPageShow && oldOnPageShow()
		}
		
		this.updateGui()
		
	}
	
	async moveOn() {

		try {
			await this.frameworkApp.moveOn()
		} catch (error) {
			console.log("Error received in AppElement.moveOn()", error)
			this.showError("Error when moving on (this is a bug in the BagaWork framework, it should never happen).")
			return
		}

		this.updateGui()

	}

	updateGui() {
		
		if(this.frameworkApp.errorMessage){
			this.showError(this.frameworkApp.errorMessage)
		}else{
			this.pageElement.showPage(
				this.frameworkApp.frameworkPage,
				this.frameworkApp,
		)
		}
		
		
	}

	showError(errorMessage) {

		this.pageElement.innerText = errorMessage

	}

}

if (typeof customElements != "undefined") {
	customElements.define(
		"bagawork-app",
		AppElement,
	)
}