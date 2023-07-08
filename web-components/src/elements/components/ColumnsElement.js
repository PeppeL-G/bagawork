import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'
import { SpaceComponent } from '@bagawork/core/src/components/SpaceComponent'

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
		for(const childComponent of colsComponent.children){
			
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
		
		style.gridTemplateColumns = colsComponent.children.map(childComponent => {
			const size = childComponent.props.size
			if(size != undefined){
				return `minmax(auto, ${size}fr)`
			} else if (childComponent instanceof SpaceComponent) {
				return '1fr'
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