<script>
	
	import { page } from '$app/stores'
	
</script>

<div id="errorPage">
	
	{#if $page.status == 404}
		
		<h1>Not found 😢</h1>
		<p>I'm sorry dude, but the page you are looking for does not exist. Instead, try one of the many awesome links we have on the <a href="/">start page</a> 😉</p>
		
	{:else}
		
		<h1>What? 😲</h1>
		<p>This is a bit embarrassing... An error occurred that we didn't know existed 😟 Well, congratulation, you managed to break our website! Are you happy now? 😜</p>
		
		<p>For the curious one, here's a log of the error:</p>
		
		<pre>{$page.error.message}</pre>
		
	{/if}
	
</div>

<style>
	
	#errorPage{
		background-color: rgba(0, 0, 0, 0.718);
		width: 100vw;
		height: 100vh;
		padding: 2em;
	}
	
</style>