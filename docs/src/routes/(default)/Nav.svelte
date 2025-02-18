<script>
	
	import { changelogEntries } from 'data/changelog-entries.js'
	import { page } from '$app/stores'
	
	const links = [
		{text: "Documentation", href: "/documentation/", target: ""},
		{text: "Tutorials", href: "/tutorials/", target: ""},
		{text: "Examples", href: "/examples/", target: ""},
		{text: "Editor", href: "/editor/", target: "_blank"},
		{text: "Implementation", href: "/implementation/", target: ""},
		{text: "Contact", href: "/contact/", target: ""},
	]
	
	const lastChangelogEntry = changelogEntries.find(
		e => 0 < e.changes.length,
	)
	
</script>

<nav>
	
	<a
		href="/"
		class="title"
		class:isCurrent={$page.url.pathname == "/"}
		class:isSubCurrent={$page.url.pathname == "/"}
	>
		BagaWork
	</a>
	
	<div class="links">
		
		{#each links as {text, href, target}}
			<a
				{href}
				{target}
				class:isCurrent={$page.url.pathname == href}
				class:isSubCurrent={$page.url.pathname.startsWith(href)}
			>
				{text}</a>
		{/each}
	
		<a
			class="version"
			href="/changelog/"
			class:isCurrent={$page.url.pathname == '/changelog/'}
			class:isSubCurrent={$page.url.pathname.startsWith('/changelog/')}
		>
			v{lastChangelogEntry.version}
		</a>
		
	</div>
	
</nav>

<style>
	
	nav{
		display: grid;
		grid-template-columns: 20em 1fr;
		border-bottom: 1px solid black;
		align-items: center;
	}
	
	.title{
		font-size: 1.75em;
		padding: 0.5em;
		text-align: center;
	}
	
	.links{
		display: flex;
		flex-wrap: wrap;
	}
	
	.version{
		text-align: right;
		display: block;
		flex: 1 0 auto;
		align-content: right;
	}
	
	@media (max-width: 50em) {
		
		nav{
			grid-template-columns: 100%;
			grid-template-rows: auto auto;
		}
		
	}
	
	a{
		padding: 0.75em;
		text-decoration: none;
	}
	a.isCurrent{
		color: var(--main-foreground-color);
		text-decoration: underline;
	}
	a.isSubCurrent{
		color: var(--main-foreground-color);
		padding-bottom: 0.15em;
		margin-bottom: 0.35em;
	}
	a:hover{
		text-decoration: underline;
	}
	
</style>