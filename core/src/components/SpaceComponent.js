import {Component} from '../Component.js'

export class SpaceComponent extends Component{
	
	onAfter(a, p){
		
		const child = this.children[0]
		
		if(child){
			child.onAfter(a, p)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		const child = this.children[0]
		
		if(child){
			afterDirections.push(
				...child.createAfterDirections()
			)
		}
		
		return afterDirections
		
	}
	
}