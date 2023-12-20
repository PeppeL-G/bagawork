export class Direction{
	
	constructor(Page, condition, description=``){
		this.Page = Page
		this.condition = condition
		this.description = description
	}
	
	getPage(){
		return this.Page
	}
	
	getCondition(){
		return this.condition
	}
	
	getDescription(){
		return this.description
	}
	
}