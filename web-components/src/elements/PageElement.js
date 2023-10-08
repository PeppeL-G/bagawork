import {createGuiElement} from '../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export class PageElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		
	}
	
	showPage(frameworkPage, frameworkApp){
		
		this.innerText = ''
		
		if(frameworkPage.rootGuiComponent.showIf){
			
			const guiElement = createGuiElement(frameworkPage.rootGuiComponent)
			this.appendChild(guiElement)
			guiElement.setGuiComponent(frameworkPage.rootGuiComponent, frameworkApp)
			
		}
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-page",
		PageElement,
	)
}