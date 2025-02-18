<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# BBCode
On this page you find the documentation for how to style text in your BagaWork apps using BBCode.

::: tip Font is an alternative

BBCode is used to style smaller parts of a text. If you want to style all text in a GUI component, you're often better off using :docs[Font].

:::




## Introduction
Various GUI components display text on the screen, such as the :docs[Text] component and the :docs[Button] component. That text can be styled using BBCode if you set the text with the configuration methods `textWithBBCode()` instead of `text()`.




## [b] - Making text bold
To make text display as bold, surround the text with `[b]` and `[/b]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Hello, [b]how are[/b] you?`
		)
	}
}
```

:::



## [i] - Making text italic
To make text display as italic, surround the text with `[i]` and `[/i]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Hello, [i]how are[/i] you?`
		)
	}
}
```

:::



## [u] - Making text underlined
To make text display as underlined, surround the text with `[u]` and `[/u]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Hello, [u]how are[/u] you?`
		)
	}
}
```

:::



## [s] - Making text strikedhroughed
To make text display as strikethoughed, surround the text with `[s]` and `[/s]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Hello, [s]how are[/s] you?`
		)
	}
}
```

:::




## [size] - Changing the size of the text
To change the size of the text, surround the text with `[size=THE_SIZE]` and `[/size]`, where `THE_SIZE` is the number of millimeters tall the text should be.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Hello, [size=15]how are[/size] you?`
		)
	}
}
```

:::


## [color] - Changing the color of the text
To change the color of the text, surround the text with `[color=THE_COLOR]` and `[/color]`, where `THE_COLOR` is the name of the color in English the text should have, such as `red` or `blue`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Hello, [color=red]how are[/color] you?`
		)
	}
}
```

:::




## [url] - Making text a URL
To make text display as a URL the user can click on to open the webpage the URL leads to in a web browser, surround the text with `[url]` and `[/url]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Go to [url]https://nintendo.se[/url].`
		)
	}
}
```

:::

If you want the URL to display another text, surround the text with `[url=THE_URL]` and `[/url]`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			`Go to [url=https://nintendo.se]Nintendo's website[/url].`
		)
	}
}
```

:::