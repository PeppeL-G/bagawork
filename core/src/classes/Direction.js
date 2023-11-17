export class Direction{
	
	constructor(Page, condition, description=``){
		this.Page = Page
		this.condition = condition
		this.description = description
	}
	
	createPage(){
		return this.Page
	}
	
	isTrue(){
		return this.condition()
	}
	
	getDescription(){
		return this.description
	}
	
}