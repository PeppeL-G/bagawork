import { Font } from "../classes/Font.js"

export function validateArgs(
	component,
	methodName,
	expectedGeneralTypeNames,
	args
){
	
	args = Array.from(args)
	
	if (expectedGeneralTypeNames.length != args.length) {
		
		throwArgError(
			component,
			methodName,
			`passed it ${args.length} arguments,
			but it must be passed ${expectedGeneralTypeNames.length} arguments.
			You passed it (${args.map(a => getSpecificTypeName(a)).join(`, `)}),
			and it has to be passed (${expectedGeneralTypeNames.join(`, `)})`
		)
		
	}
	
	for (const [i, expectedTypeName] of expectedGeneralTypeNames.entries()) {
		
		const arg = args[i]
		const specificTypeName = getSpecificTypeName(arg)
		
		// The Updater component is responsible for checking
		// the type of its child when it creates the child.
		if(specificTypeName == `Updater`){
			continue;
		}
		
		const generalTypeName = getGeneralTypeName(arg)
		
		if(generalTypeName != expectedTypeName){
			
			throwArgError(
				component,
				methodName,
				`as argument ${i + 1} you passed it a ${generalTypeName} value (${specificTypeName}), but it must be a ${expectedTypeName}`
			)
			
		}
		
	}
	
}

export function throwArgError(component, methodName, errorMessage) {
	
	const componentName = component.constructor.name.split("Component")[0]
	
	throw `On ${componentName} you called ${methodName}() and ${errorMessage}`
	
}

export function getSpecificTypeName(value){
	
	if(value === null){
		return `null`
	}
	
	if(value === undefined){
		return `undefined`
	}
	
	if (value.proxyName) {
		return value.proxyName
	}
	
	if(value.getSpecificTypeName?.()){
		return value.getSpecificTypeName()
	}
	
	if(value instanceof Font){
		return `Font`
	}
	
	return JSON.stringify(value, null, ` `)
	
}

function getGeneralTypeName(value){
	
	if(value === null){
		return "null"
	}
	
	if(value === undefined){
		return "undefined"
	}
	
	if(value.proxyGetPageAndArgs){
		return "Page"
	}
	
	if(value?.getGeneralTypeName?.()){
		return value.getGeneralTypeName()
	}
	
	if(value instanceof Font){
		return `Font`
	}
	
	if(value instanceof Function){
		return value.constructor.name
	}
	
	return typeof value
	
}