<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterText`
On this page you find the documentation for the GUI Component `EnterText`.

## Introduction
The `EnterText` component is a view in which the user can enter some text.

::: tip Example

In this example, the GUI consists of only the `EnterText` component, so it covers the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVkEFrAjEQhf9KeCcLoVhLD81tDyIeCoV6sHQFw2ZWxDUbkllUlvz3ZhWXXW9ekjczmfc+0kI7B9WiqA1Boah0COLrkjkn6MxkTRBJt7nNufCkmX5Ye/7WO5q8XLs5e+LGW2HpJAbDbhZzGxElyroy5APUX4u9gXqTsPrY5V0XIFGXZSBeQ03v+jfpuJFwyW20eTNb3ooRdp/eo3fFgH3R7B+p55bJr9L7nlfiDDV7n0lc0v3xeYdY0dFVyWQEM8rPwmFZZqap+AmALvuV0zHZbgefton/Z0aPIg==]

:::

::: tip Submit button

A `Button` can be added to the GUI to serve as a submit button (takes the user to the next `Page` when clicked, the same as pressing the enter key in `EnterText`), for example:

::bagawork-project[app&link&code=StartPage&baga=eNqVUdFKwzAU/ZVwX+wgFDfxwb7IFJE9COIGKmbQ0N66YpeE5JZtlj777if6JabdOlvxxZfk3pzcc05OKpDGQFRBolOECJJCOsfudlNjGG4JVeqYryuhBCUWJeGcpKV7+YrBqD0VZJFKq5jCDeuBDVYLVUPNIdNFitZB9FJBnkI05qDkutFrB4CDzjKH9ATRaVc/+7pecjCebTC5J5vtm4Hto/rRetP0vN+W+W/XD3rjwmSVF6lFFewhQXMjE+yahWcLyS9B/LiSdOLYTpeWNS+4jEf8z5lrXbgjm6AbRWhbHpe/YzAehabwt1ftU4K4hVvCMAx7lIKuSiKtDupfH589sKt+kuawhWhyNuGw8/v5RRffAtdejoYxDpKburdZNk3Lgv4RXS+XuPfdy/obZ+3UVg==]

:::



## Adding an initial text
The text passed as the main content to `EnterText` will be used as the initial text in the component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj0FrwzAMhf+K+04tmLF17DDfciijh8FghW0shZpY6cJSx9gKawn+73Na2iW79WI9SdbTpw7aOagORWMICkWtQxDPh8w5QXsma4JIusttzoUnzfTK2vOL3tJ0dqzm7Ilbb4WlHzFo9r2Y24goUTa1IR+gPjtUBupOwupdv+84AImmLAPxO9TtWX8kHdcSLrmNJk9my1Mywr5sv6D3yYD9qa3+Uy8sk1+l/zecnunmzVdM4os8TTZ/N0jsoeb3c4lDig+PZ7AV7VydjEeAI6YsfC/LzLQ1XwE14BlAxHX8BeMklhY=]

:::




## Adding a placeholder text
The configuration method `placeholder()` can be used to show a text in the `EnterText` component when it's empty. Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KeJMLorQpHarNQykZAoFmaKkDFvY5DXVkIZ1pgtF/r6yQ1O7WRXp3p/fu0wBtLdSAqqsJClWrvRerU26toCOTqb2IeihMwZUjzfTK2vFa7yi7Sd2CHXHvjDD0LSbDcRYKExAkmq6tyXmojwH7GupewujDuC8ZINE1jSd+g7q76Peow1bCxrSZ8xy2PBcz7Ov2K/pYTNhf+v1f6mfD5Dbx/a1tdUWfKTwrU1uMkOXvTySOUIuHhcQp3o9PF7wNHaKZ55gzstx/LZu87lv+B1qi4nhk5QQibMMPuKuYow==]

:::





## Going to next page
If the `EnterNumber` contains the cursor (has focus), the user can go to next page by pressing the enter key (`↵`). The default next page is the current page.

Use the `pages()` configuration method to specify which `Page`s the user should come to depending on what text she enters. The value should be an object, where the key represents the text the user can enter, and the value for each key indicate which `Page` the user should come to if that text has been entered.

Use the configuration method `page()` to specify which `Page` the user should come to if none of the keys in `pages()` matches what the user has entered.

::: tip Example
```js
EnterText
	.placeholder(`Enter name`)
	.page(UglyNamePage)
	.pages({
		Peter: NiceNamePage,
		Lily: () => new BeautifulNamePage(),
	})
```
:::

::: warning Keys with spaces

In JavaScript, when creating an object as in the example above, the keys can't contain white-spaces and some other special characters. If you want to use that, you need to surround the keys with either single quotes (`'`) or double quotes (`"`):

```js
EnterText
	.placeholder(`Enter name`)
	.page(UglyNamePage)
	.pages({
		"This is ok": ThisIsOKPage,
		'This is also OK': ThisIsAlsoOKPage,
	})
```
:::




## Handling entered text
If you want to store what the user has entered in `EnterText` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` that should be used.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj0FLxDAQhf9KmFMXwqIrHsytB1n2IAguotiFhmSqxW4akiluKfnvpilbWm9eknlvMm++DCCtBTGAajWCANVI79lTn1vL8EJotGexHgpTkHIoCV9IOnqWn5htkluQQ+qcYQZ/2KI59kJhAgQOVdtodB7ExwC1BnHLwcjzuC8NAIe2qjzSG4iba/0e63DiYGPaanIKO0xihT1vn9FHsWDfd/Vf6kdD6I7x/dY2UuFXCs/KZDNVU19utvZVRmsS87c4XEDs7nYc+njfP1xZj3iOSbRmXmHm/vtQ5bpr6B+cCZHikZULiHAKv689nUw=]

:::

In the example above, what the user has entered will be stored in `p.city`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj0FLxDAQhf9KmFMXwqIrHsytB1n2IAguotiFhmSqxW4akiluKfnvpilbWm9eknlvMm++DCCtBTGAajWCANVI79lTn1vL8EJotGexHgpTkHIoCV9IOnqWn5htkluQQ+qcYQZ/2KI59kJhAgQOVdtodB7ExwC1BnHLwcjzuC8NAIe2qjzSG4iba/0e63DiYGPaanIKO0xihT1vn9FHsWDfd/Vf6kdD6I7x/dY2UuFXCs/KZDNVU19utvJVRmsS87c4XEDs7nYc+njfP1xZj3iOSbRmXmHm/vtQ5bpr6B+cCZHikZULiHAKv6YKnT0=]

:::

In the example above, what the user has entered will be stored in `a.city`.

If you want to do something more complicated than just storing the text the user has entered, use the configuration method `handler()` to specify a function that will be called to handle the text the user has entered. In the example below, try entering some text, and then press the enter key.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUcFKxDAQ/ZUwpxbCoiseDCj0ILIHQXAPil1oSKZusZuGZIpbSv/dpGVr681LMvPezLx5SQ/SWhA9qEYjCFC19J49d5m1DM+ERnsW4j43OSmHkvCVpKMX+YlJOqI5OaTWGWbwmy3IyA25GWDgUDa1RudBfPRQaRDXHIw8Rb2xATg0ZemR3kBcXeL3EA8HDjZMW3VOw3ZTslp7Vp9Xj8li96e2+rv1oyF0+1A/oTltbC0VHkeRpBhppirqinSuOEqj68BiJFHHbnb/wGTAaAmmv4/A4Qxie7Pl0IX79u7ibI+noEdrhytTmf/alZlua/qHq6i+oXAkRbH4icPwA4sKrsg=]

:::