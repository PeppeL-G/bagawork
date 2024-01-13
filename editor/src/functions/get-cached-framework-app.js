import { FrameworkApp } from "@bagawork/framework"
import { getCreateAppCode } from "./get-create-app-code.js"

// Since creating and running a framework app is expensive and often
// can be re-used (i.e. when only showing it and the user can't interact
// with it), it should be created through the function in this file instead.

// Key is all the code for the app, value is the framework app.
const cachedFrameworkApps = new Map()

const runtimeSettings = {
	isPreview: true,
}

export function getCachedFrameworkApp(
	app,
	pages,
	startPage,
){
	
	const createAppCode = getCreateAppCode(
		app,
		pages,
		startPage,
		true,
	)
	
	// First, check if a cached framework app exists.
	const cachedFrameworkApp = cachedFrameworkApps.get(
		createAppCode,
	)
	
	if (cachedFrameworkApp) {
		return cachedFrameworkApp
	}
	
	const frameworkPage = new FrameworkApp(createAppCode, runtimeSettings)
	frameworkPage.start()
	
	cachedFrameworkApps[createAppCode] = frameworkPage
	
	return frameworkPage
	
}