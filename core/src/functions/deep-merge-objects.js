export function deepMergeObjects(target, ...sources){
	
	for(const source of sources){
		
		for(const key in source){
			
			const value = source[key]
			
			if(typeof value == 'object' && value != null && value != undefined){
				
				if(!target[key]){
					target[key] = {}
				}
				
				deepMergeObjects(target[key], source[key])
				
			}else{
				
				target[key] = value
				
			}
			
		}
		
	}
	
	return target
	
}