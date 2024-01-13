import {Component} from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

export class TextComponent extends Component{
	
	_text = ``
	_left = false
	_right = false
	_top = false
	_bottom = false
	
	text(text) {
		this._text = text
		return this
	}
	
	left() {
		this._left = true
		return this
	}
	
	right() {
		this._right = true
		return this
	}
	
	top() {
		this._top = true
		return this
	}
	
	bottom() {
		this._bottom = true
		return this
	}
	
	createElement(){
		
		const textElement = document.createElement('div')
		textElement.classList.add('text')
		
		textElement.style.display = 'flex'
		textElement.style.flexDirection = 'row'
		textElement.style.height = '100%'
		textElement.style.boxSizing = 'border-box'
		textElement.style.overflow = 'auto'
		
		// Fix HTML.
		// \u200B is zero width character (if text is empty,
		// we want the child to have a height).
		textElement.innerText = this._text.trim() || "\u200B"
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			textElement,
		)
		
		if (this._left) {
			textElement.style.justifyContent = 'start'
			textElement.style.textAlign = 'left'
		} else if (this._right) {
			textElement.style.justifyContent = 'end'
			textElement.style.textAlign = 'right'
		} else {
			textElement.style.justifyContent = 'center'
			textElement.style.textAlign = 'center'
		}
		
		if (this._top) {
			textElement.style.alignItems = 'start'
		} else if (this._bottom) {
			textElement.style.alignItems = 'end'
		} else {
			textElement.style.alignItems = 'center'
		}
		
		return textElement
		
	}
	
}