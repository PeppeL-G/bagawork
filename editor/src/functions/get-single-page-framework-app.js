import { FrameworkApp } from "@bagawork/core"
import { getCreateAppCode } from "./get-create-app-code.js"

// Since creating and running a single page framework app
// is expensive and happens often, we use a cache here.
// Key is the code, value is the framework app.
const cachedFrameworkApps = new Map()

export function getSinglePageFrameworkApp(
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
	
	const frameworkPage = new FrameworkApp(createAppCode)
	frameworkPage.start()
	
	cachedFrameworkApps[createAppCode] = frameworkPage
	
	return frameworkPage
	
}