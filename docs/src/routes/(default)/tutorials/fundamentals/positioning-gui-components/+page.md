<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 4. Positioning GUI Components
This tutorial will teach you how to create more fancy GUIs by using multiple GUI components in your pages' GUIs.

## The root component
As you know, you should in the `Page` method `createGui()` use GUI components from BagaWork to create and send back the page's GUI. This method, as all methods, can only send back one value, and in this case that value should be a GUI component. That GUI component is know as the page's *root component*, and it will cover the entire screen. That it indeed does cover the entire screen is easy to verify by giving the component a background color.

::: tip Example

In the app below, the root component of the page has no background color (its background is transparent), and it's the application's default background color (<span style="background-color: aqua; color: black; font-weight: bold;">aqua</span>) we se. So it's hard to tell what space the root component does occupy (but it does still occupy the entire screen).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.text(`This Text component has no background color, so it's hard too see what space it occupies.`)
	}
}
```

:::

::: tip Example

In the app below, the root component of the page has an orange background color, so it's easy to see what space it occupies (the entire screen).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.backgroundColor(`orange`).text(`This Text component has an orange background, so it's easy too see what space it occupies.`)
	}
}
```

:::




## Using multiple GUI components
*But if `createGui()` can send back only one GUI component, how can I use multiple GUI components?* Well, there exists some GUI components whose sole purpose is to contain and position other GUI components on the screen. These GUI components are called *layouts*, and the GUI components they contain are called *children*.

By using a layout, `createGui()` can send back only one GUI component (the layout), but that GUI component can in turn contain other GUI components. And when the layout component is shown on the screen, it will position and show the child components it contains on the screen too. This way we can build a GUI consisting of multiple GUI components!

Let's go through some of the layouts we can use in BagaWork.

## The `Rows` component
The GUI component called `Rows` is a layout that positions its children as rows:

* The first child is positioned at the top
* The second child is positioned below the first child
* The third child is positioned below the second child
* And so on...

All children are as wide as the `Rows` component, and their height is by default just big enough to surround their content. The `Rows` component's children should be passed as individual arguments to the configuration method `children()` (separate them by `,` (comma)).

::: tip Example

Example of how to use the `Rows` component to position three `Text` components as rows. All GUI components are given a background color, so one easily can see the space each component occupies.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Text.text(`I'm the first row`).backgroundColor(`pink`),
			Text.text(`I'm the second row`).backgroundColor(`aqua`),
			Text.text(`I'm the third row`).backgroundColor(`lime`)
		)
	}
}
```

:::

Note, in the example above that the root component (the `Rows` component in this case) occupies the entire screen, including the parts occupied by its children, although it doesn't look like that. The children are drawn on top of the `Rows` component, so their' background is covering the background of the `Rows` component, so therefore we can't see the background of the `Rows` component where the children are positioned in this example.

::: tip Example

This is the same example as before, but only the `Rows` component and the third child are given a background color to show that the `Rows` component's background also is drawn where the children are (underneath them).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Text.text(`I'm the first row`),
			Text.text(`I'm the second row`),
			Text.text(`I'm the third row`).backgroundColor(`lime`)
		)
	}
}
```

:::


::: tip Comma between arguments

When you pass multiple arguments to a method, the arguments have to be separated by a comma, as shown below:

```js
Rows.children(Text.text(`a`), Text.text(`b`), Text.text(`c`))
```

This code can become more readable by writing it on multiple lines instead:

```js
Rows.children(
	Text.text(`a`),
	Text.text(`b`), 
	Text.text(`c`)
)
```

When the code is written like this, some people find it strange that the last argument doesn't end with a `,` (comma). But do you know what? It is actually OK to write a `,` (comma) after the last argument too, so it is possible to write this code like this:

```js
Rows.children(
	Text.text(`a`),
	Text.text(`b`), 
	Text.text(`c`),
)
```

When each argument is written on their own line like this, one usually adds that extra comma after the last argument. From here on, our examples will do that too, and we recommend you to do the same in your code.

:::

### Positioning children
As you can see in the previous example, the children in `Rows` will be positioned at the top of the `Rows` component. You can use the GUI component `Space` as children in `Rows` to push apart the children. The `Space` component is a GUI component who's primary purpose is to simply occupy space, so the other children in `Rows` are positioned where they should be.

If the `Rows` component contains a single `Space` child, that `Space` child will occupy all the space remaining after the other children have occupied their spaces.

::: tip Example

Example of using `Rows` with a `Space` child.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Text.text(`I'm the first row`).backgroundColor(`pink`),
			Space,
			Text.text(`I'm the last row`).backgroundColor(`lime`),
		)
	}
}
```

:::

If you use multiple `Space` children in `Rows`, then the remaining available space of the `Rows` component will be split evenly among the `Space` children.

::: tip Example

Example of using `Rows` with two `Space` children.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Text.text(`I'm the first row`).backgroundColor(`pink`),
			Space,
			Text.text(`I'm the second row`).backgroundColor(`aqua`),
			Space,
			Text.text(`I'm the third row`).backgroundColor(`lime`)
		)
	}
}
```

:::

The `Space` component doesn't show anything, so you can't see it on the screen. But if you give it a background color, you can easily see what space it occupies. While developing, it can be a good idea to give all your components a unique background color, so you can easily see what space they occupy.

::: tip Example

Example of using `Rows` with three `Space` children.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Text.text(`I'm the first row`).backgroundColor(`pink`),
			Space.backgroundColor(`silver`),
			Text.text(`I'm the second row`).backgroundColor(`aqua`),
			Space.backgroundColor(`yellow`),
			Space.backgroundColor(`brown`),
			Text.text(`I'm the third row`).backgroundColor(`lime`)
		)
	}
}
```

:::



## The `Columns` component
The GUI component called `Columns` is a layout that positions its children as columns:

* The first child is positioned to the left
* The second child is positioned to the right of the first child
* The third child is positioned to the right of the second child
* And so on...

All children are as tall as the `Columns` component, and their width is by default just big enough to surround their content. The `Columns` component's children should be passed as individual arguments to the configuration method `children()` (separate them by `,` (comma)).

::: tip Example

Example of how to use the `Columns` components. All GUI components are given a background color, so one easily can see the space they occupy.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`red`).children(
			Text.text(`First`).backgroundColor(`pink`),
			Text.text(`Second`).backgroundColor(`aqua`),
			Text.text(`Third`).backgroundColor(`lime`)
		)
	}
}
```

:::

### Positioning children
Just as with the `Rows` component, you can insert extra `Space` children to push apart the other children.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`red`).children(
			Text.text(`Left`).backgroundColor(`pink`),
			Space,
			Text.text(`Right`).backgroundColor(`lime`)
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`red`).children(
			Space,
			Text.text(`Centered`).backgroundColor(`pink`),
			Space
		)
	}
}
```

:::



## Combining Layouts
So far you might not be that impressed. Not many applications have a GUI consisting of only rows or of only columns like that. But fear not; here's the secret to success: one can use a layout component as a child in another layout component! This way, a wide vararity GUIs can be implemented.


::: tip Example

Example of how to combine the `Rows` component and the `Columns` component to create a layout with a bottom navigation view (learn how to make it functional later).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Space,
			Text.text(`I'm the main content`).backgroundColor(`pink`),
			Space,
			Columns.backgroundColor(`lime`).children(
				Space,
				Text.text(`Home`).backgroundColor(`gold`),
				Space,
				Text.text(`About`).backgroundColor(`silver`),
				Space,
				Text.text(`Contact`).backgroundColor(`brown`),
				Space
			)
		)
	}
}
```

:::

Most real GUIs are built on rows and columns like this, so this is a very powerful technique.





## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq1kVFLwzAQx79KvBc7KKObDKQvUofoHhRxgzncYLG5bWVZUpKUrY5+d9NVy1pafdGHlEvv/ve/++UINI7BP0IoGYIPIadak8c0iGOCB4OCaWLj41zMTX5ChdTg2FBlnukanU6RMQpNogQpE/nfrBBlkLmwkpyh0uC/HSFi4PdcEHSXO54k4IJcrTSaV/C973hm42zhQmz7VZRFs1FxqQxe+pfD55fa9PdJVJ/7Re51N9xEnCkUTpGam4lt0jX24ywfkHO57HTfabhdK5kINpRcKmepkC07boNiqOhH2qTg0Q6bJVOpOLto0qS5/b5UdSp4XTiA3/cstxT8K69kNsFdzO2+FXYVXIHejlYBS/jfMRvHNMSm5QKFJJUJOb0dMRsqSO/65gxEVWkXT3aiwaBeODe3iTFSfNk8ybOWv9TOUP9Q3Aw7cwuU/RrKO2FQBWv8f5DTDTWXOmepiO3fjrCya887q6tmBm2ZfqumP2hxrcFaZJ9YNJZ5) currently displays a page looking like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Hello`).backgroundColor(`red`),
			Text.text(`Crazy`).backgroundColor(`lime`),
			Text.text(`World!`).backgroundColor(`yellow`),
		)
	}
	
}
```

Your task is to change the code, so the page instead looks like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Columns.children(
			Text.text(`Hello`).backgroundColor(`red`),
			Text.text(`Crazy`).backgroundColor(`lime`),
			Text.text(`World!`).backgroundColor(`yellow`),
		)
	}
	
}
```

::::hint

Just changing the root GUI component to another GUI component should do it. But which GUI component should you change it to?

::::

:::

::: exercise Exercise 2

The code in [this BagaWork project](/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==) contains no pages. Your task is to add a new page to the project named `StartPage`, and make it look as the page shown below.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`red`).children(
			Space,
			Text.text(`Text component with left aligned text. And yellow background, of course.`).backgroundColor(`yellow`).left(),
		)
	}
	
}
```

::::hint

Hmm... Doesn't the GUI look like two `Rows`? With the first row being some `Space`, and the second row being some `Text`?

::::

:::

::: exercise Exercise 3

The code in [this BagaWork project](/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==) contains no pages. Your task is to add a new page to the project named `StartPage`, and make it look as the page shown below.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Columns.children(
			Rows.children(
				Space,
				Text.text(`Item 1`).backgroundColor(`red`),
				Text.text(`Item 2`).backgroundColor(`lime`),
				Text.text(`Item 3`).backgroundColor(`yellow`),
				Space,
			),
			Space,
			Text.text(`Main content :)`).backgroundColor(`silver`),
			Space,
		)
	}
	
}
```

::::hint

Oh, this is a tough one... Well, let's see... What does the root component look like? Doesn't that look like 4 columns? And the first column consists of 5 rows?

::::

:::




## That's it!
Good work, now you have learned the basics about using layouts and building more fancy GUIs! 🥳 It takes some practice before you're good at seeing GUIs as rows and columns, but you actually don't need much more than this to create a wide variety of layouts. Just look at your web browser; all GUI components in it are arranged as rows and columns!

Excited about learning some more? Then continue with the tutorial [Fundamentals 5. Changing Page](../changing-page/).