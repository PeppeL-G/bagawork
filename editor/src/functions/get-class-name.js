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
	let cachedClassName = cache.get(code)
	if(!cachedClassName){
		cachedClassName = realGetClassName(code)
		cache.set(code, cachedClassName)
	}
	return cachedClassName
}