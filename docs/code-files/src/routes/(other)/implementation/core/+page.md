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
		Page,
		Text,
	} from '@bagawork/core'

	export function createApp({a, p}){
		
		class MyApp extends App{
			createStartPage(){
				return StartPage
			}
		}
		
		class StartPage extends Page{
			createGui(){
				return Text.text(`Hello, world`)
			}
		}
		
		return MyApp
		
	}
	```
3. Use [@bagawork/web-components](/implementation/web-components) to display your Bagawork app on an HTML webpage




## Implementation details
A Bagawork app is implemented as a function (referred to as the `createApp()` function) that returns the `App` class that should be used. The reason for this design is so that the `App` and `Page` classes can have access to the `a` and `p` "variables". For an example, see the *Quick start* code above.





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

Setting up the environment for `createApp()` is not straight forward, since the `p` property needs to be updated to contain the current page in the app. To make that happen, the environment is actually implemented as a JS proxy that intercepts property access and send back the correct value, but to the one implementing the `createApp()` function, it can be seen as a JS object that always contains up-to-date values.





### `createFrameworkApp()`
Since implementing the environment for `createApp()` is not straightforward, the helper function `createFrameworkApp(createApp)` exists that creates such an environment and pass it to `createApp(environment)` to create the `App` class. `createFrameworkApp(createApp)` will then return a `FrameworkApp` instance that contains a reference to the `App` instance.

<Mermaid>
sequenceDiagram
	participant Framework
	participant createFrameworkApp(createApp)
	participant createApp(environment)
	Framework->>createFrameworkApp(createApp): createFrameworkApp(createApp)
	createFrameworkApp(createApp)->>createFrameworkApp(createApp): Create environment
	createFrameworkApp(createApp)->>createApp(environment): createApp(environment)
	createApp(environment)->>createApp(environment): Create App and Pages
	createApp(environment)->>createFrameworkApp(createApp): Return App
	createFrameworkApp(createApp)->>createFrameworkApp(createApp): Create FrameworkApp
	createFrameworkApp(createApp)->>createFrameworkApp(createApp): frameworkApp.start()
	createFrameworkApp(createApp)->>Framework: Return frameworkApp
</Mermaid>





### App & Page VS FrameworkApp & FrameworkPage
To hide implementation details from the ones implementing Bagawork apps, `App` and `Page` contains as little logic as possible:

* Most of the logic for `App` is implemented in `FrameworkApp` (it has access to the `App` instance)
* Most of the logic for `Page` is implemented in `FrameworkPage` (it has a access to the currently shown `Page` instance)

Bagawork then uses the framework versions of these classes, and they in turn use the plain versions when needed. 

<Mermaid>
flowchart LR
	Framework -- Uses --> FrameworkApp -- Uses --> App
	Framework -- Uses --> FrameworkPage -- Uses --> Page
</Mermaid>

`FrameworkApp` and `FrameworkPage` also have access to each other.


### Runtime settings
When calling `createFrameworkApp()`, you can pass it a JS object containing runtime settings. It does by default contain the following options:

```js
const defaultRuntimeSettings = {
	isPreview: false, // If set to true, then onBeforeDirections won't take effect when showing the app, etc. This should in most cases only be true in the Editor.
}
```



### Starting the app
The figure below shows the order methods are invoked when starting and running the app for the first time.

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
		FrameworkApp->>FrameworkApp: loadPage(direction.createPage())
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
		FrameworkApp->>FrameworkApp: loadPage(direction.createPage())
	else Get no direction
		FrameworkApp->>FrameworkApp: loadPage(currentPage)
	end
	Note over FrameworkApp: End moveOn()
</Mermaid>