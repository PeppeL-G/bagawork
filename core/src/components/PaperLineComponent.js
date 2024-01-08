import {Component} from '../Component.js'

export class PaperLineComponent extends Component{
	
	constructor(props){
		
		super(props)
		
		this.backgroundColor = props.backgroundColor?.[0]?.[0] ?? `black`
		this.thickness = props.thickness?.[0]?.[0] ?? null
		this.start = props.start?.[0] ?? null
		this.end = props.end?.[0] ?? null
		
	}
	
	getElement(svgWidth, svgHeight){
		
		const lineElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'line',
		)
		
		const x1 = this.start ? (this.start[0] / svgWidth) * 100 : 25
		const y1 = this.start ? (this.start[1] / svgHeight) * 100 : 25
		const x2 = this.end ? (this.end[0] / svgWidth) * 100 : 75
		const y2 = this.end ? (this.end[1] / svgHeight) * 100 : 75
		const thickness = this.thickness ? this.thickness / Math.min(svgWidth, svgHeight) * 100 : 1
		
		lineElement.setAttribute('x1', `${x1}%`)
		lineElement.setAttribute('y1', `${100 - y1}%`)
		lineElement.setAttribute('x2', `${x2}%`)
		lineElement.setAttribute('y2', `${100 - y2}%`)
		lineElement.setAttribute('stroke', this.backgroundColor)
		lineElement.setAttribute('stroke-width', `${thickness}%`)
		lineElement.setAttribute('stroke-linecap', `round`)
		
		return lineElement
		
	}
	
}