import {Component} from '../Component.js'
import { Direction } from '../index.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { throwArgError, validateArgs } from '../functions/validate-args.js'
import { bbcodeToHtml } from '../functions/bbcode-to-html.js'

export class ButtonComponent extends Component{
	
	_specificTypeName = `Button`
	
	wasClicked = false
	
	_text = ``
	_onClickFunction = null
	_onClickArguments = []
	_page = null
	_stay = false
	_useBBCode = false
	
	constructor(){
		super()
		this.backgroundColor(`#e7e7e7`)
		this.border(0.6, `black`)
		this.cornerRadius(4)
		this.padding(1.5, `tb`).padding(3, `lr`)
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
	
	onClick(onClickFunction, ...onClickArguments) {
		
		const args = (
			arguments.length == 0 ?
			[] :
			[onClickFunction]
		)
		
		validateArgs(
			this,
			`onClick`,
			[`Function`],
			args,
		)
		
		this._onClickFunction = onClickFunction
		this._onClickArguments = onClickArguments
		
		return this
		
	}
	
	page(page) {
		
		if(this._stay){
			
			throwArgError(
				this,
				`page`,
				`page() is called after stay() has been called. Only one of these may be called on the same Button instance.`
			)
			
		}
		
		validateArgs(
			this,
			`page`,
			[`Page`],
			arguments,
		)
		
		this._page = page
		return this
	}
	
	stay(){
		
		if(this._page){
			
			throwArgError(
				this,
				`stay`,
				`stay() is called after page() has been called. Only one of these may be called on the same Button instance.`
			)
			
		}
		
		validateArgs(
			this,
			`stay`,
			[],
			arguments,
		)
		
		this._stay = true
		return this
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
	
	createElement(frameworkApp, parentComponent){
		
		const buttonElement = document.createElement(`button`)
		buttonElement.classList.add('button')
		
		buttonElement.style.backgroundColor = `#2222220d`
		buttonElement.style.fontWeight = `500`
		buttonElement.style.font = `inherit` // To make the button inherit font() from ancestors.
		
		buttonElement.addEventListener(
			'click',
			() => {
				
				if(this._onClickFunction){
					
					try{
						this._onClickFunction(
							...this._onClickArguments,
						)
					}catch(error){
						
						frameworkApp.runtimeSettings.onError(
							`Error in the method ${this._onClickFunction.name}() passed to Button.onClick(): ${error.toString()}`
						)
						return
						
					}
					
				}
				
				if(!this._stay){
					
					this.wasClicked = true
					
					buttonElement.dispatchEvent(new CustomEvent('moveon', {
						bubbles: true,
					}))
					
				}
				
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