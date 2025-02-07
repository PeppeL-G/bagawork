import { getNumberWithUnit } from "./functions/get-number-with-unit.js"
import { throwArgError, validateArgs } from "./functions/validate-args.js"

export class Component{
	
	_generalTypeName = `Component`
	_specificTypeName = `Component`
	
	_backgroundColor = `transparent`
	_grow = 0
	_growShrink = false
	_cornerRadius = `0vw`
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
	
	grow(grow) {
		
		validateArgs(
			this,
			"grow",
			["number"],
			arguments,
		)
		
		this._grow = grow
		return this
	}
	
	growShrink(grow) {
		
		validateArgs(
			this,
			"growShrink",
			["number"],
			arguments,
		)
		
		this._grow = grow
		this._growShrink = true
		return this
	}
	
	cornerRadius(cornerRadius) {
		
		validateArgs(
			this,
			"cornerRadius",
			["number"],
			arguments,
		)
		
		this._cornerRadius = getNumberWithUnit(cornerRadius)
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
	
	_paddingLeft = `0mm`
	_paddingRight = `0mm`
	_paddingTop = `0mm`
	_paddingBottom = `0mm`
	
	padding(amount, sides = `lrtb`) {
		
		if(arguments.length == 1){
			return this.padding(amount, sides)
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
		
		if(sides.includes(`l`)){
			this._paddingLeft = getNumberWithUnit(amount)
		}
		if(sides.includes(`r`)){
			this._paddingRight = getNumberWithUnit(amount)
		}
		if(sides.includes(`t`)){
			this._paddingTop = getNumberWithUnit(amount)
		}
		if(sides.includes(`b`)){
			this._paddingBottom = getNumberWithUnit(amount)
		}
		
		return this
	}
	
	_borderLeft   = `0mm solid black`
	_borderRight  = `0mm solid black`
	_borderTop    = `0mm solid black`
	_borderBottom = `0mm solid black`
	
	border(thickness, color, sides = `lrtb`) {
		
		if (arguments.length == 2) {
			return this.border(thickness, color, sides)
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
		
		if(sides.includes(`l`)){
			this._borderLeft = `${getNumberWithUnit(thickness)} solid ${color}`
		}
		if(sides.includes(`r`)){
			this._borderRight = `${getNumberWithUnit(thickness)} solid ${color}`
		}
		if(sides.includes(`t`)){
			this._borderTop = `${getNumberWithUnit(thickness)} solid ${color}`
		}
		if(sides.includes(`b`)){
			this._borderBottom = `${getNumberWithUnit(thickness)} solid ${color}`
		}
		
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
	
	getGrow(){
		return this._grow
	}
	
	getGrowShrink(){
		return this._growShrink
	}
	
}