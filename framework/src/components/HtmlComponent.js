import {Component} from '../Component.js'
import { validateArgs } from '../functions/validate-args.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

export class HtmlComponent extends Component{
	
	_specificTypeName = `Html`
	
	_initializer = null
	
	initializer(theInitializer){
		
		validateArgs(
			this,
			`initializer`,
			[`Function`],
			arguments,
		)
		
		this._initializer = theInitializer
		
		return this
		
	}
	
	createElement(frameworkApp, parentComponent){
		
		if(!this._initializer){
			
			throw `Error in Html component: the configuration method initializer() has never been called.`
			
		}
		
		let htmlElement = document.createElement(`div`)
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			htmlElement,
		)
		
		// Delay calling the initializer until the HTML
		// element has been inserted into the DOM.
		setTimeout(() => {
			
			try{
				this._initializer(htmlElement)
			}catch(error){
				frameworkApp.onError(`Error in the element initializer passed to Html.initializer(): ${error}.`)
			}
			
		}, 0)
		
		return htmlElement
		
	}
	
}