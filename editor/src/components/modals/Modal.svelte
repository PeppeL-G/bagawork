<script>
	
	export let showModal
	
	import { createEventDispatcher } from 'svelte'
	
	const dispatch = createEventDispatcher()
	
	function onClick(event){
		if(event.target == event.currentTarget){
			showModal = false
		}
	}
	
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal" on:click|stopPropagation={onClick}>
	<slot />
</div>

<style>

.modal{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(148, 148, 148, 0.9);
	z-index: 100;
	padding: 1em;
	overflow: auto;
}

</style>