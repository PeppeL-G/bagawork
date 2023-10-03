import {Component} from '../Component.js'

export class TextComponent extends Component{
	
	constructor(props) {
		
		super(props)
		
		this.text = props.text?.[0]?.[0] ?? ""
		this.left = props.left?.[0] ? true : false
		this.right = props.right?.[0] ? true : false
		this.top = props.top?.[0] ? true : false
		this.bottom = props.bottom?.[0] ? true : false
		
	}
	
}