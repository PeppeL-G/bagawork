<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Direction`
On this page you find the documentation for the `Direction` class.

## Introduction
The `Direction` class represents a possible navigation from one `Page` to another `Page`. It consists of the following parts:

* `when`: A boolean value indicating if this `Direction` should be used
* `page`: The `Page` the user should come to
* `description`: A text describing when the `Direction` should be used (used when previewing the app in our :online-editor)

A `Page` usually contains multiple `Direction`s, and when the user has interacted with the `Page` (for example clicked on a `Button`), the first `Direction` in the `Page` whose `when` is `true` will be used to transition to the `page` in that `Direction`.

When you use configuration methods such as:

* `Button.page()`
* `EnterText.pageIfEqual()`
* `EnterNumber.pageIfLower()`

Then these methods will internally create `Direction` objects for you, but you if you want you can create your own custom `Direction` objects in methods such as `Page.createAfterDirections()`.

## Creating a custom `Direction`
To create a new `Direction` object, simply write:

```js
Direction
```

To indicate when/if this direction should be used, call the configuration method `when()`, and pass it the boolean value, e.g.:

```js
Direction.when(true)
```

Usually, you don't pass it `true`, but an expression that will evaluate to `true`/`false` depending on what values your app/page variables have.

To indicate which page the user should come to when this `Direction` is used, call the configuration method `page()`, and pass it the page, e.g.:

```js
Direction.when(true).page(ThePage)
```

To instruct our :online-editor which text to show, call the configuration method `text()`, and pass it the text, e.g.:

```js
Direction.when(true).page(ThePage).text(`This is shown in the editor`)
```

For example of how to use `Direction`, see :docs[Page].`createAfterDirections()`.