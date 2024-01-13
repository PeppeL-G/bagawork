import { FrameworkApp } from '../classes/FrameworkApp.js'

export function showAppInElement(
	createApp,
	screenElement,
	runtimeSettings=null,
){
	
	const frameworkApp = new FrameworkApp(
		createApp,
		runtimeSettings,
	)
	
	frameworkApp.start()
	
	if(!screenElement.shadowRoot){
		screenElement.attachShadow({
			mode: "open",
		})
	}
	
	screenElement.shadowRoot.replaceChildren(
		frameworkApp.createElement(),
	)
	
}