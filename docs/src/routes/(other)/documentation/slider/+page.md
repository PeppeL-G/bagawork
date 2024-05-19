<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Slider`
On this page you find the documentation for the GUI Component `Slider`.

## Introduction
The `Slider` component is a view in which the user can select a number in an interval. The configuration methods `min()` and `max()` specifies the interval.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFqwzAMhl/F6JSCCWnLDvUtp9HDYNAeWpZCTayMMMcxtkJTgt+9Tku7ZLddrF+S9etDA0hrQQxQtgpBQKml9+zjmlvLsCc0yrOoh8IUVDqUhDuSjj7lNyaLe7Ugh9Q5wwxe2KQ59kJhAgQOVasVOg/ia4BagVhyMLIZ990HgENbVR7pACJ76mPU4cTBRrfZ5MNs+0hm2K/tL/QxmbC/d/Vf6p2uo1va1CbJFmkj+2SZZb/wHHoQq/WKwzXGt82TaI+N1dFxRjaDyf3PtspVp+kfNPv4NaX4JOfz5IKncAPqYpIr]

:::




## Setting the initial number
By default, the initial number will be the one between the minimum and maximum number. If you want to use another one, pass that number as the main content to the `Slider`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFqwzAMhl/F6OSCKWvXHuZbTqWHwaA9bDSFmlgpoY5jbIWlBL/7nJZ2yW67SL8s6deHe1DOgeyhaDSChMKoENj7NXOOYUdodWBJ97nNqfCoCHekPH2oM/LZ7TUnj9R6yyx+s1Fz6MXcRogCysZo9AHkoYdKg1wIsKoe7t0WQEBTlgHpE+TLQ38lHY8CXHKbbN7Ntvdigv28/kQfihH7pq3+Uu9Mldz4ajavK8sXKamOr3/pBXQgl69LAdeU128PpD3WziTLCdqEJguXbZnp1tA/cPZpdE4p8NNp9IXH+ANdrpJV]

:::




## Setting the step
By default, the user can only select integer numbers between the minimum and maximum number. Use the configuration method `step()` to change the default step from `1` to another number.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkE1rwzAMhv9K0CkBY/pBDvMtp9HDYNAeNpZCTayUMMcxtkJTgv/7nJZ2yW672K8s69UjjSCtBTFC1SkEAZWW3idv18LaBAdCo3wS9ViakiqHknBP0tG7PGOa3V5Lcki9M4nBSzJLTrlQmgCBQd1phc6D+BqhUSDWDIxsp363AmDQ1bVH+gCxeujPqMORgY1ui8q72e4eLLCf3Z/oUzBjf+2bv9R73UQ33jYmXWfcE9p0xfOMt3JI898hGAwgNtsNg2u885cH2QFbq6PzgnABVfjvXV2oXtM/qA7xK6d4pKfTbJPH8ANaMpSe]

:::




## Adding `Direction`s
Use the configuration method `pages()` to specify which `Page` the user should come to depending on which number she selects. The value should be an object, where the keys represent intervals of numbers the user can select, and the corresponding values indicates which `Page` the user should come to if the user selects a number within that interval.

The intervals can be expressed as strings the following ways:

* A single number, for example:
	* `'18'`: The interval `18` to `18` (matches only `18`)
* A minimum number and a maximum number separated by `_`, for example:
	* `'0_18'`: The interval `0` to `18` (matches all numbers between `0` and `18` (inclusive `0` and `18`))

When the interval consists of two numbers, one of them can be `X`. If the first number is `X`, that means no lower limit exists (i.e. `X` = `-∞`), and if the second number is `X`, that means no upper limit exists (i.e. `X` = `∞`). Examples:

* `'X_10'`: The interval `-∞` to `10` (inclusive `10`)
* `'23_X'`: The interval `23` to `∞` (inclusive `23`)

When the interval consists of two numbers, you can also add `E` (short for **E**xclusive) after the numbers to exclude them from the interval. Examples:

* `'10_20'`: The interval `10` to `20` (inclusive `10`, inclusive `20`)
* `'10E_20'`: The interval `10` to `20` (exclusive `10`, inclusive `20`)
* `'10_20E'`: The interval `10` to `20` (inclusive `10`, exclusive `20`)
* `'10E_20E'`: The interval `10` to `20` (exclusive `10`, exclusive `20`)
* `'10E_X'`: The interval `10` to `∞` (exclusive `10`)

Use the configuration method `page()` to specify which `Page` the user should come to if none of the intervals in `pages()` matches the number the user selects.

::: tip Example

```js
Slider
	.min(0)
	.max(150)
	.page(ChildPage)
	.pages({
		'18_100E': AdultPage,
		'100_X': DeadPage,
	})
```

:::




## Handling selected number
If you want to store the number the user has selected in `Slider` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` to store the number in.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj8FqwzAMhl/F6OSCCWnGDvMtp9HDYNAyNpZCTKwMM8fxbIelBL/7nJZ2yW67WL8k69enCYS1wCdoeonAodHCe/J0Kq0lOAY00pOkp8pUoXEoAu6DcOFZfCDdnKtVcBgGZ4jBb7Jozr1YmQiRQdtric4Df59ASeBbBkZ0877zADDo29ZjeAWeX/Vb0vHIwCa31eTFbHdJVti37Tf0OVmwPw7qL/Veq+SWdcrQbb7JOjHSIk/CvghHa/VV/x7CYARe3BUMTineP1zpDthZndxXlCuw0n/u2lIOOvyD7JC+ZiE9tF5AxGP8AbR8lg8=]

:::

In the example above, the number the user has selected will be stored in `p.iq`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj8FqwzAMhl8l6OSACWnGDvMtp9HDYNBSNpZCTKwMM8dxbYelBL/7nJZ2yW67WL8k69enCbgxwCZoeoHAoFHcueTlXBqT4OhRC5dEPVW68o1F7nHnufWv/BNJeqlW3qIfrE40fieL5twLlQ4QKLS9EmgdsI8JpAC2oaB5N++7DACFvm0d+jdg+U2/Rx2OFEx0W01ezbbXZIV9335Hn5MF+/Mg/1LvlIxuWSc12aRZx0dS5Hma8QO3pJan+vcOCiOw4qGgcI7x8ekGt8fOqGi+glxxle5r25ZiUP4fYPv4NfPxIfUCIhzDDy7JldA=]

:::

In the example above, the number the user has selected will be stored in `a.iq`.

If you want to do something more complicated than just storing the number the user has selected, use the configuration method `handler()` to specify a function that will be called to handle the number the user has selected. In the example below, try selecting a number, and then click the `Button`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkcFqwzAMhl/F0ykBE9qOHRbYILuUHjbG2sPGUqgXK2uYYwdboSkh7z63Wdqmt50s6bekT1ILoqogbiEzEiGGTAnn2PM+qSqGDaGWjnm7TXVKmUVBuCRh6VV8YxAeoylZpNpqpnHHLsSD1qW6g45DbpRE6yD+bKGQEE85aFEe+h0TgIPJc4f0DvFksD+83a05VL7aKLMvtuidEfap+wn94Fywz+vimvrN7FyUbQslLeqgl1JaqsL3iMpCB9MwKkUTTGeTMNoKLRXawKHCjFC+1OUXWvbwyIQP01U8DPlQ76kmMjoizxVs5uZmM0jnNXFoIJ7dzjjs/Xt3P8y+wrJSnn20g9HYiftZ5ImsFf1j7pX/+sezubjVuvsFFq25Ew==]

:::