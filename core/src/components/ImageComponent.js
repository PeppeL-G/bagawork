import {Component} from '../Component.js'

export class ImageComponent extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.url = props.url?.[0]?.[0]
		
	}
	
}