<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. App Constants
This tutorial will teach you what constants in programming are, and how you can create them in a BagaWork app.




## App constants vs page constants
In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it's better to use an *app constant* instead, since all different pages have access to all app constants.

Below we have an example of an app that uses the same hardcoded value (the name of the app, `InfoApp`) at multiple diffrefent pages, including on multiple different pages.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVN9v0zAQ/ldOfkqkLOpICyjiBXhgExqa6B6AdVI9+9JYSu3IudCVKv/77Pzo2ooWEEziIcmdz3f32d932TBelizdMGEkspSJglcVXOrMvC1LwAdCLStw9mamZ+QfYZETTolbuuYLDMIuQhapthquUNd+3S82XU7DmohlppBoK5bebpiSLD2PmOZL37ItxSJmsqxC+sLS0WB/dXZzF7HS1dvL7Ipdds4e8qH9Frp3DrB/qNUh6s9mVcUiV4W0qIMuNKMbVyQm9wrm/Y3Mw2gITksuMK7UDwxG8WjyFNjJmmKBgmCVc4K1qWHFNQEZcDAkLI1F4PempngexgVmFBxU33rvTVEv9U8QHm6c0buayOi+/xW3yrji/gKD1vHXEUbH0sO/7vgNC8mHjq3zux1318M99UTswRE9mURszdIkSZqoE8KLU0LY9n4mJcAZ9Gc9wtlOSrsRVAUcviuJBhZO+SBybrkgtNCBkXC/hk9Ke7QmhmmOPoXcp7RKC3SHMlnrX6xtXSB8VHohzTKe/2vZvDnbaqYfpxMEHmVsnCQtY+PX44Gx5OToDvp8Psb6efg1Y+3GP2XsAh1BzgaN6NC3c16Jeoe/a+Qi/3/5Grd8nb98Nfx0b3BZFu6g/ud71zwCw2E26g==]

This works, but changing the name of the app in the future (for example to `Information App`) will be hard, since there are so many places we would need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.



### How to create app constants
We create app constants the same way we create page constants, but we write them in the `App` class instead. In the code below you find an example of how to create the following app constants:

* `APP_NAME` will have the string value `InfoApp`
* `CREATED_DATE` will have the string value `2023-09-15`

```js
class MyApp extends App{
	
	APP_NAME = `InfoApp`
	CREATED_DATE = `2023-09-15`
	// You can create as many app constants as you want.
	
	// And then you have createStartPage() as usual.
	
}
```



### How to use app constants
In BagaWork, everything you create in your `App` class (constants, variables and methods) are accessible in a special variable called `a` (short for *app*). To retrieve the value of a constant, you would simply write `a.THE_NAME_OF_THE_CONSTANT`, for example `a.APP_NAME`.

To display the name of the app on the `MenuPage` we had before, the following code were used:

```js
Text.text(`InfoApp`)
```

With the app constants we have now, we can instead write:

```js
Text.text(`${a.APP_NAME}`)
```

In this case, when we create a string that only contains the special `${SOMETHING}` thing, we can actually simplify the code to:

```js
Text.text(a.APP_NAME)
```

When the computer executes this code, it will first retrieve the value for the `APP_NAME` constant from the `a` variable, and it gets back the string value `InfoApp`, and pass that to the `Text.text()` method, which then will display that text.

However, on the `MarioPage`, where the text we send to the `Text` component is not only the app name, but looks like this:

```js
Text.text(`InfoApp - Mario`)
```

We have to use the complicated `${SOMETHING}` thing:

```js
Text.text(`${a.APP_NAME} - Mario`)
```

The same is true for the `ZeldaPage`.


### The final solution
So, here's the code for the app using constants, instead of harding the name of the app at multiple places.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVFuPk0AU/isnEx8gYUlXWjVEH6ox7sZ009h98NKNzA6HQgIzZDjYrYT/7nDrLbZqXBMfgHPm3Of7DhXjec78igkVIvOZSHlRwLWM1DTPAR8IZViAkaulXFLzTOfzrzfT2Vt4BUHvFww2oZETLohrmvMVWnYXRRqp1BJmKMvmvDmsu5ia1Q6LVBqiLpj/pWJJyPxLh0meNe20qZjDVBQVSB+ZPxrkT0au7xyWm3wHkV2y6045mGoovx2rUarD3t+VyXHXH9S6cEWcpKFGaXWmJd2aJC6Zl8Xd4UpsZ7Auci7QLZLvaI3c0WRn2IUFC0xREKxjTrBRJay5JCAFpo8QMqUR+L0qyQ1sN8WIrKPsW+2NSstM/qTFY8clvS6JlOzrz7hOlEne3KDVKs192M6pcPuvK37GNORDxVb53Yr75/YBfRz2YJCeTBy2Yb7nebXTMeHpOSZsaz8yFYIn1Y4NNVxAP/EJ5PYCW0dICuDwLQlRwcosAIiYay4INXQthXC/gZtENj0rFxYxNiFkPrlOpEAzmopa/WqjyxThfSJXocrc4LHJ8/Jiy5x+q87AeBK3see1uI1fjAfcvLMbPLD0X+PW78avcWsd/xS3KzQwGRkkopmh3flClHsozpGL+P9Fbdyidvns+fAHvsUsT82gzZ/4rv4BwE1Cqg==]



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq9VA1r2zAQ/StXMWgCwuSrW2sYwx0lZKztaANbWMqi2OfE1JaMJLc1wf99kj23cZaEbrSFxEg66T7ee3crwtKUuCviiwCJS/yYKQXnuZemgA8aeaDArFdTPtX27w3PLsa/LrzzM/gIsy8sQQWnggez+oIvkWm81kzqb2yBrXb1VEvUmeQwlIg64gtrs4aieleQgpJQxAFKRdyfKxIFxO1Swk0Ak1XpjlAiwlCh/kHcTr2emHVxQ0lq/DVeVs5G1aZR3HoKjzXazapZwzCLNrO/EvfK8ZdRHEjkrco01dcp85HWu7Fx6Wjzac2GQgSQCMlNNArvVsx5gq84mLXpdg+fRZwlfEugzYtTfZppLfjWcNeRNCEcC0zLUypa8AR5yUmb7nJYW9oNaih5IG6vYzDPidvvdApaodzbh3Iz5OviPBEZKMQEGMwjDXMhMdiEm4ISsESJ4Asr2lxkErh5DuwxUxeGArT5LRHm7BZlDmopUhC8PBLmI0FFgVmG5YnSVksUGA9gLg3skBgbr+2RBN+4URTSGJlC58UpH4HEMFNY0l2zfVUe7Wd6w89laGDJ5IYjz/cx/X/JDE5O/kimX0umv08yT3m/rlxGViyO48BIHyqYI3LgkY9wy8W95dBI469udeArsjusZLPIuJVJEtlRaejOU+Q8tzIpzffMiFBk2gHbkfMcd7X6FsyOO+9LzLqDDzVmg71t9kjR62I2XjILFoOFHTIxCw7g0ug8YDm1RR/GsQHSmm08MBlw/eyJtweGQb9fT/cxJmlsamlM+Y2RczsKvSCL3wAPT5ZagJIY0+uMQ/f404v394WYPbuHJ6hm/9qna6O8AeUZ1yi9xRs04/dKWGXjGP+7IWzU2u2s3WtajnZZejvf9I6epczipvgNJgtF4w==) contains an app that works like this:

::bagawork-project[app&baga=eNq9VA1r2zAQ/StXMWgCwuSrW2sYwx0lZKztaANbWMqi2OfE1JaMJLc1wf99kj23cZaEbrSFxEg66T7ee3crwtKUuCviiwCJS/yYKQXnuZemgA8aeaDArFdTPtX27w3PLsa/LrzzM/gIsy8sQQWnggez+oIvkWm81kzqb2yBrXb1VEvUmeQwlIg64gtrs4aieleQgpJQxAFKRdyfKxIFxO1Swk0Ak1XpjlAiwlCh/kHcTr2emHVxQ0lq/DVeVs5G1aZR3HoKjzXazapZwzCLNrO/EvfK8ZdRHEjkrco01dcp85HWu7Fx6Wjzac2GQgSQCMlNNArvVsx5gq84mLXpdg+fRZwlfEugzYtTfZppLfjWcNeRNCEcC0zLUypa8AR5yUmb7nJYW9oNaih5IG6vYzDPidvvdApaodzbh3Iz5OviPBEZKMQEGMwjDXMhMdiEm4ISsESJ4Asr2lxkErh5DuwxUxeGArT5LRHm7BZlDmopUhC8PBLmI0FFgVmG5YnSVksUGA9gLg3skBgbr+2RBN+4URTSGJlC58UpH4HEMFNY0l2zfVUe7Wd6w89laGDJ5IYjz/cx/X/JDE5O/kimX0umv08yT3m/rlxGViyO48BIHyqYI3LgkY9wy8W95dBI469udeArsjusZLPIuJVJEtlRaejOU+Q8tzIpzffMiFBk2gHbkfMcd7X6FsyOO+9LzLqDDzVmg71t9kjR62I2XjILFoOFHTIxCw7g0ug8YDm1RR/GsQHSmm08MBlw/eyJtweGQb9fT/cxJmlsamlM+Y2RczsKvSCL3wAPT5ZagJIY0+uMQ/f404v394WYPbuHJ6hm/9qna6O8AeUZ1yi9xRs04/dKWGXjGP+7IWzU2u2s3WtajnZZejvf9I6epczipvgNJgtF4w==]

As you can see, the page's GUI contains the name `James Bond` at multiple places. This name is currently stored in an app constant, so all pages can access it. All seems good!

However, to improve security and anonymousity among the agents, it has now been decided that one should never referr to the agents by name, but only by their code numbers, which for `James Bond` is `007`.

Change the code so the GUI displays `007` instead of `James Bond`. When you're done, it should look as shown below.

::bagawork-project[app&baga=eNq9VA1r2zAQ/StXMWgCwjgfXVvDGN4oIbC2ow1sZSmLYp8TU1sykrzUBP/3Sfbc1lkSutEWbCPpWffx7t2tCcsy4q1JIEIkHgkSphScF36WAd5r5KECs15P+VTb1x+dXUx+XvjnZ/ABZq57PGuQQCLTeK2Z1F/ZAjvd+o6WqHPJYSQRdcwXFrNAWd8rSUlJJJIQpSLejzWJQ+L1KOEsteFU5gglIooU6u/Ec5v1jVmXt5Rkxl7rZm1sXG9aWT0N4SE5u1m3cxjl8Wb0V2KlnGAZJ6FE3qmhqb7OWIC02U2MSUebT2c2EiKEVEhuvFF4t2bOI2/lwaxLt1v4LJI85Vscbf441Z9yrQXf6u46lsaFY4np+ErFC54ir2rSpbsMNki3VRpK7onXdw3nBfEGrlvSmuX+PpbbLl+X5xuRg0JMgcE81jAXEsNNuikoAUuUCIFIUUEhcgncXAf2EKkHIwHaPEuEObtDWYBaigwEr46E+UhQcWiWUXWitNUSBcZDmEtDO6QG4w0eSwiMGUUhS5ApdF685GOQGOUKq3I31b6qjvZXesPOZWRoyeWGIT8IMPt/yQxPT/9IZtBIZrBPMo9xv65cxlYsjuPAWB8qmCNy4HGAcMfFytbQSOOvbnXgC7JfWMtmkXMrkzS2M9KUu8iQ88LKpIJXzIhQ5NoB25HzAne1+hbOTtz3FWe94XHD2XBvmz2U6HU5myyZJYvBwg6ZhIUHcGl0HrKC2qQPk8QQaWHrD0wEXD974u2hYTgYNNN9gmmWmFxaU35j5NyNIz/Mkzfgw5eVFqAqjOl1xqF38vHF+/tCzJ7dwzeoZv/ap09GeYvKM65R+os3aMZvtbCqxjH2d1PYyrXnPvmvjRztQvo77/SPnqXM8rb8De6IQuc=]

:::


::: exercise Exercise 2

It can be fun to read texts containing smileys, such as 🙂, 😁 and 🤣. These are ordinary characters that can be used in the same way as letters (`a`, `b`, `c`, etc.), but they are quite hard to type on a keyboard, since they don't have their own keys on the keyboard, so people often copy-paste them:

1. Search for the smiley using Google, for example "[smiley smiling face](https://www.google.com/search?q=smiley+smiling+face)"
2. Find and copy the smiley from a search result
3. Paste the smiley wherever they want to write it

This is not a very convenient procedure when you need to use the same smiley multiple times in your app. But app constants can be used to make it more convenient for us programmers!

Your task is to:

1. Open [this BagaWork project](/editor#eNq1UcFqg0AQ/ZVlLo0gIRECxUuxpZQeWkoTaEMNZNExSnV32R1pg/jvXTUJUWJ76mFl1jfvzby3FXClwK8gkjGCD1HOjWFP+0Apht+EIjbM1lUoQmpOpJETLolreuE7nDgdQhqp1IKdgOZv3ZFqqF1IZB6jNuB/VJDF4M9dELxoJrYUcEEmiUF6B392rNe2rjcuKKvXMA/lCguV2yV6Yr31A/P5mARxmbernHw0l4GRhzIbWniVX2YapVkeaxSTDgppqXiE7vG2spJTsp/JNtDI9rJkrT9GKRdsfn2zddzLzDuZl4W4MGDYGNJtSSTFYcyzPJP8o3eN5pfmI+IMnqiL0htEeS8IdbDD/w/yLeV0ZZosNbP64xH2vM5nZ319ZDGGeKMcbzEydRDWpv4B1Ngrlw==)
2. Create the following three app constants:
	* `SMILEY_SMILING` storing 🙂
	* `SMILEY_GRIN` storing 😁
	* `SMILEY_LAUGH_CRYING` storing 🤣
3. Add a few pages that make use of these app constants to display the smileys

When you are done, your app can for example work like this:

::bagawork-project[app&baga=eNq9ldFu2jAUhl/lyJo0kCLWAN0Y0lRRVDGkFk2004bWqvGSA4lI7Mh2RBHKxfYU29UutgfcI8xOCEpQYeWiXIRgH58/9vefnKwIjWPSXRGXe0i6xA2plHC17MUx4INC5knQ/1e37FaZ6/pqeHkxuc9u8A6cv79+fndKgcF4OMrnf3wrz1/2Pg7e3/fHk+FokMf//HYKUVcgVXitqFAf6Axr9fxxSqBKBINNwMymeVJKUotMeeihkKT7ZUUCj3RtizAamWNkKcQifDqVqD6T7qldDCZ6nW2ndxaJtWQlOdcb5oMKkM0WNlDMYFU9wCAJtrc+5gvZcP0g9ASyWh7STGLqolWMbrRkQ+mfmtMPA3cOnIHyEWQUhLiEJU9gQZkCxSFEqkUjLhDoV56ohlO3Hhc9T5TiLJeljbJr9YY5d+3aqJtDHKRg7F0LDETADs4vl8Fa55ImM78vlgGb7ZarV6y3yIO2qNO0yJJ0m+3XqZVb2NxrYXHg57XwxaqKO4UIKZPaUaoyWzlDWPgcFoIrzGZMIgQyM1xTeJqpzjl1505hZlGe9Z242p2TDNfbTkGrtY9W4e7RYJnKOpwVSA5R4vp5inlVXMpAIoIfyFc+Cp2Ayn8epG9adl6BrQ3T9j6mW5V+NLTll+4AxKHZ7pqxT4W3ztEtSILLI4Sp4NGGMy5RPlfldjLM7eama99gFIcaU6V7V1j35Hw47XlJeISu3dPt2JReZryhxMDunO1k0edhErFHHrC9cAvbiJck/7N2gnLP4vqjXbXURSsoL5hC0ZsdoXd+0gX2UhqWArT+2dPKyT4pratGTndFmjtzmqfOUz5B6V36D8CQTJs=]

:::




## That's it!
Great work, now you also now how to use app constants in BagaWork! 🥳 And constants are great, but variables are even more usefull, so let's take a look at them next.