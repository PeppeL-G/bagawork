import { Component } from "../Component.js"
import { Font } from "../classes/Font.js"
import { PaperChild } from "../PaperChild.js"

export function validateArgs(component, methodName, expectedTypes, args) {
	
	args = Array.from(args)
	
	if (expectedTypes.length != args.length) {
		
		throwArgError(
			component,
			methodName,
			`passed it ${args.length} arguments,
			but it must be passed ${expectedTypes.length} arguments.
			You passed it (${args.map(a => getValueAsString(a)).join(`, `)}),
			and it has to be passed (${expectedTypes.join(`, `)})`
		)
		
	}
	
	for (const [i, expectedType] of expectedTypes.entries()) {
		
		const arg = args[i]
		const actualType = getTypeName(arg)
		
		if(actualType != expectedType){
			
			throwArgError(
				component,
				methodName,
				`as argument ${i + 1} you passed it a ${actualType} value (${getValueAsString(arg)}), but it must be a ${expectedType}`
			)
			
		}
		
	}
	
}

export function throwArgError(component, methodName, errorMessage) {
	
	const componentName = component.constructor.name.split("Component")[0]
	
	throw `On ${componentName} you called ${methodName}() and ${errorMessage}`
	
}

function getValueAsString(value){
	
	if(value == null){
		return `null`
	}
	
	if(value == undefined){
		return `undefined`
	}
	
	if (value.proxyName) {
		return value.proxyName
	}
	
	if(value instanceof PaperChild){
		return value.constructor.name.split("Child")[0]
	}
	
	if(value instanceof Component){
		return value.constructor.name.split(`Component`)[0]
	}
	
	if(value instanceof Font){
		return `Font`
	}
	
	return JSON.stringify(value, null, ` `)
	
}

function getTypeName(value){
	
	if(value == null){
		return "null"
	}
	
	if(value == undefined){
		return "undefined"
	}
	
	if(value.proxyGetPageAndArgs){
		return "Page"
	}
	
	if(value instanceof PaperChild){
		return "PaperChild"
	}
	
	if(value instanceof Component){
		return "Component"
	}
	
	if(value instanceof Font){
		return `Font`
	}
	
	if(value instanceof Function){
		return value.constructor.name
	}
	
	return typeof value
	
}