import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

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