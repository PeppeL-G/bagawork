import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class ImageComponent extends Component {
	
	_url = ``
	
	url(url) {

		validateArgs(
			this,
			`url`,
			[`string`],
			arguments,
		)
		
		this._url = url
		return this
	}
	
	createElement(){
		
		const imageElement = document.createElement(`img`)
		imageElement.classList.add(`image`)
		
		imageElement.style.boxSizing = 'border-box'
		imageElement.style.display = `block`
		imageElement.style.margin = `auto`
		imageElement.style.objectFit = "contain"
		imageElement.style.maxWidth = `100%`
		imageElement.style.maxHeight = `100%`
		imageElement.style.width = `100%`
		imageElement.style.height = `100%`
		
		imageElement.addEventListener('load', () => {
			imageElement.width = imageElement.naturalWidth
			imageElement.height = imageElement.naturalHeight
		})
		
		// Fix HTML.
		imageElement.src = this._url
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			imageElement,
		)
		
		return imageElement
		
	}
	
}