<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 4. App Variables and Methods
This tutorial will teach you what app variables and app methods are in BagaWork, and how they differ from page variables and page methods.



## Why app variables are needed
A page variable can only be accessed and used on the page the created it. But often, we need to be able to use the same variable on many different pages. For these cases, we can instead use an app variable.




## How to create app variables
To create an app variable, we write the same code as for creating an app constant, but we use `thisNamingConvention` for app variables instead of `THIS_NAMING_CONVENTION` (which is only used for constants).

In the code below you find an example of how to create the following app variables:

* `name` will have the string value `Alice`
* `lastVisit` will have the string value `2023-09-16`

```js
class MyApp extends App{
	
	name = `Alice`
	lastVisit = `2023-09-16`
	// You can create as many app variables as you want.
	
	// And then you have createStartPage() as usual.
	
}
```



## How to use app variables
To obtain the value from an app variable, you write the same code as for obtaining the value from an app constant, i.e. you would write `a.theName`. For example, to obtain the value stored in the app variable `lastVisit`, we would write `a.lastVisit` (which would evaluate to the string `2023-09-16` in this case).

::: tip Example

Example of an app using an app variable.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNrFUmFrwjAQ/SvZMZiFICoIUhijjrH5YWNMYZMpNLRXlcWkJClTSv/7UmudERX3aR8a7pJ79969aw4sTcHPIZIxgg8RZ1qT53WQpgRXBkWsiY3ziZiY8hNsieSWhAFfRBjWt5FCZnBomDKvbIYNr6o3Ck2mBNk9lLdFBSqgoJBIHqPS4H/msIjBb1MoCayODQQoyCTRaD7Ab9Xx2MbFlEJq+znIqtmgSpxxdvy7kcokd9U/ZotD3SNb3jT2aIRPyLkk1zlrlgKLq9BzZqGwsrS9LoU1+J1uuxY4wmXKbXNHqKMt0F+DJIgzfkagFH1MpPr1dY/7jPw3+a2b0XzBY4WisUWaYcoipHW2N2KgkKxlRjY2EjNngrR7d6FHjyPvJc+W4gjBYeHE9DNjZ9jSvMjQa5beNETGuUcvhI1RX4arXzzHJCmCxKA65mD5J1a76Rzs5kFYSDDD/97M+5yZG10uRxHLfnonjmPt1nHD3KLuBUWdSzp1TnTaV/iXnUyLH5d5q+g=]

:::

As you can see in the example above, we can use the special `a` variable in your `Page` classes Bagawork to access your app variables.

::: tip Example

Example of an app that stores a name in an app variable, and that can be changed by calling different page methods by clicking on buttons.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNrFU11r2zAU/SvaZTAbhGkCgWIYxSlj68PKWANbWQrR7OsmTJGMLLMG4/++q2h2q9QdHnvYg40+7jn3nnPsFkRVQdpCrguEFHIp6pp9PGRVxfDBoipqRut2rdbWPUrskb1lm0zuctz0p7lBYfHGCmM/iXuMYl9vDdrGKDZcuNPOgzroOJRaFmhqSL+1sCsgnXFwDWiOIwQ46LKs0X6F9Kxf39K6u+NQEV+A9GRXfhPIGfoPktxm0ESk19R1pY+ihuFF8lxs9wyz1N9HEHQa1nuH3je7U28+6591km93sjCoIn+1tisaNLH0ijYfUErNXreevHu1iXlftWys1ep33eVWKFJ4nMBq5meOEzotJJqoSkKZ01icjlEOuugZ4iBVDg8UwPmCwwHS+WLWR7XCfSXJgiCyIKWs/nFVZkUj/xCVVksstXkM6V9MvqlEjnzE8swgO+iGHT8oZkk+m51fPDE+RF5q2ezVSIPTwhOvrzV567yJVCNlzCfCbrGehhsLyFmYlZbCHHHQ/ZM+m/lJNu8UQbJ7/N/JfNkK+6Z24RhG3V/OJHBsdjZuWFi0mFA0n8I0f4Hp6YR/k8ld9wuDYw0w]

:::



### App methods
A page method can only be used in the `Page` that created the page method. If you want to be able to use the method in many different pages, you should isntead create the method as an *app method* by writing it in your `App` class instead. Then you can access it from all your methods using `a.theNameOfTheMethod`.

::: tip Example

Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNrFk2Fr2zAQhv+KegxqgzBNIFAMZTildP3QUtbAGppCNPvchCmSkWTWYPzfd47rNErd4X3aBxvpdO/d6XntCkRRQFxBqjOEGFIprGW326QoGL46VJlltK4WauGaR4kNsgu2TOQ6xWUXteju6GCmd+EgbNOdiD6m1x80U/2zR0FRPz81KBw+OGHcvXh5b2LQlUax/cGBqIaaQ65lhsZC/FTBOoN4xKHpQXfdSYCDznMa5hHis249p3X9zKGgep6yLXbTbjxk+/57bM2m8qe/LtfHc3/Xv22UrtYyM6iC9mjhZlQkcvQKlt9QSs2+VC2a+mQZ8i5rWjqn1Vve5Uoo6r7j5zRriYcRRTOJJhCRb9KwKo0LvTXooKsQesQ5vBKc8wmHLcTjyajDOMNNIQmBh9MjmNhfN3mSlfIvGLWaYq7Nu/s9n8hgyA+FSJH3IE8Msq0u2c5s5uj6bHT+9QC8r7zUstyongbHiUes7zSxbdgEqpQy5ANlc7TDdH0GNQiT3JGZPQSb/6X1ZnzkzZUiSfKC/9uZHyvhTm1jjmHU/XNPPGKjs35gftJkQNJ4SKXxJ5UOJ/wXT57rP9nADRI=]

:::





## That's it!
Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use `p` or `a` to access them. If you will just use it in one of your pages, then write it in that `Page` class, and if you need to use it in multiple pages, then write it in your `App` class instead.