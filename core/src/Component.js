export class Component{
	
	constructor(props){
		
		this.backgroundColor = props.backgroundColor?.[0] ?? ""
		this.size = props.size?.[0] ?? null
		
	}
	
	onAfter(a, p){
		
	}
	
	createAfterDirections(){
		return [
			/* new Direction(...) */
		]
	}
	
}