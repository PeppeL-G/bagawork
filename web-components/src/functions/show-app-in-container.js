import { createFrameworkApp } from '@bagawork/core'
import { AppElement } from '../elements/AppElement.js'

export function showAppInContainer(createApp, containerElement, runtimeSettings=undefined){
	
	const frameworkApp = createFrameworkApp(
		createApp,
		runtimeSettings,
	)
	
	const appElement = new AppElement()
	containerElement.appendChild(appElement)
	appElement.showApp(frameworkApp)
	
}