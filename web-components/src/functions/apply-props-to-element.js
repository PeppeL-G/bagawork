export function applyAttributesToElement(guiComponent, htmlElement){
	
	const style = htmlElement.style
	
	if (guiComponent.paddingTop) {
		style.paddingTop = `${guiComponent.paddingTop}mm`
	}
	if (guiComponent.paddingRight) {
		style.paddingRight = `${guiComponent.paddingRight}mm`
	}
	if (guiComponent.paddingBottom) {
		style.paddingBottom = `${guiComponent.paddingBottom}mm`
	}
	if (guiComponent.paddingLeft) {
		style.paddingLeft = `${guiComponent.paddingLeft}mm`
	}
	
	if (guiComponent.borderTop.thickness) {
		style.borderTop = `${guiComponent.borderTop.thickness}mm ${guiComponent.borderTop.color} solid`
	}
	if (guiComponent.borderRight.thickness) {
		style.borderRight = `${guiComponent.borderRight.thickness}mm ${guiComponent.borderRight.color} solid`
	}
	if (guiComponent.borderBottom.thickness) {
		style.borderBottom = `${guiComponent.borderBottom.thickness}mm ${guiComponent.borderBottom.color} solid`
	}
	if (guiComponent.borderLeft.thickness) {
		style.borderLeft = `${guiComponent.borderLeft.thickness}mm ${guiComponent.borderLeft.color} solid`
	}
	
	if(guiComponent.backgroundColor){
		style.backgroundColor = guiComponent.backgroundColor
	}
	
	if(guiComponent.cornerRadius){
		style.borderRadius = `${guiComponent.cornerRadius}mm`
	}

	if(!guiComponent.showIf){
		style.visibility = `hidden`
	}
	
}