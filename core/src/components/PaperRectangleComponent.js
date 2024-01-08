import {Component} from '../Component.js'

export class PaperRectangleComponent extends Component{
	
	constructor(props){
		
		super(props)
		
		this.backgroundColor = props.backgroundColor?.[0]?.[0] ?? `black`
		this.width = props.width?.[0]?.[0] ?? null
		this.height = props.height?.[0]?.[0] ?? null
		this.center = props.center?.[0] ?? null
		
	}
	
	getElement(svgWidth, svgHeight){
		
		const rectangleElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'rect',
		)
		
		const cx = this.center ? (this.center[0] / svgWidth) * 100 : 50
		const cy = this.center ? (this.center[1] / svgHeight) * 100 : 50
		const width = this.width != null ? this.width / svgWidth * 100 : 50
		const height = this.height != null ? this.height / svgHeight * 100 : 50
		const left = cx - width / 2
		const top = cy + height / 2
		
		rectangleElement.setAttribute('x', `${left}%`)
		rectangleElement.setAttribute('y', `${100 - top}%`)
		rectangleElement.setAttribute('width', `${width}%`)
		rectangleElement.setAttribute('height', `${height}%`)
		rectangleElement.setAttribute('fill', this.backgroundColor)
		
		return rectangleElement
		
	}
	
}