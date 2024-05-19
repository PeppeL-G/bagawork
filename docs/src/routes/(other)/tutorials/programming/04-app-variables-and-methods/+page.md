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

::bagawork-project[app&link&code=MyApp-StartPage-ChangeNamePage&baga=eNrFVF1r2zAU/SuaGCwGYerQQGcYwylj68PKWANbWQrW7OsmTJGMLNMG4/++q6j2otQJfgjsIUGW78c595zrhvKypHFDM5UDjWkmeFWRr9ukLAk8G5B5RfDcLOXS2J/kGyAfSJqIdQZpd5tp4AbuDNfmG3+ESeDijQZTa0n6F/a2dUktbRktlMhBVzT+1dB1TuOIUdsAcexSKKOqKCowP2l80Z3v8dw+MFpiPS/TFbtxDx6dvn9PyT40PvrP9foQ93f1VIXZai1yDXLiXi3NAouEBv8m6RcQQpG3DQ8t7PZNGrAual4bo+RL3PWKS+xug9IgtMgn7uoWbyyWLi/wJsToM5K5mjG6pfF0FrXMkZ2eIusXPgvju5JnwAb47/EiRpGnFTcf92bg510rUW/kQPnDwIPhOau9jK2XMgixdy5AT8oQXWH5LtQuNGAjC8/V73FlMfB40WG6+0IujQ+wH7qzjb9Or3Ow+0CGBf/aLJfvI2eWy1m3IwvYlALV9nbFc0xS/bkpkrwWJ3ZEyTkUSv/D7mE9l58SDWSrarIzNzEoBYmuzu+oW9XpLmshRvvlHqpxecGgCZRMCoPGGpig/Rj2q+1p80liSvII/1uZH7ja7yorjibY/bgm3sSii+GB+UGzEUHTMZWmRyodX8zTmjy0fwHGSZXZ]

:::



### App methods
A page method can only be used in the `Page` that created the page method. If you want to be able to use the method in many different pages, you should instead create the method as an *app method* by writing it in your `App` class instead. Then you can access it from all your pages using `a.theNameOfTheMethod`.

::: tip Example

Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.

::bagawork-project[app&link&code=MyApp-StartPage-ChangeNamePage&baga=eNrFlG9r2zAQxr+KJgazwZg6NNAZRnHK2PpiZayBrSwFa/a5CVMkI8u0wfi79xTNXpQ4rQeBvbDRn7vHuufnU0NZWdK4oZnMgcY046yqyJdNUpYEnjSIvCI4bhZioc0j2BrIB5ImfJVB2q1mCpiGW82U/soewPNtvFagayVIv2FW2y6pAn2DanO51epzWHj4jcOcmfw1kIGru/EtbQNaSJ6Dqmj8s6GrnMZRQE041ro9Fg2oLArU/UHjs258h+P2PqAlntnJtGLXduJY1tfY22YmjevQp3q17803+ViF2XLFcwXCs1sLPUeRUOPLSz8D55K8bWyV7ZvUD7qo25Jl0M9mtdZS/Mm6WjKBZzEpqR+aOjy7ZOwzJ/tXFaIlsUD8EFdzDspjocvQH6ViIA1q4Ean4DsUA/qEhl9MA7qh8WQatYEFMnkJiFvuSai4Tu0w2qvwccn05VFOV5LXazEgvx+4Z2Pn/hZm/7uNofGKsAUyQnYH0KHocLkDIM/fRxbk+bTrsTmsS44knF5zaCbV7+siyWv+Qo9JMYNCqr9XiXN1nIp1ooBsZE22Px7RaBOJLk5P+0Z2TETN+WiWd1CNyxvqNGNhUmiEPuCguUz7tnPYfBSYkjzA/ybzHdvuXWXgKIJfvxx3U0Znw4a5QdMRQZMxSpMjSsea5jUm9+0zBqXRWQ==]

:::




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

Open [this BagaWork project](/editor#eNq9VFFq4zAQvYqYn41BhMTd0q5/iluWbT92WbaFNmwKFvbECXUkI8mbhuAb7B16xR6hUpway9g0H0kxNiPPzJvR0xttgOU5BBuIRYIQQJwxpcjPdZjnBJ818kQRY2+mfKrtG0tkGm81k/o3S3HgVR4tUReSk9ph/5ZVUgklhZnIEpQKgr8bWCQQjClwtrQVtylAQcxmCvUDBKN3e2Ls8pFCbvCczArsplo4jdf16+btotX9j2LR7vuPWKlhPF9kiUQ+qFxTfZuzGOn76s5ADrX5DKJrsSJLxtdEmXqKrESRJWQtCpIu/iG5ZCm7F/LpIvJoN9SVyIol76jYDpzq7s7sc1loLfiuo9eX/y+RN7RUDSwJEhO7c482M9rYHRiHxDk01jHw9sBs2i569/F6jvYpPEPwdXRCYQ2Bf+6XtJKx/5GMd50cV8gTo1mFGcYak6AhVxvSFd8vaYflqznjKTZ53Q6l10vQ2bezHUH1xN/hMs/MJp3Jd1gK1dPNLEyK7BMmPpS4HfDtkRFt9kfG5wcZcIe4XyLql1srdoIq+libXusmrtXnUPmda5Rhiscn8n7O9BdluZTE4O8pqPGoEed6Tvs8fm+OfxrtM7rlY/kG9yyrTA==) and change the code in it to make the app function as shown below.

::bagawork-project[app&baga=eNq9Ve1q2zAUfRWhP7PBhMRJaGcowy1j64+NsRa6sBQsrBsn1LGMJC8Nxm+wd+gr7hEm2YlreTYx6zqCg+R7z7nSuR/OMUlT7OU4ZBSwh8OYCIE+7f00RfAoIaECqXW+TJZSP0ISLtAFCn49/Xw6PsHRGnIgEm6Uj/xCIrDsCic5yIwnqDbot0VNCTGEcqKNNYCMjEBBB8DVANGH6ENNT6L6kLNByD70fDC6zVDgwsErFlPgAnvfc7yh2Js4OCFbnbBSU+xgtloJkN+wNz6uF2pd3Ds4VYIbyIrsutoYea8TVOdeb3IzvR+yTTuxX9lOjML1JqYcEqsyLeVNSkJwjrtbRTmS6s8KPrId2pJkjyoRdiyLKdqzDEWbH4AuSUTuGH94F9hON9UVi7Nt0hGx7biU3SfTv8tMSpYcTlSKbo+0VJYWgQPVN7dHa5LQGLilEvZcprbTJGqH7KAeTF8V9V/xD44xfVmMwXFmL48zONb8j1jNtRm1u6pso+Uc/Ii92Xjq4D323HO3cKrucU91z+GEr9s/C9Uq1b2Beo0u0S4d/odh09dNRgaulLIRNDUv54HdK9LZ27ODSPWwuYVtGquLGkPHUMoXD9crn2bxfxg2PodytpRpQ1LdD03O/8lsMYT7zIL+kmv5LkAEp+vTbn0E6go0pHyfSOB+BK8v5N2ayDdCa8mR4u+X0LjrZNzwMy3zPovbi3HnwZD2Le6L33SKZWI=]

::::hint

Add one app variable to keep track of which the selected stars are (start with ` `` ` (empty string) or `` `🌟🌟🌟` ``). Then add 5 app methods (one click handler for each button) that changes the app variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the app variable in the last `Text` component.

::::

:::



## That's it!
Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use `p` or `a` to access them. If you will just use the variable in one of your pages, then use a page variable, and if you need to use it in multiple pages, then use an app variable instead. Simple as that!