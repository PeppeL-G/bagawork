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
				
				Object.val
				
				for (const propValue of Object.values(props)) {
					for(const args of propValue){
						for(const [argIndex, arg] of args.entries()){
							if(arg?.isCreatorProxy){
								args[argIndex] = arg.create
							}
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