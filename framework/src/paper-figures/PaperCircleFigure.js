import { validateArgs } from "../functions/validate-args.js"
import { PaperFigure } from "../PaperFigure.js"

export class PaperCircleFigure extends PaperFigure {
	
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
		
		const circleElement = super.createElement(`circle`)
		
		const {
			_width: svgWidth,
			_height: svgHeight
		} = paper
		
		const centerXCoordinate = this._centerX ?? svgWidth * 0.5
		const centerYCoordinate = this._centerY ?? svgHeight * 0.5
		const radiusCoordinate = this._radius ?? Math.min(svgWidth, svgHeight) * 0.25
		
		const centerXPercentage = centerXCoordinate / svgWidth * 100
		const centerYPercentage = centerYCoordinate / svgHeight * 100
		
		// To make the SVG draw the radius with the actually provided
		// length, we can't use percentage units, so we use container
		// query units instead. However, they don't work for app icons
		// that are shown outside the web browser. But app icons are
		// always squared, and then the radius can be expressed in
		// percentage, so we differentiate those two cases here.
		if(svgWidth == svgHeight){
			
			const radiusPercentage = radiusCoordinate / svgWidth * 100
			circleElement.setAttribute(`r`, `${radiusPercentage}%`)
			
		}else{
			
			circleElement.style.r = `${this._radius / Math.min(svgWidth, svgHeight) * 100}cqmin`
			
		}
		
		circleElement.setAttribute(`cx`, `${centerXPercentage}%`)
		circleElement.setAttribute(`cy`, `${100 - centerYPercentage}%`)
		circleElement.setAttribute('fill', this._backgroundColor)
		
		return circleElement
		
	}
	
}