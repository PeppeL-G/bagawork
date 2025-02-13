<script>
	
	export let project
	
	import ViewApp from "@bagawork/editor/src/components/ViewApp.svelte"
	import { getCreateAppCode } from '@bagawork/editor/src/functions/get-create-app-code.js'
	import { browser } from '$app/environment'
	
</script>

<div class="device-wrapper">
	<div class="device">
		<div class="camera">◎︎</div>
		<div class="screen" translate="no">
			{#if browser}
				<ViewApp
					createAppCode={
						getCreateAppCode(
							project.app,
							project.pages,
						)
					}
				/>
			{/if}
		</div>
		<div class="buttons">
			<span>◁</span>
			<span>○︎</span>
			<span>□</span>
		</div>
	</div>
</div>

<style>
	
	.device-wrapper{
		
		text-align: center;
		margin: 0.5em 0;
		
		& .device{
			
			display: inline-block;
			position: relative;
			background-color: rgb(109, 77, 77);
			padding: 1em;
			padding-bottom: 2em;
			border-radius: 1em;
			
			& .camera{
				position: absolute;
				color: white;
				left: 50%;
				top: 0;
				translate: -50% -15%;
				cursor: default;
			}
			
			& .screen {
				display: inline-block;
				width: 200px;
				height: 340px;
				margin: 0 auto;
				overflow: auto;
				resize: both;
			}
			
			& .buttons{
				
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				color: white;
				display: flex;
				padding: 0.5em;
				
				& > span{
					
					flex: 1;
					cursor: default;
					
					&:nth-child(2){
						flex: 0;
					}
					
				}
				
			}
			
		}
		
	}
	
</style>
