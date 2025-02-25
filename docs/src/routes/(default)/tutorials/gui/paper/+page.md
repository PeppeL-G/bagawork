<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Paper
This tutorial will teach you how to use the `Paper` component to draw images in your app yourself.




## Introduction
The `Paper` component is a layout that you can draw whatever you want on yourself, so it's similar to the `Image` component, but instead of specifying the URL of the image, you specify how the image should be drawn using lines, circles, rectangles, etc.




## Creating a `Paper` component instance
To create a new `Paper` component instance, simply write `Paper`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(`gold`)
	}
	
}
```

:::



## Dimensioning the `Paper`
Often, you want the `Paper` to be of a certain size. That can easily be achieved by putting it in a :docs[Box] component.

:::tip Example

Example of a `Paper` component instance put in a :docs[Box] component instance to make it 30 wide and 50 tall.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`),
		)
	}
	
}
```

:::




## The coordinate system
To draw something on the `Paper`, you need to specify *where* on the `Paper` it should be drawn. To specify that, you need to know how the *coordinate system* the `Paper` is using works.

The `Paper` component uses a coordinate system with an X-axe and a Y-axe:

* The X-axe:
	* Starts at the left side of the `Paper` component (X=`0` at the left side)
	* Increases towards the right
	* Ends with `100` on the right side (can be configured)
* The Y-axes:
	* Starts at the bottom side of the `Paper` component (Y=`0` at the bottom side)
	* Increases towards the top
	* Ends with `100` on the top side (can be configured)

For an example of this, see next sub-chapter.





## Showing the coordinate system
To show the coordinate system, call the configuration method `showCoordinates()` on the `Paper` component. When you call this method, the following will be drawn on the `Paper`:

* Some horizontal lines
* Some vertical lines
* The mouse's position in the upper right corner

This is something you can use during development, but after you have finished writing your code, you probably want to remove the call to `showCoordinates()`, since you don't want your users to see it.

:::tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).showCoordinates(),
		)
	}
	
}
```

:::



## Setting the coordinate system
That the coordinate system uses the width 100 and height 100 often only makes sense when the width and the height of the `Paper` component are the same. If they are not (as in the previous example), then the size of one unit on the X-axe is not equally big as one unit on the Y-axe, and this makes it hard to use.

So, if the width and the height of the `Paper` component are not the same, it is often useful to change the width and height of the coordinate system to match the actual width and height of the `Paper` component. That can be done by calling the configuration method `coordinateSystem()` on the `Paper` component. Pass it two values:

* The desired width of the coordinate system as a number
* The desired height of the coordinate system as a number

:::tip Example

Example setting the width of the coordinate system to `30`, and the height of the coordinate system to `50`. 

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).coordinateSystem(30, 50).showCoordinates(),
		)
	}
	
}
```

:::




## Drawing things on the `Paper`
To draw various things on the `Paper` component, call the configuration method `children()`, and pass it the various components that can be drawn on the `Paper`. The components that can be drawn on the `Paper` component all have names starting with `Paper`, such as:

* `PaperLine` for drawing a line
* `PaperCircle` for drawing a circle
* `PaperRectangle` for drawing a rectangle

Learn more about how to use these next. Ordinary GUI components, such as `Text` and `Button`, can't be used as children in the `Paper` component.





## Drawing a line
Use the GUI component `PaperLine` to draw a line on the `Paper` component. It has default values for all different properties (position, color, etc.), so you can use it as it is.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).children(
				PaperLine,
			),
		)
	}
	
}
```

:::

Call various configuration methods on the `PaperLine` component to change where and how it's drawn on the `Paper`:

* Call `start(x, y)` to indicate the position of the start of the line
* Call `end(x, y)` to indicate the position of the end of the line
* Call `thickness(theNumber)` to indicate how thick the line should be
* Call `backgroundColor(theColor)` to indicate the color of the line

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).children(
				PaperLine.start(10, 10).end(20, 20).thickness(2).backgroundColor(`blue`),
				PaperLine.start(10, 20).end(20, 10).thickness(5).backgroundColor(`pink`),
			),
		)
	}
	
}
```

:::




## Drawing a circle
Use the GUI component `PaperCircle` to draw a circle on the `Paper` component. It has default values for all different properties (position, color, etc.), so you can use it as it is.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).children(
				PaperCircle,
			),
		)
	}
	
}
```

:::

Call various configuration methods on the `PaperCircle` component to change where and how it's drawn on the `Paper`:

* Call `center(x, y)` to indicate the position of the center of the circle
* Call `radius(theRadius)` to indicate the radius of the circle
* Call `backgroundColor(theColor)` to indicate the color of the circle

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).children(
				PaperCircle.center(0, 0).radius(10).backgroundColor(`blue`),
				PaperCircle.center(15, 30).radius(3).backgroundColor(`lime`),
			),
		)
	}
	
}
```

:::




## Drawing a rectangle
Use the GUI component `PaperRectangle` to draw a rectangle on the `Paper` component. It has default values for all different properties (position, color, etc.), so you can use it as it is.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).children(
				PaperRectangle,
			),
		)
	}
	
}
```

:::

Call various configuration methods on the `PaperRectangle` component to change where and how it's drawn on the `Paper`:

* Call `center(x, y)` to indicate the position of the center of the rectangle
* Call `width(theWidth)` to indicate the width of the rectangle
* Call `height(theHeight)` to indicate the height of the rectangle
* Call `backgroundColor(theColor)` to indicate the color of the rectangle

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(`gold`).children(
				PaperRectangle.center(15, 30).height(30).width(20).backgroundColor(`blue`),
				PaperRectangle.center(15, 15).height(10).width(15).backgroundColor(`lime`),
			),
		)
	}
	
}
```

:::





## That's it!
Woho! 🥳 Now you know how to use images in your BagaWork apps, good work!