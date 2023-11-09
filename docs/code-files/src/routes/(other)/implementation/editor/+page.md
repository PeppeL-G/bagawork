# @bagawork/editor
On this page you find the documentation for the npm package `@bagawork/editor` ([link to npm](https://www.npmjs.com/package/@bagawork/editor)).



## Introduction
The npm package `@bagawork/editor` is a library implementing our :online-editor. A *project* in the Editor is a JS object that contains all information the Editor needs to know about the Bagawork app implemented in it. 

* `@bagawork/editor/src/components/LoadEditor.svelte` is a Svelte component one can use to show our :online-editor
* `@bagawork/editor/src/functions/compressor.js` exports two functions:
	* `getCompressedProject(project)` to get a project created in the Editor as a compressed string (project → [JSON](https://tc39.es/ecma262/#sec-json.stringify) → [pako](https://www.npmjs.com/package/pako) → [Base64](https://www.npmjs.com/package/js-base64)) known as the *Baga* format
	* `getDecompressedProject(compressedProjectString)` to decompress a project compressed with the previous function (Base64 → pako → JSON → project)
* `@bagawork/editor/src/functions/project-to-app-creator.js` exports one function:
	* `projectToAppCreator(project)` to get a `createApp()` function from a project



## Quick start
1. `npm install @bagawork/editor`
2. In a Svelte component, to show the `LoadEditor` component:
	```html
	<script>
		import LoadEditor from '@bagawork/editor/components/LoadEditor.svelte'
		
		const mainMenuOptions = [{
			text: "Text option 1",
			onClick(bagaCode){ alert("Click on text option 1") },
		}, {
			text: "Text option 2",
			onClick(bagaCode){ alert("Click on text option 2") },
		}, /* ... */]
		
	</script>
	
	<div class="editor">
		<LoadEditor
			{mainMenuOptions}
		/>
	</div>
	
	<style>
		
		.editor{
			width: 500px;
			height: 500px;
		}
		
	</style>
	```
3. The `LoadEditor` itself will check if the hash part of the current URL contains a project that has been compressed using `getCompressedProject(project)` (i.e. a project in Baga format), and if so decompress and show that project in the Editor
