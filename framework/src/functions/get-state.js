export function getState(object){
	
	// Return an object with everything except methods.
	return Object.fromEntries(
		Object.entries(object).filter(
			([key, value]) => !(value instanceof Function),
		),
	)
	
}