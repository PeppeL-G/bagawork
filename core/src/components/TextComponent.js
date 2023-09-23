import {Component} from '../Component.js'

export class TextComponent extends Component{
	
	constructor(props) {
		
		super(props)
		
		this.text = props.text?.[0] ?? ""
		this.left = props.left ? true : false
		this.right = props.right ? true : false
		this.top = props.top ? true : false
		this.bottom = props.bottom ? true : false
		
	}
	
}