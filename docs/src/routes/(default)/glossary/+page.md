# Glossary
On this page you will find the meaning of various technological words that are good to know for all developers who use BagaWork.





## BagaLand
The name of the website [bagaland.com](bagaland.com), on which you can create an account and store your BagaWork apps online, and make them accessible to others, as well as installable on most smartphones. Apps here will also remember their states between runs, so if the user closes the app and then opens it again, it will resume running just as the user left it!


## BagaWork
A framework programmers can use to implement small and simple apps in JavaScript very easily. On its website, [bagawork.com](bagawork.com) (this website), you will find:

* The documentation for how the BagaWork framework works
* Tutorials that teaches you how to build apps in the BagaWork framework
* An :online-editor you can use for testing apps implemented in BagaWork
* Etc.


## Class
In programming, a class is a general description of how something should work. For example, in BagaWork, the class :docs[Page] is a general description of how a page in BagaWork should work, with general functionality such as:

* The ability to run some code before the page is shown on the screen (`onBefore()`)
* The ability to display a GUI (`createGui()`)
* The ability to run some code after the page is no longer shown on the screen (`onAfter()`)
* Etc.

For a class to be useful, the one using it must provide it with more specific information it needs to be able to function in a specific way, such as providing the :docs[Page] class with specific implementations of `onBefore()`, `createGui()`, `onAfter()`, etc.

::: tip Example

Example of how to create a class named `Ball` in JavaScript.

```js
class Ball{
	
}
```

:::


## Framework
If you want to write *all the code* needed to display an app on the screen, you would probably need to spend many years on that. That much code is needed for such an app!

So, instead of you writing all the code from scratch like that, some friendly developers have implemented frameworks, which makes it much easier for us to implement apps. A framework contains most of the code needed to display an app on the screen, but it doesn't contain any specific information about the app that should be displayed, only the general functionality to display an app.

For example, the BagaWork framework contains the general :docs[Button] component for displaying a button on the screen, but it doesn't contain any specific information about the button, such as:

* Which text the button should display
* What should happen when the button is clicked

So, when we implement an app in BagaWork, we use the general :docs[Button] component from the framework, and we provide it with the specific information we want it to have by calling different configuration methods on it (`text()`, `onClick()`, etc.).


## Function
A function is like a method (a value that contains code that is executed when the function is called). Functions are really common in most programming languages, but in BagaWork one typically use methods ("functions in classes") instead, so for BagaWork apps, there is no need to use functions, but stick to using methods.


## Implementation
Implementation refers to the code in a class or a method.

```js
class MyPage extends Page{
	// All the code you write between the two curly
	// brackets is the implementation of this class.
}
```

```js
class MyPage extends Page{
	onBefore(){
		// All the code you write between the two closest curly
		// brackets is the implementation of this method.
	}
}
```


## Instance
In programming, a class is a general description of how something should work. To use a class, you create a new instance of it. One and the same class can have many different instances, and each instance can store different information.

In JavaScript, one usually writes `new TheClassName()` to create a new instance of a class, but BagaWork has simplified instantiation of classes from the framework (such as GUI components), so for these classes you just write the name of the class to create a new instance of it.

::: tip Example

Example showing how to create two different :docs[Button] instances, each with their own specific information:

* The first button has the information text=`Click me!`
* The second button instance has the information text=`No, click me!`

```js
const button1 = Button.text(`Click me!`)
const button2 = Button.text(`No, click me!`)
```

:::


## JavaScript
An app has to be implemented in a programming language. JavaScript (<abbr title="JavaScript">JS</abbr>) is a programming language. The BagaWork framework is implemented in JS, so an app using the BagaWork framework must also be implemented in JS.


## JS
Acronym for JavaScript.


## Method
A method is a function in a class that you can call after you have obtained an instance of a class.

::: tip Example

Example of how to create a method named `kick()` in a class named `Ball` in JavaScript.

```js
class Ball{
	kick(){
		
	}
}
```

:::

::: tip Example

Example of how to create a new instance of the :docs[Button] class in BagaWork, and then call the method `text()` on it.

```js
const myButton = Button.text(`Hello!`)
```

:::