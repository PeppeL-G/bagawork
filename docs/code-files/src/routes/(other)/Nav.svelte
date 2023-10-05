<script>
	
	import { changelogEntries } from 'data/changelog-entries.js'
	import { page } from '$app/stores'
	
	const links = [
		{text: "Bagawork", href: "/", target: "_self"},
		{text: ""},
		{text: "Documentation", href: "/documentation", target: "_self"},
		{text: "Tutorials", href: "/tutorials", target: "_self"},
		{text: "Examples", href: "/examples", target: "_self"},
		{text: "Editor", href: "/editor", target: "_blank"},
		{text: "Implementation", href: "/implementation", target: "_self"},
		{text: "Contact", href: "/contact", target: "_self"},
	]
	
	const lastChangelogEntry = changelogEntries.find(
		e => 0 < e.changelogEntries.length,
	)
	
</script>

<nav>
	{#each links as {text, href, target}}
		{#if text}
			<a
				{href}
				{target}
				class:isCurrent={$page.url.pathname == href}
				class:isSubCurrent={
					href == "/" && $page.url.pathname == "/" ||
					href != "/" && $page.url.pathname.startsWith(href)
				}
			>
				{text}
			</a>
		{:else}
			<span class="spacer"></span>
		{/if}
	{/each}
	<a
		class="version"
		href="/changelog"
		class:isCurrent={$page.url.pathname == '/changelog'}
	>
		v{lastChangelogEntry.version}
	</a>
</nav>

<style>
	
	nav{
		display: flex;
		border-bottom: 1px solid black;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.spacer{
		width: 5em;
	}
	
	.version{
		flex: 1;
		text-align: right;
		padding: 0 1em;
	}
	
	a{
		padding: 0.5em;
		text-decoration: none;
	}
	a:first-child{
		font-size: 1.5em;
	}
	a.isCurrent{
		color: #42b883;
	}
	a.isSubCurrent{
		padding-bottom: 0.15em;
		margin-bottom: 0.35em;
		border-bottom: 1px solid #42b883;
	}
	
</style>