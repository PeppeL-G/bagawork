import {Component} from '../Component.js'
import {Direction} from '../classes/Direction.js'

export class ButtonComponent extends Component{
	
	constructor(props){
		
		super(props)
		
		this.wasClicked = false
		this.text = props.text?.[0]?.[0] ?? ""
		this.handler = props.handler?.[0]?.[0] ?? null
		this.page = props.page?.[0]?.[0] ?? null
		
	}
	
	onClick(){
		this.wasClicked = true
	}
	
	onAfter(a, p){
		if(this.wasClicked && this.handler){
			this.handler()
		}
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.page){
			
			afterDirections.push(
				new Direction(
					this.page,
					() => this.wasClicked,
					this.text,
				)
			)
			
		}
		
		return afterDirections
		
	}
	
}