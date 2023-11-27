<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 7. `onBefore()`
This tutorial will teach you the methods `App.onBefore()` and `Page.onBefore()`.


## `App.onBefore()`
Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your `App` class that is named `onBefore()`.

For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:

```js
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = 8
	
}
```

But, this is not a good way to do it, because if you want to change `X` or `Y` to another number in the future, then you must also change `SUM` to another number. It would be better if `SUM` could be computed automatically, so one would just need to change `X` or `Y`.

::: warning What about using the a variable?

You might think one can use the special `a` variable to achieve this, like this:

```js
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = a.X + a.Y
	
}
```

And that is very good thinking of you, but it does unfortuantelly not work; the special `a` variable can only be used inside methods in your `App` class, and can't be used when your app constants/variables are initialized.

:::

So, the proper solution to this problem is to use the `onBefore()` method in your `App` class. When the special `a` variable is created, it will contain all your app constants/variables/methods, and then your `App.onBefore()` method will be called on it (if you have one), in which you can set all constants/variables to their correct values.

::: tip Example

Example of an app that uses `App.onBefore()` to correctly initialize a constant.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNpdkMFqwzAMhl9FiMFaFtJsZZfADttl7FAYtGMNa6FuorSGxA62urYEv/vshaTrDjafZEn+9bcomgbTFnNdEKaYV8JamJ2fmwboxKQKC57blVpxOEt4gscAmYdpgPnHzGMCkwl87mW+B6kkS1GBOtRbMnAk2MlvAtYQSgtNVt0y1IKZTARWqpxAMhxlVcG2K1Y+YSHXxlDO/SCpQKsXKrWh0TjuBV1SnUYWcadIxEu483cW0q4vzw0JpjkLw+9id+kyxAejYHj40+TQRVjqqiBjMf1qURaY3keoRB0c+23BCHVZWuIlpknPmWe3jrDx8646u2FvXXBl/PD/YH4I2mv1rwf5X/fCl8fsr9HmpvWbO796gMx5JwJ4T9xmfLVVhCdMHxIv94zpNBmkLqhuKv9NkLx2P0yeueU=]

:::





## `Page.onBefore()`
The special method `onBefore()` in your `Page` classes works very similar to `App.onBefore()`: `Page.onBefore()` will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.

::: tip Example

Example of an app that uses `Page.onBefore()` to update how many times the user has visited that page.

::bagawork-project[app&link&code=StartPage-Page2&baga=eNrFU+9rnEAQ/VeWodCTLqK2gSCEYkoJ+dAfNCHt0QvcRsecRHdld01ziP97djXa03rhSj7kg7LrzLx5895YAytLCGuIRYIQQpwzpciXbVSWBB808kQRc65XfKXtE0tkGi80k/o7u8WF00W0RF1JToaA/dp0RQ00FFKRJygVhL9ryBIIfQqcFbZjWwIURJoq1L8g9Prz0pybawqlwRtVdmDn3WVEfOg/kLeXgT2vihuU39KrTGVakRPi9RHBTzEV8u9ApTtJfndC/J2peinOqmwqwg/xR7nxJssTiXzRhVb60jBytXkt1ktRkQ27R3JvoTEhepMpYsckb+pp44borEDlrh3aQ51W2hB+AjsTRIt2zGDtuBZk0V76dGdkBYUHCAPPaLyF8L3nNbRTNXhO1RZvXtG9Ikw53rD4zhIdHOrJDh9miB598J+IBv0iXGJR5qblaCFGbCN1d55GSZU/swj/2P0SZy9KFiOd8TmSSLbG61ZYYzLjxD/+uGPkuPKTyKuCzzSYJk424KvoteRVnjv0wLIlqsPq5jbJShilGuWcgvaPH9Zq5M1nbkqiW3xtZ35umH6rrDmSmO77PRkp5nvzgo2Tjg5ICg5BCvYg7TL8H0+um0e+KiPj]

:::





## That's it!
Wow, wow, wow... Now you know about `onBefore()` too! 🥳 Excellent work, soon you'll be fully experienced programmer. Just 999 more things to learn before that 😉