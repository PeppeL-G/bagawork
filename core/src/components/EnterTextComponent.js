import {Component} from '../Component.js'
import {Direction} from '../classes/Direction.js'

export class EnterTextComponent extends Component{
	
	text = ``
	placeholder = ``
	handler = null
	store = null
	page = null
	pageIfEqual = []
	
	enteredText = ``
	
	constructor(props){
		super(props)
		
		this.text = props.text?.[0]?.[0] ?? ``
		this.placeholder = props.placeholder?.[0]?.[0] ?? ``
		this.handler = props.handler?.[0]
		this.store = props.store?.[0]
		this.page = props.page?.[0]?.[0]
		this.pageIfEqual = props.pageIfEqual ?? []
		
		this.enteredText = this.text
		
	}
	
	onAfter(a, p) {
		
		if(this.store){
			
			const [object, name] = this.store
			
			object[name] = this.enteredText
			
		}
		
		if(this.handler){
			
			const [handler, ...args] = this.handler
			
			handler(this.enteredText, ...args)
			
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = this.pageIfEqual.map(
			([conditionText, Page]) => new Direction(
				Page,
				() => this.enteredText == conditionText,
				conditionText,
			)
		)
		
		if(this.page){
			
			afterDirections.push(
				new Direction(
					this.page,
					() => true,
					`Any text`,
				)
			)
			
		}
		
		return afterDirections
		
	}
	
}