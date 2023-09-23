export function applyAttributesToElement(guiComponent, htmlElement){
	
	const style = htmlElement.style
	
	if(guiComponent.backgroundColor){
		style.backgroundColor = guiComponent.backgroundColor
	}
	
}