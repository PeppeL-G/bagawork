import {Component} from '../Component.js'
import {applyAttributesToElement} from '../functions/apply-props-to-element.js'

export class SpaceComponent extends Component {
	
	constructor(){
		super()
		this._size = 1
	}
	
	createElement(){
		
		const spaceElement = document.createElement(`div`)
		spaceElement.classList.add(`space`)
		
		spaceElement.style.display = 'block'
		spaceElement.style.height = '100%'
		spaceElement.style.boxSizing = 'border-box'
		
		applyAttributesToElement(
			this,
			spaceElement,
		)
		
		return spaceElement
		
	}
	
}