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

The `Html` component is a very advanced component to use. To be able to use it, you must know some technologies that are not taught on this website, such as:

* [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

Most functionalities in BagaWork apps can be implemented using the other BagaWork GUI components. The `Html` component is only available to satisfy the few exceptional cases where an experienced programmer with knowledge of the three mentioned technologies wants to create something more advanced than can't be implemented using the existing BagaWork GUI components.

:::




## Introduction
The `Html` component is a view that you can use to create your own GUI component consisting of whichever HTML, CSS and client-side JS code you want.



::: tip Example

Example showing what the `HTML` component can look like when shown on the screen.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Html.backgroundColor(`yellow`).initializer(p.initializeHtmlElement)
	}
	
	initializeHtmlElement(htmlElement){
		
		const h1 = document.createElement(`h1`)
		h1.innerText = `This is an HTML <h1> element!`
		
		const p = document.createElement(`p`)
		p.innerText = `This is an HTML <p> element!`
		p.style.backgroundColor = `red`
		
		htmlElement.append(h1, p)
		
	}
	
}
```

:::



## `initializer()` - Initializing the HTML element
Use the configuration method `initializer()` to tell the `Html` component which method it should call to initialize the HTML element. The method will receive the HTML element (a `<div>` element) as the first argument, and you can create and insert whichever DOM nodes you want into it.

::: tip Example

This is a bit bad example, because this functionality in this app can be implemented using the BagaWork components :docs[Rows] and :docs[Text], but let's keep the example simple 😅

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Html
			.backgroundColor(`yellow`)
			.initializer(p.initializeHtmlElement)
	}
	
	initializeHtmlElement(divElement){
		
		const h1 = document.createElement(`h1`)
		h1.innerText = `This is an HTML <h1> element!`
		
		const p = document.createElement(`p`)
		p.innerText = `This is an HTML <p> element!`
		p.style.backgroundColor = `red`
		
		divElement.append(h1, p)
		
	}
	
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Html
			.backgroundColor(`yellow`)
			.initializer(p.initializeHtmlElement)
	}
	
	initializeHtmlElement(divElement){
		
		const canvas = document.createElement(`canvas`)
		
		canvas.width = divElement.clientWidth
		canvas.height = divElement.clientHeight
		
		divElement.append(canvas)
		
		// BagaWork intercepts calls to setInterval() and
		// setTimeout() and automatically stops them when
		// an error occurs or when going to next page,
		// so you never need to call clearInterval() or
		// clearTimeout() if you want them to stop when
		// the app crashes, is closed, or when the user
		// go to the next page in the app.
		setInterval(
			p.paintCircle,
			1000,
			canvas,
		)
		
	}
	
	paintCircle(canvas){
		
		const width = canvas.clientWidth
		const height = canvas.clientHeight
		
		const context = canvas.getContext(`2d`)
		
		const x = m.randomInt(0, width)
		const y = m.randomInt(0, height)
		const radius = 10
		
		context.fillStyle = `red`
		context.beginPath()
		context.arc(x, y, radius, 0, Math.PI * 2)
		context.fill()
		
	}
	
}
```

:::