<script>
	import Nav from "./Nav.svelte"
	import Aside from "./Aside.svelte"
	import Footer from "./Footer.svelte"
	import "prismjs/themes/prism-twilight.min.css"
</script>

<div class="layout">
	
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
	
	.layout{
		min-height: 100%;
		background-color: rgb(36, 36, 36);
		display: grid;
		grid-template-columns: 20em 1fr;
		grid-template-rows: auto 1fr auto;
	}
	
	.nav{
		grid-column: 1 / 3;
		grid-row: 1;
	}
	
	aside{
		grid-column: 1;
		grid-row: 2;
	}
	
	main{
		grid-column: 1;
		grid-row: 2;
		padding: 1em;
		grid-column: 2;
		overflow-x: hidden;
	}
	
	.footer{
		grid-column: 1 / 3;
		grid-row: 3;
	}
	
</style>