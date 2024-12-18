<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# Units
On this page you find information on how BagaWork handles sizes used in the graphical user interface.




## Introduction
Many numbers that you pass to GUI components represent a size of some kind, such as:

* The `radius` passed to `cornerRadius()`
* The `thickness` passed to `border()`
* The `amount` passed to `padding()`
* The `size` passed to `Font.size()`
* Etc.

These numbers need to be associated with a unit to have any meaning. If you don't specify which unit to use, then the `sw` unit will be used by default.



## The `sw` unit
The `sw` unit is short for **S**creen**W**idht, and it is the default unit used if you don't indicate which unit to use. It represents a percentage of the screen width. So, if the width of the screen your app is running on is 40 millimeters, then:

* `1sw` = 0.4 millimeters
* `50sw` = 20 millimeters
* `100sw` = 40 millimeters

However, you never think of it as a conversion to millimeters like this. Instead, you rather think of it like this:

* `1sw` = a hundredth of the screen width
* `50sw` = half the screen width
* `100sw` = the entire screen width

The `sw` unit is great to use when you want the size of something be related to the width of the screen running the app.

::: tip Example

Resize the screen in this example, and see that the size of the app title changes with the width of the screen.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`The App Title`).font(Font.size(14)),
			Text.text(`The app content...`)
		)
	}
}
```

:::



## The `mm` unit
The `mm` unit is short for **M**illi**M**eter. This unit is good to use when you want something to have one and the same specific size, no matter how wide the screen is that the app is running on.

To create a number using the `mm` unit, simply pass the number to the `mm()` function, and it will send back that number with this unit.

::: tip Example

Resize the screen in this example, and see that the size of the app title is the same, no matter how wide the screen is.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`The App Title`).font(Font.size(mm(14))),
			Text.text(`The app content...`)
		)
	}
}
```

Also note that in this example, since the app title uses the `mm` unit, the width of the screen decides if the app title is shown on 1, 2 or 3 lines (in the previous example, the app title was always shown on 1 line).

:::