<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Html`
On this page you find the documentation for the GUI Component `Html`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Html` component. The `Html` component also supports the configuration methods described on the page :docs[Component].

:::

::: warning Warning!

**Beginners in programming are not expected to use this GUI component!**

The `Html` component is a very advanced component to use. To be able to use it, you must know much of:

* [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

These technologies are not taught on this website.

Most functionalities in BagaWork apps can be implemented using the other BagaWork GUI components. The `Html` component is only available to satisfy the few exceptional cases where an experienced programmer with knowledge of the three mentioned technologies wants to create something more advanced than can be implemented using the existing BagaWork GUI components.

:::




## Introduction
The `Html` component is a view that you can use to create your own GUI component consisting of whichever HTML, CSS and client-side JS code you want.



::: tip Example

Example showing what the `HTML` component can look like when shown on the screen.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Html.backgroundColor(`yellow`).elementCreator(p.createHtmlHeader)
	}
	
	createHtmlHeader(){
		
		// This is a bad example, because this functionality can
		// be implemented using the BagaWork components Rows and
		// Text, but let's keep it simple ^^
		const div = document.createElement(`div`)
		
		const h1 = document.createElement(`h1`)
		h1.innerText = `This is an HTML <h1> element!`
		
		const p = document.createElement(`p`)
		p.innerText = `This is an HTML <p> element!`
		p.style.backgroundColor = `red`
		
		div.appendChild(h1)
		div.appendChild(p)
		
		return div
		
	}
	
}
```

:::



## `elementCreator()` - Setting the element creator
Use the configuration method `elementCreator()` to tell the `Html` component which method it should call to obtain the HTML element that should be visualized on the screen where the `Html` component is used.

::: tip Example

This is a bit bad example, because this functionality in this app can be implemented using the BagaWork components :docs[Rows] and :docs[Text], but let's keep the example simple 😅

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Html.backgroundColor(`yellow`).elementCreator(p.createHtmlHeader)
	}
	
	createHtmlHeader(){
		
		
		const div = document.createElement(`div`)
		
		const h1 = document.createElement(`h1`)
		h1.innerText = `This is an HTML <h1> element!`
		
		const p = document.createElement(`p`)
		p.innerText = `This is an HTML <p> element!`
		p.style.backgroundColor = `red`
		
		div.appendChild(h1)
		div.appendChild(p)
		
		return div
		
	}
	
}
```

:::