export class Component{
	
	constructor(props){
		
		this.backgroundColor = props.backgroundColor?.[0] ?? ""
		this.size = props.size?.[0] ?? null
		this.cornerRadius = props.cornerRadius?.[0] ?? 0
		
	}
	
	onAfter(a, p){
		
	}
	
	createAfterDirections(){
		return [
			/* new Direction(...) */
		]
	}
	
}