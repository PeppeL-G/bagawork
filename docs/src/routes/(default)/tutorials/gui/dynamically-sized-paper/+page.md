<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Dynamically sized paper
This tutorial will teach you how to dynamically size the `Paper` component.




## Maximizing the `Paper` component
If you want the `Paper` component to occupy the entire screen, then simply return it as your page's root component:

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(`gold`)
	}
	
}
```

:::

But as mentioned in the previous tutorial, you don't know how wide and tall the paper will be, because you don't know the sizes of the screens your users have on their devices, so drawing something on it will be hard. But *hard* does not mean impossible.




## Setting the coordinate system
On the `Paper` component, you can use the configuration method `coordinateSystem(width, height)` to specify the width and the height of the coordinate system, no matter which size the screen has. For example, by setting the width of the coordinate system to `5`, the right side of the screen will have x = `5`, and any `Paper` child positioned at x = `5` will be drawn at the right side.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(`gold`).coordinateSystem(5, 5).children(
			PaperLine.start(1, 1).end(4, 4),
		)
	}
	
}
```

:::

You can verify the new coordinate system is used by using the configuration method `showCoordinates()`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Paper.showCoordinates().backgroundColor(`gold`).coordinateSystem(5, 5).children(
			PaperLine.start(1, 1).end(4, 4),
		)
	}
	
}
```

:::




## Using an aspect ratio
One confusing thing with the previous solution is that one unit in the x direction is not equally big as one unit in the y direction. But, by using the `Paper` component in a `Box` with specific aspect ratio, we can get a maximized `Paper` with that aspect ratio, and also use a coordinate system with that aspect ratio.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.backgroundColor(`red`).aspectRatio(5, 10).child(
			Paper.showCoordinates().backgroundColor(`gold`).coordinateSystem(5, 10).children(
				PaperLine.start(1, 1).end(4, 9),
			)
		)
	}
	
}
```

:::

For example, let's say you want to draw a tic-tac-toe game on a `Paper` component. Then you want to maximize the paper as a square (i.e. width = height), and you want the square to consist of 3 * 3 smaller squares, so using the aspect ratio 3:3 is perfect!

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.backgroundColor(`red`).aspectRatio(3, 3).child(
			Paper.showCoordinates().backgroundColor(`gold`).coordinateSystem(3, 3)
		)
	}
	
}
```

:::



## That's it!
Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!