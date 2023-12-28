import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

const ParentElement = (
	typeof HTMLImageElement == 'undefined' ?
	Function :
	HTMLImageElement
)

export default class ImageElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.boxSizing = 'border-box'
		this.style.display = `block`
		this.style.margin = `auto`
		this.style.objectFit = "contain"
		this.style.maxWidth = `100%`
		this.style.maxHeight = `100%`
		this.style.width = `100%`
		this.style.height = `100%`
		
		this.addEventListener('load', () => {
			this.width = this.naturalWidth
			this.height = this.naturalHeight
		})
		
	}
	
	setGuiComponent(imageComponent, frameworkApp){
		
		// Fix HTML.
		this.src = imageComponent.url
		
		// Fix CSS.
		applyAttributesToElement(
			imageComponent,
			this,
		)
		
	}
	
}

if(typeof customElements != "undefined"){
	
	customElements.define(
		"bagawork-image",
		ImageElement,
		{extends: 'img'}
	)
	
	document.createElement(ImageElement.tagName)
	
}