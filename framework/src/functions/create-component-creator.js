export function createComponentCreator(Component){
	
	// All new components of same type start with this proxy,
	// but as soon as it's used, create a new one.
	const sharedComponentCreator = new Proxy(Component, {
		
		// E.g. Text.hello
		get(target, prop, receiver){
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

export function createRealComponentCreator2(Component){
	
	let props = {}
	
	let lastAccessedProp = ""
	const setLastAccessedProp = (...args) => {
		if (!(props[lastAccessedProp] instanceof Array)){
			props[lastAccessedProp] = []
		}
		props[lastAccessedProp].push(args)
		return proxy
	}
	
	const proxy = new Proxy(function(){}, {
		get(target, prop, receiver){
			if(prop == 'name'){
				return Component.name
			}else if(prop == 'isCreatorProxy'){
				return true
			}else if(prop == 'create'){
				return new Component(props)
			}else{
				lastAccessedProp = prop
				return setLastAccessedProp
			}
		},
	})
	
	return proxy
	
}