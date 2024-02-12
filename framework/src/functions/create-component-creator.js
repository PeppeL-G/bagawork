export function createComponentCreator(Component){
	
	// All new components of same type start with this proxy,
	// but as soon as it's used, create a new one.
	const sharedComponentCreator = new Proxy(Component, {
		
		// E.g. Text.hello
		get(target, prop, proxyInstance){
			const component = new Component()
			if(component[prop] instanceof Function){
				return component[prop].bind(component)
			}else{
				return component[prop]
			}
		},
		
		getPrototypeOf(target){
			return Component.prototype
		},
		
	})
	
	return sharedComponentCreator
	
}