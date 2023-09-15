# 7. The App Class
This tutorial will teach you the basics about the `App` class.



## App structure
As you should know by now, a Bagatell app consists of different pages. However, that is not enough for a Bagatell app to work. For example, the computer would have no idea about which of your pages that first should be shown to the user, so something more is needed. Therefor, Bagatell apps also consists of an `App` class.




## Creating the `App` class
In programming, a *class* is a description of how a *thing* should work. The Bagawork framework contains a class called `App`, which is a general description of how a Bagawork app should work.

When you create a Bagawork app, you should create your own app class that *extends* the `App` class. This way, your own app class will already contain the general description of how a Bagawork app should work, and you just need to write a little bit of code to make it function the specific way you want it to. Great, right? 🙂

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

You can name your own app class whatever you want.

To specify how your own app class should work, you override some predefined methods in it (it works the same way as you override methods in the `Page` class, but the `App` class has other methods you can override). 




## Creating the Start Page
When the user starts your Bagawork app, the method named `createStartPage()` will be called in your app class. In this method, you should return back the page that should be shown to the user directly when the app starts.

::: tip Example

Example showing a Bagawork app consisting of two pages, and how the app class tells the computer that the page named `FirstPage` should be shown to the user when the app starts.

::bagawork-project[link&code=MyApp-FirstPage-SecondPage&baga=eNq1ksFKxDAQhl8lzqmFIFVZxdz04OJBENuDYheabadusduEZoq7lL67SWu7dJH1JKRkZsL88+drWpBag2ghVRmCgLSUxrCn/Z3WDHeEVWaYjdu4isl9aY2SMCRZ07P8QM8fTqhGauqKPRS16Q9ctRuaOug45KrMsDYg3lsoMhAXHCq5dRN7LeCg8twgvYIIxvjNxt2Kg7Z6s85B7HFIZsan+ZN5lxy5XzbFse8X9WW8oRJTqGWKfMwiq+Ql0aYwzC7aIMvdEOZcnSU+/73rviFSlZcsFSPVdxlMVZX1bYl/7jYv7EvO4Sjjz7hx2IG4DCyQPYirIOj4gGBxCsFB9D8ZzG7zN4O1TD9HEAd8I4fpr53AsLi9+cFwPb6JCLe6tHdxb2PVfQMXlPrV]

:::





## That's it!
Woho! Now you also know the basics of how to use the `App` class! 🥳 The app class is often used for more things than just indicating which the start page is, but you will learn more about that later.