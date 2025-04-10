<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 7. Using Units
This tutorial will teach you how to use different units when specifying sizes.




## Introduction
Some configuration methods you call receives a number from you that represents a size of some kind, such as:

* The radius passed to `cornerRadius()`
* The thickness passed to `border()`
* The amount passed to `padding()`
* The size passed to `Font.size()`
* Etc.

By default, the number you pass to these methods uses the *millimeter* unit (mm), but if you want you can change it to the *screen width* unit (sw) instead.




## Difference Between mm and sw
The millimeter unit is an *absolute* unit. That means that it's equally big on all screens. For example, 3mm is equally big on a screen that is 10 inches wide as on a screen that is 7 inches wide.

::: tip Example

Resize the screen below and notice that the green line (the `Box` component) is always equally big, no matter how wide the screen is.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Text`),
			Box.backgroundColor(`lime`).width(20).height(3),
			Text.text(`Text`),
		)
	}
	
}
```

:::

The "screen width" unit on the other hand is a *relative* unit. A relative unit is expressed as a percentage (a number between `0` and `100`) of a length of something else, and in the case of the "screen width" unit, that percentage is of the width of the screen. So:

* 0sw means 0 percentages of the screen's width (i.e. 0mm)
* 50sw means half of the screen's width
* 100sw means equally big as the width of the screen

To create a number with the sw unit, simply wrap the number with a call to the `sw()` function:

* `5` means 5mm
* `sw(5)` means 5sw

::: tip Example

Resize the screen below and notice that the width of the lines (the `Box` components) change depending on the width of the app screen.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Text`),
			Box.backgroundColor(`blue`).height(3).width(sw(25)),
			Box.backgroundColor(`gold`).height(3).width(sw(50)),
			Box.backgroundColor(`lime`).height(3).width(sw(75)),
			Box.backgroundColor(`aqua`).height(3).width(sw(100)),
			Text.text(`Text`),
		)
	}
	
}
```

:::




## When to use which one?
In general, you can continue using the millimeter unit as long as it works for you. When you try to implement something where the millimeter unit doesn't work for you, then you can use the screen width unit instead if it solves your problem.

::: tip Example

The font size of the app title is in the app below expressed in the millimeter unit.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.font(Font.size(10)).text(`The app title`),
			Text.text(`Main content...`),
		)
	}
	
}
```

This looks good on screens that are large enough to display the app title on a single line. But if you make the app screen above smaller, you will see that the app title will be shown on two lines instead, which doesn't look that nice.

Wouldn't it be nice if the font size of the app title changed based on how wide the screen is? Well, that's what the sw unit is for! So by using the sw unit instead, we can be sure the app title will be shown on a single line no matter how small the screen is.

Try resizing the app screen below, and notice how the app title that uses the sw unit is always shown on one line.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.font(Font.size(sw(17))).text(`The app title`),
			Text.text(`Main content...`),
		)
	}
	
}
```

:::


## That's it!
It's not harder than that to use the "screen width" unit. Great, eh? Finally something easy to learn! 🤣

But this is all to learn for the GUI tutorials. Now try to complete the [GUI 8. Exercises](../exercises/).