import {Component} from '../Component.js'

export class SpaceComponent extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.child = props.child?.[0] ?? null
		
	}
	
	onAfter(a, p){
		
		if(this.child){
			this.child.onAfter(a, p)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.child){
			afterDirections.push(
				...this.child.createAfterDirections()
			)
		}
		
		return afterDirections
		
	}
	
}