import { validateArgs } from "./functions/validate-args.js"

export class PaperFigure{
	
	_generalTypeName = `PaperFigure`
	_specificTypeName = `PaperFigure`
	
	_backgroundColor = `black`
	_onClickFunction = null
	_onClickArguments = []
	
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
	
	onClick(onClickFunction, ...onClickArguments) {
		
		const args = (
			arguments.length == 0 ?
				[] :
				[onClickFunction]
		)
		
		validateArgs(
			this,
			`onClick`,
			[`Function`],
			args,
		)
		
		this._onClickFunction = onClickFunction
		this._onClickArguments = onClickArguments
		
		return this
		
	}
	
	createElement(elementName, addClickListener=true){
		
		const element = document.createElementNS(
			`http://www.w3.org/2000/svg`,
			elementName,
		)
		
		if(this._onClickFunction && addClickListener){
			element.addEventListener(`click`, () => {
				this._onClickFunction(
					...this._onClickArguments,
				)
			})
		}
		
		return element
		
	}
	
}