<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# State Handling
On this page you find information on how to handle the state of your app.

## Introduction
Use the `p` variable to remember the state of the page the user currently is on, and use the `a` variable to remember the state that needs to outlive a single page. The values you store in these variables will be remembered when the user leaves your application, and they will be used to restore the state of the application when the user comes back, so the user can continue using your application just as she left it (even though it in reality has been shutdown and restarted).

## Valid values
BagaWork will store the state of your app in JSON format, so the values you store in your `a` and `p`variables must be serializable to JSON. Checkout the simple example below to learn which those values are, or checkout [json.org](https://www.json.org) if you want to get the complete picture.

```js
// Example of valid values.
a.integersAreOk = 123
a.floatsAreOk = -123.456
a.booleansAreOk = true
a.stringsAreOk = "Of course!"
a.nullIsOk = null
a.arraysAreOk = ["Yes", "they", "are"]
a.objectsAreOk = {isValid: true}

// Examples of not valid values:
a.functionsAreNotOk = function(){ "This is bad :(" }
a.instancesOfClassesAreNotOK = new Date()
```




## Workarounds
Here are examples of workarounds to the limitation of only storing JSON-supported values in the state.


### Object reference
Instead of storing a selected object like this:

```js
class MyApp extends App{
	onBefore(){
		
		a.humans = [
			{name: "Alice"},
			{name: "Bob"},
		]
		a.selectedHuman = a.humans[0]
		
		// a.selectedHuman == a.humans[0] is true now, but will be
		// false when the app is re-created from a previous state.
		
	}
}
```

Store the selected index of the object, like this:

```js
class MyApp extends App{
	onBefore(){
		
		a.humans = [
			{name: "Alice"},
			{name: "Bob"},
		]
		a.selectedHumanIndex = 0
		
		// a.humans[a.selectedHumanIndex] == a.humans[0] is true now,
		// but also when the app is re-created from a previous state.
		
	}
}
```



### Function reference
Instead of storing a selected function like this:

```js
class MyApp extends App{
	onBefore(){
		
		a.operations = {
			add: (a, b) => a + b,
			sub: (a, b) => a - b,
		}
		a.selectedOperation = a.operations['add']
		
		// The functions will work now, but won't be
		// re-created later.
		
	}
}
```

You can add static functions directly in instance variables, and store the name of the selected function in an instance variable:

```js
class MyApp extends App{
	
	operations = {
		add: (a, b) => a + b,
		sub: (a, b) => a - b,
	}
	
	onBefore(){
		
		a.selectedOperationName = 'add'
		
		// a.operations[a.selectedOperationName] works both now
		// and when the app is re-created from a previous state.
		
	}
	
}
```
