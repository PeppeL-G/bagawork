import { Component } from '../Component.js'

export class BoxComponent extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.width = props.width?.[0]?.[0]
		this.height = props.height?.[0]?.[0]
		
		this.top = props.top ?? false
		this.right = props.right ?? false
		this.bottom = props.bottom ?? false
		this.left = props.left ?? false

		this.aspectRatioWidth = props.aspectRatio?.[0]?.[0]
		this.aspectRatioHeight = props.aspectRatio?.[0]?.[1]
		
		this.child = props.child?.[0]?.[0]?.create
		
	}
	
	onAfter(a, p) {
		this.child?.onAfter()
	}
	
	createAfterDirections() {
		return this.child?.createAfterDirections() ?? []
	}
	
}