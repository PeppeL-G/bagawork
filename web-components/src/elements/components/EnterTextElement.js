import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class EnterTextElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.width = "100%"
		this.style.boxSizing = 'border-box'
		
		this.input = document.createElement('input')
		this.input.style.display = 'block'
		this.input.style.width = '100%'
		this.input.style.height = '100%'
		this.input.style.boxSizing = 'border-box'
		this.appendChild(this.input)
		
		this.input.addEventListener('keyup', (event) => {
			if(event.key == 'Enter'){
				this.moveOn()
			}
		})
		this.input.addEventListener('input', (event) => {
			this.enterTextComponent.enteredText = this.input.value
		})
		
	}
	
	setGuiComponent(enterTextComponent, frameworkApp){
		
		this.enterTextComponent = enterTextComponent
		
		// Fix HTML.
		this.input.value = this.enterTextComponent.text
		this.input.placeholder = this.enterTextComponent.placeholder
		
		// Fix CSS.
		applyAttributesToElement(
			this.enterTextComponent,
			this,
		)
		
	}
	
	moveOn(){
		this.dispatchEvent(new CustomEvent('moveon', {
			bubbles: true,
		}))
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-enter-text",
		EnterTextElement,
	)
}