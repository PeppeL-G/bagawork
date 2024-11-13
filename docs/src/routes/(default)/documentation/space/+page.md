<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Space`
On this page you find the documentation for the GUI Component `Space`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Space` component. The `Space` component also supports the configuration methods described on the page :docs[Component].

:::




## Introduction
The `Space` component is a view whose sole purpose is to occupy space on the screen, so other children in :docs[Rows] and :docs[Columns] layouts are positioned as desired.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Space.backgroundColor(`green`)
	}
	
}
```

:::