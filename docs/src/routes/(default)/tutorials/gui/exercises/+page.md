<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 8. Exercises
Hello designer, nice to meet you! 😎 Ready to prove your design skills? Then take a look at the apps below, and try to implement them yourself from scratch in out :online-editor.

Good luck! 🙂

PS\
Your own GUI doesn't need to look precisely the same as in the apps below, so feel free to design something similar. The goal is for you to practice and become better at implementing graphical user interfaces, and not to implement these graphical user interfaces precisely the same way.\
DS

::: exercise Modal Exercise

```js baga-show-editor
class StartPage extends Page{
	
	isModalShowing = false
	
	createStartPage(){
		return StartPage
	}
	
	showModal(){
		p.isModalShowing = true
	}
	
	closeModal(){
		p.isModalShowing = false
	}
	
	createGui(){
		
		return Layers.backgroundColor(`aliceblue`).children(
			
			// Here is the page content.
			Rows.padding(2).children(
				Text.text(`Need help?`),
				Button.text(`Yes`).onClick(p.showModal),
			),
			
			// And here is the modal.
			Box.keepIf(p.isModalShowing).padding(7).backgroundColor(`#77777777`).child(
				Rows.padding(4).backgroundColor(`white`).cornerRadius(5).children(
					Text.text(`Help`).font(Font.bold().size(10)),
					Text.text(`Here comes a long descriptive text helping you...`).left(),
					Space,
					Columns.children(
						Space,
						Button.text(`Close`).onClick(p.closeModal),
						Space,
					),
				),
			),
			
		)
		
	}
	
}
```

:::




::: exercise Navigation Bar Exercise

Note: In this exercise, the buttons in the navigation bar don't need to change page.

```js baga-show-editor
class StartPage extends Page{
	
	createGui(){
		
		return Rows.backgroundColor(`skyblue`).children(
			
			// The page content.
			Rows.growShrink(1).padding(2).children(
				Text.text(`Hello!`).font(Font.size(10)).left(),
				Text.text(`Doesn't the navigation bar below look nice?`).left(),
			),
			
			Box.height(1).backgroundColor(`black`),
			
			// The navigation bar.
			Columns.padding(1).font(Font.size(sw(6))).children(
				Space,
				Button.text(`🏠\nHome`),
				Space,
				Button.text(`💡\nAbout`),
				Space,
				Button.text(`📞\nContact`),
				Space,
			),
			
		)
		
	}
	
}
```

:::




::: exercise Navigation Drawer

Note: In this exercise, the buttons in the drawer just needs to close the drawer, they don't need to change page.

```js baga-show-editor
class StartPage extends Page{
	
	isDrawerOpen = false
	
	openDrawer(){
		p.isDrawerOpen = true
	}
	
	closeDrawer(){
		p.isDrawerOpen = false
	}
	
	createGui(){
		
		return Rows.backgroundColor(`skyblue`).children(
			
			// The top row.
			Columns.padding(1).children(
				
				// The "open drawer" button.
				Button
					.text(`☰`)
					.keepIf(p.isDrawerOpen == false)
					.onClick(p.openDrawer)
					.font(Font.size(sw(8)))
					.padding(3, `lr`),
				
				// The "close drawer" button.
				Button
					.text(`←`)
					.keepIf(p.isDrawerOpen == true)
					.onClick(p.closeDrawer)
					.font(Font.size(sw(8)))
					.padding(3, `lr`),
				
				// The title.
				Text.grow(1).text(`Sample App`).font(Font.size(sw(13)))
				
			),
			
			Box.height(1).backgroundColor(`black`),
			
			Layers.growShrink(1).children(
				
				// The page content.
				Text.text(`Hello! :D`),
				
				// The drawer.
				Columns.keepIf(p.isDrawerOpen == true).backgroundColor(`#77777777`).children(
					Rows.backgroundColor(`white`).padding(2).children(
						Button.onClick(p.closeDrawer).text(`Home`),
						Box.height(2),
						Button.onClick(p.closeDrawer).text(`About`),
						Box.height(2),
						Button.onClick(p.closeDrawer).text(`Contact`),
						Space,
					),
					Space,
				),
				
			),
		)
		
	}
	
}
```

:::