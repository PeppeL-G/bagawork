import {Component} from '../Component.js'

export class SpaceComponent extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.child = props.child?.[0] ?? null
		
		const all = props.all?.[0]
		const horizontal = props.horizontal?.[0]
		const vertical = props.vertical?.[0]
		
		this.left = props.left?.[0] ?? horizontal ?? all ?? 0
		this.right = props.right?.[0] ?? horizontal ?? all ?? 0
		this.top = props.top?.[0] ?? vertical ?? all ?? 0
		this.bottom = props.bottom?.[0] ?? vertical ?? all ?? 0
		
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