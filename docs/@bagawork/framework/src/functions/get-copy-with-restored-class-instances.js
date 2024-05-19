import { Time } from "../classes/Time.js"

export function getCopyWithRestoredClassInstances(original){
	
	if(original instanceof Array){
		return original.map(getCopyWithRestoredClassInstances)
	}else if(original instanceof Object){
		
		if(original.clazyName == Time.name){
			return Time.fromJSON(original)
		}
		
		return Object.fromEntries(
			Object.entries(original).map(
				([k, v]) => [k, getCopyWithRestoredClassInstances(v)],
			)
		)
		
	}
	
	// It's a plain value, no need to copy.
	return original
	
}