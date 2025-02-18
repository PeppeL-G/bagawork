<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# State
On this page you find information on how the state in a BagaWork app is handled, and how you can customize it.




## Introduction
When the user starts running your BagaWork app, the user's computer will create a *state* that contains the information it needs to remember to be able to run the app. The state does primarily consist of:

* All the app variables
* All the page variables
* The name of the page that is currently shown in the app (e.g. `` `StartPage` ``)
* The version of the app that is running (e.g. `1`)

As the user runs the app, the state will change (e.g. app and page variables will be assigned new values, etc.).




## Viewing the state
In our :online-editor, you can easily view the state of your app by clicking on a page, and then on the `State` tab in the upper right corner.

In our Online Editor, the state is shown as JSON code. JSON is a quite simple data format, and it works very similar to the most common values in JavaScript.

::: tip Example

Example of what a state in BagaWork can look like in JSON format.

```json
{
	"version": 1,
	"currentPageName": "Page2",
	"app": {
		"age": 43
	},
	"pages": {
		"CoverPage": {
			"counter": 3
		},
		"Page1": {},
		"Page2": {
			"hasStarted": true
		},
		"Page3": {},
		"Page4": {}
	}
}
```

In this example, we can see that:

* the user is running version `1` of the app
* the page named `Page2` is currently shown to the user
* the app variable `age` has the value `43`
* the page named `CoverPage` has a page variable named `counter` with the value `3`
* the page named `Page1` has no page variables
* Etc.

:::

::: warning Strings in JSON

In JavaScript you can create a string by surrounding the text with:

* Two `` ` `` characters, or
* Two `"` characters, or
* Two `'` characters

But in JSON, you must use two `"` characters.

:::




## Storing the state
If your BagaWork app is running on a website that **does not support** storing the app's state on the user's computer, then each time the user starts the app, it will initialize a new state from scratch to use. An example of such a website is this website ([bagawork.com](https://bagawork.com/)). bagawork.com is hosted on [GitHub Pages](https://pages.github.com/), and therefor it can't function as an app hosting server, so it can only be used to quickly share apps for testing/debugging. Apps running on such websites can't remember information between runs.

If your BagaWork app on the other hand is running on a website that **does support** storing the app's state on the user's computer, then each time the app loads a page, its state will be stored, and if the user then closes the app and later opens it again, it will resume using the state that was stored, instead of initializing a new state from scratch. An example of such a website is [bagaland.com](https://baggaland.com/). Try running, close and then re-open an app hosted there, and you can see this in action.

If you host your app on a website that stores the state between runs, there is  one thing you need to remember: not all values can be stored! Ordinary values like:

* Strings
* Numbers
* Booleans
* Arrays
* Etc.

Can be stored without problem. But, for example, functions can't be stored; you can't have an app variable that stores an object that contains a function. If you try to do something like that, then when the user later tries to resume running the app, that function will not exist!




## Valid values
BagaWork will store the state of your app in JSON format, so the values you store in your app and page variables must be serializable to JSON. The most common values in JavaScript are serializable to JSON, including numbers, strings, booleans, arrays and objects. Checkout [json.org](https://www.json.org) to learn more about how JSON works.




## Changing the state
In our :online-editor, where you view the state of the app running, you can also change the state, and then click on the RESTART WITH STATE button to restart the app with the new state you have specified. This functionality can be useful when testing and debugging some of your apps, but not something you have to use.




## Updating apps
When you release a new version of your app, you might have to think about the state your app has stored on the computers where it has run, and adapt it to the new version of your app.

For example, when a user has run version `1` of your app, then the state stored on that user's computer might contain an app variable named `counter` with the value `5`, but in version `2` of your app you have renamed that app variable to `clickCounter`. When that user then runs version `2` of your app, BagaWork has no idea that the app variable `counter` in the stored state should be assigned to the app variable `clickCounter` in the new version of the app, and you need to write some additional code yourself to make this happen.

So, when releasing a new version of your app, it's important to gracefully perform the update, so users that have been using an old version of the app and has a state of the old version stored on their computers won't get any problems when they start running the new version of your app with that old state. To handle this, `App.onUpdate()` exists.

::: tip onUpdate() only applies to previous users of your app!

A user that uses your app for the first time will always start using the latest version of your app, so you only need to worry about `App.onUpdate()` for users that have run an older version of your app and has a state from that old version stored on their computers.

:::

There are three things you need to think about when updating a BagaWork app:

* Which page the user currently is on
* Which app variables your old and new versions have
* Which page variables your old and new versions have


### Updating the current page
The default update behavior for the user's current page is:

1. If a page with the same name as the user's current page in the stored state exists in the new version of the app, then show that page after the update
2. Otherwise, call `App.createStartPage()` in the new version of the app, and show the page returned from that method

::: tip Example

Example of code that would use the default update behavior for the user's current page.

```js
// This is the new version of the app.
class MyApp extends App{
	
	createStartPage(){
		// Return the same old start page here,
		// or another one if you want.
	}
	
	// You don't need to implement onUpdate()
	// at all if you want the default update
	// behavior.
	
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



### Updating the app variables
The default update behavior for the app variables is to:

1. First create all the app variables with their default values in the new version of your app
2. For each app variable that exists both in the stored state and in the new version of the app:
	* Copy over the value from the stored state to the app variable in the app

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
	
	// "city" is deleted.
	isBoy = true
	age = 10 // This one is added.
	
	// ...
	
}
```

In the new version of the app:

* The app variable `city` will no longer exist
* The app variable `isBoy` will have the value `true` for new users, but for users that have run the previous version of your app and has a stored state it will have whichever value it happened to have in that stored state
* The app variable `age` will have the value `10` for both new and old users of your app

:::

If you need to apply some additional logic when updating, you can implement that in `onUpdate()`. When `onUpdate()` is called, it will receive the old app variables in a parameter called `oldA`, and you can use that to read out their values from it. The default update behavior for the app variables will have been applied before `onUpdate()` is called.

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
	
	// Instead of calling the app variable for
	// "city", we want to call it "cityName" in
	// this new version, but we want old users
	// to have the same value it stored as when
	// they ran the old version of the app the
	// last time...
	cityName = "Stockholm"
	
	onUpdate(oldA){
		
		// ...so in here, we must read out the
		// value of the "city" variable from the
		// old app, and store it in the new
		// "cityName" variable instead.
		a.cityName = oldA.city
		
	}
	
	// ...
	
}
```

:::

What's been described above is the general logic you need to think about when updating your app to a newer version, BUT it can be a little bit more complicated than this. For example, you might have:

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

So in `onUpdate()`, you might need to apply different update logic depending on which version the user is updating from. For this reason, `onUpdate()` will also be called with a second argument, the `oldVersion` parameter, which contains a number indicating which version the user is updating from.

::: tip Example

Example of the code one usually needs to write when releasing a new version of the app.

```js
// This is version 4 of the app.
class MyApp extends App{
	
	// ...
	
	onUpdate(oldA, oldVersion){
		
		if(oldVersion == 1){
			
			// Write code dealing with updates
			// from version 1 here.
			
		}else if(oldVersion == 2){
			
			// Write code dealing with updates
			// from version 2 here.
			
		}else if(oldVersion == 3){
			
			// Write code dealing with updates
			// from version 3 here.
			
		}
		
	}
	
	// ...
	
}
```

:::

::: tip Example

Here is a bit more complicated and realistic example. This app is about keeping track of information about your friends. In the first version, only the friends' names were registered, so the `App` class looked like this:

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
		
		// Since this is version 2, the only
		// previous version the user can have
		// used is version 1, so we don't need
		// to check oldVersion, but it can be
		// good to do anyway (consistency).
		if(oldVersion == 1){
			
			a.friends = oldA.friends.map(a.createFriendFromV1)
			
		}
		
	}
	
	createFriendFromV1(friendName){
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
			a.friends = oldA.friends.map(a.createFriendFromV1)
			
		}else if(oldVersion == 2){
			
			a.friends = oldA.friends.map(a.createFriendFromV2)
			
		}
		
	}
	
	// This one is used when
	// updating from version 1.
	createFriendFromV1(friendName){
		return {
			name: friendName,
			age: 0, // All old friends gets age 0 by default.
			city: ``, // All old friends gets empty string by default.
		}
	}
	
	// This one is used when
	// updating from version 2.
	createFriendFromV2(friend){
		return {
			name: friend.name,
			age: friend.age,
			city: ``, // All old friends gets empty string by default.
		}
	}
	
}
```

:::

### Updating the page states
After `App.onUpdate()` has been called, it's time to update the data in your pages.

The default update behavior for the page variables is very similar to app variables; for each page stored in the state that also exists in the new version of the app:

1. Create all page variables with the default values they should have according to the new version of your app
2. For each page variable that exists both in the stored state and in the new version of the page:
	* Copy over the value from the stored state to the page variable in the page

If you need some additional update logic in your pages, you can add the `onUpdate()` method to them too. It will be called with two arguments:

1. `oldP`, which contains the old page variables for the page
2. `oldVersion`, which contains the old version (an integer) of the app the user has run before