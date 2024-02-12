import { validateArgs } from "../functions/validate-args.js"
import { PaperChild } from "../PaperChild.js"

export class PaperCircleChild extends PaperChild{
	
	_radius
	_centerX
	_centerY
	
	radius(radius) {
		
		validateArgs(
			this,
			`radius`,
			[`number`],
			arguments,
		)
		
		this._radius = radius
		return this
	}
	
	center(x, y) {
		
		validateArgs(
			this,
			`center`,
			[`number`, `number`],
			arguments,
		)
			
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