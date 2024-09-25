<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. Pages
This tutorial will teach you how to use pages in BagaWork.

## App structure
A BagaWork app consists of different *pages*. Each page has its own Graphical User Interface (GUI), and one page at a time is shown to the user. When the user has interacted with the page (for example clicked on a button in its GUI), the user will come to the next page, and the app will show the GUI of that page instead, and so on.

::: tip Online Editor

In our :online-editor you can very easily see a preview of the GUI of all the pages in your app, as well as lines between them indicating how the user can navigate between them. Try clicking on a page there, and you will see the code for the page, as well as an interactive preview of the page.

:::

## Creating a page
In programming, a *class* is a description of how a *thing* should work. The BagaWork framework contains a class called `Page`, which is a general description of how a page in BagaWork should work.

When you want to create a new page in your BagaWork app, you should create your own class *extending* the `Page` class. This way, your own class will already contain the general description of how a BagaWork page should work, and you just need to write a little bit of code to make it look and function the specific way you want it to. Great, right? 🙂

::: tip Example

Example showing JavaScript code for how to create your own page class called `MyPage`.

```js
class MyPage extends Page{
	
}
```

You can name your class whatever you want, but each page in your app must have a unique name. Below is an example of another page class, this time named `StartPage`.

```js
class StartPage extends Page{
	
}
```

:::

::: warning Don't freak out!

If you have never programmed before, you are probably wondering *what the heck do all these words and curly brackets in the code above actually mean?!* But don't worry about that; just accept that this is the code that we have to write to create a new class that extends the `Page` class.

You know, a sentence in English starts with a capital letter and ends with a period, question mark, or exclamation mark (`.`, `?` or `!`), etc. Just as those rules exist in the English language (called grammar), we have rules in all programming languages (called syntax), and we must follow the syntax of the language we write our code in. So the code above is simply the code we have to write to create a new class extending the `Page` class in JavaScript. There is really nothing strange with it; just accept that this is the code we have to write 🙂

:::

Between the curly brackets `{` and `}` in the class we can write code that describes how the class should work. You will soon see an example of this.

::: tip Online Editor

In our :online-editor you can create a new page simply by clicking anywhere on the empty space, and then select a page template. The new page will have the same code as the page template you select, so no need to memorize the code above by heart; you will get it automatically from a page template 🙂

:::

## Tailoring a page
You of course don't want all of your pages to look and function the same; some should maybe have buttons, others should display some text, etc. Therefor, your own page classes need to contain different descriptions of how they should work. You indicate these differences by adding different pre-named *methods* to your page classes, and then you *implement* the methods differently in your different page classes.

### Tailoring the GUI
When a page needs to show its GUI to the user, the method `createGui(){ }` in the page class will be called. When it is called, the code you write in the method will be executed. In this method you should create and send back the page's GUI.

::: tip Example

Example showing JavaScript code for how to create two different pages with different GUIs.

::bagawork-project[editor&code=AboutMePage-AboutSwedenPage&url=http://localhost:8080/editor/#eNqdkt9rwjAQx/+V271MoYg/5kvf3MOGDzJBHzamYGyuWohJSVJUSv/3JUatPzY2Bk25NHf5fr69K5HlOcYlJooTxpgIZgyM9oM8B9pZktyAi8uZnFm/Ek3M0sQybcdsRY1mOLGabKElDJaqsCPyR/57FcoqrCJMleCkDcafJWYc406Ekm285uE2jFClqSH7jnH7FH+4uIpCfrfOp0RJ/nK47+eyeYS5w7gSDAzDsLlyfAF+9u03ZW36tchu7U5dasu6V2MxBLaBMVnSD4vm0Xvl6HaOvO3I9hj32mczvV9ZJlviJP/PE+ofDaSCrSAzsBQFAZMc9iSE2rZuKftHyk7/TPl0Sdm9ofQ0Q/lm16RDK+45/VLymVKl60m5mIu/OZmuHb17GPh+QibBaYLywhDw6j9+0hykrhHfSZ5a0q9bchyUKW1y4WD8wMyrL5PCEUs=]

The GUI in the pages above will just contain some text. To specify that, we add the method `createGui(){ }`, and:

1. In JavaScript, use `return` to indicate what is written to the right side of `return` should be returned back from the method (in this method, what we return back is what will be shown on the screen)
2. To the right of `return`, use the GUI Component `Text` (a GUI Component we can use to display text)
3. To the right of `Text`, call the configuration method `text()` to indicate which text the `Text` component should show on the screen
4. Between the parentheses in `text()` we use two `` ` `` symbols to indicate the start respective end of a *string* (a JavaScript value containing text)
5. In the string (between the two `` ` `` symbols), write the characters the string should contain

:::

::: warning Don't freak out!

If you have never programmed before, the code and the description of the code above might seem very complicated, but you don't really need to remember all the details how of it works. For now, it's enough for you to just know that you can use `` Text.text(`Hello`) `` to create a `Text` GUI Component that displays the text `Hello` to the user. Easy as that! 🙂

:::

::: tip Online Editor

In our :online-editor you can simply click on a page to show the code for it. After you have modified the code, the changes will be saved automatically, but you might want to click on the `Refresh Preview` button to see the result of your new code.

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq1kl1LwzAUhv9KODeuEEZXGUhvpIrILhRxAx12sNCebsMuKckpbpT+d9PVlbWsEwQvGs7Jez6evLQAkWXgFxCpGMGHKBXGsKd9kGUMd4QyNszGRShDqr5IoyCcktD0IlY4cGqFNFKuJWuE6rasm0ooOSQqjVEb8D8K2MTgjzhIsa02HlqAg0oSg/QOvnuM5zYuFxwyO6/VWQ+b1EkLvNnfwFdJh/4x33S5Z7Z8SPYYLJdOi53DDnzPtVB78K/dBmiG2yy1w1pgLZbAfE6SIM7TvwC9qi8zjNabNNYoB7UU0jQTEfJjdgIdaGR7lbODMYzWQrLRze3S4ec771Wab+WZBd3CkO5yIiV/1jyrk5G/1M7RXCg+Kk7nR6mt9DpWPkhCHazw/418Wwu6MpWXmtn5/Ra23jpyT+rayrhP8Xp7vHHP1o5Zi/IbAX5ZWg==) currently displays an empty page. Change the code in it, so it displays the text `This app is cool!` instead, as shown below.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Text.text(`This app is cool!`)
	}
	
}
```

:::


::: exercise Exercise 2

The code in [this BagaWork project](/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==) contains no pages. Your task is to add a new page to the project named `StartPage`, and make it look like the page shown below.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Text.text(`This is the StartPage!`)
	}
	
}
```

::::hint

When you add a new page, it will already contain some code for the GUI. You can simply delete most of that code, and then write your own code to make the page look like as shown above.

::::

:::

## That's it!
Now you should know the role of pages in BagaWork apps, good work! 🥳 When you are ready to learn some more, continue with [Tutorial 3. Configuring GUI Components](../configuring-gui-components/) 🙂