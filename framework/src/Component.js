export class Component{
	
	_backgroundColor = `transparent`
	_size = 0
	_cornerRadius = 0
	_showIf = true
	_keepIf = true
	
	backgroundColor(color){
		this._backgroundColor = color
		return this
	}
	
	size(size){
		this._size = size
		return this
	}
	
	cornerRadius(cornerRadius) {
		this._cornerRadius = cornerRadius
		return this
	}
	
	showIf(showIf) {
		this._showIf = showIf
		return this
	}
	
	keepIf(keepIf) {
		this._keepIf = keepIf
		return this
	}
	
	_paddingLeft = 0
	_paddingRight = 0
	_paddingTop = 0
	_paddingBottom = 0
	
	padding(amountInMn, sides=`lrtb`) {
		this._paddingLeft   = sides.includes(`l`) ? amountInMn : this._paddingLeft
		this._paddingRight  = sides.includes(`r`) ? amountInMn : this._paddingRight
		this._paddingTop    = sides.includes(`t`) ? amountInMn : this._paddingTop
		this._paddingBottom = sides.includes(`b`) ? amountInMn : this._paddingBottom
		return this
	}
	
	_borderLeft   = [0, `black`]
	_borderRight  = [0, `black`]
	_borderTop    = [0, `black`]
	_borderBottom = [0, `black`]
	
	border(amountInMm, color, sides = `lrtb`) {
		this._borderLeft   = sides.includes(`l`) ? [amountInMm, color] : this._borderLeft
		this._borderRight  = sides.includes(`r`) ? [amountInMm, color] : this._borderRight
		this._borderTop    = sides.includes(`t`) ? [amountInMm, color] : this._borderTop
		this._borderBottom = sides.includes(`b`) ? [amountInMm, color] : this._borderBottom
	}
	
	onAfter(a, p){
		
	}
	
	createAfterDirections(){
		return [
			/* Direction */
		]
	}
	
	createElement(){
		/* return HTMLElement */
	}
	
}