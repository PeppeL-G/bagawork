import { PaperFigure } from "../PaperFigure.js"
import { validateArgs } from "../functions/validate-args.js"

export class PaperRectangleFigure extends PaperFigure {
	
	_specificTypeName = `PaperRectangle`
	
	_width
	_height
	_centerX
	_centerY
	
	width(width) {
		
		validateArgs(
			this,
			`width`,
			[`number`],
			arguments,
		)
		
		this._width = width
		return this
	}
	
	height(height) {
		
		validateArgs(
			this,
			`height`,
			[`number`],
			arguments,
		)
		
		this._height = height
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
		
		const rectElement = super.createElement(frameworkApp, `rect`)
		
		const {
			_coordinatesWidth: parentWidth,
			_coordinatesHeight: parentHeight
		} = paperGroup
		
		const cx = this._centerX ?? parentWidth / 2
		const cy = this._centerY ?? parentHeight / 2
		const width = this._width ?? parentWidth / 2
		const height = this._height ?? parentHeight / 2
		
		rectElement.setAttribute('x', `${cx - width/2}`)
		rectElement.setAttribute('y', `${parentHeight - (cy + height/2)}`)
		rectElement.setAttribute('width', `${width}`)
		rectElement.setAttribute('height', `${height}`)
		rectElement.setAttribute('fill', this._backgroundColor)
		
		return rectElement
		
	}
	
}