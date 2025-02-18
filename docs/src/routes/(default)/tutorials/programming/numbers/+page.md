<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Numbers
This tutorial will teach you what data types are, and how to use numbers in JavaScript.


## Data types
In JavaScript, there exists different type of values, and we call these different types for *data types*. So far, you have mostly been using the string data type, whose values can be crated by encapsulating some characters between two `` ` `` characters, like `` `This is a string!` ``. You use this for example when you create a `Text` component that should have a background color and some specific text:

```js
// The values `Hi there` and `red` are both string values!
Text.text(`Hi there!`).backgroundColor(`red`)
```

But JavaScript contains many more data types than just strings. Let's take a look at the *number* data type now.



## Creating a number
Number is a data type in JavaScript that represents a number (big surprise! xD). You can create new number values simply by writing them, for example:

* Write `51` to create the number value `51`
* Write `-140` to create the number value `-140`
* Write `6.57` to create the number value `6.57`
* Write `-13.7` to create the number value `-13.7`

::: warning Localization

In some natural languages, such as Swedish, one does not use period (`.`), but a comma (`,`), as the [decimal separator](https://en.wikipedia.org/wiki/Decimal_separator). JavaScript is based on English, and uses period as the decimal separator, so using a comma will not work.

:::

Just as strings (and all data types), number values can be stored in constants and variables.

::: tip Example

Example of an app that creates two page constants that each stores a number.

```js baga-show-editor-code
class StartPage extends Page{
	
	X = 4
	Y = 2
	
	createGui(){
		return Rows.children(
			Text.text(`a: ${p.X} + ${p.Y} is equal to 6.`),
			Text.text(`b: ${p.X} * ${p.Y} is equal to 8.`),
		)
	}
	
}
```

:::

As you can see in the example above, just as we can use the special `${ ... }` syntax in strings created with two `` ` `` characters to insert a string value into it, we can also use it to insert a number value into it (the special `${ ... }` syntax can also be used to insert values of other data types too; it does not only work for strings and numbers).



## Mathematical operations
Most often, an application needs to do computations with numbers, such as computing the sum of two numbers. For each of the ordinary mathematical operations, JavaScript has special symbols to denote them:

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
			<td>Addition</td>
			<td><code>+</code></td>
			<td><code>4 + 2</code></td>
			<td><code>6</code></td>
		</tr>
		<tr>
			<td>Subtraction</td>
			<td><code>-</code></td>
			<td><code>4 - 2</code></td>
			<td><code>2</code></td>
		</tr>
		<tr>
			<td>Multiplication</td>
			<td><code>*</code></td>
			<td><code>4 * 2</code></td>
			<td><code>8</code></td>
		</tr>
		<tr>
			<td>Division</td>
			<td><code>/</code></td>
			<td><code>4 / 2</code></td>
			<td><code>2</code></td>
		</tr>
	</tbody>
</table>

You can use these mathematical operations anywhere in your JavaScript code you can use a number, for example:

* When creating a constant/variable
* In  `${...}` expressions in strings created with the `` ` `` symbol

::: tip Example

Example of an app with some mathematical expressions.

```js baga-show-editor-code
class StartPage extends Page{
	
	X = 4
	Y = 1 + 1
	
	createGui(){
		return Rows.children(
			Text.text(`a: 1 + 2 is equal to ${1 + 2}.`),
			Text.text(`b: ${p.Y} + 2 is equal to ${p.Y + 2}.`),
			Text.text(`c: ${p.X} + ${p.Y} is equal to ${p.X + p.Y}.`),
			Text.text(`d: ${p.X} * ${p.Y} is equal to ${p.X * p.Y}.`),
		)
	}
	
}
```

:::

## Mathematical operations with multiple operands
Just as in ordinary math, you can use multiple mathematical operations at the same time. Ordinary operator precedence applies, i.e. `*` and `/` are computed before `+` and `-`. If you want `+` and `-` to be computed before `*` and `/`, surround them with parenthesis.

::: tip Example

Example of an app using two mathematical operations at the same time.

```js baga-show-editor-code
class StartPage extends Page{
	
	X = 2
	
	createGui(){
		return Rows.children(
			Text.text(`a: 1 + 2 + 3 is equal to ${1 + 2 + 3}.`),
			Text.text(`b: 1 + ${p.X} + 3 is equal to ${1 + p.X + 3}.`),
			Text.text(`c: ${p.X} + ${p.X} + ${p.X} is equal to ${p.X + p.X + p.X}.`),
			Text.text(`d: 1 + 2 * 3 is equal to ${1 + 2 * 3}.`),
			Text.text(`e: (1 + 2) * 3 is equal to ${(1 + 2) * 3}.`),
		)
	}
	
}
```

:::


## Changing a number in a variable
Just as for strings, we can use `p.theVariableName = 123` to store a new number in the variable (in this example, storing the number `123` in the page variable named `theVariableName`). But, where `123` is written, we don't have to write a single number like this, but we can also make use of any mathematical operation we want. A very common thing apps do is to simply increment the value stored in a variable by `1` using an addition operation.

::: tip Example

Example of an app that increments the number stored in a variable by `1` each time a button is clicked.

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Text.text(`The counter variable is currently ${p.counter}.`),
			Button.text(`Increment counter`).onClick(p.incrementCounter)
		)
	}
	
	incrementCounter(){
		// When the computer executes this code, it will:
		// 1. Compute p.counter + 1, by first:
		//     1. Retrieve the current number in p.counter (1 the first time the button is clicked)
		//     2. Compute what "that value" + 1 is (1 + 1 = 2 the first time the button is clicked)
		// 2. Store that computed value (2 the first the button is clicked) in p.counter
		p.counter = p.counter + 1
	}
	
}
```

:::

To increment/decrement the number stored in a variable is very common thing to do in apps, but reading and understanding how code like `p.counter = p.counter + 1` works can be quite tricky for beginners. Especially, it can be very confusing that `p.counter` appears both on the left and the right side of the `=` symbol.

There exists shortcut syntax in JavaScript one can use to increment/decrement a variable by another number, and this shortcut syntax is much easier to read and understand. There also exist shortcut syntax to mutliply/divide a variable by another number.

<table border="1">
	<thead>
		<tr>
			<th>Operation</th>
			<th>Ordinary syntax</th>
			<th>Shortcut syntax</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Increment</td>
			<td><code>p.counter = p.counter + 2</code></td>
			<td><code>p.counter += 2</code></td>
		</tr>
		<tr>
			<td>Decrement</td>
			<td><code>p.counter = p.counter - 2</code></td>
			<td><code>p.counter -= 2</code></td>
		</tr>
		<tr>
			<td>Multiply</td>
			<td><code>p.counter = p.counter * 2</code></td>
			<td><code>p.counter *= 2</code></td>
		</tr>
		<tr>
			<td>Divide</td>
			<td><code>p.counter = p.counter / 2</code></td>
			<td><code>p.counter /= 2</code></td>
		</tr>
	</tbody>
</table>

::: tip Example

The same app as before, but uses the shortcut syntax for increament the number stored in a variable instead.

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Text.text(`The counter variable is currently ${p.counter}.`),
			Button.text(`Increment counter`).onClick(p.incrementCounter)
		)
	}
	
	incrementCounter(){
		// Increment the number stored in p.counter by 1.
		p.counter += 1
	}
	
}
```

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

[This BagaWork project](/editor#eNq1klFrwkAMx7/KkZdZ1ol2G0hfRjfG8GFjTGGTVejRpiqrd+UuZUrpd19rp/OKFRn4cJBc/snlfkkOPE3BzSGUEYILYcK1Zs9rL00ZrghFpFlp577wqTqhQk44Iq7olc+wY9URUkiZEmwXqG6LOqmAwoZYJhEqDe5nDosI3L4Ngi+rFzcpYIOMY430AW5va09Ku5jakJb1jMy62LB2jMZ37++ar5xG90/Zotn3m/zW3XC+SCKFolOHfBqlPER76z3IJFuKA7Km0Kf7jEiKLpVNdIKrwLLbpeNS8yvsHRUaNS+PSP8i+/eWMREbVuDe9K5tWIPrDJwt5jEu06REZOA2CHv6axh7UZacC/MeEE8hW8uMbcbNaM4F6w/ugsMf/P+AXuTp4CeoT0BvNda/Ruk0UD4KQuXN8Pwg3+ecLnTFUrGyfjtC46/9/YU0I7dtEac1x7kNTtnMYlr8AODZqeQ=) contains a page looking like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Columns.children(
				Space,
				Button.text(`-`),
				Space,
				Text.text(`0`),
				Space,
				Button.text(`+`),
				Space,
			),
			Space,
		)
	}
	
}
```

Change the code in it, so it works as shown below.

```js baga-show
class StartPage extends Page{
	
	counter = 0
	
	createGui(){
		return Rows.children(
			Space,
			Columns.children(
				Space,
				Button.text(`-`).onClick(p.decrementCounter),
				Space,
				Text.text(`${p.counter}`),
				Space,
				Button.text(`+`).onClick(p.incrementCounter),
				Space,
			),
			Space,
		)
	}
	
	decrementCounter(){
		p.counter -= 1
	}
	
	incrementCounter(){
		p.counter += 1
	}
	
}
```

::::hint

You will need to:

* Add one variable to keep track of the current number
* Add one method to decrement the counter by one when the first button is clicked
* Add one method to increment the counter by one when the second button is clicked
* Change so the current number in your variable is shown instead of the hardcoded `0`

::::

:::




## That's it!
Good work, now you know the basics about how to use numbers in BagaWork! 🥳 It's not that hard, is it? In next tutorial, [Programming 6. Booleans, keepIf() and showIf()](../booleans-keepif-and-showif/), you'll see more useful examples of how we can use numbers.