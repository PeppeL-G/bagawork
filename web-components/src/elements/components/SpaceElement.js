import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class SpaceElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.boxSizing = 'border-box'
		
	}
	
	setGuiComponent(spaceComponent, frameworkApp){
		
		// Fix HTML.
		if (spaceComponent.child){
			
			const childElement = createGuiElement(spaceComponent.child)
			this.appendChild(childElement)
			childElement.setGuiComponent(spaceComponent.child, frameworkApp)
			
			// Fix CSS.
			childElement.style.height = "100%"
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			spaceComponent,
			this,
		)
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-space",
		SpaceElement,
	)
}