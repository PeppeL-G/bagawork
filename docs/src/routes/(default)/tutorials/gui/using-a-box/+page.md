<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Using a Box
This tutorial will teach you how to use the `Box` layout.




## Introduction
Using the `Rows`, `Columns` and `Layers` layouts, you can mostly position your GUI components however you want on the screen. But for a few specific cases, it can be useful to also use the `Box` layout. It contains some general good-to-have functionality that other GUI components don't have. Let us go through these functionalities in this tutorial.




## Adding space around a child
The `Box` layout is quite different from the other layouts in BagaWork. To start with, the other layouts can have as many children as you want. That's not the case with the `Box` layout; the `Box` layout can have at most one child. Yep, you read that right, at most one child, so either 1 or 0 children. And as the name suggest, the `Box` layout is used like a box that surrounds its child, so it's primarily used to add space around another GUI component.

Let us say you have a GUI like the one shown below.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Row 1`).backgroundColor(`yellow`).border(1, `black`),
			Text.text(`Row 2`).backgroundColor(`yellow`).border(1, `black`),
			Text.text(`Row 3`).backgroundColor(`yellow`).border(1, `black`),
		)
	}
	
}
```

:::

But for some reason, you don't want the entire `Row 2` to be yellow with a black border, but you want it to be a little bit smaller. You basically want to add some space around it. For that, you can put `Row 2` in a `Box` layout, and add some padding to the `Box` layout.

::: tip Example

The white space you can see around `Row 2` is the space the `Box` component occupies.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Row 1`).backgroundColor(`yellow`).border(1, `black`),
			Box.padding(3).child(
				Text.text(`Row 2`).backgroundColor(`yellow`).border(1, `black`),
			),
			Text.text(`Row 3`).backgroundColor(`yellow`).border(1, `black`),
		)
	}
	
}
```

:::

So the `Box` layout is like an extra box around its child. And you can of course give the `Box` a background color of its own, and even nestle `Box` layouts in each other to have many of them.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Row 1`).backgroundColor(`yellow`).border(1, `black`),
			Box.padding(6).child(
				Box.padding(3).backgroundColor(`lime`).child(
					Text.text(`Row 2`).backgroundColor(`yellow`).border(1, `black`),
				)
			),
			Text.text(`Row 3`).backgroundColor(`yellow`).border(1, `black`),
		)
	}
	
}
```

:::

This can help you build more fancy GUIs, like the one shown below.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.backgroundColor(`navy`).child(
			Box.padding(3).cornerRadius(3).backgroundColor(`darkblue`).child(
				Box.padding(3).cornerRadius(3).backgroundColor(`mediumblue`).child(
					Box.padding(3).cornerRadius(3).backgroundColor(`blue`).child(
						Box.padding(3).cornerRadius(3).backgroundColor(`cornflowerblue`).child(
							Text.text(`Some Text`),
						),
					),
				),
			),
		)
	}
	
}
```

:::




## Giving a child a specific size
The `Box` layout can be used to give the child a specific width/height in millimeters. Simply call the methods `width()` and `height()` on the `Box` layout and pass them a number indicating the size of the child in millimeters.

::: tip Example

Example of how to use the configuration method `height()` on a child to give it a specific height.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Row 1`).backgroundColor(`yellow`),
			Box.height(15).child(
				Text.text(`Row 2`).backgroundColor(`aqua`),
			),
			Text.text(`Row 3`).backgroundColor(`yellow`),
			Box.height(7).child(
				Text.text(`Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4 Row 4`).backgroundColor(`aqua`),
			),
			Text.text(`Row 5`).backgroundColor(`yellow`),
			Box.width(30).child(
				Text.text(`Row 6`).backgroundColor(`aqua`),
			),
			Text.text(`Row 7`).backgroundColor(`yellow`),
		)
	}
	
}
```

:::

On `Row 4` you can see that the `Box` layout becomes scrollable if it has been given a size smaller than the child needs to be.




## The child is optional
When you use the `Box` component, you don't have to give it a child. Sometimes you simply want the `Box` component to occupy some space, and then you can call the `width()`/`height()` method to indicate how big that space should be.

::: tip Example

Example of how to add space between paragraphs (`Text` components) using the `Box` component.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`This is the first long paragraph...`).left(),
			Box.height(4),
			Text.text(`This is the second long paragraph...`).left(),
			Box.height(4),
			Text.text(`This is the third long paragraph...`).left(),
		)
	}
	
}
```

:::

In a similar way, you can use the `Box` component to add a border between components by giving it a size and a background color.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`This is the first long paragraph...`).left(),
			Box.height(1).backgroundColor(`black`),
			Text.text(`This is the second long paragraph...`).left(),
			Box.height(1).backgroundColor(`aqua`),
			Text.text(`This is the third long paragraph...`).left(),
		)
	}
	
}
```

:::





## That's it!
Nicely done, now you know about the `Box` component too! There is more to learn about the `Box` component (such as giving it an aspect ratio), but that will be covered in another tutorial.

When you are ready, continue with tutorial [7. Using Units](../using-units/).