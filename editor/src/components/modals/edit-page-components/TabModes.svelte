<script>
	
	export let modes = [{
		name: `Mode Name`,
		explanation: `The explanation...`,
	}]
	export let selectedMode = ``
	export let onSelectedChange = (mode) => null
	
</script>

<div class="tab-modes">
	
	<ul>
		{#each modes as mode}
			<li>
				<button
					on:click={() => onSelectedChange(mode)}
					disabled={mode == selectedMode}
				>
					{mode.name}
				</button>
			</li>
		{/each}
	</ul>
	
	<div>
		{selectedMode.explanation}
	</div>
	
</div>

<style>
	
	.tab-modes{
		text-align: center;
	}
	
	ul{
		list-style-type: none;
		padding: 0;
		margin: 0;
		margin-top: 0.5em;
	}
	
</style>