export class PaperCircleComponent{
	
	_backgroundColor = `black`
	_radius
	_centerX
	_centerY
	
	backgroundColor(color){
		this._backgroundColor = color
		return this
	}
	
	radius(radius) {
		this._radius = radius
		return this
	}
	
	center(x, y) {
		this._centerX = x
		this._centerY = y
		return this
	}
	
	getElement(svgWidth, svgHeight){
		
		const circleElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle',
		)
		
		const cx = (
			this._centerX == undefined ? 
			50 :
			(this._centerX / svgWidth) * 100
		)
		const cy = (
			this._centerY == undefined ?
			50 :
			(this._centerY / svgHeight) * 100
		)
		const r = (
			this._radius == undefined ?
			25 : 
			this._radius / Math.min(svgWidth, svgHeight) * 100
		)
		
		circleElement.setAttribute('cx', `${cx}%`)
		circleElement.setAttribute('cy', `${100 - cy}%`)
		circleElement.setAttribute('r', `${r}%`)
		circleElement.setAttribute('fill', this._backgroundColor)
		
		return circleElement
		
	}
	
}