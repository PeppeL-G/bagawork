<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. Formatting Text with `Font`
This tutorial will teach you how to format text using the `Font` class.



## Introduction
When your app shows text to the user, it will by default look like ordinary text, similar to this text that you are reading now. Using the `Font` class and the `font()` configuration method (which all GUI components support), you can format text so that it is shown differently, such as:

* Bold
* Smaller
* Bigger
* In another color
* Etc.




## Making text bold
To instruct the `Font` class that a text should be bold, simply call the `bold()` method on it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text.text(`I'm bold text.`).font(Font.bold()),
			Space,
		)
	}
	
}
```

:::




## Making text italic
To instruct the `Font` class that a text should be italic, simply call the `italic()` method on it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text.text(`I'm italic text.`).font(Font.italic()),
			Space,
		)
	}
	
}
```

:::




## Making text underlined
To instruct the `Font` class that a text should be underlined, simply call the `underline()` method on it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text.text(`I'm underlined text.`).font(Font.underline()),
			Space,
		)
	}
	
}
```

:::




## Making text strikethroughed
To instruct the `Font` class that a text should be strikethroughed, simply call the `strikethrough()` method on it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text.text(`I'm strikethroughed text.`).font(Font.strikethrough()),
			Space,
		)
	}
	
}
```

:::




## Changing the size of the text
To instruct the `Font` class what size the text should be, simply call the `size()` method on it, and pass it the number of millimeters tall it should be.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text.text(`I'm small text.`).font(Font.size(3)),
			Space,
			Text.text(`I'm big text.`).font(Font.size(10)),
			Space,
		)
	}
	
}
```

:::




## Changing the color of the text
To instruct the `Font` class what color the text should have, simply call the `color()` method on it, and pass it the name of the color in English the text should have.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text.text(`I'm blue text.`).font(Font.color(`blue`)),
			Space,
			Text.text(`I'm red text.`).font(Font.color(`red`)),
			Space,
		)
	}
	
}
```

:::




## Combining formats
You can of course call multiple different configuration methods on the same `Font` class to format the text in multiple different ways.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I'm ordinary text`),
			Space,
			Text
				.text(`I'm blue, bold and big text.`)
				.font(Font.color(`blue`).bold().size(8)),
			Space,
		)
	}
	
}
```

:::




## `font()` in layouts
When you call the `font()` configuration method on a layout (such as a `Rows` or `Columns` component), then all its children will get that font as well.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.color(`blue`)).children(
			Space,
			Text.text(`I'm blue text`),
			Space,
			Text.text(`I'm also blue text!`),
			Space,
		)
	}
	
}
```

:::

If the layout has another layout as a child, then that inner layout will pass along the font to its children too, and so on.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.color(`blue`)).children(
			Space,
			Text.text(`I'm blue text`),
			Space,
			Columns.children(
				Text.text(`Left`),
				Space,
				Text.text(`Right`),
			),
			Space,
		)
	}
	
}
```

:::




## That's it!
Fantastic, now you also know how to format text to make it look prettier. Good work! 🥳 But sometimes you don't want all text in a `Text` component to be formatted the same way. Maybe there's only a single word in a `Text` component that you want to formatted in a specific way. Learn how to do that using BBCode in the tutorial [2. Formatting text with BBCode](../formatting-text-with-bbcode/).