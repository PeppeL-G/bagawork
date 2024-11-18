import { throwArgError, validateArgs } from "./functions/validate-args.js"

export class Component{
	
	_generalTypeName = `Component`
	_specificTypeName = `Component`
	
	_backgroundColor = `transparent`
	_size = 0
	_cornerRadius = 0
	_showIf = true
	_keepIf = true
	_font = null
	
	_onChildUpdated = null
	
	backgroundColor(color){
		
		validateArgs(
			this,
			"backgroundColor",
			["string"],
			arguments,
		)
		
		this._backgroundColor = color
		return this
		
	}
	
	size(size) {
		
		validateArgs(
			this,
			"size",
			["number"],
			arguments,
		)
		
		this._size = size
		return this
	}
	
	cornerRadius(cornerRadius) {
		
		validateArgs(
			this,
			"cornerRadius",
			["number"],
			arguments,
		)
		
		this._cornerRadius = cornerRadius
		return this
	}
	
	showIf(showIf) {
		
		validateArgs(
			this,
			"showIf",
			["boolean"],
			arguments,
		)
		
		this._showIf = showIf
		return this
	}
	
	keepIf(keepIf) {
		
		validateArgs(
			this,
			"keepIf",
			["boolean"],
			arguments,
		)
		
		this._keepIf = keepIf
		return this
	}
	
	_paddingLeft = 0
	_paddingRight = 0
	_paddingTop = 0
	_paddingBottom = 0
	
	padding(amountInMm, sides = `lrtb`) {
		
		if(arguments.length == 1){
			return this.padding(amountInMm, sides)
		}
		
		validateArgs(
			this,
			"padding",
			["number", "string"],
			arguments,
		)
		
		if (!/^[lrtb]{0,4}$/.test(sides)) {
			throwArgError(this, "padding", `as the second argument, you passed it ${JSON.stringify(sides)}, but it may only contain the letters l, r, t and b`)
		}
		
		this._paddingLeft   = sides.includes(`l`) ? amountInMm : this._paddingLeft
		this._paddingRight  = sides.includes(`r`) ? amountInMm : this._paddingRight
		this._paddingTop    = sides.includes(`t`) ? amountInMm : this._paddingTop
		this._paddingBottom = sides.includes(`b`) ? amountInMm : this._paddingBottom
		return this
	}
	
	_borderLeft   = [0, `black`]
	_borderRight  = [0, `black`]
	_borderTop    = [0, `black`]
	_borderBottom = [0, `black`]
	
	border(amountInMm, color, sides = `lrtb`) {
		
		if (arguments.length == 2) {
			return this.border(amountInMm, color, sides)
		}
		
		validateArgs(
			this,
			"border",
			["number", "string", "string"],
			arguments,
		)
		
		if(!/^[lrtb]{0,4}$/.test(sides)){
			throwArgError(this, "border", `as the third argument, you passed it ${JSON.stringify(sides)}, but it may only contain the letters l, r, t and b`)
		}
		
		this._borderLeft   = sides.includes(`l`) ? [amountInMm, color] : this._borderLeft
		this._borderRight  = sides.includes(`r`) ? [amountInMm, color] : this._borderRight
		this._borderTop    = sides.includes(`t`) ? [amountInMm, color] : this._borderTop
		this._borderBottom = sides.includes(`b`) ? [amountInMm, color] : this._borderBottom
		return this
	}
	
	font(font){
		
		validateArgs(
			this,
			`font`,
			[`Font`],
			arguments,
		)
		
		this._font = font
		return this
		
	}
	
	onAfter(a, p){
		
	}
	
	createAfterDirections(){
		return [
			/* Direction */
		]
	}
	
	createElement(frameworkApp, parentComponent, onUpdated){
		/* return HTMLElement */
	}
	
	getSize(){
		return this._size
	}
	
}