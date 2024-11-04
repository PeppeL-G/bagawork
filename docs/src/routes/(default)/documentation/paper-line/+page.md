<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperLine`
On this page you find the documentation for the paper figure `PaperLine`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `PaperLine` figure. `PaperLine` also supports the configuration methods described on the page :docs[PaperFigure].

:::





## Introduction
`PaperLine` is a figure that you can use to draw a line in a :docs[Paper] component.

::: tip Example

```js baga-show
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).backgroundColor(`orange`).children(
				PaperLine,
			)
		)
	}
}
```

:::





## `thickness()` - Setting the thickness
Use the configuration method `thickness()` to tell the `PaperLine` figure which thickness it should have. Pass the thickness as a number.

If you don't call `thickness()`, `0.01%` of the coordinate system's smallest of the width and height will be used as the default thickness.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperLine.thickness(1),
			)
		)
	}
}
```

:::




## `start()` - Setting the start position
Use the configuration method `start()` to tell the `PaperLine` figure where the line should start. Pass it two numbers:

* The X coordinate of the start
* The Y coordinate of the start

If you don't call `start()`, the start position will be at 25% of the coordinate system's width and height.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperLine.start(5, 5),
			)
		)
	}
}
```

:::



## `end()` - Setting the end position
Use the configuration method `end()` to tell the `PaperLine` figure where the line should end. Pass it two numbers:

* The X coordinate of the end
* The Y coordinate of the end

If you don't call `end()`, the end position will be at 75% of the coordinate system's width and height.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperLine.end(8, 4),
			)
		)
	}
}
```

:::