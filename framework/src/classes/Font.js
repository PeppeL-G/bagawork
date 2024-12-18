import { validateArgs } from "../functions/validate-args.js"
import { getNumberWithUnit } from "../functions/get-number-with-unit.js"

export class Font{
	
	_bold = false
	_color = ``
	_italic = false
	_underline = false
	_strikethrough = false
	_size = `inherit`
	
	bold(){
		
		validateArgs(
			this,
			"bold",
			[],
			arguments,
		)
		
		this._bold = true
		return this
		
	}
	
	color(color){
		
		validateArgs(
			this,
			"color",
			["string"],
			arguments,
		)
		
		this._color = color
		return this
		
	}
	
	italic(){
		
		validateArgs(
			this,
			"italic",
			[],
			arguments,
		)
		
		this._italic = true
		return this
		
	}
	
	size(size){
		
		validateArgs(
			this,
			"size",
			["number"],
			arguments,
		)
		
		this._size = getNumberWithUnit(size)
		return this
		
	}
	
	underline(){
		
		validateArgs(
			this,
			"underline",
			[],
			arguments,
		)
		
		this._underline = true
		return this
		
	}
	
	strikethrough(){
		
		validateArgs(
			this,
			"strikethrough",
			[],
			arguments,
		)
		
		this._strikethrough = true
		return this
		
	}
	
}