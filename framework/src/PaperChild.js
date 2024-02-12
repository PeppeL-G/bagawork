import { validateArgs } from "./functions/validate-args.js"

export class PaperChild{
	
	_backgroundColor = `black`
	
	backgroundColor(color) {
		
		validateArgs(
			this,
			`backgroundColor`,
			[`string`],
			arguments,
		)
			
		this._backgroundColor = color
		return this
	}
	
}