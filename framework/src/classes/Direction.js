import { validateArgs } from "../functions/validate-args.js"

export class Direction{
	
	_Page = null
	_condition = true
	_description = ``
	
	page(page){
		
		validateArgs(
			this,
			`page`,
			[`Page`],
			arguments,
		)
		
		this._Page = page
		return this
	}
	
	when(condition) {
		
		validateArgs(
			this,
			`when`,
			[`boolean`],
			arguments,
		)
		
		this._condition = condition
		return this
	}
	
	text(description) {
		
		validateArgs(
			this,
			`text`,
			[`string`],
			arguments,
		)
		
		this._description = description
		return this
	}
	
	getPage(){
		return this._Page
	}
	
	getCondition(){
		return this._condition
	}
	
	getDescription(){
		return this._description
	}
	
}