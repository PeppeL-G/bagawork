import { AppElement } from '../elements/AppElement.js'

export function showAppInContainer(createApp, containerElement, runtimeSettings=undefined){
	
	const appElement = new AppElement()
	containerElement.appendChild(appElement)
	appElement.showApp(createApp)
	
}