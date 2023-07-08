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
			#appContainer{
				width: 100px;
				height: 300px;
			}
		</style>
		<script type="module">
			
			import { createApp } from './create-app.js' // The file exporting your createApp() function.
			import { showAppInContainer } from '@bagawork/web-components' // Can't load the package like this in a web browser, but you get the idea.
			
			document.addEventListener('DOMContentLoaded', function(){
				
				const appContainer = document.querySelector('#appContainer')
				
				showAppInContainer(
					createApp,
					appContainer,
					// Can pass runtime settings as third argument if you want.
				)
				
			})
			
		</script>
	</head>
	<body>
		<div id="appContainer"></div>
	</body>
	</html>
	```
