import { PaperChild } from "../PaperChild.js"
import { validateArgs } from "../functions/validate-args.js"

export class PaperRectangleChild extends PaperChild{
	
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
		
		const rectangleElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'rect',
		)
		
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
		
		rectangleElement.setAttribute('x', `${left}%`)
		rectangleElement.setAttribute('y', `${100 - top}%`)
		rectangleElement.setAttribute('width', `${width}%`)
		rectangleElement.setAttribute('height', `${height}%`)
		rectangleElement.setAttribute('fill', this._backgroundColor)
		
		return rectangleElement
		
	}
	
}