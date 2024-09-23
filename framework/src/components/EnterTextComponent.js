import {Component} from '../Component.js'
import { Direction } from '../index.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

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
	
	text(text) {
		
		validateArgs(
			this,
			`text`,
			[`string`],
			arguments,
		)
		
		this._text = text
		this.enteredText = text
		return this
	}
	
	placeholder(placeholder) {
		
		validateArgs(
			this,
			`placeholder`,
			[`string`],
			arguments,
		)
		
		this._placeholder = placeholder
		return this
	}
	
	handler(handler, ...handlerArgs) {
		
		let args = (
			arguments.length == 0 ?
				[] :
				[handler]
		)
		
		validateArgs(
			this,
			`handler`,
			[`Function`],
			args,
		)
		
		this._handler = handler
		this._handlerArgs = handlerArgs
		return this
	}
	
	store(store, name) {
		
		validateArgs(
			this,
			`store`,
			[`object`, `string`],
			arguments,
		)
		
		this._store = store
		this._storeName = name
		return this
	}
	
	page(page) {
		
		validateArgs(
			this,
			`page`,
			[`Page`],
			arguments,
		)
		
		this._page = page
		return this
	}
	
	pageIfEqual(text, page) {
		
		validateArgs(
			this,
			`pageIfEqual`,
			[`string`, `Page`],
			arguments,
		)
		
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
			([conditionText, Page]) => Direction
				.page(Page)
				.when(this.enteredText == conditionText)
				.text(conditionText)
		)
		
		if(this._page){
			
			afterDirections.push(
				Direction
					.page(this._page)
					.when(true)
					.text(`Any text`)
			)
			
		}
		
		return afterDirections
		
	}
	
	createElement(frameworkApp, parentComponent, onUpdated){
		
		const enterTextElement = document.createElement(`div`)
		enterTextElement.classList.add(`enterText`)
		
		enterTextElement.style.display = 'block'
		enterTextElement.style.height = '100%'
		enterTextElement.style.width = "100%"
		
		const inputElement = document.createElement('input')
		inputElement.style.display = 'block'
		inputElement.style.boxSizing = 'border-box'
		inputElement.style.width = '100%'
		inputElement.style.height = '100%'
		
		inputElement.addEventListener('keyup', (event) => {
			if (event.key == 'Enter') {
				enterTextElement.dispatchEvent(new CustomEvent('moveon', {
					bubbles: true,
				}))
			}
		})
		
		inputElement.addEventListener('input', (event) => {
			
			this.enteredText = inputElement.value
			
			if(this._store){
				this._store[this._storeName] = this.enteredText
			}
			
			if(this._handler){
				this._handler(this.enteredText, ...this._handlerArgs)
			}
			
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