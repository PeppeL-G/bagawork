<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# Units
On this page you find information on how BagaWork handles sizes used in the GUI.




## Introduction
Many numbers that you pass to GUI components represent a size of some kind, such as:

* The `radius` passed to `cornerRadius()`
* The `thickness` passed to `border()`
* The `amount` passed to `padding()`
* The `size` passed to `Font.size()`
* Etc.

These numbers need to be associated with a unit to have any meaning. If you don't specify which unit to use, then the `mm` (millimeter) unit will be used by default.




## The `mm` unit
The `mm` unit is short for **M**illi**M**eter and it is the default unit used if you don't indicate which unit to use. This unit is good to use when you want something on all screens to have one and the same specific size, no matter how wide the screen is that the app is running on.

::: tip Example

Resize the screen in this example, and see that the size of the app title is the same, no matter how wide the screen is.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`The App Title`).font(Font.size(10)),
			Text.text(`The app content...`)
		)
	}
}
```

Also note that in this example, since the app title uses the `mm` unit (since no unit has been explicitly used), the width of the user's screen decides if the app title is shown on 1, 2 or 3 lines.

:::


## The `sw` unit
The `sw` unit is short for **S**creen**W**idth, and it represents a percentage of the screen width. So, if the screen your app is running on is 40 millimeters wide, then:

* `1sw` = 0.4 millimeters
* `50sw` = 20 millimeters
* `100sw` = 40 millimeters

However, you never think of it as a conversion to millimeters like this. Instead, you rather think of it like this:

* `1sw` = a hundredth of the screen width
* `50sw` = half of the screen width
* `100sw` = the entire screen width

The `sw` unit is great to use when you want the size of something to be related to the width of the screen your app is running on.

To use the `sw` unit, just pass wrap your number in a call to the `sw()` function.

::: tip Example

Resize the screen in this example, and see that the size of the app title changes with the width of the screen. So in this case, we can be sure the title of the app always is shown on a single line, no matter how wide the screen is that our app is running on.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`The App Title`).font(Font.size(sw(15))),
			Text.text(`The app content...`)
		)
	}
}
```

:::

::: tip Example

If you would change `The App Title` to something longer, let's say, `This Is My App Title`, then it would always be displayed on 2 lines, and you would need to decrease the size from `15` to something lower to be sure it is always displayed on a single line.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`This Is My App Title`).font(Font.size(sw(15))),
			Text.text(`The app content...`)
		)
	}
}
```

:::