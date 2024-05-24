<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 7. The App Class
This tutorial will teach you the basics about the `App` class.



## App structure
As you should know by now, a BagaWork app consists of different pages. However, that is not enough for a BagaWork app to work. For example, the computer would have no idea about which of your pages that should be shown to the user first (when the app starts), so something more is needed. Therefor, a BagaWork app also consists of an `App` class.




## Creating the `App` class
In programming, a *class* is a description of how a *thing* should work. The BagaWork framework contains a class called `App`, which is a general description of how a BagaWork app should work.

When you create a BagaWork app, you should create your own app class that *extends* the `App` class. This way, your own app class will already contain the general description of how a BagaWork app should work, and you just need to write a little bit of code to make it function the specific way you want it to. Great, right? 🙂

::: tip Example

Example showing JavaScript code for how to create your own app class called `MyApp`.

```js
class MyApp extends App{
	
}
```

:::

::: tip Online Editor

In our :online-editor, the app class has already been created for you, and you can view and change the code for it by clicking on the `MyApp` button in the editor.

:::

You can name your own app class whatever you want, but remember that all classes in your app need to have a unique name, so you can't have a page class with the same name as your app class.

To specify how your own app class should work, you override some predefined methods in it (it works the same way as you override methods in the `Page` class, but the `App` class has other methods you can override). 




## Creating the Start Page
When the user starts your BagaWork app, the method named `createStartPage()` will be called in your `App` class. In this method, you should return back the page that should be shown to the user directly when the app starts.

::: tip Example

Example showing a BagaWork app consisting of two pages, and how the app class tells the computer that the page named `FirstPage` should be shown to the user when the app starts.

::bagawork-project[link&app&code=MyApp-FirstPage-SecondPage&baga=eNq9klFLwzAQx79KvKcWwqjKFPOmDw4fBHF7UJywmF5dsUtCcsON0u9u0q4bHTJ8EtrmLsf/7p9fU4O0FkQNyuQIAlQlvWeP21trGW4Ide5ZiOu5nlN8lUNJOCXp6El+YpJ2FXJIa6fZfel8W4i7TSdqoOFQmCpH50G81VDmIM45aLmKE9tewMEUhUd6AZH18WuIm3cONvQbKLtmD10yML6fvzcfkyP3k3V57PvZfPuRWpZV7lAnXWlOUysV8j6bhZYjCp9kMVuWnoWHlsiKOJJFj2eLlP8uvVsTGb0TTwwj00o9KqPzVrtIR3FJpu1WNN33SgcoOWxAXGSB0RbEZZY1vKMyPkXl0PT/sAzO9kcsH1J99WwOWHs0+397gsz45npH5qq/OTNc2SocL96g9+YHEXYJng==]

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

When opening [this BagaWork project](/editor#eNq1UsFqg0AQ/ZXtXBpBgloCxUuxpZQcWkoTaEsNZNExSs2u7I40Qfz3rjEJUWJLDz0oM755b948rIAXBfgVRDJG8CHKudbscRsUBcMNoYg1M3UVipCaJ1LICWfEFT3zFY6sFiGFVCrBjkDztW5JNdQ2JDKPUWnwPyrIYvBdGwRfNxt3FLBBJolGegPfOdTvpq4XNhRGr8NsxaZt0zHerHaPxpuu5/yhzPqe52Z8TOY1Ws7TTLNsL3OxtDpX2LAB33OMvS34V87R2hzXRW6kOxY7rgL9OU2CuMx30fzR3ov80uMozfJYoRi1UEizgkdoH7qTEwKFbCtLtouIUcoFc69vlpZ9nnkn83ItzizoD4Z0WxJJsV/zJE8kf5l9R/3D8AGxer9MG6XXi/JeEKpghf8f5GvK6VI3WSpm9Icj7NzqOidzXWQyhHiDHG8ysLUX1qL+BtD7XAA=) in the editor, it correctly displays a preview of `Page1` in the app. But, if you click on the `MyApp` button and preview the app, you can see that something is wrong: `MyApp.createStartPage()` tries to send back `StartPage`, which doesn't exist! So, when trying to run the app for real, it will crash as soon as it starts running. Fix this problem (please ^^).

::::hint

This problem can actually be fixed in 2 different ways:

* Rename the page `Page1` to `StartPage`
* Change the code in `MyApp.createStartPage()` to return `Page1` instead of `StartPage`

Which you should do depends simply depends on if you prefer to have the first page in the app named `StartPage` or `Page1`. 

::::

:::




## That's it!
Woho! Now you also know the basics of how to use the `App` class! 🥳 The app class is often used for more things than just indicating which the start page is, but you will learn more about that later.