<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Layouts
This tutorial will teach you how the different layouts in BagaWork works.




## Repetition
This tutorial assumes you already know:

* That the GUI component returned from `Page.createGui()` will cover the entire screen
* How the :docs[Rows] layout positions its children as rows
* How the :docs[Columns] layout positions its children as columns

In this tutorial you will learn a couple more layouts you can use.




## The `Layers` layout
In the `Layers` layout, all the children will be as big as the `Layer` layout itself, so they will be drawn in front of each other:

1. First, the first child passed to the `Layers` component will be drawn
2. Then, the second child will be drawn in front of that one
3. And so on...

So each child can be seen as a "layer".

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(`I am the first child/layer!`),
			Text.backgroundColor(`red`).text(`I am the second child, but since I have a background color, you won't be able to see the first child.`),
		)
	}
	
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(`I am the first child/layer!`),
			Text.text(`I am the second child, drawn in front of the first child. But since we are drawn in front of each other, reading this text can be hard.`),
		)
	}
	
}
```

:::

The `Layers` layout is useful when you want to draw something in front of something else, for example a text in front of an image (learn about how to use images in your BagaWork apps in next tutorial). Another use-case is to show an alert message in the center of the screen.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	isAlertShowing = false
	
	showAlert(){
		p.isAlertShowing = true
	}
	
	hideAlert(){
		p.isAlertShowing = false
	}
	
	createGui(){
		return Layers.children(
			
			// The ordinary GUI...
			Rows.backgroundColor(`lime`).children(
				Space,
				Text.text(`This is the ordinary GUI.`),
				Button.text(`Show alert!`).onClick(p.showAlert),
				Space,
			),
			
			// And the alert in front of it (if it should be shown).
			Rows.showIf(p.isAlertShowing == true).children(
				Space,
				Rows.size(1).backgroundColor(`white`).children(
					Text.text(`Alert!`),
					Text.text(`Here is the alert message...`),
					Button.text(`Close`).onClick(p.hideAlert),
				),
				Space,
			)
			
		)
	}
	
}
```

:::




## The `Box` layout
Sometimes you might want your GUI Component to have a specific width and height. Then you should use the `Box` layout. Unlike the `Rows`, `Columns` and `Layers` layouts, the `Box` layout can only have one child, and that child will have the specific size you specify by calling the configuration methods `width()` and `height()` on the `Box` layout (pass them the size expressed in number of millimeters). Pass it it's child by calling the configuration method `child()`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.width(30)
			.height(50)
			.child(
				Text.backgroundColor(`lime`).text(`I am the child!`)
			)
	}
	
}
```

:::

The `Box` will by default have the size given to it by its parent layout, so you only need to call `width()` and `height()` if you want the `Box` to have a specific number of millimeters size specified by you.

Further more, it is also possible to use the configuration method `aspectRatio()` to set it's width/height based on the other one it has. For example, using `aspectRatio(3, 1)` means that the width should be 3 times as big as its height, so if you also use `height(15)`, it would get the width 45 millimeters.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.aspectRatio(3, 1)
			.height(15)
			.child(
				Text.backgroundColor(`lime`).text(`I am the child!`)
			)
	}
	
}
```

:::

This can be useful when you want the box to be as big as possible with a specific ratio between the width and the height. For example, to make a GUI component occupy the size of the biggest square possible that can it on the screen, simply use `aspectRatio(1, 1)`. This is really useful when you implement games that is displayed with a specific aspect ratio, such as `3:4`, or `10:16`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.aspectRatio(1, 1)
			.child(
				Text.backgroundColor(`lime`).text(`I'm equally wide as tall!`)
			)
	}
	
}
```

:::

The `Box` layout can also be used to occupy some space to position other children in a `Rows` or `Columns` layout where they should be.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`There is 10 millimeters extra...`),
			Box.height(10),
			Text.text(`...space between these two texts!`),
			Space,
		)
	}
	
}
```

:::





## That's it!
Look at that, now you know 4 layout components in total 🥳  Good work!