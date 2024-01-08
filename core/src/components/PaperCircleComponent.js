import {Component} from '../Component.js'

export class PaperCircleComponent extends Component{
	
	constructor(props){
		
		super(props)
		
		this.backgroundColor = props.backgroundColor?.[0]?.[0] ?? `black`
		this.radius = props.radius?.[0]?.[0] ?? null
		this.center = props.center?.[0] ?? null
		
	}
	
	getElement(svgWidth, svgHeight){
		
		const circleElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle',
		)
		
		const cx = this.center ? (this.center[0] / svgWidth) * 100 : 50
		const cy = this.center ? (this.center[1] / svgHeight) * 100 : 50
		const r = this.radius != null ? this.radius / Math.min(svgWidth, svgHeight) * 100 : 25
		
		circleElement.setAttribute('cx', `${cx}%`)
		circleElement.setAttribute('cy', `${100 - cy}%`)
		circleElement.setAttribute('r', `${r}%`)
		circleElement.setAttribute('fill', this.backgroundColor)
		
		return circleElement
		
	}
	
}