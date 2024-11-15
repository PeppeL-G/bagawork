import { PaperFigure } from "../PaperFigure.js"
import { validateArgs } from "../functions/validate-args.js"

export class PaperLineFigure extends PaperFigure {
	
	_specificTypeName = `PaperLine`
	
	_thickness
	_startX
	_startY
	_endX
	_endY
	
	thickness(thickness) {
		
		validateArgs(
			this,
			`thickness`,
			[`number`],
			arguments,
		)
		
		this._thickness = thickness
		return this
	}
	
	start(x, y) {
		
		validateArgs(
			this,
			`start`,
			[`number`, `number`],
			arguments,
		)
		
		this._startX = x
		this._startY = y
		return this
	}
	
	end(x, y) {
		
		validateArgs(
			this,
			`end`,
			[`number`, `number`],
			arguments,
		)
		
		this._endX = x
		this._endY = y
		return this
	}
	
	createElement(frameworkApp, parent){
		
		const lineElement = super.createElement(`line`)
		
		const {
			_coordinatesWidth: parentWidth,
			_coordinatesHeight: parentHeight,
		} = parent
		
		let startX = this._startX ?? parentWidth * 0.25
		let startY = this._startY ?? parentHeight * 0.25
		let endX = this._endX ?? parentWidth * 0.75
		let endY = this._endY ?? parentHeight * 0.75
		let thickness = (
			this._thickness ?? Math.min(parentWidth, parentHeight) * 0.01
		)
		
		lineElement.setAttribute('x1', `${startX}`)
		lineElement.setAttribute('y1', `${parentHeight - startY}`)
		lineElement.setAttribute('x2', `${endX}`)
		lineElement.setAttribute('y2', `${parentHeight - endY}`)
		lineElement.setAttribute('stroke-width', `${thickness}`)
		lineElement.setAttribute('stroke', this._backgroundColor)
		lineElement.setAttribute('stroke-linecap', `round`)
		
		return lineElement
		
	}
	
}