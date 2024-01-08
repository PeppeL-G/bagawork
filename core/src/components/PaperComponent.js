import {Component} from '../Component.js'

export class PaperComponent extends Component{
	
	constructor(props){
		
		super(props)
		
		this.width = props.width?.[0]?.[0] ?? 1
		this.height = props.width?.[0]?.[0] ?? 1
		this.showCoordinates = props.showCoordinates ?? false
		this.children = props.children?.[0]?.flat(Infinity)?.map(
			c => c?.create ?? c,
		)?.filter(
			c => c,
		) ?? []
		
	}
	
}