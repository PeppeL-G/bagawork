import { Component } from '../Component.js'
import { getSpecificTypeName, validateArgs } from '../functions/validate-args.js'

const updatersByName = {}

export function runUpdater(theName){
	
	// TODO: If no updater with the given name exist, error!
	updatersByName[theName]?.()
	
}

export class UpdaterComponent extends Component {
	
	_specificTypeName = `Updater`
	
	_childCreator = () => null
	_intervalInMs = -1
	_intervalId = -1
	_name = ``
	
	_child = null
	
	_parent = null
	
	childCreator(theChildCreator) {
		
		validateArgs(
			this,
			`childCreator`,
			[`Function`],
			arguments,
		)
		
		this._childCreator = theChildCreator
		return this
		
	}
	
	interval(intervalInMs) {
		
		validateArgs(
			this,
			`interval`,
			[`number`],
			arguments,
		)
		
		this._intervalInMs = intervalInMs
		return this
		
	}
	
	name(theName){
		
		this._name = theName
		return this
		
	}
	
	onAfter(a, p) {
		clearInterval(this._intervalId)
		delete updatersByName[this._name]
		this._child?.onAfter?.(a, p)
	}
	
	createBeforeDirections() {
		return this._child?.createBeforeDirections?.() ?? []
	}
	
	createAfterDirections(frameworkApp) {
		return this._child?.createAfterDirections?.(frameworkApp) ?? []
	}
	
	createChild(frameworkApp){
		
		try{
			this._child = this._childCreator()
		}catch(error){
			
			let updaterName = `an Updater with no name`
			
			if(this._intervalInMs){
				updaterName = `an Updater with the interval ${this._intervalInMs}ms`
			}
			
			if(this._name){
				updaterName = `an updater with the name "${this._name}"`
			}
			
			frameworkApp.runtimeSettings.onError(
				`Error occurred in the function passed to childCreator() ("${this._childCreator.name}()") called by ${updaterName}: ${error}.`,
			)
			
			return
			
		}
		
		
		// Validate the type of the child.
		const childExpectedGeneralTypeName = (
			[`Paper`, `PaperGroup`].includes(this._parent._specificTypeName) ?
			`PaperFigure` :
			`Component`
		)
		
		if(this._child?._generalTypeName != childExpectedGeneralTypeName){
			
			frameworkApp.runtimeSettings.onError(
				`On Updater you called childCreator() and passed it a method, but the method you passed it returned a value of wrong type. This Updater component is used as a child in a ${this._parent._specificTypeName} component, so the method you pass it must return a ${childExpectedGeneralTypeName}, but it did return a ${getSpecificTypeName(this._child)}.`,
			)
			
			return
			
		}
		
		// Copy over all child properties to this updater,
		// so layouts that need to access child properties
		// can access it as if this Updater is the child.
		this._size = this._child._size
		this._keepIf = this._child._keepIf
		
		return this._child
		
	}
	
	createElement(frameworkApp, parent, onUpdated){
		
		let childElement = null
		this._parent = parent
		
		const updateChild = () => {
			
			this._child = this.createChild(frameworkApp)
			
			if(frameworkApp.errorMessage){
				
				// Dummy value to be sent back. Doesn't matter which,
				// because the app will log an error message.
				childElement = document.createElement(`div`)
				return
				
			}
			
			const newChildElement = this._child.createElement(
				frameworkApp,
				parent,
				onUpdated,
			)
			
			if (childElement){
				childElement.parentNode.replaceChild(newChildElement, childElement)
			}
			
			childElement = newChildElement
			
			onUpdated?.()
			
		}
		
		updateChild()
		
		if(this._name){
			updatersByName[this._name] = updateChild
		}
		
		if(this._intervalInMs != -1 && !frameworkApp.runtimeSettings.isPreview){
			
			this._intervalId = setInterval(updateChild, this._intervalInMs)
			
			frameworkApp.frameworkPage.currentlyRunningIntervalIds.push(
				this._intervalId,
			)
			
		}
		
		return childElement
		
	}
	
}