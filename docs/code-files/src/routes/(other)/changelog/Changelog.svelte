<script>
	import { changelogEntries } from 'data/changelog-entries.js'
</script>

{#each changelogEntries as entry}
	
	<h2>{entry.version} - {entry.date}</h2>
	
	<ul>
		{#each entry.changes as change}
			<li>{change}</li>
		{/each}
	</ul>
	
{/each}