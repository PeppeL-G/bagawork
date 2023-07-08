<script>
	
	import mermaid from 'mermaid'
	import { onMount } from 'svelte'
	
	onMount(() => {
		mermaid.init()
	})
	
</script>

<div class="mermaid">
	<slot></slot>
</div>