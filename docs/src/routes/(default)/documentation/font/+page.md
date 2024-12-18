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
		return Text.font(Font.size(12).color(`red`).italic()).text(`Here is some text!`)
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




## `size()` - Setting the text size
Use the configuration method `size()` to specify how tall the text should be. Pass it a number indicating the text's size. See also :docs[Units].

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.font(Font.size(10)).text(`Here is some text!`),
			Text.font(Font.size(mm(10))).text(`Here is some text!`),
		)
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