import {Component} from '../Component.js'
import { Direction } from '../index.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class EnterNumberComponent extends Component{
	
	_number = ``
	_defaultNumber = 0
	_placeholder = ``
	_handler = null
	_handlerArgs = []
	_store = null
	_storeName = ``
	_page = null
	_pageIfEqual = []
	_pageIfBetween = []
	
	enteredNumber = ``
	
	number(number) {
	
		validateArgs(
			this,
			`number`,
			[`number`],
			arguments,
		)
	
		this._number = number
		this.enteredNumber = number
		return this
	}
	
	defaultNumber(number) {
		
		validateArgs(
			this,
			`defaultNumber`,
			[`number`],
			arguments,
		)
		
		this._defaultNumber = number
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
	
	pageIfEqual(number, page) {
		
		validateArgs(
			this,
			`pageIfEqual`,
			[`number`, `Page`],
			arguments,
		)
		
		this._pageIfEqual.push([number, page])
		return this
	}
	
	pageIfBetween(lowNumber, highNumber, page) {
		
		validateArgs(
			this,
			`pageIfBetween`,
			[`number`, `number`, `Page`],
			arguments,
		)
		
		this._pageIfBetween.push([lowNumber, highNumber, page])
		return this
	}
	
	pageIfLower(number, page) {
		
		validateArgs(
			this,
			`pageIfLower`,
			[`number`, `Page`],
			arguments,
		)
		 
		this._pageIfBetween.push([-Infinity, number, page])
		return this
	}
	
	pageIfHigher(number, page) {
		
		validateArgs(
			this,
			`pageIfHigher`,
			[`number`, `Page`],
			arguments,
		)
		
		this._pageIfBetween.push([number, Infinity, page])
		return this
	}
	
	onAfter(a, p) {
		
		const number = (
			this.enteredNumber == `` || isNaN(this.enteredNumber) ?
			this._defaultNumber :
			this.enteredNumber
		)
		
		if(this._store){
			this._store[this._storeName] = number
		}
		
		if(this._handler){
			this._handler(number, ...this._handlerArgs)
		}
		
	}
	
	createAfterDirections() {
		
		const enteredNumber = (
			this.enteredNumber == `` || isNaN(this.enteredNumber) ?
			this._defaultNumber :
			this.enteredNumber
		)
		
		const afterDirections = []
		
		afterDirections.push(...this._pageIfEqual.map(
			([number, Page]) => Direction
				.page(Page)
				.when(enteredNumber == number)
				.text(`enteredNumber == ${number}`)
		))
		
		afterDirections.push(...this._pageIfBetween.map(
			([minNumber, maxNumber, Page]) => Direction
				.page(Page)
				.when(minNumber < enteredNumber && enteredNumber < maxNumber)
				.text(`${minNumber} < enteredNumber < ${maxNumber}`)
		))
		
		if(this._page){
			
			afterDirections.push(
				Direction
					.page(this._page)
					.when(true)
					.text(`Any number`)
			)
			
		}
		
		return afterDirections
		
	}
	
	createElement(){
		
		const enterNumberElement = document.createElement(`div`)
		enterNumberElement.classList.add(`enterNumber`)
		
		enterNumberElement.style.display = 'block'
		enterNumberElement.style.height = '100%'
		enterNumberElement.style.width = "100%"
		enterNumberElement.style.boxSizing = 'border-box'
		
		const inputElement = document.createElement('input')
		inputElement.type = `text`
		inputElement.style.display = 'block'
		inputElement.style.width = '100%'
		inputElement.style.height = '100%'
		inputElement.style.boxSizing = 'border-box'
		inputElement.inputMode = `decimal`
		
		inputElement.addEventListener('keyup', (event) => {
			
			if (event.key == 'Enter') {
				enterNumberElement.dispatchEvent(new CustomEvent('moveon', {
					bubbles: true,
				}))
				return
			}
			
		})
		
		inputElement.addEventListener('input', (event) => {
			
			// Remove all invalid characters.
			inputElement.value = inputElement.value.replaceAll(
				/[^-0123456789,.]/g,
				``,
			)
			
			// If there are more than two dots/commas, only keep the first one.
			inputElement.value = inputElement.value.replaceAll(
				/([.,].*?)[.,].*/g,
				'$1',
			)
			
			// If it starts with a dot, remove it.
			if([`.`, `,`].includes(inputElement.value[0])){
				inputElement.value = inputElement.value.substring(1)
			}
			
			this.enteredNumber = parseFloat(inputElement.value)
			
		})
		
		enterNumberElement.appendChild(inputElement)
		
		// Fix HTML.
		inputElement.value = this._number
		inputElement.placeholder = this._placeholder
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			enterNumberElement,
		)
		
		return enterNumberElement
		
	}
	
}