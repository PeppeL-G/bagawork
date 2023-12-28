import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class ColumnsElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'grid'
		this.style.gridTemplateRows = '1fr'
		this.style.height = '100%'
		this.style.overflow = 'auto'
		this.style.boxSizing = 'border-box'
		
	}
	
	setGuiComponent(colsComponent, frameworkApp){
		
		// Fix HTML.
		const childComponents = colsComponent.children.filter(
			c => c.keepIf,
		)
		
		for (const childComponent of childComponents){
			
			const childElement = createGuiElement(childComponent)
			this.appendChild(childElement)
			childElement.setGuiComponent(childComponent, frameworkApp)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			colsComponent,
			this,
		)
		
		const style = this.style
		
		style.gridTemplateColumns = childComponents.map(childComponent => {
			const size = childComponent.size
			if(size != null){
				return `minmax(auto, ${size}fr)`
			} else if (childComponent.constructor.name == "SpaceComponent") {
				return '1fr'
			} else if (childComponent.constructor.name == "ImageComponent") {
				return 'max-content'
			}else{
				return 'max-content'
			}
		}).join(" ")
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-cols",
		ColumnsElement,
	)
}