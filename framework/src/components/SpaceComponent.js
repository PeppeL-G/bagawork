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
		
		applyAttributesToElement(
			this,
			spaceElement,
		)
		
		return spaceElement
		
	}
	
}