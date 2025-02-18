<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Box`
On this page you find the documentation for the GUI Component `Box`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Box` component. The `Box` component also supports the configuration methods described on the page :docs[Component].

:::




## Introduction
The `Box` component is a layout that can have an optional child with a specific width and height specified by you. So if you ever want to give a GUI component a specific width and height, just use it as a child in a `Box` component.

The `Box` component will by default be sized per the GUI layout you use it in, or cover the entire screen if it's the root GUI component. But its child component can be smaller than that.

::: tip Example

Example showing what the `Box` component looks like when shown on the screen.

```js baga-show
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).width(25).height(25).child(
			Text.backgroundColor(`lime`).text(`Look, I'm so small!`)
		)
	}
}
```

:::



## `child()` - Setting the child
Use the configuration method `child()` to tell the `Box` component which (optional) child it should have. 

If the `Box` component has been given a size (for example by being the root layout, or by being used as a child in :docs[Rows] or :docs[Columns] and been given a `grow()` number, etc.), then it's child will by default get the same size as the `Box` component itself (except its padding).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(5).child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space.backgroundColor(`pink`),
			Box.grow(1).padding(5).backgroundColor(`red`).child(
				Text.backgroundColor(`lime`).text(`The child is lime!`)
			),
			Space.backgroundColor(`gold`),
		)
	}
}
```

:::

If the `Box` component has not been given a size, then it will by default be big enough to contain it's child component.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space.backgroundColor(`pink`),
			Box.padding(5).backgroundColor(`red`).child(
				Text.backgroundColor(`lime`).text(`The child is lime!`)
			),
			Space.backgroundColor(`gold`),
		)
	}
}
```

:::





## `width()` - Setting the width
Use the configuration method `width()` to tell the `Box` component how wide its child should be. Pass it the width as a number. See also :docs[Units].

::: tip Example

Example of how to create a box whose child component is 40mm wide.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).width(40).child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::

::: tip Tip!

A better name on this method might be `childWidth()`, since it sets the width of the child component, and not the width of the `Box` component, but to keep the code shorter, the name `width()` is used.

:::




## `left()` - Left aligning the box
If you use the configuration method `width()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `left()` to tell the `Box` component that the child should be to the left instead.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).width(40).left().child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::





## `right()` - Right aligning the box
If you use the configuration method `width()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `right()` to tell the `Box` component that the child should be to the right instead.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).width(40).right().child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::



## `height()` - Setting the height
Use the configuration method `height()` to tell the `Box` component how tall its child should be. Pass it the height as a number.  See also :docs[Units].

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).height(30).child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::

::: tip Tip!

A better name on this method might be `childHeight()`, since it sets the height of the child component, and not the height of the `Box` component, but to keep the code shorter, the name `height()` is used.

:::




## `top()` - Top aligning the box
If you use the configuration method `height()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `top()` to tell the `Box` component that the child should be to the top instead.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).height(30).top().child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::





## `bottom()` - Bottom aligning the box
If you use the configuration method `height()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `bottom()` to tell the `Box` component that the child should be to the bottom instead.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).height(30).bottom().child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::





## `aspectRatio()` - Setting the relation between width and height
Instead of giving the `Box` component an explicit width and height, you can use the width or height given to it by its parent layout or by calling the configuration methods `width()` or `height()` to automatically compute the other one based on the `Box` component's given aspect ratio, which is set with the configuration method `aspectRatio()`. Pass it the aspect ratio as two numbers:

* First the width
* Then the height

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).width(30).aspectRatio(1, 2).child(
			Text.backgroundColor(`lime`).text(`Width is 30mm, the aspect ratio is 1:2 (i.e. the height should be twice as big as the width), so the height is computed as 60mm.`)
		)
	}
}
```

:::

If you use `aspectRatio()` without using `width()` and `height()`, then the `Box` component will get the biggest size possible to honor the given aspect ratio.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).padding(1).aspectRatio(2, 1).child(
			Text.backgroundColor(`lime`).text(`The width is always exactly 2 times bigger than the height, but never bigger than the screen!`)
		)
	}
}
```

:::

::: tip Tip!

A better name on this method might be `childAspectRatio()`, since it sets the aspect ratio of the child component, and not of the `Box` component, but to keep the code shorter, the name `aspectRatio()` is used.

:::