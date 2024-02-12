import { validateArgs } from "../functions/validate-args.js"

export const m = new (class m{
	
	randomInt(minInt, maxInt){
		
		validateArgs(
			this,
			`randomInt`,
			[`number`, `number`],
			arguments,
		)
		
		return Math.floor(
			this.randomFloat(minInt, maxInt+1)
		)
	}
	
	randomFloat(minFloat, maxFloat) {
		
		validateArgs(
			this,
			`randomFloat`,
			[`number`, `number`],
			arguments,
		)
		
		return Math.random() * (maxFloat - minFloat) + minFloat
	}
	
	lowest(...numbers) {
		
		const args = Array.from(arguments)
		
		validateArgs(
			this,
			`lowest`,
			args.map(a => `number`),
			args,
		)
		
		return Math.min(...numbers)
	}
	
	highest(...numbers) {
		
		const args = Array.from(arguments)
		
		validateArgs(
			this,
			`highest`,
			args.map(a => `number`),
			args,
		)
			
		return Math.max(...numbers)
	}
	
})()