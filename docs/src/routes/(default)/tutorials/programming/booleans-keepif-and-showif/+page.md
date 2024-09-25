<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Booleans, `keepIf()` and `showIf()`
This tutorial will teach you how to use boolean values in JavaScript, and conditionally keep/remove or show/hide GUI components.


## The boolean datatype
An app often needs to do different things depending on if an answer to a question is *yes* or *no*. Examples of that are:

* In a message app: Do you have 0 messages?
	* If *yes*, show the text *You have no messages*
	* If *no*, show a list with the messages
* In a health app: Is the entered age negative?
	* If *yes*, show the text *The age you enter must be greater than or equal to 0*
	* If *no*, show the text *The entered age is OK*

To represent these *yes* and *no* answers, we can use the boolean datatype in JavaScript. This datatype only have two possible values:

* `true` means *yes*
* `false` means *no*

So instead of thinking of it like the question *Do you have 0 messages?*, this datatype thinks of it like a statement that is correct (`true`) or incorrect (`false`), i.e.:

* In a message app: You have 0 messages
	* If `true`, show the text *You have no messages*
	* If `false`, show a list with the messages
* In a health app: The entered age is negative
	* If `true`, show the text *The age must be greater than or equal to 0*
	* If `false`, show the text *The entered age is OK*

`true` and `false`, like all values in JavaScript, can be stored in app variables and page variables just like strings and numbers.

::: warning Don't use `

Don't surround `true` with the `` ` `` character! If you do, you create the string that contains the characters `t`, `r`, `u` and `e`, and not the boolean value `true` that means that something is correct.

This also goes for `false`, of course.

:::

::: tip Example

Example of an app that uses a boolean page variable.

```js baga-show-editor-code
class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`isGirl = ${p.isGirl}`),
			Space,
			Button.text(`I'm a boy!`).onClick(p.setIsBoy),
			Button.text(`I'm a girl!`).onClick(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
	}
	
}
```

:::

::: tip Naming convention

A constant/variable that stores a boolean value usually has a name that starts with `is` or `has` to indicate that, like:

* `isGirl`
* `isGameOver`
* `isAlive`
* `hasDied`
* `hasBeatenTheGame`

:::




## Conditionally keeping components
Using boolean values we can conditionally keep/remove GUI components using the configuration method `keepIf()`. When you call this method, you should pass it a boolean value, and if that value is `false`, the component will be removed, and not used in the GUI.

::: tip Example

Example of an app that uses `keepIf()`.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text              .text(`1. This Text component doesn't call keepIf() at all, so it will be used as usual.`),
			Text.keepIf(false).text(`2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.`),
			Text.keepIf(true) .text(`3. This Text component passes true to keepIf(), so it will be used as usual.`),
		)
	}
	
}
```

:::

Directly passing `true` or `false` to `keepIf()` is of course not that meaningful. Instead, you can use an app/page variable to pass a boolean value to `keepIf()`, so you pass different values to `keepIf()` depending on what value is stored in the app/page variable.

::: tip Example

Example of an app that uses a boolean page variable to conditionally keep/remove a GUI component.

```js baga-show-editor-code
class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`isGirl = ${p.isGirl}`),
			Text.text(`You are a girl!`).keepIf(p.isGirl),
			Space,
			Button.text(`I'm a boy!`).onClick(p.setIsBoy),
			Button.text(`I'm a girl!`).onClick(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
	}
	
}
```

:::



## Computations with booleans
In the previous example, we kept a special `Text` component using:

```js
Text.text(`You are a girl!`).keepIf(p.isGirl)
```

But how can we keep a special `Text` component if the user on the other hand is a boy (i.e. when `p.isGirl` is `false`)? Just as we can use mathemtical operations with numbers, there are some operations we can use with boolean values. The simplest is the `==` operation, which checks if the value to left of `==` is equal to the value to the right of it. If they are equal, the result of the operation is `true`, and if they are not equal, the result is instead `false`.

So, to check if the user is a boy, we can compare `p.isGirl` with `false` using the `==` operator.

::: tip Example

Example showing different texts to boys and girls.

```js baga-show-editor-code
class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`isGirl = ${p.isGirl}`),
			Text.text(`You are a girl!`).keepIf(p.isGirl),
			Text.text(`You are a boy!`).keepIf(p.isGirl == false),
			Space,
			Button.text(`I'm a boy!`).onClick(p.setIsBoy),
			Button.text(`I'm a girl!`).onClick(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
	}
	
}
```

:::

::: warning Use ==

It's common for beginners to forget to use `==` when checking for equality, and instead write `=`, but then the code will not work as they indend to. The code might still run if you use `=` to check for equality (remember, `=` means the variable to the left should be assigned the value to the right), so it's really important to remember to write `==` when checking for equality.

:::






## Computations resulting in a boolean value
The `==` operation can not only be used on booleans; you can use it to compare numbers or strings too. There are also some additional operations that results in a boolean value that can be used on numbers and strings:

<table border="1">
	<thead>
		<tr>
			<th>Operation</th>
			<th>Symbol</th>
			<th>Example</th>
			<th>Result</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Equality</td>
			<td><code>==</code></td>
			<td><code>5 == 4</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td>Inequality</td>
			<td><code>!=</code></td>
			<td><code>5 != 4</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td>Less than</td>
			<td><code>&lt;</code></td>
			<td><code>5 &lt; 4</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td>Less than or equal to</td>
			<td><code>&lt;=</code></td>
			<td><code>5 &lt;= 4</code></td>
			<td><code>false</code></td>
		</tr>
	</tbody>
</table>

::: tip Example

Example showing different `Text` component based on the number in a page variable.

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 0
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`${p.counter} (it's negative!)`).keepIf(p.counter < 0),
			Text.text(`Zero`).keepIf(p.counter == 0),
			Text.text(`${p.counter}`).keepIf(1 <= p.counter),
			Space,
			Text.text(`It's a big number!`).keepIf(9 < p.counter),
			Space,
			Columns.children(
				Button.text(`Decrement`).onClick(p.decrement),
				Space,
				Button.text(`Increment`).onClick(p.increment),
			)
		)
	}
	
	decrement(){
		p.counter -= 1
	}
	
	increment(){
		p.counter += 1
	}
	
}
```

:::



## Conditionally showing components
The configuration method `keepIf()` removes the component if the argument you pass to it is `false`. Although this often is really useful, it sometimes has a drawback: other GUI components on the screen might not be posistioned where you want them to be. 

::: tip Example

Example showing how some `Text` components "jump around" on the screen when clicking on the button.

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Hi there!`).keepIf(1 <= p.counter),
			Text.text(`How are you?`).keepIf(2 <= p.counter),
			Text.text(`I am fine.`).keepIf(3 <= p.counter),
			Space,
			Button.text(`Next`).onClick(p.increment),
		)
	}
	
	increment(){
		p.counter += 1
	}
	
}
```

:::

To avoid this, we want the components not shown on the screen to still occupy the space they would occupy if they wouldn't have been removed. To accomplish this, we can use the configuration method `showIf()` instead of `keepIf()`. `showIf()` works the same way as `keepIf()`, but the component will still occupy space when it's not shown.

::: tip Example

Example showing how some `Text` components always occupy space on the screen, but they are not always shown.

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Hi there!`).showIf(1 <= p.counter),
			Text.text(`How are you?`).showIf(2 <= p.counter),
			Text.text(`I am fine.`).showIf(3 <= p.counter),
			Space,
			Button.text(`Next`).onClick(p.increment),
		)
	}
	
	increment(){
		p.counter += 1
	}
	
}
```

:::

If you should use `keepIf()` or `showIf()` in your app does of course depend on how you want your app to work.




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

[This BagaWork project](/editor#eNq1UsFKw0AQ/ZVlLjawSBstlFwkipQeFLEFLabQJZm0pelu2J1gS8jFv/DkL/oJJo0pTWgUBA8JM3lv5r15JAURx+Ck4KsAwQE/Esawu50bxwy3hDIwLK9TT3pUPL5GQTgmoelBLLBjlQhppERLdgCKr1k5lEHGIVRRgNqA85LCKgCnx0GKTaG4HwEOKgwN0jM43aqe5nU24xDn+2qT5bJR2dSMH/QP5oum4X6YrJq+Jzn9nPJXZz5UKmBR4q/Z58f729yqXcJhC85l94LDDhx7YFf2JriJo3x1zWbNmWvWo9ANkugv9h7Vqzn3l6so0Cg7JeTROBY+8qo7OsHVyHYqYfuYGC2FZL3B1dzipydvVJRs5AmBJtGj64RIyW+Ze3W08hfuFM0P5AqxGr9NGaXdiPJWEmp3gf8f5NNS0JkpstQs398eYe3WXveIV0f6bYjdOmP3W1QbYc2yL/byX4o=) contains an empty page. Change the code in it, so it functions as shown below.

```js baga-show
class StartPage extends Page{
	
	isShowingFirstButton = true
	
	createGui(){
		return Rows.children(
			Space,
			Button.text(`Click me!`).showIf(p.isShowingFirstButton).onClick(p.showSecondButton),
			Space,
			Button.text(`Click me!`).showIf(p.isShowingFirstButton == false).onClick(p.showFirstButton),
			Space,
		)
	}
	
	showFirstButton(){
		p.isShowingFirstButton = true
	}
	
	showSecondButton(){
		p.isShowingFirstButton = false
	}
	
}
```

This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.

::::hint

The GUI actually contains two buttons, but only one of them is shown at a time! Use a boolean value to keep track of whether the first or the second button should be shown, and use two different click handler methods (one for each button) to change that value to `true`/`false`.

::::

:::




## That's it!
Hurray, now you know how to conditionally keep/remove and show/hide GUI components! 🥳 Good work!