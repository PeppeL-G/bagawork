export function createPageCreator(pageName, Page){
	
	Object.defineProperty(Page, 'name', {
		get(){
			return pageName
		}
	})
	
	// All references to this page starts with this proxy, but as
	// soon as it's used to set a page argument, create a new one.
	const sharedPageCreator = new Proxy(Page, {
		// E.g. StartPage.hello
		get(target, prop, receiver){
			
			switch(prop){
				
				case 'proxyName':
					return Page.name
				
				case 'prototype':
					return Page.prototype
				
				default:
					const realProxy = createRealPageCreator(Page)
					return Reflect.get(realProxy, prop, Page)
				
			}
			
		},
	})
	
	return sharedPageCreator
	
}

function createRealPageCreator(Page){
	
	let args = {}
	
	let lastAccessedProp = ""
	const setLastAccessedProp = (arg) => {
		args[lastAccessedProp] = arg
		return proxy
	}
	
	const proxy = new Proxy(Page, {
		get(target, prop, receiver) {
			
			switch(prop){
				
				case 'proxyName':
					return Page.name
				
				case 'prototype':
					return Page.prototype
				
				case 'proxyGetPageAndArgs':
					return {
						Page,
						args,
					}
				
				default:
					lastAccessedProp = prop
					return setLastAccessedProp
				
			}
			
		},
		
	})
	
	return proxy
	
}