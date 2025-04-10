<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Styling Components
This tutorial will teach you how to style components using various configuration methods.



## Introduction
There exists some configuration methods we can use on all components to style them. In this tutorial, we will take a closer look at those configuration methods.




## Background color
As you should know by now, you can use the configuration method `backgroundColor()` to give a component a background color. Pass it the color as the name in English, e.g. `` `red` ``.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor(`red`).text(`I am red!`)
	}
	
}
```

:::





## Padding
Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the red `Text` component to be a little bit taller than it is.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor(`red`).text(`I am red!`),
			Space,
		)
	}
	
}
```

:::

You can make it taller by giving it a `grow()`, but it's also possible to make it taller by giving it some padding on the top side and bottom side. *Padding* is simply some amount of space between the components edge and its content. Call the configuration method `padding()` to give the component some padding, and pass it:

1. A number indicating how many millimeters of padding you want the component to have
2. A string indicating which sides of the component the padding should be added to:
	* If the string contains `t` (short for **t**op), the padding will be added to the top side
	* If the string contains `b` (short for **b**ottom), the padding will be added to the bottom side
	* If the string contains `l` (short for **l**eft), the padding will be added to the left side
	* If the string contains `r` (short for **r**ight), the padding will be added to the right side

If you don't specify the second argument (the string), the padding will be added to all sides.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor(`red`).padding(10, `tb`).text(`I have 10 millimeters of padding above and below me!`),
			Space,
		)
	}
	
}
```

:::



## Rounded corners
You can instruct GUI components to have round corners by calling the configuration method `corderRadius()`. Pass it a number indicating how big the radius of the corner should be. The bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of `0`, which means not being round at all.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor(`red`).cornerRadius(5).text(`My corners are rounded! Cool, right? Please be impressed! xD`),
			Space,
		)
	}
	
}
```

:::

One thing you need to watch out for when using `cornerRadius()` is that anything that is placed in the corner of the component might not be shown properly. In the example above, notice how the `M` letters in the upper left corner isn't fully shown (you might need to change the width of the app screen to make it so). But this can easily be fixed by adding padding to the component, so its content will never be placed at the corners.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor(`red`).padding(1.5).cornerRadius(5).text(`My corners are rounded! Cool, right? Please be impressed! xD`),
			Space,
		)
	}
	
}
```

:::



## Border
It is also possible to add borders around the component. To do that, call the configuration method `border()`, and pass it:

1. A number representing the thickness of the border, e.g. `5`
2. The color of the border, expressed as the name in English, e.g. `` `yellow` ``
3. A string indicating which sides of the component the the border should be applied to:
	* If the string contains `t` (short for **t**op), the border will be added to the top side
	* If the string contains `b` (short for **b**ottom), the border will be added to the bottom side
	* If the string contains `l` (short for **l**eft), the border will be added to the left side
	* If the string contains `r` (short for **r**ight), the border will be added to the right side

If you don't specify the third argument, the border will be applied to all sides.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text
				.backgroundColor('red')
				.border(3, `yellow`)
				.text(`Some text`),
			Space,
		)
	}
	
}
```

:::

If you specify a corner radius, the border will be round at the corners.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text
				.backgroundColor(`red`)
				.cornerRadius(5)
				.border(3, `yellow`)
				.text(`Some text`),
			Space,
		)
	}
	
}
```

:::


## That's it!
Great work, now you can make your GUI components look a but nicer too 😃 And did you know that you can not only make components bigger, but also smaller? Learn how, in the tutorial [4. Making Components Scrollable](../making-components-scrollable/).