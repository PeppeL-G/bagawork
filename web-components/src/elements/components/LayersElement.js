import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class LayersElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'grid'
		this.style.gridTemplateRows = '1fr'
		this.style.gridTemplateColumns = '1fr'
		this.style.width = '100%'
		this.style.height = '100%'
		this.style.overflow = 'auto'
		this.style.boxSizing = 'border-box'
		
	}
	
	setGuiComponent(layersComponent, frameworkApp){
		
		// Fix HTML.
		const childComponents = layersComponent.children.filter(
			c => c.showIf,
		)
		
		for(const childComponent of childComponents){
			
			const childElement = createGuiElement(childComponent)
			this.appendChild(childElement)
			childElement.setGuiComponent(childComponent, frameworkApp)
			
			// Fix CSS for children.
			childElement.style.gridRow = '1'
			childElement.style.gridColumn = '1'
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			layersComponent,
			this,
		)
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-layers",
		LayersElement,
	)
}