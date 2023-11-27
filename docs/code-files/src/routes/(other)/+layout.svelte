<script>
	import Nav from "./Nav.svelte"
	import Aside from "./Aside.svelte"
	import Footer from "./Footer.svelte"
	import PublicAnnouncement from "./PublicAnnouncement.svelte"
	import "prismjs/themes/prism-twilight.min.css"
</script>

<div class="layout">
	
	<div class="publicAnnouncement">
		<PublicAnnouncement />
	</div>
	
	<div class="nav">
		<Nav />
	</div>
	
	<aside>
		<Aside />
	</aside>
	
	<main>
		<slot />
	</main>
	
	<div class="footer">
		<Footer />
	</div>
	
</div>

<style>
	
	@import "default-mode.css" screen;
	@import "dark-mode.css" screen and (prefers-color-scheme: dark);
	
	.layout{
		min-height: 100%;
		display: grid;
		grid-template-rows: auto auto auto 1fr auto;
		background-color: var(--main-background-color);
		color: var(--main-foreground-color);
	}
	
	main{
		padding: 1em;
		overflow-x: hidden;
	}
	
	@media (min-width: 50em){
		
		.layout{
			min-height: 100%;
			display: grid;
			grid-template-columns: 20em 1fr;
			grid-template-rows: auto auto 1fr auto;
			background-color: var(--main-background-color);
			color: var(--main-foreground-color);
		}
		
		.publicAnnouncement{
			grid-column: 1 / span 2;
			grid-row: 1;
		}
		
		.nav{
			grid-column: 1 / span 2;
			grid-row: 2;
		}
		
		aside{
			grid-column: 1;
			grid-row: 3;
		}
		
		main{
			grid-column: 1;
			grid-row: 3;
			grid-column: 2;
		}
		
		.footer{
			grid-column: 1 / span 2;
			grid-row: 4;
		}
		
	}
	
</style>