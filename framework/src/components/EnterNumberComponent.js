import {Component} from '../Component.js'
import { Direction } from '../index.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class EnterNumberComponent extends Component{
	
	_specificTypeName = `EnterNumber`
	
	_number = ``
	_defaultNumber = 0
	_placeholder = ``
	_onChangeFunction = null
	_onChangeArguments = []
	_store = null
	_storeName = ``
	_page = null
	_pageIfEqual = []
	_pageIfBetween = []
	_decimals = Infinity
	
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
	
	decimals(numberOfDecimals) {
		
		validateArgs(
			this,
			`decimals`,
			[`number`],
			arguments,
		)
			
		this._decimals = numberOfDecimals
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
		
		this._onChangeFunction?.(
			number,
			...this._onChangeArguments,
		)
		
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
	
	createElement(frameworkApp, parentComponent){
		
		const enterNumberElement = document.createElement(`div`)
		enterNumberElement.classList.add(`enterNumber`)
		
		enterNumberElement.style.display = 'block'
		enterNumberElement.style.height = '100%'
		enterNumberElement.style.width = "100%"
		
		const inputElement = document.createElement('input')
		inputElement.type = `text`
		inputElement.style.display = 'block'
		inputElement.style.width = '100%'
		inputElement.style.height = '100%'
		inputElement.style.boxSizing = 'border-box'
		inputElement.inputMode = `decimal`
		
		inputElement.addEventListener('keyup', (event) => {
			
			if(event.key == 'Enter'){
				
				if(frameworkApp.errorMessage){
					return
				}
				
				enterNumberElement.dispatchEvent(new CustomEvent('moveon', {
					bubbles: true,
				}))
				
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
			
			const decimalCharacter = inputElement.value.match(/[.,]/)?.[0]
			
			// If no decimals are allowed and some exists,
			// remove all after the first decimal,
			// including the decimal characters.
			if (this._decimals <= 0 && decimalCharacter){
				
				inputElement.value = inputElement.value.substring(
					0,
					inputElement.value.indexOf(decimalCharacter),
				)
				
			}
			
			// If decimals are allowed and too many exists,
			// remove the ones at the end.
			if(0 < this._decimals && decimalCharacter){
				
				inputElement.value = inputElement.value.substring(
					0,
					inputElement.value.indexOf(decimalCharacter) + 1 + this._decimals,
				)
				
			}
			
			this.enteredNumber = parseFloat(inputElement.value)
			
			const number = (
				this.enteredNumber == `` || isNaN(this.enteredNumber) ?
					this._defaultNumber :
					this.enteredNumber
			)
			
			if(this._store){
				this._store[this._storeName] = number
			}
			
			if(this._onClickFunction){
					
				try{
					this._onChangeFunction(
						number,
						...this._onChangeArguments,
					)
				}catch(error){
					
					frameworkApp.runtimeSettings.onError(
						`Error in the method ${this._onChangeFunction.name}() passed to EnterNumber.onChange(): ${error.toString()}`
					)
					return
					
				}
				
			}
			
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