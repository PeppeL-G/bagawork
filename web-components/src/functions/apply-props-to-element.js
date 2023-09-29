export function applyAttributesToElement(guiComponent, htmlElement){
	
	const style = htmlElement.style
	
	if(guiComponent.backgroundColor){
		style.backgroundColor = guiComponent.backgroundColor
	}
	
	if(guiComponent.cornerRadius){
		style.borderRadius = `${guiComponent.cornerRadius}mm`
	}
	
}