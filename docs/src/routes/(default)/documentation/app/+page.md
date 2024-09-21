<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `App`
On this page you find the documentation for the `App` class.


## Introduction
The `App` class represents your entire app. It is used to:

* Keep track of the app's global state through the app's instance variables (known as *app variables*)
* Create the first page shown to the user

You should create your own class inheriting from `App` and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.

::: tip Example

Example of the basic code for creating your own `App` class.

```js
// Name your own app whatever you want (in this example MyApp).
class MyApp extends App{
	// Override methods here to give your own app
	// the specific behavior you want it to have.
}
```

:::



## The `a` variable
In BagaWork, you can use the special variable named `a`, short for *app*, to access the constants/variables/methods you have in your `App` class. The `a` variable can be used both in your `App` class and in your `Page` classes.

::: tip Example

Example of an app with:

* An app constant
* An app variable
* An app method

```js
class MyApp extends App{
	
	THE_CONSTANT_NAME = "The constant value"
	
	theVariableNAME = "The variable value"
	
	theMethodName(){
		
		// Can use a.THE_CONSTANT_NAME to access the constant value.
		// Can use a.theVariableName to access the variable value.
		// Can use a.theMethodName to access the method.
		
	}
	
}
```

:::



## `onBefore()` - Initializing the state of the app
The method `onBefore()` will be called directly when the app starts. In it, you can initialize the state of your app.

::: tip Example

Example of an app that uses `onBefore()`.

```js
class MyApp extends App{
	
	TERM_1 = 5
	TERM_2 = 4
	
	// We want the sum variable to contain the sum of TERM_1 and TERM_2.
	// However, the "a" variable can only be used in methods, so we can't
	// write sum = a.TERM_1 + a.TERM_2 here. So instead, we initialize
	// the sum to a dummy value (0 in this case)...
	sum = 0
	
	onBefore(){
		
		// ...and in this method we assigns sum its correct value.
		a.sum = a.TERM_1 + a.TERM_2
		
	}
	
}
```

:::

::: tip Not needed?

You only need to initialize the global state if your app needs one. Some simple apps don't need one, and can simply leave `onBefore()` empty, or not have this method at all.

:::



## `createStartPage()` - Creating the start page
After `onBefore()` has been called, `createStartPage()` will be called. In this method, you should create and send back an instance of the `Page` class that should first be shown to the user. This method you must implement, otherwise your app won't know which `Page` to show when it starts, and the app will crash.

::: tip Example

Example of an app specifying which `Page` to first show the user.

```js
class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}
```

```js
class StartPage extends Page{
	// Override methods here to give this page
	// the specific behavior you want it to have.
}
```

:::

See the documentation for the :docs[Page] class to learn which methods you can override in your `Page` classes to make them work the way you want.




## `onUpdate()` - Updating the state of the app
Sometimes, after you have published your app, you:

* discover a bug in your app that you want to correct
* want to change how some functionality in your app works
* want to add more functionality to your app

All these cases result in you making changes to the code the app consist of, and when a user has run an older version of your app and then runs the new version of it, there might be some problem for the user. For example, let's say that one of your users currently is on the `HelpPage` in your app, and then the user leaves your app, and then you release a new version of your app where you have deleted the `HelpPage`. When the user comes back to your app and gets the latest version of your app, it will try to show the page named `HelpPage` to the user, but since that page no longer exists, it's not obvious how the app should function.

So, when releasing a new version of your app, it's important to gracefully perform the update, so users that have been using an old version of the app won't get any problem when they start using the new version of it. For this reason, `App.onUpdate()` exists.

::: tip onUpdate() only applies to previous users of your app!

A user that uses your app for the first time will always start using the latest version of your app, so you only need to worry about `App.onUpdate()` for users that have run an older version of your app.

:::

There are three things you need to think about when updating a BagaApp:

* Which page the user currently is on
* Which app variables your old and new versions have
* Which page variables your old and new versions have

These 3 things together constitutes the *state* of the app, and they can differ for different users, e.g.:

* One user might currently be on the `MenyPage` in your app, while another user might be on the `AboutPage`
* Your app variable `isGirl` might have the value `true` for some of your users, but `false` for others
* Etc.


### Updating the current page
The default update behavior for the user's current page is:

1. If a page with the same name as the user's current page in the old version of the app exists in the new version of the app, then show that page after the update
2. Otherwise, call `App.createStartPage()` in the new version of the app, and show the page returned from that method

::: tip Example

Example of code that would use the default update behavior for the user's current page.

```js
// This is the new version of the app.
class MyApp extends App{
	
	createStartPage(){
		// Return the same old start page here, or another one if you want.
	}
	
	// You don't need to implement onUpdate() at all if you want the default update behavior.
	
}
```

:::

If you want to show another page to the user directly after the app has been updated, you should implement `onUpdate()` and send back the page you want to show to the user directly after the update.

::: tip Example

Example of code that would take the user to the `ShowNewFeaturesPage` after the update.

```js
// This is the new version of the app.
class MyApp extends App{
	
	// ...
	
	onUpdate(){
		return ShowNewFeaturesPage
	}
	
}
```

::: tip

If you implement `onUpdate()` without returning a value from it, the default update behavior for the user's current page will be used.

:::



### Updating the app state
The default update behavior for the app constants is to simply delete all old app constants, and only use the new app constants. If this doesn't work for you, then you are using constants wrong.

The default update behavior for the app variables is to first create all the app variables with the default values they should have according to the new version of your app, and then copy over the values from the old app variables to the new app variables that have the same name.

::: tip Example

Example showing which app variables that are delete/added/copied when updating an app.

```js
// This is the old version of the app.
class MyApp extends App{
	
	city = `Stockholm`
	isBoy = true
	
	// ...
	
}
```

```js
// This is the new version of the app.
class MyApp extends App{
	
	// "city" is delete.
	isBoy = true
	age = 10 // This one is added.
	
	// ...
	
}
```

In the new version of the app:

* The app variable `city` will no longer exist
* The app variable `isBoy` will have the value `true` for new users, but for users that have run the previous version of your app it will have whichever value it happened to have for respective user in the old version of the app when they update the app (run the latest version of it for the first time)
* The app variable `age` will have the value `10` for both new and old users of your app

:::

If you need some additional logic applied, you can implement that in `onUpdate()`. When `onUpdate()` is called, it will receive the old app variables in a parameter called `oldA`, and you can use that to read out values from it. The default update behavior for app variables will have been applied before `onUpdate()` is called.

::: tip Example

Example of how to perform some custom logic when updating the app to a new version.

```js
// This is the old version of the app.
class MyApp extends App{
	
	city = `Stockholm`
	
	// ...
	
}
```

```js
// This is the new version of the app.
class MyApp extends App{
	
	// Instead of calling the app variable for "city",
	// we want to call it "cityName" in this new version,
	// but we want old users to have the same value it stored
	// as when they ran the old version of the app...
	cityName = "Stockholm"
	
	onUpdate(oldA){
		
		// ...so in here, we must read out the value of the "city"
		// variable from the old app, and store it in the new
		// "cityName" variable instead.
		a.cityName = oldA.city
		
	}
	
	// ...
	
}
```

:::

What's been described above is the general logic you need to think about when updating your app to a newer version. BUT, it can be a little bit more complicated than this. For example, you might have:

* First released the first version of your app (version `1`)
* And then released a new version of your app (version `2`)
* And then released a new version of your app (version `3`)

So you might have:

* Some really old users that haven't run your app for a long time, so the last version they used was version `1`
* Some less old users that used version `2` of your app the last time they ran your app
* Your most active users, who use the latest version (version `3`) of your app

So when you release version `4` of you app, you might have:

* Some users that are updating from version `1`
* Some users that are updating from version `2`
* Some users that are updating from version `3`

So in `onUpdate()`, you might need to perform different update logic depending on which version the user is updating from. For this reason, `onUpdate()` will also be called with a second argument, the `oldVersion` parameter, which contains a number describing which version the user is updating from.

::: tip Example

Example of the code one usually needs to write when releasing a new version of the app.

```js
// This is the new version of the app.
class MyApp extends App{
	
	// ...
	
	onUpdate(oldA, oldVersion){
		
		if(oldVersion == 1){
			
			// Write code dealing with updates from version 1 here.
			
		}else if(oldVersion == 2){
			
			// Write code dealing with updates from version 2 here.
			
		}else if(oldVersion == 3){
			
			// Write code dealing with updates from version 3 here.
			
		} // And so on...
		
	}
	
	// ...
	
}
```

:::

::: tip Example

Here is a bit more complicated and realistic example. This app is about keeping track of information about your friends. In the first version, only the friends names were registered, so the `App` class looked like this:

```js
// Version 1.
class FriendsApp extends App{
	
	friends = [
		`Alice`, // Just some
		`Bob`,   // sample data.
	]
	
	// ...
	
}
```

In the second version, we also wanted to keep track of the age of each friend, so we needed the following code:

```js
// Version 2.
class FriendsApp extends App{
	
	friends = [
		{name: `Alice`, age: 10}, // Just some
		{name: `Bob`,   age: 15}, // sample data.
	]
	
	// ...
	
	onUpdate(oldA, oldVersion){
		
		// Since this is version 2, the only previous version the user can
		// have used is version 1, so we don't need to check oldVersion,
		// but it can be good to do anyway (consistency).
		if(oldVersion == 1){
			
			a.friends = oldA.friends.map(a.createFriendObject)
			
		}
		
	}
	
	createFriendObject(friendName){
		return {
			name: friendName,
			age: 0, // All old friends gets age 0 by default.
		}
	}
	
}
```

In the third version we also want to keep track of which city they live in, so we need the following code:


```js
// Version 3.
class FriendsApp extends App{
	
	friends = [
		{name: `Alice`, age: 10, city: `Stockholm`}, // Just some
		{name: `Bob`,   age: 15, city: `Oslo`},      // sample data.
	]
	
	// ...
	
	onUpdate(oldA, oldVersion){
		
		if(oldVersion == 1){
			
			// Same as before.
			a.friends = oldA.friends.map(a.createFriendObject)
			
		}else if(oldVersion == 2){
			
			a.friends = oldA.friends.map(a.getOldFriendObjectWithCity)
			
		}
		
	}
	
	createFriendObject(friendName){
		return {
			name: friendName,
			age: 0, // All old friends gets age 0 by default.
			city: ``, // All old friends gets empty string by default.
		}
	}
	
	getOldFriendObjectWithCity(friend){
		return {
			name: friend.name,
			age: friend.age,
			city: ``, // All old friends gets empty string by default.
		}
	}
	
}
```

### Updating the page states
After `App.onUpdate()` has been called, it's time to update the data in your pages.

The default update behavior for the page constants is to simply delete all old page constants, and only use the new page constants. If this doesn't work for you, then you are using constants wrong.

The default update behavior for the page variables is to first create all the page variables with the default values they should have according to the new version of your app, and then copy over the values from the old page variables to the new page variables that have the same name. This works very similar to `App.onUpdate()` works.

If you need some additional update logic in your pages, you can add the `onUpdate()` method to them too. It will be called with two arguments:

1. `oldP`, which contains the old page variables for the page
2. `oldVersion`, which contains the old version (an integer) of the app the user has run before