import { validateArgs } from "../functions/validate-args.js"

export class Font{
	
	_bold = false
	_color = ``
	_italic = false
	_underline = false
	_strikethrough = false
	_size = -1
	_sizeUnit = ``
	
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
	
	sizeMm(size){
		
		validateArgs(
			this,
			"sizeMm",
			["number"],
			arguments,
		)
		
		this._size = size
		this._sizeUnit = `mm`
		return this
		
	}
	
	sizeSw(size){
		
		validateArgs(
			this,
			"sizeSw",
			["number"],
			arguments,
		)
		
		this._size = size
		this._sizeUnit = `vw`
		
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