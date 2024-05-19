import {Component} from '../Component.js'
import { Direction } from '../index.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'
import { bbcodeToHtml } from '../functions/bbcode-to-html.js'

export class ButtonComponent extends Component{
	
	wasClicked = false
	
	_text = ``
	_handler = null
	_handlerArgs = []
	_page = null
	_useBBCode = false
	
	constructor(){
		super()
		this.backgroundColor(`#e7e7e7`)
		this.border(0.5, `black`)
		this.cornerRadius(2)
		this.padding(1, `tb`).padding(2, `lr`)
	}
	
	text(text) {
		
		validateArgs(
			this,
			`text`,
			["string"],
			arguments,
		)
		
		this._text = text
		this._useBBCode = false
		return this
	}
	
	textWithBBCode(text) {
		
		validateArgs(
			this,
			`textWithBBCode`,
			["string"],
			arguments,
		)
		
		this._text = text
		this._useBBCode = true
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
	
	onAfter(a, p){
		
		if(this.wasClicked && this._handler){
			this._handler(...this._handlerArgs)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this._page){
			
			afterDirections.push(
				Direction
					.page(this._page)
					.when(this.wasClicked)
					.text(this._text)
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
		if(this._useBBCode){
			buttonElement.innerHTML = bbcodeToHtml(this._text)
		}else{
			buttonElement.innerText = this._text
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			buttonElement,
		)
		
		return buttonElement
		
	}
	
}