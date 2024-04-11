<script>
	
	export let folderId
	
	import EditPageModal from './modals/EditPageModal.svelte'
	import CreatePageModal from './modals/CreatePageModal.svelte'
	import ViewSinglePageFrameworkApp from './ViewSinglePageFrameworkApp.svelte'
	import { getCachedFrameworkApp} from '../functions/get-cached-framework-app.js'
	import { getClassName } from '../functions/get-class-name.js'
	import { editorSettings, app, folders, pages } from '../stores.js'
	
	const directionToLeftExtraY = 50
	
	let showCreatePageModal = false
	let showEditPageModal = false
	let selectedPageId = -1
	
	let createPageMouseX = -1
	let createPageMouseY = -1
	let dragInfo = null
	
	$: folder = $folders.find(f => f.id == folderId) ?? $folders[0]
	$: pagesInFolder = $pages.filter(p => p.folderId == folderId)
	
	$: wrappedPages = getWrappedPages($app, pagesInFolder)
	$: lines = getLines(wrappedPages)
	
	function getWrappedPages(app, pagesInFolder){
		
		return pagesInFolder.map(page => {
			
			const frameworkApp = getCachedFrameworkApp(
				app,
				$pages,
				page,
			)
			
			return {
				page,
				frameworkApp,
			}
			
		})
		
	}
	
	function getLines(wrappedPages){
		
		const lines = []
		
		for(const wrappedStartPage of wrappedPages){
			
			const startFrameworkPage = wrappedStartPage.frameworkApp?.frameworkPage
			
			if(!startFrameworkPage){
				continue
			}
			
			const startX = wrappedStartPage.page.x
			const startY = wrappedStartPage.page.y
			
			const directions = [].concat(
				startFrameworkPage.beforeDirections,
				startFrameworkPage.afterDirections,
			)
			
			for(const direction of directions){
				
				const wrappedEndPage = wrappedPages.find(
					wp => direction.getPage().proxyName == getClassName(wp.page.code)
				)
				
				if(wrappedEndPage){
					
					const endX = wrappedEndPage.page.x
					const endY = wrappedEndPage.page.y
					
					const dx = endX - startX
					const dy = endY - startY
					
					const length = Math.sqrt(
						dx ** 2 +
						dy ** 2
					)
					
					const centerX = startX + dx/2
					
					// If endPage is to right of startPage.
					if(0 <= dx){
						
						const angle = Math.atan2(
							dy,
							dx
						) * 180 / Math.PI
						
						const centerY = startY + dy/2
						
						lines.push({
							length,
							angle,
							centerX,
							centerY,
							text: direction.getDescription(),
							isBack: false,
						})
						
					}else{
						
						const angle = Math.atan2(
							dy,
							dx
						) * 180 / Math.PI + 180
						
						const centerY = startY + dy/2 + directionToLeftExtraY
						
						lines.push({
							length,
							angle,
							centerX,
							centerY,
							text: direction.getDescription(),
							isBack: true,
						})
						
					}
					
				}
				
			}
			
		}
		
		return lines
		
	}
	
	function copyToClipboard(text){
		navigator.clipboard.writeText(text)
	}
	
	function onBackgroundDragStart(event){
		
		dragInfo = {
			action: "moveBackground",
			initialFolderOffsetX: folder.offsetX,
			initialFolderOffsetY: folder.offsetY,
			startMouseX: event.clientX,
			startMouseY: event.clientY
		}
		
		const dragImage = document.createElement("img")
		dragImage.style.display = "none"
		event.dataTransfer.setDragImage(dragImage, 0, 0)
		
	}
	
	function onBackgroundDragOver(event){
		
		switch(dragInfo.action){
			
			case "moveBackground":
				
				const dragDistanceX = event.clientX - dragInfo.startMouseX
				const dragDistanceY = event.clientY - dragInfo.startMouseY
				
				folder.offsetX = dragInfo.initialFolderOffsetX + dragDistanceX
				folder.offsetY = dragInfo.initialFolderOffsetY + dragDistanceY
				$folders = $folders
				
			break
			
		}
		
	}
	
	function onPageDragStart(event, page){
		
		event.stopPropagation() // Don't fire dragStart on the background.
		
		dragInfo = {
			action: "movePage",
			pageId: page.id,
			startMouseX: event.clientX,
			startMouseY: event.clientY
		}
		
	}
	
	function onDrop(event){
		
		switch(dragInfo.action){
			
			case "movePage":
				
				const dragDistanceX = event.clientX - dragInfo.startMouseX
				const dragDistanceY = event.clientY - dragInfo.startMouseY
				
				const page = $pages.find(
					p => p.id == dragInfo.pageId
				)
				
				page.x += dragDistanceX
				page.y += dragDistanceY
				
				$pages = $pages
				
			break
			
		}
		
	}
	
	function onClick(event){
		
		selectedPageId = -1
		showCreatePageModal = true
		createPageMouseX = event.clientX
		createPageMouseY = event.clientY
		
	}
	
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="folder"
	
	on:click={onClick}
	
	draggable="true"
	on:dragstart={onBackgroundDragStart}
	on:dragover|preventDefault={onBackgroundDragOver}
	on:drop|preventDefault={onDrop}
	
	style:background-position-x={`${folder.offsetX}px`}
	style:background-position-y={`${folder.offsetY}px`}
>
	
	<div
		class="pages"
		style:transform={`translate(${folder.offsetX}px, ${folder.offsetY}px)`}
	>
		
		{#each lines as line}
			
			<div
				class="line"
				class:isBack={line.isBack}
				style:width={`${line.length}px`}
				style:transform={
					`translate(${line.centerX}px, ${line.centerY}px) translate(-50%, -50%) rotate(${line.angle}deg)`
				}
			>
				{line.text}
			</div>
			
		{/each}
		
		{#each wrappedPages as {page, frameworkApp} (page.id)}
			
			<div
				class="page-container"
				style:width={`${$editorSettings.folderScreen.widthInMm}mm`}
				style:height={`${$editorSettings.folderScreen.heightInMm}mm`}
				style:transform={
					`translate(${page.x}px, ${page.y}px) translate(-50%, -50%)`
				}
				draggable="true"
				on:dragstart={(e) => onPageDragStart(e, page)}
			>
			
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="name"
					on:click|stopPropagation={() => copyToClipboard(getClassName(page.code))}
				>
					{getClassName(page.code)}
				</div>
				
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="page"
					on:click|stopPropagation={() => { showEditPageModal = true; selectedPageId = page.id }}
				>
					
					<div class="disabled-page">
						<ViewSinglePageFrameworkApp
							{frameworkApp}
						/>
					</div>
					
					<div class="overlay"></div>
					
				</div>
				
			</div>
			
		{/each}
		
	</div>
	
</div>

{#if showEditPageModal}
	<EditPageModal
		bind:showModal={showEditPageModal}
		pageId={selectedPageId}
	/>
{/if}

{#if showCreatePageModal}
	<CreatePageModal
		bind:showModal={showCreatePageModal}
		{folderId}
		createAtX={createPageMouseX - folder.offsetX}
		createAtY={createPageMouseY - folder.offsetY}
	/>
{/if}

<style>

.folder{
	width: 100%;
	height: 100%;
	background-color: silver;
	position: relative;
	background-image: linear-gradient(rgba(0, 0, 0, .1) .1em, transparent .1em), linear-gradient(90deg, rgba(0, 0, 0, .1) .1em, transparent .1em);
	background-size: 2em 2em;
	overflow: hidden;
}

.folder:hover {
	cursor: move;
}

.pages{
	position: relative;
	overflow: visible;
	left: 0;
	top: 0;
	height: 100%;
}

.page-container{
	position: absolute;
	background-color: aqua;
	border: 5px solid black;
	display: grid;
	grid-template-rows: min-content 1fr;
	cursor: grab;
}

.page-container .name{
	background-color: rgba(0, 0, 0, 0.822);
	text-align: center;
	color: white;
	padding: 0.1em;
	cursor: copy;
	position: absolute;
	left: 0;
	right: 0;
	top: -20px;
}

.page-container .page{
	/* This extra element is a flex child,
	so it's own children can be as high as
	it needs to be at the bottom. */
}

.page-container .page .disabled-page{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}

.page-container .page .overlay{
	width: 100%;
	height: 100%;
	position: absolute;
}

.line{
	position: absolute;
	background-color: black;
	color: white;
	text-align: center;
	min-height: 1lh;
}

.isBack{
	color: black;
	background-color: white;
}

</style>