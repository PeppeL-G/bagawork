export function createDirectionCreator(){
	
	// All directions start with this proxy, but as soon as
	// it's used to set an argument, create a new one.
	const sharedDirectionCreator = new Proxy({}, {
		// E.g. Direction.page()
		get(target, prop, receiver){
			
			const realProxy = createRealDirectionCreator()
			return Reflect.get(realProxy, prop, receiver)
			
		},
	})
	
	return sharedDirectionCreator
	
}

function createRealDirectionCreator(){
	
	let args = {}
	
	let lastAccessedProp = ""
	const setLastAccessedProp = (arg) => {
		args[lastAccessedProp] = arg
		return proxy
	}
	
	const proxy = new Proxy({}, {
		get(target, prop, receiver) {
			
			switch(prop){
				
				case 'proxyGetArgs':
					return args
				
				default:
					lastAccessedProp = prop
					return setLastAccessedProp
				
			}
			
		},
		
	})
	
	return proxy
	
}