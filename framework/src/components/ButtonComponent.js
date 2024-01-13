import {Component} from '../Component.js'
import { Direction } from '../classes/Direction.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

export class ButtonComponent extends Component{
	
	wasClicked = false
	
	_text = ``
	_handler = null
	_handlerArgs = []
	_page = null
	
	constructor(){
		super()
		this.backgroundColor(`#e7e7e7`)
		this.border(0.5, `black`)
		this.cornerRadius(2)
		this.padding(1, `tb`).padding(2, `lr`)
	}
	
	text(text){
		this._text = text
		return this
	}
	
	handler(handler, ...handlerArgs) {
		this._handler = handler
		this._handlerArgs = handlerArgs
		return this
	}
	
	page(page) {
		this._page = page
		return this
	}
	
	onAfter(a, p){
		
		if(this.wasClicked && this._handler){
			this._handler(...this._handlerArgs)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this._page){
			
			afterDirections.push(
				new Direction(
					this._page,
					this.wasClicked,
					this._text,
				)
			)
			
		}
		
		return afterDirections
		
	}
	
	createElement(){
		
		const buttonElement = document.createElement(`button`)
		buttonElement.classList.add('button')
		
		buttonElement.style.display = 'block'
		buttonElement.style.height = '100%'
		buttonElement.style.width = "100%"
		
		buttonElement.style.backgroundColor = `#2222220d`
		buttonElement.style.fontWeight = `500`
		
		buttonElement.addEventListener(
			'click',
			() => {
				this.wasClicked = true
				buttonElement.dispatchEvent(new CustomEvent('moveon', {
					bubbles: true,
				}))
			},
		)
		
		// Fix HTML.
		buttonElement.innerText = this._text
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			buttonElement,
		)
		
		return buttonElement
		
	}
	
}