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
	
	getElement(svgWidth, svgHeight){
		
		const lineElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'line',
		)
		
		const x1 = (
			this._startX == undefined ?
			25 :
			(this._startX / svgWidth) * 100
		)
		const y1 = (
			this._startY == undefined ?
			25 :
			(this._startY / svgHeight) * 100
		)
		const x2 = (
			this._endX == undefined ?
			75 :
			(this._endX / svgWidth) * 100
		)
		const y2 = (
			this._endY == undefined ?
			75 :
			(this._endY / svgHeight) * 100
		)
		const thickness = (
			this._thickness == undefined ?
			1 :
			this._thickness / Math.min(svgWidth, svgHeight) * 100
		)
		
		lineElement.setAttribute('x1', `${x1}%`)
		lineElement.setAttribute('y1', `${100 - y1}%`)
		lineElement.setAttribute('x2', `${x2}%`)
		lineElement.setAttribute('y2', `${100 - y2}%`)
		lineElement.setAttribute('stroke', this._backgroundColor)
		lineElement.setAttribute('stroke-width', `${thickness}%`)
		lineElement.setAttribute('stroke-linecap', `round`)
		
		return lineElement
		
	}
	
}