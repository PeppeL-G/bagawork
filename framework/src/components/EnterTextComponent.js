import {Component} from '../Component.js'
import { Direction } from '../index.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class EnterTextComponent extends Component{
	
	_specificTypeName = `EnterText`
	
	_text = ``
	_placeholder = ``
	_onChangeFunction = null
	_onChangeArguments = []
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
	
	onChange(onChangeFunction, ...onChangeArguments) {
		
		let args = (
			arguments.length == 0 ?
				[] :
				[onChangeFunction]
		)
		
		validateArgs(
			this,
			`onChange`,
			[`Function`],
			args,
		)
		
		this._onChangeFunction = onChangeFunction
		this._onChangeArguments = onChangeArguments
		
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
		
		this._onChangeFunction?.(
			this.enteredText,
			...this.onChangeArguments,
		)
		
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
	
	createElement(frameworkApp, parentComponent){
		
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
			
			if(event.key == 'Enter'){
				
				if(frameworkApp.errorMessage){
					return
				}
				
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
			
			if(this._onChangeFunction){
					
				try{
					this._onChangeFunction(
						this.enteredText,
						...this._onChangeArguments,
					)
				}catch(error){
					
					frameworkApp.runtimeSettings.onError(
						`Error in the method ${this._onChangeFunction.name}() passed to EnterText.onChange(): ${error.toString()}`
					)
					return
					
				}
				
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