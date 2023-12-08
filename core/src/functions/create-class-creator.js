export function createClassCreator(Class){
	
	const classCreator = new Proxy(function(){}, {
		// E.g. TheClass.theMethod
		get(originalObject, prop, proxy){
			
			const instance = new Class()
			
			return instance[prop].bind(instance)
			
		},
	})
	
	return classCreator
	
}