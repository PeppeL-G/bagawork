import { FrameworkApp } from "../classes/FrameworkApp.js"

export function createFrameworkApp(createApp, runtimeSettings) {
	
	// "frameworkApp" is defined further down.
	const environment = {
		a: new Proxy({}, {
			get(target, prop, receiver) {
				return Reflect.get(
					frameworkApp.app,
					prop,
					frameworkApp.app,
				)
			},
			set(target, prop, value, receiver) {
				return Reflect.set(
					frameworkApp.app,
					prop,
					value,
					frameworkApp.app,
				)
			},
		}),
		p: new Proxy({}, {
			get(target, prop, receiver) {
				return Reflect.get(
					frameworkApp.frameworkPage.page,
					prop,
					frameworkApp.frameworkPage.page,
				)
			},
			set(target, prop, value, receiver) {
				return Reflect.set(
					frameworkApp.frameworkPage.page,
					prop,
					value,
					frameworkApp.frameworkPage.page,
				)
			},
		}),
	}
	
	const App = createApp(environment)
	
	const frameworkApp = new FrameworkApp(
		new App(),
		runtimeSettings,
	)
	
	return frameworkApp
	
}