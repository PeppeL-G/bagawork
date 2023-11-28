export const m = {
	
	randomInt(minInt, maxInt){
		return Math.floor(
			this.randomFloat(minInt, maxInt+1)
		)
	},
	
	randomFloat(minFloat, maxFloat){
		return Math.random() * (maxFloat - minFloat) + minFloat
	},
	
	lowest(...numbers){
		return Math.min(...numbers)
	},
	
	highest(...numbers){
		return Math.max(...numbers)
	},
	
}