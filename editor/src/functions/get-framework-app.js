import { createFrameworkApp } from "@bagawork/core";
import { pageToAppCreator } from "./page-to-app-creator";
import projectToAppCreator from "./get-framework-app/project-to-app-creator";

export function getFrameworkApp(startPage, isPreview){
	
	let createApp = null
	
	if(isPreview){
		createApp = pageToAppCreator()
	}else{
		createApp = projectToAppCreator()
	}
	
	const frameworkApp = createFrameworkApp(
		createApp,
		{isPreview: true},
	)
	
	console.log("frameworkApp")
	
	frameworkApp.start()
	
	return frameworkApp
	
}