# @bagawork/web-components
On this page you find the documentation for the npm package `@bagawork/web-components` ([link to npm](https://www.npmjs.com/package/@bagawork/web-components)).



## Introduction
With the classes from `@bagawork/core` you can specify how your own Bagawork app should work. But to make it work like that (to show the app on the screen, to listen for user input, etc.) on a webpage, you need to use the HTML Web Components implemented in `@bagawork/web-components`.



## Quick start
1. Create the `createApp()` function as described in the documentation for [@bagawork/core](/implementation/core)
1. `npm install @bagawork/web-components`
2. 
	```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>My App</title>
		<style>
			
			#screen{
				width: 100px;
				height: 300px;
			}
			
		</style>
		<script type="module">
			
			// The file exporting your createApp() function, or write the
			// createApp() function directly in this <script> element.
			import { createApp } from './create-app.js'
			
			// Can't import showAppInElement from the package directly in
			// a web browser like this, but you get the idea.
			import { showAppInElement } from '@bagawork/web-components'
			
			document.addEventListener('DOMContentLoaded', function(){
				
				const screenElement = document.querySelector('#screen')
				
				// Read more about runtimeSettings further down.
				const runtimeSettings = {}
				
				showAppInElement(
					createApp,
					screenElement,
					runtimeSettings,
				)
				
			})
			
		</script>
	</head>
	<body>
		<div id="screen"></div>
	</body>
	</html>
	```

## Runtime settings
The runtime settings you can pass to `showAppInElement()` are the same ones documented on the webpage for [@bagawork/core](../core/).