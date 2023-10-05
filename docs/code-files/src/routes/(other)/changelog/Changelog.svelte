<script>
	import { changelogEntries } from 'data/changelog-entries.js'
	
	const entries = changelogEntries.filter(
		e => 0 < e.changes.length,
	)
	
</script>

{#each entries as entry}
	
	<h2>{entry.version} - {entry.date}</h2>
	
	<ul>
		{#each entry.changes as change}
			<li>{change}</li>
		{/each}
	</ul>
	
{/each}