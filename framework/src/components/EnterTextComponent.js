import {Component} from '../Component.js'
import { Direction } from '../classes/Direction.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

export class EnterTextComponent extends Component{
	
	_text = ``
	_placeholder = ``
	_handler = null
	_handlerArgs = []
	_store = null
	_storeName = ``
	_page = null
	_pageIfEqual = []
	
	enteredText = ``
	
	text(text){
		this._text = text
		this.enteredText = text
		return this
	}
	
	placeholder(placeholder) {
		this._placeholder = placeholder
		return this
	}
	
	handler(handler, ...handlerArgs) {
		this._handler = handler
		this._handlerArgs = handlerArgs
		return this
	}
	
	store(store, name) {
		this._store = store
		this._storeName = name
		return this
	}
	
	page(page) {
		this._page = page
		return this
	}
	
	pageIfEqual(text, page) {
		this._pageIfEqual.push([text, page])
		return this
	}
	
	onAfter(a, p) {
		
		if(this._store){
			this._store[this._storeName] = this.enteredText
		}
		
		if(this._handler){
			this._handler(this.enteredText, ...this._handlerArgs)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = this._pageIfEqual.map(
			([conditionText, Page]) => new Direction(
				Page,
				this.enteredText == conditionText,
				conditionText,
			)
		)
		
		if(this._page){
			
			afterDirections.push(
				new Direction(
					this._page,
					true,
					`Any text`,
				)
			)
			
		}
		
		return afterDirections
		
	}
	
	createElement(){
		
		const enterTextElement = document.createElement(`div`)
		enterTextElement.classList.add(`enterText`)
		
		enterTextElement.style.display = 'block'
		enterTextElement.style.height = '100%'
		enterTextElement.style.width = "100%"
		enterTextElement.style.boxSizing = 'border-box'
		
		const inputElement = document.createElement('input')
		inputElement.style.display = 'block'
		inputElement.style.width = '100%'
		inputElement.style.height = '100%'
		inputElement.style.boxSizing = 'border-box'
		
		inputElement.addEventListener('keyup', (event) => {
			if (event.key == 'Enter') {
				enterTextElement.dispatchEvent(new CustomEvent('moveon', {
					bubbles: true,
				}))
			}
		})
		
		inputElement.addEventListener('input', (event) => {
			this.enteredText = inputElement.value
		})
		
		enterTextElement.appendChild(inputElement)
		
		// Fix HTML.
		inputElement.value = this._text
		inputElement.placeholder = this._placeholder
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			enterTextElement,
		)
		
		return enterTextElement
		
	}
	
}