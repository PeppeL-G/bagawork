<script>
	import { changelogEntries } from 'data/changelog-entries.js'
	
	const entries = changelogEntries.filter(
		e => 0 < e.changes.length,
	)
	
	function getGroups(changes){
		
		return Object.entries(
			Object.groupBy(
				changes.filter(
					c => c.indexOf(`:`) != -1,
				),
				change => change.substring(0, change.indexOf(`:`)),
			),
		)
		
	}
	
	function getUncategorizedChanges(changes){
		return changes.filter(
			c => c.indexOf(`:`) == -1,
		)
	}
	
</script>

{#each entries as entry}
	
	<h2>{entry.version} - {entry.date}</h2>
	
	<ul>
		{#each getGroups(entry.changes) as [groupName, changes]}
			<li>
				{groupName}:
				<ul>
					{#each changes as change}
						<li>{change.substring(change.indexOf(`:`) + 2)}</li>
					{/each}
				</ul>
			</li>
		{/each}
		{#each getUncategorizedChanges(entry.changes) as change}
			<li>{change}</li>
		{/each}
	</ul>
	
{/each}