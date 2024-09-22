<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. Formatting Text with BBCode
This tutorial will teach you how to format text using BBCode.



## Introduction
When your app shows text to the user, it will by default look like ordinary text, similiar to this text that you are reading now. Using BBCode, you can format the text, to change its size, color, boldness, etc.




## Enabling BBCode
GUI components that display text has a configuration method called `text()` you can call to make it display ordinary text. Examples of these are:

* `Text.text()`
* `Button.text()`

If you instead want the component to be able to display text that has been formatted with BBCode, you need to use the configuration method `textWithBBCode()` instead.



## Using simple BBCode tags
To format text, you simply surround the text with *BBCode tags*, which describes how the surrounded text should be formated. For example, text surrounded with the BBCode start tag `[b]` (`b` is short for bold) and the end tag `[/b]` will display the surrounded tag as bold.


::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(`This Text component [b]does use[/b] BBCode.`),
			Space,
			Text.text(`This Text component [b]does not use[/b] BBCode, so the BBCode tags are displayed as text.`),
			Space,
		)
	}
	
}
```

:::

Here are a few examples of some more BBCode tags you can use:

* `[i]` and `[/i]` to make the surrounded text *italic*
* `[u]` and `[/u]` to make the surrounded text <span style="text-decoration: underline;">underlined</span>
* `[s]` and `[/s]` to make the surrounded text <span style="text-decoration: line-through;">strike throughed</span>

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(`This text is [b]bold[/b].`),
			Space,
			Text.textWithBBCode(`This text is [i]italic[/i].`),
			Space,
			Text.textWithBBCode(`This text is [u]underlined[/u].`),
			Space,
			Text.textWithBBCode(`This text is [s]strike throughed[/s].`),
			Space,
		)
	}
	
}
```

:::

It's also possible to use multiple BBCode tags in the same string.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text.textWithBBCode(`[b]This[/b] [i]text[/i] [u]is[/u] [b]cool[/b]!`)
	}
	
}
```

:::



## Nestling BBCode tags
Do you want text to be both bold and italic? No problem, just nestle the tags, e.g. surround the text with `[b][i]` and `[/i][/b]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(`Here [b][i]is some cool[/i][/b] text.`),
			Space,
			Text.textWithBBCode(`Here [b]is [i]some[/i] cool[/b] text.`),
			Space,
			Text.textWithBBCode(`[u]Here [b]is [i]some[/i] cool[/b] text.[/u]`),
			Space,
		)
	}
	
}
```

:::

Just remember to close the tags in correct order. If `[b]` comes before `[i]`, then `[/i]` must come before `[/b]`; one should always be able to tell if one tag is used inside another, or if it's the other way around. Examples:

* `[b]This [i]is[/i] text.[/b]` is OK, because we can see that the `i` tag is used in the `b` tag
* `[b]This[/b] is [i]text[/i].` is OK, because we have no nestling at all
* `[b]This [i]is[/b] text.[/i]` is NOT OK, because it's unclear if `i` is used in `b`, or if `b` is used in `i`



## Using BBCode tags with an attribute
Some BBCode tags has an *attribute*, that provides additional information about how the BBCode tag should work.

To change the color of a text, you surround the text with `[color=THE_COLOR]` and `[/color]`, where `THE_COLOR` should be the name of a color in English, and it indicates the color the text will have, for example `[color=red]` to make the text red.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(`Here is some [color=red]red text[/color].`),
			Space,
			Text.textWithBBCode(`Here is some [color=yellow]yellow text[/color].`),
			Space,
			Text.textWithBBCode(`[color=red]Here is some red text and [color=yellow]yellow text[/color].[/color]`),
			Space,
		)
	}
	
}
```

:::


In a similar way, you can change the size of the text by using the BBCode tag `size`, and as attribute give it the number of millimeters heigh the text should be.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(`Here is some [size=3]small text[/size].`),
			Space,
			Text.textWithBBCode(`Here is some [size=8]large text[/size].`),
			Space,
			Text.textWithBBCode(`[size=6]Here is some large text and [size=2]small text[/size].[/size]`),
			Space,
		)
	}
	
}
```

:::


## Links
To display some text as a link the user can click on to open a webpage in a web browser, format the text as an URL that identifies which webpage the link should lead to by surroinding it with `[url]` and `[/url]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text.textWithBBCode(
			`Click on [url]https://www.nintendo.com[/url] to view that webpage in a web browser.`
		)
	}
	
}
```

:::

To display another text than the URL, provide the URL as the attribute to the `[url]` tag.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text.textWithBBCode(
			`Click on [url=https://www.nintendo.com]Nintendo[/url] to view that webpage in a web browser.`
		)
	}
	
}
```

:::



## That's it!
Fantastic, now you also now how to format text to make it look prettier. Good work! 🥳 In next tutorial we will take a look at how we can style not only the text in the componment, but the component itself.