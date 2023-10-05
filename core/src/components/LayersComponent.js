import { Component } from '../Component.js'

export class LayersComponent extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.children = props.children?.[0] ?? []
		
	}
	
	onAfter(a, p) {
		for (const child of this.children) {
			child.onAfter(a, p)
		}
	}
	
	createAfterDirections() {
		return this.children.map(
			c => c.createAfterDirections()
		).flat()
	}
	
}