<script>
	import Mermaid from '$lib/Mermaid.svelte'
</script>

# @bagawork/core
On this page you find the documentation for the npm package `@bagawork/core` ([link to npm](https://www.npmjs.com/package/@bagawork/core)).




## Introduction
The npm package `@bagawork/core` implements different classes you can use when building your own Bagawork app. Checkout the [Documentation](/documentation) pages to learn how to use those classes.





## Quick start
1. `npm install @bagawork/core`
2. 
	```js
	import {
		App,
		Button,
		createPageCreator, 
		Page,
		Text,
	} from '@bagawork/core'

	export function createApp({a, p}){
		
		class MyApp extends App{
			createStartPage(){
				return StartPage
			}
		}
		
		const StartPage = createPageCreator(`StartPage`, class extends Page{
			createGui(){
				return Button.text(`View greeting`).page(GreetingPage)
			}
		})
		
		const GreetingPage = createPageCreator(`GreetingPage`, class extends Page{
			createGui(){
				return Text.text(`Hello, world!`)
			}
		})
		
		return {
			App: MyApp,
			Pages: {
				StartPage,
				GreetingPage,
			},
		}
		
	}
	```
3. Use [@bagawork/web-components](/implementation/web-components) to display your Bagawork app on an HTML webpage




## Implementation details
A Bagawork app is implemented as a function (referred to as the `createApp()` function) that returns the `App` class that should be used, together with all the `Pages` that are used. The reason for this design is so that the `App` and `Page` classes can have access to the Bagawork variables `a` and `p`. For an example, see the *Quick start* code above.





### `createApp(environment)`
When the app should be created, the framework will call the `createApp()` function and pass it an environment, which is a plain JS object with the following properties:

* `a` is a reference to the `App` instance
* `p` is a reference to the currently shown `Page` instance

<Mermaid>
sequenceDiagram
	participant Framework
	participant createApp(environment)
	Framework->>Framework: Creates environment
	Framework->>createApp(environment): createApp(environment)
	createApp(environment)->>createApp(environment): Creates App and all Page classes
	createApp(environment)->>Framework: Returns App
</Mermaid>

Setting up the environment for `createApp()` is not straight forward, since the `p` property needs to be updated to contain the current page in the app. To make that happen, the environment is actually implemented as a JS proxy that intercepts property access and send back the correct value, but to the one implementing the `createApp()` function it can be seen as a JS object that always contains up-to-date values.





### FrameworkApp & FrameworkPage VS App & Page
To hide framework implementation details as much as possible from the ones implementing Bagawork apps, `App` and `Page` contains no framework logic:

* The logic for `App` is implemented in `FrameworkApp` (it has access to the `App` that should be used, and an instance of it)
* The logic for `Page` is implemented in `FrameworkPage` (it has a access to the currently shown `Page`, and an instance of it)

Bagawork then uses `FrameworkApp` and `FrameworkPage`, and they in turn use the provided `App` and `Page` classes when they need to get some info from them. 

<Mermaid>
flowchart LR
	Framework -- Uses --> FrameworkApp -- Uses --> App
	Framework -- Uses --> FrameworkPage -- Uses --> Page
</Mermaid>

`FrameworkApp` and `FrameworkPage` also have access to each other.




### Starting the app
To run your app, pass your `createApp()` function to a new `FrameworkApp` instance:

```js
const runtimeSettings = {}
const frameworkApp = new FrameworkApp(createApp, runtimeSettings)
```

You can read more about the runtime settings you can use further down on this page.

It is also possible to pass a string that contains JS code that evaluates to the `createApp()` function instead of passing it the `createApp()` function directly.

Then simply call `frameworkApp.start()` to make the machinery start! The figure below shows the order methods are invoked when starting the app for the first time.

<Mermaid>
sequenceDiagram
	participant FrameworkApp
	participant App
	participant FrameworkPage
	participant Page
	FrameworkApp->>App: onBefore()
	FrameworkApp->>App: createStartPage()
	App->>Page: Creates
	App->>FrameworkApp: startPage
	FrameworkApp->>FrameworkApp: loadPage(startPage)
	Note over FrameworkApp: Start loadPage(page)
	FrameworkApp->>FrameworkPage: Create page
	FrameworkPage->>Page: createBeforeDirections()
	FrameworkApp->>FrameworkPage: getFirstTrueBeforeDirection()
	FrameworkPage->>FrameworkApp: null or direction
	alt Got direction
		FrameworkApp->>FrameworkApp: loadPage(direction.getPage())
		FrameworkApp->>FrameworkApp: return
	end
	FrameworkApp->>FrameworkPage: runOnBefore()
	FrameworkPage->>Page: onBefore()
	FrameworkApp->>FrameworkPage: initializeTheRest()
	FrameworkPage->>Page: page.createGui(), ...
	Note over FrameworkApp: End loadPage(page)
	FrameworkApp->>FrameworkApp: Wait until someone calls moveOn()
	Note over FrameworkApp: Start moveOn()
	FrameworkApp->>FrameworkPage: runOnAfter
	FrameworkPage->>Page: onAfter
	FrameworkApp->>FrameworkPage: getFirstTrueAfterDirection()
	alt Got direction
		FrameworkApp->>FrameworkApp: loadPage(direction.getPage())
	else Get no direction
		FrameworkApp->>FrameworkApp: loadPage(currentPage)
	end
	Note over FrameworkApp: End moveOn()
</Mermaid>





### Runtime settings

#### Saving and restoring the state
Each time the app changes which page to show to the user, the app's internal state (app variables, page variables, etc.) might have been changed. If you want the user to be able to close the app and later start it again with the same state as it had as when the user closed the app, you need to store the state the app had when it was closed, and then start the app with that stored state.

Set `runtimeSettings.onStateChange` to `(newState) => localStorage['state'] = JSON.stringify(newState)` to listen for when the app changes page and store the new state of the app in JSON format in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Set `runtimeSettings.state` to `JSON.parse(localStorage['state'] ?? '""') || null` to start the app with the state (potentially) stored in `localStorage`.




#### Dealing with updates
If a state has been stored, and the app then starts with that state running in a new version of the app, an update in the app needs to happen (the `onUpdate()` methods in the app needs to be called, etc.).

Set `runtimeSettings.version` to the current version of the app, and the framework will perform the update (call the `onUpdate` methods in the app, etc.) if this version is higher than the version of the app stored in the state.




#### Listening for errors
Set `runtimeSettings.onError` to `(errorMessage) => console.log(errorMessage)` to listen for when the code in the app crashes. When a crash occurs, the app will also display the error message on the screen. 



#### Previewing
Set `runtimeSettings.isPreview` to `true` for `Page.onBeforeDirections()` not take effect (will probably only be used by the editor).



#### Debugging
Set `runtimeSettings.okToContinue` to `` async (nextToExecute = `Step description`, continuesImmediately=false) => Promise.resolve() `` to make the app run in debug mode. This way, the function you provide will be called each time the app runs a step (described by `nextToExecute`), and your function should return back a promise that should be resolved when it's time to run that step.

Some things the debugger can't wait for (like when the user call her own App/Page function (since those aren't async)), and for those steps, `continuesImmediately` will be `true`, and the promise you return back won't be used, but the current step will be executed immediately. 