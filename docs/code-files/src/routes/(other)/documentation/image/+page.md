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

::bagawork-project[app&link&code=StartPage&baga=eNqVUMtqwzAQ/BWzpwRcy00ptLr5VHJoKSSHljoQ1Vo7JtYDad0mGP975YSYOLdepJnV7O6MOhDWAu+gMBKBQ9EI76PXY2ZthAdCLX0UcJfrnAqHgnBFwtG7qHA2P1Vzckit09H4MFT7XPfQx1CaRqLzwL86qCXw+xi0UMOmkxxiMGXpkT6Apxf8GXC/icGGWZPO87DlmUwMj7tH0wO5cv3S1rd+lypIktY1s+2OyHrOWGsbI2TyW+9rhbIWiXEVG5gdGCuMUkZ7RrtWfTNkmLLVW11g4n8q9pSm9nA38sTqajsfvyKGA/DFwyKGY7gfny/51qhsE/xNck6iZX6/LDPZNvSPbOsgTSgcs+2ViX7T/wEOOq23]

:::




## Resizing the image
The `Image` will occupy the space given to it by the layout it's in (or the entire screen if the `Image` is the root component). If you want to give it a specific size, put it in a :docs[box] component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMFOhDAQ/RUyJ0iQ4hoT5YYXsweNye5BI5tQ6QDNAm3ooGwI/25ZsijevLTvTWfevL4BuNYQDZApgRBBVnFjnKdTrLWDPWEjjGPxkDQJZS1ywh3xll54ga53ribUInVt4ywPU3VMmhFGH3JVCWwNRO8DSAHRtQ8Nr6dN53bwQeW5QXqFKLzgN4vHgw/aaq0mZ7HtTFaGl92L6Yn8cv3Yyb9+H1QffElBpbsJvaBEWZR0hlkpK+HOvQlta6sUdG3lpiWRNhFjna4UF3b4KGsUkgeqLdjE9MRYpupaNYZR2dUfDBmGbPcsMwzMZ8HuwlD3VwsPdFOknj8v85bkfOgh2txsfDjZ+/b+Escea13Z76xiWSURm+M2j0VX0T+i2NvWgOzhpumPifEwfgPFyL2O]

:::