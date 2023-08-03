<script>
	
	import { page } from '$app/stores'
	
	const routes = {
		
		'': [],
		'editor': [],
		'contact': [],
		
		'tutorials': [{
			name: 'Tutorials',
			links: [{
				text: '1. Introduction',
				href: '/tutorials/01-introduction',
			}, {
				text: '2. Pages',
				href: '/tutorials/02-pages',
			}, {
				text: '3. Using GUI Components',
				href: '/tutorials/03-using-gui-components',
			}, {
				text: '4. GUI Layouts',
				href: '/tutorials/04-gui-layouts',
			}, {
				text: '5. Changing Page',
				href: '/tutorials/05-changing-page',
			}, {
				text: '?. TODO',
				href: '/tutorials/todo',
			}]
		}],
		
		'examples': [{
			name: 'Examples',
			links: [{
				text: 'Hello, World!',
				href: '/examples/hello-world'
			}, {
				text: 'Book',
				href: '/examples/book'
			}, {
				text: 'Counter',
				href: '/examples/counter'
			}, {
				text: 'Quiz',
				href: '/examples/quiz'
			}],
		}], 
		
		'documentation': [{
			name: 'Views',
			links: [{
				text: 'Button',
				href: '/documentation/button',
			}, {
				text: 'Text',
				href: '/documentation/text',
			}],
		}, {
			name: 'Layouts',
			links: [{
				text: 'Columns',
				href: '/documentation/columns',
			}, {
				text: 'Rows',
				href: '/documentation/rows',
			}, {
				text: 'Space',
				href: '/documentation/space',
			}],
		}, {
			name: 'Classes',
			links: [{
				text: 'App',
				href: '/documentation/app',
			}, {
				text: 'Direction',
				href: '/documentation/direction',
			}, {
				text: 'Page',
				href: '/documentation/page',
			}],
		}, {
			name: 'Various',
			links: [{
				text: 'Configuration Methods',
				href: '/documentation/configuration-methods',
			}, {
				text: 'Environment',
				href: '/documentation/environment',
			}, {
				text: 'State Handling',
				href: '/documentation/state-handling',
			}],
		}],
		
		'implementation': [{
			name: 'Implementation',
			links: [{
				text: '@bagawork/core',
				href: '/implementation/core'
			}, {
				text: '@bagawork/web-components',
				href: '/implementation/web-components'
			}, {
				text: '@bagawork/editor',
				href: '/implementation/editor'
			}],
		}],
		
		'changelog': [],
		
	}
	
	$: groups = routes[$page.url.pathname.split('/')[1]]
	
</script>

<aside>
	
	{#each groups as group}
		
		<div class="group">
			
			<div class="group-name">{group.name}</div>
			
			<div class="links">
				{#each group.links as {text, href}}
					<a {href}  class:current={$page.url.pathname === href}>{text}</a>
				{/each}
			</div>
			
		</div>
		
	{/each}
	
</aside>

<style>
	
	.group{
		border: 1px solid white;
		width: 90%;
		margin: 1em auto;
	}
	
	.group-name{
		font-weight: bold;
		padding: 0.5em 0.75em 0 0.75em;
	}
	
	.links{
		display: flex;
		flex-direction: column;
	}
	
	.links a{
		flex: 1;
		padding: 0.3em 0.5em 0.3em 1.5em;
	}
	.links a:last-child{
		padding-bottom: 0.5em
	}
	.links a.current{
		color: #42b883;
	}
	
</style>