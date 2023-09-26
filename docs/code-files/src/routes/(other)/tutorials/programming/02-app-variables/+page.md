<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. App Variables and Methods
This tutorial will teach you what variables are in programming, and how you can create them in a Bagatell app and change them with app methods.



## Why app variables are needed
An app that only display static data (that is, the data/text shown in the app is the same all the time, so the GUI in each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.

For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in then user's playlist in an app variable. But we will start off with much simpler examples than a playlist with songs.




## How to create app variables
The syntax (the code we need to write) for creating an app variable is the same syntax we use to create app constants, but we use `thisNamingConvention` for app variables instead of `THIS_NAMING_CONVENTION` (which is only used for constants).

In the code below you find an example of how to create the following app variables:

* `name` will have the string value `Alice`
* `lastVisit` will have the string value `2023-09-16`

```js
class MyApp extends App{
	
	name = `Alice`
	lastVisit `2023-09-16`
	// You can create as many app variables as you want.
	
	// And then you have createStartPage() as usual...
	
}
```



## How to use app variables
The syntax for obtaining the value stored in an app variable is the same as for constants, i.e. you would write `a.theName`. For example, to obtain the value stored in the app variable `lastVisit`, we would write `a.lastVisit` (which would evaluate to the string `2023-09-16` in this case).

::: tip Example

Example of an app using an app variable.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNrFUmFrwjAQ/SvZMZiFICoIUhijjrH5YWNMYZMpNLRXlcWkJClTSv/7UmudERX3aR8a7pJ79969aw4sTcHPIZIxgg8RZ1qT53WQpgRXBkWsiY3ziZiY8hNsieSWhAFfRBjWt5FCZnBomDKvbIYNr6o3Ck2mBNk9lLdFBSqgoJBIHqPS4H/msIjBb1MoCayODQQoyCTRaD7Ab9Xx2MbFlEJq+znIqtmgSpxxdvy7kcokd9U/ZotD3SNb3jT2aIRPyLkk1zlrlgKLq9BzZqGwsrS9LoU1+J1uuxY4wmXKbXNHqKMt0F+DJIgzfkagFH1MpPr1dY/7jPw3+a2b0XzBY4WisUWaYcoipHW2N2KgkKxlRjY2EjNngrR7d6FHjyPvJc+W4gjBYeHE9DNjZ9jSvMjQa5beNETGuUcvhI1RX4arXzzHJCmCxKA65mD5J1a76Rzs5kFYSDDD/97M+5yZG10uRxHLfnonjmPt1nHD3KLuBUWdSzp1TnTaV/iXnUyLH5d5q+g=]

:::

But the benefit with variables over constants is that they can also change value while the app is running. If we would want to store the name `Bob` in the app variable `name` while the app is running we would write the code `` a.name = `Bob` ``. Easy as that!

However, a very good question is *where* we should write the code `` a.name = `Bob` ``. And it all depends on *when* we want the app to change the name to `Bob`. Very often, it is when the user has interacted with the GUI, for example have clicked on a button, so let's go through how to make that happen.

In your own `App` class, you can not only implement pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a `Button`, that code needs to be in a method. So your `App` class can for example look like this:

```js
class MyApp extends App{
	
	name = `Alice`
	
	setNameToBob(){
		a.name = `Bob`
	}
	
	// And then you have createStartPage() as usual...
	
}
```

The method in the example above is named `setNameToBob()`, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so `setNameToBob()` is a very good name in this case, since that's precisely what the code in the method does.

To tell the computer that the code in the method `setNameToBob()` should be executed when the user clicks on a button, we need to call the configuration method `handler()` on the button, and pass it the method as an argument (i.e. write `a.setNameToBob` between the parentheses):

```js
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${a.name}!`),
			Button.text(`Change name to Bob`).handler(a.setNameToBob)
		)
	}
	
}
```

::: warning Note!

When passing a method as an argument (as we do when we use `Button.handler()`), you should not write the parentheses after the method name.

So the following is correct:

```js
Button.handler(a.setNameToBob)
```

And the following is incorrect:

```js
Button.handler(a.setNameToBob())
```

:::

::: tip Remember!

In the code above, we haven't told Bagawork which page the user should come to when the button is clicked (we haven't used the configuration method `page()`), so when the user clicks the button, the current page will be reloaded (after the click handler (`setNameToBob`) has been executed).

:::



### The final solution
So, here's all the code for the app using an app variable.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNrFklFL40AUhf/KeFkwgSHYQkECIqksqw+KrIVVrNDZ5MYWpzNhZsJaQv773jSmdkqU+ORDwmTmnHvvfCcViKKAuIJUZwgxpFJYy643SVEwfHWoMstoXc3V3DWPEmtkZ2yRyFWKi27Xoruhg5me6r9B2IqdiDox7W6ldadPDQqHd04YdyuecWcx6Eqj2O5gz1RDzSHXMkNjIX6sYJVBPOLQ9KC5txbgoPOchrmH+KRbP9C6fuJQUD3P2Ra7aj+86+/67xA0H5U//a9ydTj3b/3PRulyJTODKmiP5m5GRSJHr2BxiVJq9qNq0dRHi5B3qmnpnFZvuoulUNR9y89p1vALI9rLJJpARPu4uwqhx4rDK13rdMJhA/F4MuoAzHBdSBreA+HdPbEvV3mSlfITAFpNMdfmPbeecAfjuStEirwHVmKQbXTJtjExR9dno9PzPWS+80LLcq16GhwKD1jfaGLbsAlUKWXIB9oe0A7z9QXUIExyR2H2EGz+9Dab8UE2PxVZkmf87mT+LIU7tk04hlH3jzPxiI1O+oH5oskA0XhIpfEHlfYn/EomT/V/m+7ggQ==]




## That's it!
Congratulation, now you know how to use app variables too! 🥳 But pages can have their own constants and variables too, let's take a look at how those works next.