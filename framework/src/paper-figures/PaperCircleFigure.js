import { validateArgs } from "../functions/validate-args.js"
import { PaperFigure } from "../PaperFigure.js"

export class PaperCircleFigure extends PaperFigure {
	
	_specificTypeName = `PaperCircle`
	
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
	
	createElement(frameworkApp, paperGroup){
		
		const circleElement = super.createElement(`ellipse`)
		
		const {
			_coordinatesWidth: svgWidth,
			_coordinatesHeight: svgHeight
		} = paperGroup
		
		const centerX = this._centerX ?? svgWidth * 0.5
		const centerY = this._centerY ?? svgHeight * 0.5
		const radius = this._radius ?? Math.min(svgWidth, svgHeight) * 0.25
		
		circleElement.setAttribute(`cx`, `${centerX}`)
		circleElement.setAttribute(`cy`, `${svgHeight - centerY}`)
		circleElement.setAttribute(`rx`, `${radius}`)
		circleElement.setAttribute(`ry`, `${radius}`)
		circleElement.setAttribute('fill', this._backgroundColor)
		
		return circleElement
		
	}
	
}