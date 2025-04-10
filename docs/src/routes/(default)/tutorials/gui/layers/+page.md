<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Layers
This tutorial will teach you how to use the `Layers` component




## Introduction
A layout is a GUI component that can contain and display other GUI components on the screen. The `Rows` layout displays its children as rows, and the `Columns` layout displays its children as columns. Using these two layouts, the children can never overlap/one child can never be shown in front of another child. If you want such functionality, then you can use the `Layers` layout. Using the `Layers` layout, you can for example show a modal in your app, as shown below.

::: tip Example

Example of an app that can display a modal in front of the ordinary GUI on a page.

```js baga-show
class StartPage extends Page{
	
	isModalShowing = false
	
	createGui(){
		
		const pageContent = Rows.children(
			Text.text(`Just click on the button below to show a modal`),
			Button.text(`Show Modal`).onClick(p.showModal),
		)
		
		const modal = Box
			.keepIf(p.isModalShowing)
			.padding(5)
			.child(
				Rows.cornerRadius(5).padding(5).backgroundColor(`aqua`).children(
					Text.text(`The modal!`),
					Space,
					Text.text(`Here is the modal content.`),
					Space,
					Button.text(`Close`).onClick(p.closeModal),
				),
			)
		
		return Layers.children(
			pageContent,
			modal,
		)
	}
	
	showModal(){
		p.isModalShowing = true
	}
	
	closeModal(){
		p.isModalShowing = false
	}
	
}
```

:::




## The `Layers` layout
In the `Layers` layout, all the children will be as big as the `Layer` layout itself, so they will be drawn in front of each other:

1. First, the first child passed to `children()` will be drawn
2. Then, the second child passed to `children()` will be drawn in front of the first one
2. Then, the third child passed to `children()` will be drawn in front of the second one
3. And so on...

So each child can be seen as a "layer".

::: tip Example

Example showing that children in `Layers` are drawn in front of each others.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(`I am the first child/layer!`),
			Text.backgroundColor(`red`).text(`I am the second child, and since I have a background color, you won't be able to see the first child, which has been drawn behind me.`),
		)
	}
	
}
```

:::

::: tip Example

Example showing that children in `Layers` are drawn in front of each others.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(`I am the first child/layer!`),
			Text.text(`I am the second child, drawn in front of the first child. Since we are drawn in front of each other, reading this text can be hard.`),
		)
	}
	
}
```

:::

The `Layers` layout is useful when you want to draw something in front of something else, for example:

* A text in front of an image
* A message in an alert box
* A modal

## Showing an alert box
Using the `Layers` component, we can display an alert box with a message in front of a page's ordinary GUI. To start, let's say we have an app with an ordinary page, as show below.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.text(`This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI.`),
			Space,
		)
	}
	
}
```

:::

Now we want to display an alert box in front of this GUI. To do that, we will use the `Layers` layout, and we pass the page's ordinary GUI as the first child to it, and then we pass the alert box as the second child to it, as shown below.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			
			// The first Layers child is
			// the ordinary GUI on the page.
			Rows.backgroundColor(`lime`).children(
				Space,
				Text.text(`This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI.`),
				Space,
			),
			
			// The second Layers child is
			// the alert box.
			Rows.children(
				Space,
				Rows.padding(3).cornerRadius(5).backgroundColor(`white`).children(
					Text.text(`Alert!`),
					Text.text(`Here is the alert message...`),
				),
				Space,
			),
			
		)
	}
	
}
```

:::

Now, you obviously don't want to show the alert box to the user all the time, but only when something has happened, such as when the user has clicked on a `Button`. And you probably want the user to be able to close the alert box too, right? To achieve that, we can add:

* A page variable (storing a boolean value) to keep track of if the alert box should be shown or not (starting on `false`, meaning the alert box is not shown)
* A method to change that page variable to `true` (used when we want to show the box)
* A method to change that page variable to `false` (used when we want to close the box)
* Use the configuration method `keepIf()` on the alert box to only show it when the page variable is `true`

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	// Starting on false means the alert won't
	// be shown directly when the app starts.
	isAlertShowing = false
	
	// This method should be called when we
	// want to show the alert.
	showAlert(){
		p.isAlertShowing = true
	}
	
	// This method should be called when we
	// want to close the alert.
	hideAlert(){
		p.isAlertShowing = false
	}
	
	createGui(){
		return Layers.children(
			
			// The first Layers child is
			// the ordinary GUI on the page.
			Rows.backgroundColor(`lime`).children(
				Space,
				Text.text(`This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI. This is the ordinary GUI.`),
				Button.text(`Show alert!`).onClick(p.showAlert),
				Space,
			),
			
			// The second Layers child is
			// the alert box.
			Rows.keepIf(p.isAlertShowing == true).children(
				Space,
				Rows.padding(3).cornerRadius(5).backgroundColor(`white`).children(
					Text.text(`Alert!`),
					Text.text(`Here is the alert message...`),
					Button.text(`Close`).onClick(p.hideAlert),
				),
				Space,
			),
			
		)
	}
	
}
```

:::




## That's it!
Look at that, now you know 3 layout components in total 🥳 Good work! But do you know what? There are even more layout components you can use! When you are ready to learn the next one, continue with [6. Using a Box](../using-a-box/).