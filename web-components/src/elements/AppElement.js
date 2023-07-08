import { PageElement } from './PageElement.js'
import { createFrameworkApp } from '@bagawork/core'

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

	}

	// This is the "easy" interface other programmers should use.
	showApp(createApp, runtimeSettings) {

		let frameworkApp

		try {
			frameworkApp = createFrameworkApp(createApp, runtimeSettings)
		} catch (error) {
			console.log("Error when creating app", error)
			this.showError("Error when creating app")
			return
		}

		try {
			frameworkApp.start()
		} catch (error) {
			console.log("Error when starting app", error)
			this.showError("Error when starting app")
			return
		}

		this.showFrameworkApp(frameworkApp)

	}

	// This is the "hard" interface only the editor/docs website should use.
	// The editor should call start on the framework app.
	showFrameworkApp(frameworkApp) {

		this.frameworkApp = frameworkApp

		this.updateGui()

	}

	moveOn() {

		try {
			this.frameworkApp.moveOn()
		} catch (error) {
			console.log("Error when moving on", error)
			this.showError("Error when moving on")
			return
		}

		this.updateGui()

	}

	updateGui() {

		this.pageElement.showPage(
			this.frameworkApp.frameworkPage,
			this.frameworkApp,
		)

	}

	showError(runtimeErrorMessage) {

		this.pageElement.innerText = `A runtime error occurred: ${runtimeErrorMessage}`

	}

}

if (typeof customElements != "undefined") {
	customElements.define(
		"bagawork-app",
		AppElement,
	)
}