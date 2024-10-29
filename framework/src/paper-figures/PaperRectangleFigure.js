import { PaperFigure } from "../PaperFigure.js"
import { validateArgs } from "../functions/validate-args.js"

export class PaperRectangleFigure extends PaperFigure {
	
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
	
	createElement(frameworkApp, paper, onUpdated){
		
		const rectElement = super.createElement(`rect`)
		
		const {
			_width: svgWidth,
			_height: svgHeight
		} = paper
		
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
		const width = (
			this._width == undefined ?
			50 :
			this._width / svgWidth * 100
		)
		const height = (
			this._height == undefined ?
			50 :
			this._height / svgHeight * 100
		)
		const left = cx - width / 2
		const top = cy + height / 2
		
		rectElement.setAttribute('x', `${left}%`)
		rectElement.setAttribute('y', `${100 - top}%`)
		rectElement.setAttribute('width', `${width}%`)
		rectElement.setAttribute('height', `${height}%`)
		rectElement.setAttribute('fill', this._backgroundColor)
		
		return rectElement
		
	}
	
}