import { AppElement } from '../elements/AppElement.js'

export function showAppInElement(
	createApp,
	screenElement,
	runtimeSettings=null,
){
	
	const appElement = new AppElement()
	screenElement.appendChild(appElement)
	appElement.showApp(createApp, runtimeSettings)
	
}