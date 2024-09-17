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
	
	createElement(frameworkApp, paper, onUpdated){
		
		const circleElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle',
		)
		
		const {
			_width: svgWidth,
			_height: svgHeight
		} = paper
		
		let cx = (
			this._centerX != undefined ?
			this._centerX / svgWidth * 100 :
			50
		)
		let cy = (
			this._centerY != undefined ?
			100 - this._centerY / svgHeight * 100 :
			50
		)
		let r = (
			this._radius != undefined ?
			this._radius / Math.min(svgWidth, svgHeight) * 100 :
			25
		)
		
		circleElement.setAttribute(`cx`, `${cx}%`)
		circleElement.setAttribute(`cy`, `${cy}%`)
		circleElement.setAttribute(`r`, `${r}cqmin`)
		circleElement.setAttribute('fill', this._backgroundColor)
		
		return circleElement
		
	}
	
}