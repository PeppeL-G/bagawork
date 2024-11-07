// Fundamental classes
export { App } from './classes/App.js'
export { FrameworkApp } from './classes/FrameworkApp.js'
export { Page } from './classes/Page.js'

// Classes
import { createClassCreator } from './functions/create-class-creator.js'

import { Time as TimeImplementation } from './classes/Time.js'
export const Time = createClassCreator(TimeImplementation)

import { Direction as DirectionImplementation } from './classes/Direction.js'
export const Direction = createClassCreator(DirectionImplementation)

import { Font as FontImplementation } from './classes/Font.js'
export const Font = createClassCreator(FontImplementation)

// Functions
export { createPageCreator } from './functions/create-page-creator.js'
export { showAppInElement } from './functions/show-app-in-element.js'

// Components
import { createComponentCreator } from './functions/create-component-creator.js'

import {ButtonComponent} from './components/ButtonComponent.js'
export const Button = createComponentCreator(ButtonComponent)

//import { ImageComponent } from './components/ImageComponent.js'
//export const Image = createComponentCreator(ImageComponent)

import { HtmlComponent } from './components/HtmlComponent.js'
export const Html = createComponentCreator(HtmlComponent)

import {PaperComponent} from './components/PaperComponent.js'
export const Paper = createComponentCreator(PaperComponent)

import { PaperCircleFigure } from './paper-figures/PaperCircleFigure.js'
export const PaperCircle = createComponentCreator(PaperCircleFigure)

import { PaperLineFigure } from './paper-figures/PaperLineFigure.js'
export const PaperLine = createComponentCreator(PaperLineFigure)

import { PaperRectangleFigure } from './paper-figures/PaperRectangleFigure.js'
export const PaperRectangle = createComponentCreator(PaperRectangleFigure)

import { PaperGroupFigure } from './paper-figures/PaperGroupFigure.js'
export const PaperGroup = createComponentCreator(PaperGroupFigure)

import {TextComponent} from './components/TextComponent.js'
export const Text = createComponentCreator(TextComponent)

import {BoxComponent} from './components/BoxComponent.js'
export const Box = createComponentCreator(BoxComponent)

import {ColumnsComponent} from './components/ColumnsComponent.js'
export const Columns = createComponentCreator(ColumnsComponent)

import { EnterNumberComponent } from './components/EnterNumberComponent.js'
export const EnterNumber = createComponentCreator(EnterNumberComponent)

import { EnterTextComponent } from './components/EnterTextComponent.js'
export const EnterText = createComponentCreator(EnterTextComponent)

import {LayersComponent} from './components/LayersComponent.js'
export const Layers = createComponentCreator(LayersComponent)

import {RowsComponent} from './components/RowsComponent.js'
export const Rows = createComponentCreator(RowsComponent)

import {SpaceComponent} from './components/SpaceComponent.js'
export const Space = createComponentCreator(SpaceComponent)

import {UpdaterComponent} from './components/UpdaterComponent.js'
export const Updater = createComponentCreator(UpdaterComponent)
export {runUpdater} from './components/UpdaterComponent.js'