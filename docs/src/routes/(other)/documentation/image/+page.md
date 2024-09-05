<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Image`
On this page you find the documentation for the GUI Component `Image`.



## Introduction
The `Image` component is a view that shows an image to the user.

::: tip Example

Example showing what the `Image` component looks like when shown on the screen.

::bagawork-project[app&baga=eNqVUMtqwzAQ/BWzpwRcy00ptLr5VHJoKSSHljoQ1Vo7JtYDad0mGP975YSYOLdepJnV7O6MOhDWAu+gMBKBQ9EI76PXY2ZthAdCLX0UcJfrnAqHgnBFwtG7qHA2P1Vzckit09H4MFT7XPfQx1CaRqLzwL86qCXw+xi0UMOmkxxiMGXpkT6Apxf8GXC/icGGWZPO87DlmUwMj7tH0wO5cv3S1rd+lypIktY1s+2OyHrOWGsbI2TyW+9rhbIWiXEVG5gdGCuMUkZ7RrtWfTNkmLLVW11g4n8q9pSm9nA38sTqajsfvyKGA/DFwyKGY7gfny/51qhsE/xNck6iZX6/LDPZNvSPbOsgTSgcs+2ViX7T/wEOOq23]

:::


## `url()` - Specifying the image
Use the configuration method `url()` to tell the `Image` component which image it should show. Pass it the URL to the image as a string.

::: tip Example

Example showing what the `Image` component looks like when shown on the screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVUMtKw0AU/ZVwVynETKwIOrviQrpQhHahmEKmmZs0dF7MQ1tC/t2ktaFxJwMz59znmdMCMwZoC6XmCBRKwZyLXo4LYyI8eFTcRT1uc5X70iLzuPLM+jdWYzw7RXNv0QerojExRLtcddAlUGnB0Tqgny00HOhtAorJYdOpHBLQVeXQvwPNLvijx90mAdPPmnSehy3PZCJ43D2KHsiV6ufQ/NW7lL9ah5NuWbmvrQ6KP2mhbVxY5MVsTAcr4mLnvXGUkGCEZjz9bvaNRN6wVNuaDMwMjJRaSq0c8bsgtwQJZmT12pSYuq+aPGSZOdyMPDWqPq85OZbAAej8bp7AsX/vHy82rFEa0X9jYsfEgYXbL6sFD8L/w4J1X5r6/oqLKxHdpvsB9Ba8xA==]

:::

The image will always be drawn at the center of the `Image` component. Try resizing the app screen in the example above, and notice that the image always stays in the center.





## Resizing the image
The `Image` will occupy the space given to it by the layout it's in (or the entire screen if the `Image` is the root component). If the layout hasn't given it a specific size (for example when using the `Image` component as a child in a :docs[Rows] or :docs[Columns] layout without calling `size()`), it will have the same size as the image itself.


::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUFFLwzAQ/ivlnlqITZ0I2rfhg+xBEbcHxQ6aNdeuLE1CkrqN0v9uu7q6ii8SSO67++7uy9cA0xriBjLFEWLIBLPWezrOtfbw4FBy63Vxk8jEZQaZw6Vjxr2wAv3glE2cQVcb6Y2FPtsmsoWWQK4ER2Mh/mig5BBfE5Cs6jed6EBA5blF9wZxdI7fu7hdE9DdrEnnMGwxgIngcfcougcXqh/r8rfeV7W3YbYtBTco/aGUuKVmGZIzWlTf/xlOuGHZrjCqlvxBCWX81CBPgwtCbYSfbp3TNqa01kIxHu7LXVkhL1moTEF7pHtEM1VVSlrqtnW1oUgxosvnMsPQfhb0Lor04WrEoZZFGpC/VAaj3wQOEM9uZgSO3Xt7fzZxhZUWnQkTMyf+ze1ukc95Ldw/DFx11NB1l5+mPyLadfsFJbDUSw==]

:::

If you want to give the image a specific size, put it in a :docs[Box] component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUF1LwzAU/SvjPrVQmzoRtG/TB9mDImwPihWaNekHS5OQ3GpH6X83XV1d9UkCyTk3N/ecnA6o1hB3kCnGIYZMUGsXj4eV1gveIpfMLhzuEplgZjhFvkFq8JkW3POP1QQNx8bIxXQxVPtE9tAHkCvBuLEQv3VQMYgvA5C0HpSO7RCAynPL8QXi6IRfHe7fA9Bu1uzlOGw9kpnhSXsyPZAz1w9N9dvvnWrDHc32hVGNZPdKKOOloqp56oefFcPSW0Z+WPKqKPEIs7ISzBtnJLiuv786rr+jDGepf9bQGOGlJaK2MSGNFooyp7N3gqyioTIFGZgeGMlUXStpCZZNvSOc8IhsnqqMh/ajIDdRpNuLiYdaFqkfjEr+FH4ALcTLq2UAB3de354S3fJaC5fILNlZmCu7X+cr1gj8R5pb1xqi27w0/THRv/dfBGPXQA==]

:::