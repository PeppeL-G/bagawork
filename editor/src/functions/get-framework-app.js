import { FrameworkApp } from "@bagawork/framework"
import { getCreateAppCode } from "./get-create-app-code.js"

export function getFrameworkApp(
	app,
	pages,
	startPage,
	runtimeSettings={isPreview: false},
){
	
	const createAppCode = getCreateAppCode(
		app,
		pages,
		startPage,
	)
	
	const frameworkApp = new FrameworkApp(createAppCode, runtimeSettings)
	
	frameworkApp.start()
	
	return frameworkApp
	
}