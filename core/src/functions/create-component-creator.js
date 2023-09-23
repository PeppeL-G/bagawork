export function createComponentCreator(Component){
	
	// All new components of same type start with this proxy,
	// but as soon as it's used, create a new one.
	const sharedComponentCreator = new Proxy(function(){}, {
		// E.g. Text.hello
		get(target, prop, receiver){
			const realProxy = createRealComponentCreator(Component)
			return Reflect.get(realProxy, prop, receiver)
		},
	})
	
	return sharedComponentCreator
	
}

export function createRealComponentCreator(Component){
	
	let props = {}
	
	let lastAccessedProp = ""
	const setLastAccessedProp = (...args) => {
		props[lastAccessedProp] = args
		return proxy
	}
	
	const proxy = new Proxy(function(){}, {
		get(target, prop, receiver){
			if(prop == 'name'){
				return Component.name
			}else if(prop == 'isCreatorProxy'){
				return true
			}else if(prop == 'create'){
				
				for (const [propName, propValues] of Object.entries(props)) {
					for(const [i, propValue] of propValues.entries()){
						if(propValue?.isCreatorProxy){
							props[propName][i] = propValue.create
						}
					}
				}
				
				return new Component(props)
				
			}else{
				lastAccessedProp = prop
				return setLastAccessedProp
			}
		},
	})
	
	return proxy
	
}