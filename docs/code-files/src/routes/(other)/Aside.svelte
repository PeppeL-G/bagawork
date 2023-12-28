<script>
	
	import { page } from '$app/stores'
	
	const routes = {
		
		'': [],
		'editor': [],
		'contact': [],
		
		'tutorials': [{
			name: 'Fundamentals',
			links: [{
				text: '1. Introduction',
				href: '/tutorials/fundamentals/01-introduction/',
			}, {
				text: '2. Pages',
				href: '/tutorials/fundamentals/02-pages/',
			}, {
				text: '3. Configuring GUI Components',
				href: '/tutorials/fundamentals/03-configuring-gui-components/',
			}, {
				text: '4. Positioning GUI Components',
				href: '/tutorials/fundamentals/04-positioning-gui-components/',
			}, {
				text: '5. Changing Page',
				href: '/tutorials/fundamentals/05-changing-page/',
			}, {
				text: '6. Sizing GUI Components',
				href: '/tutorials/fundamentals/06-sizing-gui-components/',
			}, {
				text: '7. The App Class',
				href: '/tutorials/fundamentals/07-the-app-class/',
			}, {
				text: '8. Exercises',
				href: '/tutorials/fundamentals/08-exercises/',
			}],
		}, {
			name: 'Programming',
			links: [{
				text: '1. Page Constants',
				href: '/tutorials/programming/01-page-constants/',
			}, {
				text: '2. App Constants',
				href: '/tutorials/programming/02-app-constants/',
			}, {
				text: '3. Page Variables & Methods',
				href: '/tutorials/programming/03-page-variables-and-methods/',
			}, {
				text: '4. App Variables & Methods',
				href: '/tutorials/programming/04-app-variables-and-methods/',
			}, {
				text: '5. Numbers',
				href: '/tutorials/programming/05-numbers/',
			}, {
				text: '6. Booleans, keepIf() & showIf()',
				href: '/tutorials/programming/06-booleans-keepif-and-showif/',
			}, {
				text: '7. onBefore()',
				href: '/tutorials/programming/07-on-before/',
			}, {
				text: '8. Exercises',
				href: '/tutorials/programming/08-exercises/',
			}],
		}, {
			name: 'GUI',
			links: [{
				text: '1. Styling',
				href: '/tutorials/gui/01-styling/',
			}, {
				text: '2. Layouts',
				href: '/tutorials/gui/02-layouts/',
			}, {
				text: '3. Images',
				href: '/tutorials/gui/03-images/',
			}],
		}],
		
		'examples': [{
			name: 'Apps',
			links: [{
				text: 'Hello, World!',
				href: '/examples/apps/hello-world/'
			}, {
				text: 'Book',
				href: '/examples/apps/book/'
			}, {
				text: 'Contacts',
				href: '/examples/apps/contacts/'
			}, {
				text: 'Counter',
				href: '/examples/apps/counter/'
			}, {
				text: 'Power Point Presentation',
				href: '/examples/apps/power-point-presentation/'
			}, {
				text: 'Multiplication Table',
				href: '/examples/apps/multiplication-table/'
			}, {
				text: 'Quiz',
				href: '/examples/apps/quiz/'
			}],
		}, {
			name: 'GUIs',
			links: [{
				text: 'Modal',
				href: '/examples/guis/modal/'
			}, {
				text: 'Navigation Bar',
				href: '/examples/guis/navigation-bar/'
			}, {
				text: 'Navigation Drawer',
				href: '/examples/guis/navigation-drawer/'
			}],
		}], 
		
		'documentation': [{
			name: 'Views',
			links: [{
				text: 'Button',
				href: '/documentation/button/',
			}, {
				text: 'EnterText',
				href: '/documentation/enter-text/',
			}, {
				text: 'Image',
				href: '/documentation/image/',
			}, {
				text: 'Space',
				href: '/documentation/space/',
			}, {
				text: 'Text',
				href: '/documentation/text/',
			}],
		}, {
			name: 'Layouts',
			links: [{
				text: 'Box',
				href: '/documentation/box/',
			}, {
				text: 'Columns',
				href: '/documentation/columns/',
			}, {
				text: 'Layers',
				href: '/documentation/layers/',
			}, {
				text: 'Rows',
				href: '/documentation/rows/',
			}],
		}, {
			name: 'Classes',
			links: [{
				text: 'App',
				href: '/documentation/app/',
			}, {
				text: 'Direction',
				href: '/documentation/direction/',
			}, {
				text: 'Page',
				href: '/documentation/page/',
			}, {
				text: 'Time',
				href: '/documentation/time/',
			}],
		}, {
			name: 'Variables',
			links: [{
				text: 'a',
				href: '/documentation/a/',
			}, {
				text: 'm',
				href: '/documentation/m/',
			}, {
				text: 'p',
				href: '/documentation/p/',
			}],
		}, {
			name: 'Various',
			links: [{
				text: 'Configuration Methods',
				href: '/documentation/configuration-methods/',
			}, {
				text: 'Text Symbols',
				href: '/documentation/text-symbols/',
			}],
		}],
		
		'implementation': [{
			name: 'npm packages',
			links: [{
				text: '@bagawork/core',
				href: '/implementation/core/'
			}, {
				text: '@bagawork/web-components',
				href: '/implementation/web-components/'
			}, {
				text: '@bagawork/editor',
				href: '/implementation/editor/'
			}],
		}],
		
		'changelog': [],
		
	}
	
	$: groups = routes[$page.url.pathname.split('/')[1]] ?? []
	
</script>

<aside>
	
	{#each groups as group}
		
		<div class="group">
			
			<div class="group-name">{group.name}</div>
			
			<div class="links">
				{#each group.links as {text, href}}
					<a
						{href}
						class:isCurrent={$page.url.pathname === href}
					>
						{text}
					</a>
				{/each}
			</div>
			
		</div>
		
	{/each}
	
</aside>

<style>
	
	.group{
		border: 1px solid var(--main-foreground-color);
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
		text-decoration: none;
	}
	.links a:last-child{
		padding-bottom: 0.5em
	}
	.links a:hover{
		text-decoration: underline;
	}
	.links a.isCurrent{
		color: var(--main-foreground-color);
		text-decoration: underline;
	}
	
</style>