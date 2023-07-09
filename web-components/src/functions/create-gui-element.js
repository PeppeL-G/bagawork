// Import components.
import { ButtonComponent } from '@bagawork/core/src/components/ButtonComponent.js'
import { TextComponent } from '@bagawork/core/src/components/TextComponent.js'
import { ColumnsComponent } from '@bagawork/core/src/components/ColumnsComponent.js'
import { RowsComponent } from '@bagawork/core/src/components/RowsComponent.js'
import { SpaceComponent } from '@bagawork/core/src/components/SpaceComponent.js'

// Import elements.
import ButtonElement from '../elements/components/ButtonElement.js'
import TextElement from '../elements/components/TextElement.js'
import ColumnsElement from '../elements/components/ColumnsElement.js'
import RowsElement from '../elements/components/RowsElement.js'
import SpaceElement from '../elements/components/SpaceElement.js'

export function createGuiElement(guiComponent){
	
	if(guiComponent instanceof ButtonComponent){
		return new ButtonElement()
	}else if(guiComponent instanceof TextComponent){
		return new TextElement()
	}else if(guiComponent instanceof ColumnsComponent){
		return new ColumnsElement()
	}else if(guiComponent instanceof RowsComponent){
		return new RowsElement()
	}else if(guiComponent instanceof SpaceComponent){
		return new SpaceElement()
	}else{
		// This should never happen if implemented correctly.
		console.error(`createGuiElement(): No GUI element exists for the GUI component`, guiComponent)
	}
	
}