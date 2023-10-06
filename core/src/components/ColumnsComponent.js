import {Component} from '../Component.js'

export class ColumnsComponent extends Component{
	
	constructor(props){
		
		super(props)
		
		this.children = props.children?.[0]?.flat(Infinity)?.filter(
			c => c,
		) ?? []
		
	}
	
	onAfter(a, p){
		for(const child of this.children){
			child.onAfter(a, p)
		}
	}
	
	createAfterDirections(){
		
		return this.children.map(
			c => c.createAfterDirections()
		).flat()
		
	}
	
}