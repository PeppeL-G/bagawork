<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Numbers
This tutorial will teach you what datatypes are, and how to use numbers in JavaScript.


## Datatypes
In JavaScript, there exists different type of values, and we call these *datatypes*. So far, you have mostly been using the string datatype, whose values can be crated by encapuslating some characters between two `` ` `` characters, like `` `This is a string!` ``. You use this for example when you create a `Text` component that should have a background color and some specific text:

```js
// The values `Hi there` and `red` are both string values!
Text.text(`Hi there!`).backgroundColor(`red`)
```

But JavaScript contains many more datatypes than just strings. Let's take a look at the *number* datatype!



## Creating a number
Number is a datatype in JavaScript that represents a number (big surprice! xD). You can create new number values simply by writing them, for example:

* Write `51` to create the number value `51`
* Write `-140` to create the number value `-140`
* Write `6.57` to create the number value `6.57`
* Write `-13.7` to create the number value `-13.7`

::: warning Localization

In some natural languages, such as Swedish, one does not use period (`.`), but a comma (`,`), as the [decimal separator](https://en.wikipedia.org/wiki/Decimal_separator). JavaScript is based on English, and uses period as the decimal seperator, so using a comma will not work.

:::

Just as strings (and all datatypes), number values can be stored in constant and variables.

::: tip Example

Example of an app that creates a page constant that stores a number.

::bagawork-project[app&link&code=StartPage&baga=eNrFk19r2zAUxb/KRQwab8bU6doFwxjOyEoe+oc0axOWsmj2dROmSJ4k0wbj7z6pbtwoOCN92oPNlaXfvT7n2CWheU6ikiQiRRKRhFGl4GId5zngk0aeKjB1OeMzba9v8e3VaDge/Lz8ftEfjOAzhJ82e4lEqvFGU6mv6QN2vJrSEnUhOTQb9mlVQxWpfJIJlqJUJPpRkmVKotAnnK7s2zwjxCciyxTqCYmON/XU1NW9T3LTzyHrZsN64Yhq5jfC7KJRNjFaPtpiaoquq+m8WO6qGYlHFSSLJUsl8k69NdNj0zrQ5taZ0wjelXkwqeADhLBUgH8KykALOA3mnt9C/NoibDGtHOxsD5Y02Ps2rPeKeY7zPnkyJvWMpWsSnYRnGzvHuMqZEe3Y6jgZq9/DLE4L9g87Be9jJuTrV7A1+8223uQ0wTbtsURYiwKeQwe9oBzC3pctn1zyq2DFircM2D040/1CGw0vYy7F3AusNx1eMOb5B2JTVIdxbQFZC+NMo2xz0P43dTbdnWwG3CDxA/7vZO4WVB8pG44EM31/Jo5j4XG7Ye6h0wMOdQ/p1N3TafsN35LJffUXjUfliA==]

:::

As you can see in the example above, just as we can use the special `${ ... }` syntax in strings created with two `` ` `` characters to insert a string value into it, we can also use it to insert at number value into it (the special `${ ... }` syntax can also be used to insert values of other datatypes too; it does not only works for strings and numbers).



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
* In  `${ ... }` expressions in strings created with the `` ` `` symbol

::: tip Example

Example of an app with some mathematical expressions.

::bagawork-project[app&link&code=StartPage&baga=eNrFU11r2zAU/SsXMVjcGVNnX8VQhjOykYe2I83ahKYsmn3dhCmSJ8mswfi/T4obLzJOSZ/2YHOlq3Ouzjl2SWiek6gkiUiRRCRhVCm42MR5DviokacKTF3O+Vzb50t8czUeTYY/Lr9fDIZjOIfw466XSKQarzWV+ht9wJ5Xo7REXUgOTcPuVjWoIpVPMsFSlIpEdyVZpSQKfcLp2t5mCyE+EVmmUE9JdLqrZ6au7n2SGz4HWZON6oUjqpnfCLOLRtnUaHlni5kVBW8gdHV9LVZtRWPxRwXJcsVSibxXt+Z6YugDbV69BY22TH1YKcDfBWWgBbwqt3tVsPD8DszPyJzIg1nVATTbz0GTGjq10CeONn5qWrZxgCFtGE4OM5y0GDwnUJ88Gu/PTFIbEr0NP+xSmuA6Z8ZHJy0noFj9GmVxWrBnUhJ8gJmQ/z6uvdkvTuo6pwl22RBLhI0oYPstgV5SDuHZpz3LXORnwYo17xjQPjjXg0IbDU9jLsXCC6w3PV4w5vlHwmaojsN1BWQtjDONsstB+zvW2fRb2Qy5gcQP+L+TuV1S/VrZcCSY6YczcRwLT7sNcw+9P+JQ/xim/gGm/Ru+JJP76i8iUf8j]

:::

## Mathematical operations with multiple operands
Just as in ordinary math, you can use multiple mathematical operations at the same time. Ordinary operator precedence applies, i.e. `*` and `/` are computed before `+` and `-`. If you want `+` and `-` to be computed before `*` and `/`, surround them with parenthesis.

::: tip Example

Example of an app using two mathematical operations at the same time.

::bagawork-project[app&link&code=StartPage&baga=eNrFU2Fr2zAQ/SuHKMzujKldthXDGM7IRj60G2napSxl0exzE6ZIniSzBuP/PjleXCvYJf20DxaS7t47vXvnktA8J1FJEpEiiUjCqFJwuY3zHPBRI08VmH254Atdf5/i2y/TyWz84+rmcjSewnsI3u1jiUSq8VpTqb/SB3TcBqUl6kJyaAP1bdWAKlJ5JBMsRalI9L0k65REgUc43dSv2UGIR0SWKdRzEp3t93dmX917JDd8FrIhmzQHS1RbvxVWH1plc6MltKV8LtaHIqbij/KT1ZqlErnThBZ6Zhh9bRZnSSMI4DWE5juHtQL8XVAGWsBJ2d5X/tL1erA/G+xJmfvzaoDAhJ6jSKIn+OHGJmuI2nWIMN3rOR3Qczr8GIzA2SW5PehOpIN3reHwyKPx8cK4viXRefB27/gMNzkzBlnOW2bH6tcki9OCPeO44CPMhHwa1E7tF4/AdU4T7GtCLBG2ooDdXIJeUQ7BxYdOw2zkR8GKDe8pcJi40KNCGw3/ylyJpevXvXF4wZjrHQm7Q3Ucrs+guoVxplH2dbD+tRtvwgNvxtxA4gf83858W1H9StXmSDDVhz2xOhac9TfMTnpzRFJ4DFM4wNR94Us8ua/+AoxaEBo=]

:::


## Changing a number in a variable
Just as for strings, we can use `p.theVariableName = 123` to store a new number in the variable (in this example, storing the number `123` in the page variable named `theVariableName`). But, where `123` is written, we don't have to write a single number like this, but we can also make use of any mathematical operation we want. A very commonthing apps do is to simply increment the value stored in a variable by `1` using an addition operation.

::: tip Example

Example of an app that increments the number stored in a variable by `1` each time a button is clicked.

::bagawork-project[app&link&code=StartPage&baga=eNrFVGFr2zAQ/SuHGMxmxq0zthVDGG7pRj60G2m2rixlUexzIyrLRpbThpD/Psmq3SikI/20QBI5d+/p7t27rAmtKhKvSVpmSGKSclrXcLFKqgrwUaHIatDn9VRMlXl/SX5+G48m538uf1ycno9hCNGnLpZKpAqvFJXqO71Dz7coJVE1UkAfML9uLGhDNgHJS56hrEn8e01YRuIoIIIWppoWQgJS5nmN6heJj7vzjT5vbgNSaT4HaclG9sFpqr+/b8w89J2lZSMUStOR29DXhu22Mi4f6jBdMJ5JFJ4NTdVE84ZKf3izyQKhI1xSyeicI7Aa0kZqhOIreLOuwqeMTTjzg47ktFGqFE80I6FLKDSgI5v54YKKjKP0qpB10TMb9C2Hv6XvVO0m9a0cHcH1AgWottSiakyt+IipPtT6V1Otli8ApuCBcR73sCiEMwuAvgd4B1EA8xXkTNbqOde8dP4YlWS4RHubFQFEU8w1koktGi9qU1oWUKywiHkrSisgZ+k9Zr5zweC5oIcFVTAlynwtKW9wSkxpBqqpzWkIg1deoemvVClNHlWdVpmlB89h20vkdGhZnxseuho6uxGQR23jE236FYnfRx87w0+wqLh2pmN8x+tJfT/Kk6zh/zB8KU4x1231jnB880rvX1U0xWDPJiRat1XZQLuWRkEB0cnnLcO7yLOSN4XYc8Fu4s6mXJZ6NYw2nmg494MDYTdYH4brIu5ylSLJt3dq55/NzmawM5tzM+vkDv/3ZK61m9/WZjgS9O0vz8RRLDreL5ib9OGApMEhTIMXmLYrfM1Mbjd/AaqZfIE=]

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

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+KEIPZzLh1xrZiGMMp2chFu5FmH2Upi2IfN2ayZPTR1Rj/98lV7EYmHenVLmwkn/O+Ouc8coNJVeG4wSnPAMc4pURKdFEnVYXgXgHLJDLrZsVWqns+Jt8+L+bL2a/LrxfT2QK9R9G7PpYKIAquFBHqC7kFz7cqJUBpwdAQ6L62VtTiNsA5pxkIieOfDS4yHEcBZqTsqnmQ4ADzPJegfuD4tF9fm3V7E+DK+DlKaza3G6ep4fyhsW4zdJZyzRSIriO3oU+6GLey4H9kmG4Lmglgng2t1NL4hsq8vPVyC6g3vCOiIBsKqJAo1cIoFK3Ri6YKdxltuPaD3mSqleJsZzNnpoTSCHqztR9uCcsoCK8Kiz56boO+9fD35rtS46ShlZMT9GivTL1MlxtTrlRcQIYKhoYC0aZGUWhljx9f7SY1oAzwvZn6mWFU4/h19Lbns4SyomaQDicHTSJ/z/Mk0/QffDibQm5KGxpw2nwmqquKpBAcAJcIQDXX6OEWmbEQhqKzD3t8XOU5p7pkBw4YJ47AXnJDspuNxzSlfnCk7Brkcbo+4t4FzpJ8/wqMfkTLZjJiM+tgJ7fwv8l83xL1UnZwBDKnP83EmVh0enhgbtKbI5ImxzhNnnDar/A5TG7av6mfDC8=]

:::



## That's it!
Good work, now you know the basics about how to use numbers in Bagawork! 🥳 It's not that hard, is it? In next tutorial, you'll see more useful examples of how we can use numbers.