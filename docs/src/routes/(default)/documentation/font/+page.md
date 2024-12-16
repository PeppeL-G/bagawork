<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Font`
On this page you find the documentation for the `Font` class.

::: tip Using the Font class

The `Font` you create with this class can be passed to a component's configuration method `font()`. The font you pass to it will then be applied to the text in:

* That component, and
* That component's child components, and
* Those component's child components, etc.

:::

::: tip BBCode is an alternative

You can also use :docs[bbcode] to style text. BBCode is suitable to use when you want to style parts of a text in a component, such as a specific word, or a specific sentence in a text with multiple sentences, etc.

:::


## Introduction
The `Font` class represents information about how text should be formatted, such as:

* The color of the text
* The size of the text
* The boldness of the text
* Etc.

::: tip Example

```js baga-show
class StartPage extends Page{
	createGui(){
		return Text.font(Font.sizeMm(8).color(`red`).italic()).text(`Here is some text!`)
	}
}
```

:::




## `bold()` - Making the text bold
Use the configuration method `bold()` to make the text bold.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.bold()).text(`Here is some text!`)
	}
}
```

:::




## `color()` - Setting the text color
Use the configuration method `color()` to specify which color the text should have. Pass it a string containing the name of the color in English, such as `` `red` `` or `` `blue` ``.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.color(`red`)).text(`Here is some text!`)
	}
}
```

:::




## `italic()` - Making the text italic
Use the configuration method `italic()` to make the text italic.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.italic()).text(`Here is some text!`)
	}
}
```

:::




## `sizeMm()` - Setting the text size in millimeters
Use the configuration method `sizeMm()` to specify how tall the text should be in millimeters. Pass it a number representing how many millimeters tall the text should be, such as `` `10` `` or `` `15` ``.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.sizeMm(10)).text(`Here is some text!`)
	}
}
```

:::




## `sizeSw()` - Setting the text size relative the width of the screen
Use the configuration method `sizeSw()` to specify how tall the text should be relative to the width of the screen (`sw` = screen width). For example, if the screen your app is running on is 50 millimeters wide, then:

* 100 sw would be 50 millimeters
* 10 sw would be 5 millimeters

Pass it a number representing how many sw units tall the text should be, such as `` `10` `` or `` `15` ``.

::: tip Example

Resize the app in this example, and you'll see that the size of the text changes. Compare that with the previous example, which uses `sizeMmm()` instead.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.sizeSw(10)).text(`Here is some text!`)
	}
}
```

:::




## `strikethrough()` - Making the text strikethroughed
Use the configuration method `strikethrough()` to make the text strikethroughed.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.strikethrough()).text(`Here is some text!`)
	}
}
```

:::




## `underline()` - Making the text underlined
Use the configuration method `underline()` to make the text underlined.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.font(Font.underline()).text(`Here is some text!`)
	}
}
```

:::