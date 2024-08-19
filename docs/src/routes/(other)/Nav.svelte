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
	
	<div class="section">
		<a
			href="/"
			class:isCurrent={$page.url.pathname == "/"}
			class:isSubCurrent={$page.url.pathname == "/"}
		>
			BagaWork
		</a>
	</div>
	
	<div class="section">
		{#each links as {text, href, target}}
			<a
				{href}
				{target}
				class:isCurrent={$page.url.pathname == href}
				class:isSubCurrent={$page.url.pathname.startsWith(href)}
			>
				{text}
			</a>
		{/each}
	</div>
	
	<div class="section">
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
		grid-template-columns: 20em 1fr auto;
		border-bottom: 1px solid black;
		align-items: center;
	}
	
	.section:nth-child(1){
		font-size: 1.75em;
		padding: 0.5em;
		justify-self: left;
	}
	
	.section:nth-child(2){
		justify-self: left;
		line-height: 2.5em;
	}
	
	.section:nth-child(3){
		justify-self: right;
	}
	
	.version{
		text-align: right;
		padding: 0.5em 1em;
		display: block;
	}
	
	@media (max-width: 50em) {
		
		nav{
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
		}
		
		.section:nth-child(1){
			justify-self: center;
		}
		
		.section:nth-child(2){
			justify-self: center;
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