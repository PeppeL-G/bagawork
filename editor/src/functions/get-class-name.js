export function getClassName(code){
	return cachedGetClassName(code)
}

function realGetClassName(code){
	
	const matches = code.match(
		/(?<=class )\w+(?= extends)/
	)
	
	if(matches == null || !matches[0]){
		return "UnknownClassName"
	}else{
		return matches[0]
	}
	
}

const cache = new Map()

function cachedGetClassName(code){
	
	const cachedClassName = cache.get(code)
	
	if(cachedClassName){
		return cachedClassName
	}
	
	const className = realGetClassName(code)
	cache.set(code, className)
	return className
	
}