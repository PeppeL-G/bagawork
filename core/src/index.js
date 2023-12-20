// Fundamental classes
export { App } from './classes/App.js'
export { FrameworkApp } from './classes/FrameworkApp.js'
export { Page } from './classes/Page.js'

// Classes
import { createClassCreator } from './functions/create-class-creator.js'
import { createDirectionCreator } from './functions/create-direction-creator.js'

import { TimeClass } from './classes/Time.js'
export const Time = createClassCreator(TimeClass)
export const Direction = createDirectionCreator()

// Functions
export { createPageCreator } from './functions/create-page-creator.js'

// Components
import { createComponentCreator } from './functions/create-component-creator.js'

import {ButtonComponent} from './components/ButtonComponent.js'
export const Button = createComponentCreator(ButtonComponent)

import { ImageComponent } from './components/ImageComponent.js'
export const Image = createComponentCreator(ImageComponent)

import {TextComponent} from './components/TextComponent.js'
export const Text = createComponentCreator(TextComponent)

import {BoxComponent} from './components/BoxComponent.js'
export const Box = createComponentCreator(BoxComponent)

import {ColumnsComponent} from './components/ColumnsComponent.js'
export const Columns = createComponentCreator(ColumnsComponent)

import { EnterTextComponent } from './components/EnterTextComponent.js'
export const EnterText = createComponentCreator(EnterTextComponent)

import {LayersComponent} from './components/LayersComponent.js'
export const Layers = createComponentCreator(LayersComponent)

import {RowsComponent} from './components/RowsComponent.js'
export const Rows = createComponentCreator(RowsComponent)

import {SpaceComponent} from './components/SpaceComponent.js'
export const Space = createComponentCreator(SpaceComponent)