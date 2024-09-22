<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Space`
On this page you find the documentation for the GUI Component `Space`.

## Introduction
The `Space` component is a view whose sole purpose is to occupy space on the screen, so other children in :docs[Rows] and :docs[Columns] layouts are positioned where they should.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Space.backgroundColor(`green`)
	}
	
}
```

:::