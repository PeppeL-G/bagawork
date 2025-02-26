<script>
	import Mermaid from '$lib/Mermaid.svelte'
</script>

# @bagawork/framework
On this page you find the documentation for the npm package `@bagawork/framework` ([link to npm](https://www.npmjs.com/package/@bagawork/framework)).




## Introduction
The npm package `@bagawork/framework` contains the various framework classes, components and functions that is needed to run a BagaWork app. Checkout the [Documentation](/documentation) pages to learn how most of these works. That page does mostly contain the documentation for the public things in the package, and this page contains the documentation for the rest.





## Quick start
The easiest way to create a BagaWork app is by creating it in our :online-editor, and then to run it yourself you obtain the BagaCode for it, and then pass it as the first argument to `showAppInElement()` below (instead of the `createApp` function), but to show that you can create your own BagaWork app without our editor, the code below contains an example of that.

1. `npm install @bagawork/framework`
2. 
	```js
	import {
		App,
		Button,
		createPageCreator, 
		Page,
		Text,
		// And everything else you want to use...
	} from '@bagawork/framework'

	export function createApp({a, p, log, setTimeout, setInterval}){
		
		class MyApp extends App{
			createStartPage(){
				return StartPage
			}
		}
		
		// Pages can't be created as documented on this website.
		// They have to be created as shown below. But the editor
		// rewrites it to this for you, so for people creating
		// apps through the editor don't need to do it this
		// complicated way.
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
3. 
	```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>My App</title>
		<style>
			
			/* Make the body element cover the entire screen. */
			html, body{
				width: 100%;
				height: 100%;
				margin: 0;
				padding: 0;
			}
			
		</style>
		<script type="module">
			
			// The file exporting your createApp() function, or
			// write the createApp() function directly in this
			// <script> element.
			import { createApp } from './create-app.js'
			
			// Can't import showAppInElement() from the package
			// directly in a web browser like this, but you get
			// the idea.
			import { showAppInElement } from '@bagawork/framework'
			
			document.addEventListener('DOMContentLoaded', async function(){
				
				const screenElement = document.body
				
				// Read more about runtimeSettings further down.
				const runtimeSettings = {}
				
				const stopApp = await showAppInElement(
					createApp,
					screenElement,
					runtimeSettings,
				)
				
				// stopApp is a function you should call when you
				// want everything in the app (such as updaters) to
				// stop running. This is only needed when your app
				// should run a shorter amount of time then the
				// page showing it.
				
			})
			
		</script>
	</head>
	<body>
	</body>
	</html>
	```

A BagaWork app is expected to run in an element with the same size as the entire webpage. The reason for this is because it internally uses the `vw` unit, and that one only works as expected if the BagaWork app has the same size on the screen as the webpage itself. If you want to have a BagaWork app running on a small part of a webpage, then run the BagaWork app in an `<iframe>`.


### Runtime settings

#### Saving and restoring the state
Each time the app changes which page to show to the user, the app's internal state (app variables, page variables, etc.) might have been changed. If you want the user to be able to close the app and later start it again with the same state as it had as when the user closed the app, you need to store the state the app had when it was closed, and then start the app with that stored state.

Set `runtimeSettings.onStateChange` to `(newState) => localStorage['state'] = JSON.stringify(newState)` to listen for when the app changes page and store the new state of the app in JSON format in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Set `runtimeSettings.state` to `JSON.parse(localStorage['state'] ?? '""') || null` to start the app with the state (potentially) stored in `localStorage`.



#### Obtaining the app icon
Set `runtimeSettings.onIconCreated` to a function to obtain the icon created by `App.createIcon()`. You will be passed the icon as a string containing SVG code. This function will be called directly when the app starts (and nothing goes wrong).



#### Dealing with updates
If a state has been stored, and the app then starts with that state running in a new version of the app, an update in the app needs to happen (the `onUpdate()` methods in the app needs to be called, etc.).

Set `runtimeSettings.version` to the current version of the app, and the framework will perform the update (call the `onUpdate` methods in the app, etc.) if this version is higher than the version of the app stored in the `state`.




#### Listening for errors
Set `runtimeSettings.onError` to `(errorMessage) => console.log(errorMessage)` to listen for when the code in the app crashes. When an error occurs, the app will also display the error message on the screen and stop running the app, and also give the user the option to restart the app from scratch (with no state), or try resume running the app by loading another page.



#### Previewing
Set `runtimeSettings.isPreview` to `true` for:

* `Page.onBeforeDirections()` not to take effect
* Updaters with intervals to not run
* The speaker to not play anything
* Etc.

Most likely, it's only the previewing of pages in the editor that will use this option.



#### Logging
Set `runtimeSettings.onLog` to `(type, value) => console.log(type, value)` to make the app log messages. ``type = `framework` `` means that it's the framework that logged the message, and ``type = `user` `` means that the app creator logged the message by calling the :docs[log] function.



## Implementation details
A BagaWork app is implemented as a function (referred to as the `createApp()` function) that returns the `App` class that should be used, together with all the `Pages` that are used. The reason for this design is so that the `App` and `Page` classes can have access to the BagaWork variables `a` and `p`. For an example, see the *Quick start* code above.





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

Setting up the environment for `createApp()` is not straight forward, since the `p` property needs to be updated to contain the current page in the app. To make that happen, the environment is actually implemented as a JS proxy that intercepts property access and sends back the correct value, but to the one implementing the `createApp()` function it can be seen as a JS object that always contains up-to-date values.





### FrameworkApp & FrameworkPage VS App & Page
To hide framework implementation details as much as possible from the ones implementing BagaWork apps, `App` and `Page` contains no framework logic:

* The logic for `App` is implemented in `FrameworkApp` (`FrameworkApp` has access to the `App` that should be used, and an instance of it)
* The logic for `Page` is implemented in `FrameworkPage` (`FrameworkPage` has access to the currently shown `Page`, and an instance of it)

BagaWork then uses `FrameworkApp` and `FrameworkPage`, and they in turn use the provided `App` and `Page` classes when they need to get some info from them. 

<Mermaid>
flowchart LR
	Framework -- Uses --> FrameworkApp -- Uses --> App
	Framework -- Uses --> FrameworkPage -- Uses --> Page
</Mermaid>

`FrameworkApp` and `FrameworkPage` also have access to each other, and `FrameworkApp` acts as the main entry point.



## Using `FrameworkApp` as a context
`FrameworkApp` does contain "the logic for the app" (as one can expect), but it also serves as a context that contains "global" information. Instead of giving other classes the small amount of extra information they actually need, they are given a reference to the `FrameworkApp` instance, so they can obtain whichever information they want from it themselves.

An example of this are GUI components. Some of them need to use `frameworkApp.runtimeSettings.isPreview` to know if they should function the real way, or only in a preview way. But instead of giving the components only the value in `runtimeSettings.isPreview`, they receive the entire `frameworkApp` object.

This architecture makes the code structure easier to understand; you can always access any information you need from the `frameworkApp` object you have access to, no matter where you are in the code (kind of).




### Starting the app
To run your app, pass your `createApp()` function to a new `FrameworkApp` instance:

```js
const runtimeSettings = {}
const frameworkApp = new FrameworkApp(createApp, runtimeSettings)
```

It is also possible to pass a string that contains the BagaCode for the app created through our editor as the `createApp()` function.

Then simply call `frameworkApp.createElement()` to obtain an HTML element you can use to display the app, and after that, the app will run on its own!

The figure below shows the order methods are invoked when starting the app for the first time.

<Mermaid>
sequenceDiagram
	participant FrameworkApp
	participant App
	participant FrameworkPage
	participant Page
	FrameworkApp->>App: createIcon()
	FrameworkApp->>App: onStart()
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