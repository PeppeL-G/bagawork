import ButtonElement from '../elements/components/ButtonElement.js'
import TextElement from '../elements/components/TextElement.js'
import BoxElement from '../elements/components/BoxElement.js'
import ColumnsElement from '../elements/components/ColumnsElement.js'
import LayersElement from '../elements/components/LayersElement.js'
import RowsElement from '../elements/components/RowsElement.js'
import SpaceElement from '../elements/components/SpaceElement.js'

export function createGuiElement(guiComponent){
	
	switch (guiComponent.constructor.name) {
		case "ButtonComponent": return new ButtonElement()
		case "TextComponent": return new TextElement()
		case "BoxComponent": return new BoxElement()
		case "ColumnsComponent": return new ColumnsElement()
		case "LayersComponent": return new LayersElement()
		case "RowsComponent": return new RowsElement()
		case "SpaceComponent": return new SpaceElement()
		default:
			// This should never happen if implemented correctly.
			console.error(`createGuiElement(): No GUI element exists for the GUI component`, guiComponent)
	}
	
}