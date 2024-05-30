<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Paper
This tutorial will teach you how to use the `Paper` component to draw images in your app yourself.




## Introduction
The `Paper` component is a view that you can draw whatever you want on yourself, so it's similar to the `Image` component, but instead of specifying the URL of the image, you specify how the image should be drawn using lines, circles, rectangles, etc.




## Creating a `Paper` component instance
To create a new `Paper` component, simply write `Paper`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUsFqg0AQ/ZVlLlWQYCyF4qWYUkoOLaEJtKEJuNXRhJhd2V1pgvjvXWNio5hgTz0oM+68eW/fMweapuDmEPAQwYUgoVKSl72XpgR3Clkoia7zBVuo8gkEUoVTRYWa0BgNszpRAlUmGKkPyq9FBSqgsCDiSYhCgvuZwzoEd2gBo9uS8QABC3gUSVQf4Nqneq7rYmlBqvc1kNWycdU0hNf8tfiyaal/ztZt3ROaohh80WATC56x8JEnXBh+rIl8s3EXC3bgOrYWuQf31q4FznCbJnp5Q2hDmyc348gLs+SKQM5GGHHx6+sZ9xX5b/xbDoLVOgkFMuOIVNOUBmidupkmHCj9MnxPINnzjBxsJGpFGRneP/im1Y3UZmRb1kHQHlyoUab0HY40r9w3B6U3BsuSxLR6wuYo++FOJ2bDJM68SKHocrD8E6tsnFY2T0xDvBj/O5n3FVU3sgxHEM1+OZOGY0O727Dm0F2PIafPJufCpnOFf8lkWfwA8oekuQ==]

:::



## Dimensioning the `Paper`
Often when you draw something on the paper, you expect the paper to be of a certain size, so you don't risk drawing something too big on it that doesn't fit. So, often when you use the `Paper` component, you use it in a `Box` layout, so you can give it a specific size.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1rg0AQ/SvLXKogYgyB4qWYUkoOLaUJtKEJZKvjBzG7sruShOB/71obGyUJ9tSDMuvOm/fePA9A8xy8AwQ8RPAgyKiU5Gnv5znBnUIWSqLrw4ItVPUEAqnCqaJCvdAYDbO+UQJVIRhpLqqvZQ0qobQg4lmIQoL3cYA0BG9gAaObivEbAhbwKJKo3sFzjvVc1+XSglzPayHrYZP60BLe8Dfiq0NH/WORdnWP+c7epqFKjKFj2gmmcaKMkS6DJM1Co+5d6Mk5CvuTButY8IKF9zzjwljFWs/KtOous2Xdgh14rqM97cEbOo2fGW7yTGtp+WpZ8eV6EvlhkV3xw9kYIy5+YzjhvuL2lW9l7Uwga8xNcxqgdTzNNKGt9MtY+QLJnhfke+tEJZSRwe1dY7iL1EspNuwMQbdxocaF0h5+aJ75yrSr3RisyDLT6gmbo+yHOxdQtUI/UijObbD6cets3E42D0xD/Bj/O5m3hKobWYUjiGa/nElrYwPn/MLaTaMeTW6fSe6FSacK/5LJsvwCz/O0lA==]

:::



## The coordinate system
To draw something on the `Paper`, you need to specify *where* on the `Paper` it should be drawn. To specify that, you need to know how the *coordinate system* the `Paper` is using works.

The `Paper` component uses a coordinate system with an `x`-axe and a `y`-axe:

* The `x`-axe starts at the left side of the `Paper` component (`x` = `0` at the left side) and increases towards the right
* The `y`-axes starts at the bottom side of the `Paper` component (`y` = `0` at the bottom side) and increases towards the top

1 unit in the coordinate system represents 1 millimeter on the screen (although this can be changed, learn more about that in next tutorial).





## Showing the coordinate system
To show the coordinate system, call the configuraiton method `showCoordinates()` on the `Paper` component. When you call this method, the following will be drawn on the `Paper`:

* Horizontal lines every 10 millimeters
* Vertical lines every 10 millimeters
* The mouse's position in the upper right corner


This is something you can use during development, but after you have fininshed writing your code, you probably want to remove the call to `showCoordinates()`, since you don't want your users to see it.

::bagawork-project[app&link&code=StartPage&baga=eNrFUl1LwzAU/SvhvthCKd1kIH2RbojsQREnqLjBYnP7gV1SkpRtjP53E+vqWjaZTz603DT3nHPPPd0BLUsIdxALhhBCXFClyN02KkuCG42cKWLq3ZzPtX1iiVTjTFOpH2iKjtvcaIm6kpy0F/Zr3YBqqD1IRMFQKgjfdpAzCAcecLqyil8Q8EAkiUL9AmGwr19NXS88KA1fB9mQTZtDZ/BWvx3eHnrT31Z5f+6x2PjrnOnMuQxcP8M8zbQzMmWc5QVzmt65YS5R+ioT64kQkuXcsCnH9d9p/JFKUXE2EYWQzjI1Ey5dr8G5nWV4sIFwGBiXWwgvg9bhE67KwvIdOu2Yi9THNIlYVfziUPAxJkL+BHOg/Yv/R7FWjVeJvLU7K2mM3v70ZAR9bV7OMpJItqIiXzkQnVFOBlfXreE+0iylWvEjAv3GuR5X2nj4lrkXS9e3u3F4VRSudybsFdV5uGMB2RVGiUZ5bIP2V26yGfayueEGEqX438k8Z1RfKBuOJEb9dCadjQ2C4wvrNo3OaBqewzQ8wXQ44V8yWdSfOru7Tw==]





## Drawing things on the `Paper`
To draw various things on the `Paper` component, call the configuration method `children()`, and pass it the various components that can be drawn on the `Paper`. The components that can be drawn on the `Paper` component all have names starting with `Paper`, such as:

* `PaperLine` for drawing a line
* `PaperCircle` for drawing a circle
* `PaperRectangle` for drawing a rectangle

Learn more about how to use these next. Ordinary GUI components, such as `Text` and `Button`, can't be used as children in the `Paper` component.





## Drawing a line
Use the GUI component `PaperLine` to draw a line on the `Paper` component. It has default values for all different properties (position, color, etc.), so you can use it as it is.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUttqwkAQ/ZVlXppAkKgIJS8lllKEtpQqtKUKbpPJBeNu2N2gIvn3bkyMxkaxT31ImN3MmTmXbIGmKThb8LiP4ICXUCnJ88ZNU4JrhcyXRNfbKZuq4vEEUoVjRYV6pSEaZvlFCVSZYKT+UNzmJSiH3IKAJz4KCc7XFmIfnK4FjC6LjTsIWMCDQKL6AMfe15+6zmcWpHpeA1kOG5WHBvF6f02+OJywf8ziU95Dvu6sYl9FRt82OxHGYaSMgS69KE58o+yd6skpis439Rah4Bnz73nChTEPNZ951SuQ1e0V4ClmaO3vzKoyGw5ZsAanZ2vpG3D6di17gss00ZQb8huKXbkYBa6fJRdkczbEgItDWke7L5jyxlfyt6hxSr2DnIle2FH6ZcxdgWTDM7ILh6iIMtK9vZubVjtSe5ctmWxzrdk4VcNMaQ3VmheurS68MViWJKZ1JewT5XW4toAKC91AoWhzsPi/y2x6J9k8MA1xQ/zvZN4jqm5kEY4gevv5TBqOde12w5pNgyuaetdM6p2ZdMzwL5nM8h/yrMNM]

:::

Call various configuration methods on the `PaperLine` component to change where and how it's drawn on the `Paper`:

* Call `start(x, y)` to indicate the position of the start of the line
* Call `end(x, y)` to indicate the position of the end of the line
* Call `thickness(theNumber)` to indicate how thick the line should be
* Call `backgroundColor(theColor)` to indicate the color of the line

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+K0M1kMMZ2CQzfDGeUUdjGWAtbWQpR7eMP4khGHzQh+L/vuE49K3VDdtULmyPrnPe8Oo98oLxtaXKgmcyBJjRruNbk2z5tWwI7AyLXBOPDSqxM/2QKuIFbw5X5wUtg3rBjFBirBBk3+q/dUNTRzqeFbHJQmiZ/DrTOaRL5VPBt3/G5hPpUFoUG85sm4Ut8j3H34NMW9ZzKQexmWDjGx/6j+X5x4v6LrU99L+UueKpzU7Gr0AsqqMvKsAWGWVU3ORtyV6jcggoeebYplbQi/ywbqdi6RD/rY64CMaYfC77WAgLdO2NR6JMIZdEaizGOMTZVnW0EaM1i77X2Y2Nh7fnnJeOJZORILmYk21psJpIvkecw8+mOJnGIMPY0uQpHEHewbRscogPEYZDqzU2R5rY5A0KKJRRS/bs/k95nMP2UT/r1mG9bnsF4nDtsGBh8sXWqgOylJc/XhZiKCxJ9/DQ5uluJ47Fboec4uokrs7QGz3Bs810i/H42TNimmbI6W3YP+rK6OUD9CNPCgJqbYP/HDWziEzbXAkvSEt6bzK+Kmw+6h6MIdn+biTOxKJwfmJu0uCApvkQpfkNp6vB/mDx0fwEQ9fMX]

:::




## Drawing a circle
Use the GUI component `PaperCircle` to draw a circle on the `Paper` component. It has default values for all different properties (position, color, etc.), so you can use it as it is.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUktrwkAQ/ivLXJpAkKgIJZcSpRQPLaUVWqmC22TywHU37G6oIvnv3TQajY1iTz0kzG7mm/ke2QLNMvC2EIgQwYOAUaXI48bPMoJrjTxUxNTbGZ/p8gkkUo2vmkr9TGO07OqLlqhzyUn9obwtKlABhQORYCFKBd7HFtIQvK4DnK7KjT8QcEBEkUL9Dp67r6emLuYOZGZeA1kNG1eHBvF6f02+PJywf8jTU95Dse58paFOrL5rdxJM40RbA1MGScpCq+qdmckZys4nDZaxFDkPR4IJaS1iw2ex65XI6/YdYJTKgKGzv7V3ld3wyIE1eD3XiN+A13dr4RNcZcyQbhjQ0Oyr5Tjyw5xdEC74ECMhD3kd7b5gy4v4Ur9lvWY0OMiZmIUdbV7WwpdINiInP/EQnVBOurd3C9tpRxr38hVXbb41G2d6mGujYbfmSRizS28snjNmO1fCpqiuw7UFVFroRxplm4PlH15l0zvJ5p4biB/jfyfzllB9o8pwJDHbz2fScKzrthvWbBpc0dS7ZlLvzKRjhn/JZF58A6xpxBY=]

:::

Call various configuration methods on the `PaperCircle` component to change where and how it's drawn on the `Paper`:

* Call `center(x, y)` to indicate the position of the center of the circle
* Call `radius(theRadius)` to indicate the radius of the circle
* Call `backgroundColor(theColor)` to indicate the color of the circle

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU11r2zAU/StCL1PAGDshMPwynDJGHzbGWtjKUohqXX9QRTL6oAnB/31SnbpW6ob0aQ82V9Y95957zvUB07bF2QEXkgHOcMGp1uj7Pm9bBDsDgmnk4sNarI1/CgXUwI2hyvykFZBZf2MUGKsEGi78164HdbiLcCk5A6Vx9veAG4azNMKCbn3FZwiOsCxLDeYPzpKX+M7F3X2EW8cXIHuy6/4QND7UH5r3h5Puv9nmtO+V3MVPDTM1WSSzuIamqg1ZurCoG85In7t2zC2o+IEWj5WSVrAryaUim8r1sznmKhBD+hFw1aiCQ1yAMKBIEiHHqyhrrCapC9/QPXALm1l0liVdRmjxyrOYoOHNdkzzEs0CayK8w9k8cZrvcbZIBr1vYdtyp1WgeyB1rh+vy5xZfkZvKVZQSvW6JqPaZ9z4JZ/0WzVvWlrAMM6tKxgb9yKbXAHaS4uetwKZmgqUfv4yGj1EOnnsVugpu8LEtVlZ42Y4lvkhncdeGyIs52N/zsLuQF+GmzLIS5iX3vAJBf2P1XszP/Hmq9+RvIL/7czvmppP2pujkKv+vieBYmkyLViYtLwgaX4J0/wdpnGHH/HkvvsHHc3tBA==]

:::




## Drawing a rectangle
Use the GUI component `PaperRectangle` to draw a rectangle on the `Paper` component. It has default values for all different properties (position, color, etc.), so you can use it as it is.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUktLw0AQ/ivLXEwglLRSkFwkFREPilRBxRa6JpMHbnfD7gRbSv67G9OmpkapJw8Js9n5Zr5HNsCLAoINRCpGCCAS3Bh2sw6LguGKUMaG2XozkzOqn0gjJ7wnrumOp+i4zQ1ppFJL1l7UX6sGVEHlQaJEjNpA8LKBPIZg6IHky3rjJwQ8UElikJ4g8Hf1s62ruQeFnddBNsOum0OHeLu/JV8fDthflfkh74laDd7zmDLn1HcHGeZpRs7YllGWi9hpemd2coF68Mqjt1SrUsYXSijtLFLLZ7Ht1Sjb9i1gihFxmQr0dhfutnI7NnmwgmDkW/1rCE79VvsDLgtheXc86MgOzdt1Esal+EW7khNMlN5H9mX3L85M1bv5ruy+4NFezoNdOCD7chahRrZWJftMiFHGJRuenS9crx9pDSyX0vRZ122c0aQkq2G75lZZv2tvHFkK4XpHwp7RHIfrC6i2MEwIdZ+D9U/eZDM6yOZSWkiY4n8n85hxOjF1OJrZ7T9n0nFs6Pcb1m0aH9E0OmbS6IdJXxn+JZN59QGLnMVZ]

:::

Call various configuration methods on the `PaperRectangle` component to change where and how it's drawn on the `Paper`:

* Call `center(x, y)` to indicate the position of the center of the rectangle
* Call `width(theWidth)` to indicate the width of the rectangle
* Call `height(theHeight)` to indicate the height of the rectangle
* Call `backgroundColor(theColor)` to indicate the color of the rectangle

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+KODdzwBjbJTB8M5xRSi82RlvYylKIah9/UEUy+qAJwf99Up16VpKG7GoXNkfyOe97dB55B7TrINtBIUqEDApGlSLftnnXEdxo5KUiNt4t+VK7p5BINd5rKvUPWmMwG75oidpITsYPbrcfinroQ6gEK1EqyH7voC0hS0LgdO0c30ogBFFVCvUvyOL3+NHG/VMIndXzKgex22HhNT76j827xUH3N6Y97HshNtFrW+omuIpnUYNt3ehgbsOiaVkZDLlLq9yhjJ5p8VJLYXj5VTAhg1Vt+1ntcyXyMX1fcIeFprxmGBXINcogmYdk4uPCwTy10ZH6MzO4moWXiCbzUTQZRd3mkShr11PR92jmcQthA1kaWyBbyK7iEcYDrjtmB+lB8Tjk6uW2ykvDzsAQfIGVkH/v0MT7DKo78aqOR33f0QLH4zxYw0jbV7DKJZKtMOTtyhDdUE6Sz18mR/cr7XjMmqtTLP3EpV4Ybc+wt/ku7AVwswm4YWxK62zZI6rL6k4BciPMK8f+xATdXzewSQ/YXLvrktf4v8n8bKj+pBwcSaz7x0y8iSXx6YH5SfMLktJLlNIPlKYd/guTp/4Pxnj2Dg==]

:::





## That's it!
Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!