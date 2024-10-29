import { PaperChild } from "../PaperChild.js"
import { validateArgs } from "../functions/validate-args.js"

export class PaperLineChild extends PaperChild{
	
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
	
	createElement(frameworkApp, paper, onUpdated){
		
		const lineElement = super.createElement(`line`)
		
		const {
			_width: svgWidth,
			_height: svgHeight,
		} = paper
		
		let x1 = (
			this._startX != undefined ?
			this._startX / svgWidth * 100 :
			25
		)
		let y1 = (
			this._startY != undefined ?
			100 - this._startY / svgHeight * 100 :
			75
		)
		let x2 = (
			this._endX != undefined ?
			this._endX / svgWidth * 100 :
			75
		)
		let y2 = (
			this._endY != undefined ?
			100 - this._endY / svgHeight * 100 :
			25
		)
		let thickness = (
			this._thickness != undefined ?
			this._thickness :
			0.1
		) / Math.min(svgWidth, svgHeight) * 100
		
		lineElement.setAttribute('x1', `${x1}%`)
		lineElement.setAttribute('y1', `${y1}%`)
		lineElement.setAttribute('x2', `${x2}%`)
		lineElement.setAttribute('y2', `${y2}%`)
		lineElement.setAttribute('stroke-width', `${thickness}%`)
		lineElement.setAttribute('stroke', this._backgroundColor)
		lineElement.setAttribute('stroke-linecap', `round`)
		
		return lineElement
		
	}
	
}