<script>
	export let project;

	import { projectToAppCreator } from "@bagawork/editor/src/functions/project-to-app-creator.js";
	import { AppElement } from "@bagawork/web-components";
	
	function showApp(appDiv) {
				
		const createApp = projectToAppCreator(project.app, null, project.pages);

		const appElement = new AppElement();
		appDiv.appendChild(appElement);
		appElement.showApp(createApp, { isPreview: false });
	}
</script>

<div use:showApp class="app" />

<style>
	.app {
		width: 200px;
		height: 300px;
		border: 5px solid black;
		margin: 0 auto;
		overflow: auto;
		resize: both;
	}
</style>
