<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 4. Positioning GUI Components
This tutorial will teach you how to create more fancy GUIs by using multiple GUI components in your pages' GUIs.

## The root component
As you know, you should in the `Page` method `createGui()` use GUI components from Bagawork to create and send back the page's GUI. This method, as all methods, can only send back one value, and in this case that value should be a GUI component. That GUI component is know as the page's *root component*, and it will cover the entire screen. That it indeed does cover the entire screen is easy to verify by giving the component a background color.

::: tip Example

In the app below, the root component of the page has no background color (its background is transparent), and it's the application's default background color we se. So it's hard to tell what space the root component does occupy (but it does still occupy the entire screen).

::bagawork-project[link&app&code=StartPage&baga=eNpdUMFqwzAM/RWhy1owJdtuvu00dhgMlsPGUqhnK01YYhtLYS0h/z4nZWHdxbynJ0vvaUQTI+oRbXCEGm1nmOH5/BAj0EnIO4aMx8pXYhMZoVcxSV7MkTbbpVpJIhmSh1WYq1PlJ5wU1qFzlBj1x4itQ32r0Jt+3rS0o8JQ10zyhrr4xe8ZT3uFMc+6+nkZ9nQhV4bX3avpmfxx/Ti0//2WuXUn+dkcyqblhYMNfQyevEBjGHyAT2O/jikM3ingAK3ccJaSAwkBmAi+GyPA0VjKIgRrh9gS7w7b9QwKT6jvipzvjPq+WLOV1Mcue5sz7qcfT9uI3w==]

:::

::: tip Example

In the app below, the root component of the page has an orange background color, so it's easy to see what space it occupies (the entire screen).

::bagawork-project[link&app&code=StartPage&baga=eNpdUMFKw0AQ/ZVhLrYQStXb3sSDeBAEe1BMIeNm2gbTnWVngi0h/+6mxWi9vZn39s3b1yPFiK5HLzWjQ9+SKjwd72IEPhiHWiHjvgyl+cRk/GKU7Jm2PJuftqUlti4FmIhxO5RhwKHAjbQ1J0X33mNTo7suMNB+vHSSY4Gy2SjbK7rlD37LeFgXGLPXxcuz2eN5uAg83Z5Cj8Of1A9d8z/vKksXH+Q/t0m6UN9LK2lWSaKw5Wq+sEzPqtWu0ZMSvOyjBA4GO1KgAGcl/DoUoAKNXSkw6RFMBJQZvnZkoJE8ZxLE+y42rItqPvVU4AHdzTIXcER3u5w+v+J9bHP4sYT18A1irJVa]

:::




## Using multiple GUI components
*But if `createGui()` can send back only one GUI component, how can I use multiple GUI components?* Well, there exists some GUI components whose sole purpose it to contain and position other GUI components on the screen. These GUI components are called *layouts*, and the GUI components they contain are called *children*.

By using a layout, `createGui()` can send back only one GUI component (the layout), but that GUI component can in turn contain other GUI components. And when the layout component is shown on the screen, it will position and show the child components it contains on the screen too. This way we can build a GUI consisting of multiple GUI components!

Let's go through some of the layouts we can use.

## The `Rows` component
The GUI component called `Rows` is a layout that positions its children as rows:

* The first child is positioned at the top
* The second child is positioned below the first child
* The third child is positioned below the second child
* And so on...

All children are as wide as the `Rows` component, and their height is by default just big enough to surround their content. The `Rows` component's children should be passed as individual arguments to the configuration method `children()` (separate the arguments (the children) by `,` (comma)).

::: tip Example

Example of how to use the `Rows` component to position three `Text` components as rows. All GUI components are given a background color, so one easily can see the space each component occupies.

::bagawork-project[link&app&code=StartPage&baga=eNp9kTFrwzAQhf+KuKU2iOC2m7bSoWQIlDZDSx2wap1jEVtSpTNJMP7vlWNqmpZkEXcnfe8eTz1I50D0UFqFIKBsZAhsdXxwjuGB0KjAYt3nJqfSoyR8JenpWW4xSU/TnDxS5w2bL8bpkJsBBg6VbRT6AOKjB61A3HIwsh03nZ4DB1tVAekNRPZTv8d62HBwUeuMnMSWU3NmeN49mx6bX66fOv3X74vdh8WnLHdbbzujHm1jfVJ4VEW6KGvdKI8mmYic1lF3QfFIiuVNy6hGVmkfiHm7j+//yThtdkXKr+ABS2vUJV5+dfI6T7X2F/FGt1ikE53O/8HhAOIui0EfQdxnc8hrbF0TQxrD3gzfTtK8Jw==]

:::

Note in the example above that the root component (the `Rows` component in this case) occupies the entire screen, including the part occupied by the children, although it doesn't look like that. The children are drawn on top of the `Rows` component, so their' background is covering the background of the `Rows` component, so therefore we can't see the background of the `Rows` component where the children are positioned in this example.

::: tip Example

This is the same example as before, but only the `Rows` component and the third child are given a background to show that the `Rows` component's background also id drawn where the children are (underneath them).

::bagawork-project[link&app&code=StartPage&baga=eNqFUMFKxDAQ/ZUwF1soS9VbbuJB9iCI7kGxC43JdBtMk5BM2V1K/910q8VV0Et4M3nz5s0bQHgPfADpFAIHaUSM7P544z3DA6FVkSU8VLYiGVAQPpEI9CB2mOWnbkUBqQ+WLR9Td6zsCGMBjTMKQwT+OoBWwC8LsKKbNp3oUIBrmoj0DLz8wi8Jj9sCfNI6m5zF1nNxZnjZvZieim+u73r90++j28fVm5Dvu+B6q26dcSGrA6o6X8lWGxXQZvNERZuku6L0ZPX6omPUImt0iMSC29d58QctonRW/c+jVodP2m9XRndY5/N0vuRbwAH4VZmCOwK/LpfQNth5k46ewtuOH++1qhE=]

:::

### Positioning children
As you can see in the previous example, the children in `Rows` will be positioned at the top of the `Rows` component. You can use the GUI component `Space` as children in `Rows` to push apart the children. The `Space` component is a GUI component who's primary purpose is to simply occupy space, so the other children in `Rows` are positioned where they should be.

If the `Rows` component contains a single `Space` child, that `Space` child will occupy all the space remaining after the other children have occupied their spaces.

::: tip Example

Example of using `Rows` with a `Space` child.

::bagawork-project[link&app&code=StartPage&baga=eNp9UMFqwzAM/RWjyxIwJdtuvo0dRg+DsfawsRTixUpr6tjGVmhLyL/PaWhYN7aLeZL1np5eD9J7ED3UTiEIqI2MkT2fHrxneCS0KrKE+9KWVAeUhCuSgV7kFrP83C0pIHXBsvlj7A6lHWDg0DijMEQQHz1oBeKWg5XtuOk8Dhxc00SkNxDFBb8nPGw4+KR1xZzEllNxZXjePZsei2+unzr90++rO8TFp6z32+A6qx6dcSGrAqoqX9Q7bVRAm02MktZJd0HpyarlTctoh6zRIRIL7pDmf8l4bfdVzi/0lZc18n/E0hV/ahndYpVP5HwOl8MRxF2RUjuBuC/mxNbYepMuHpPbDF9HZqmr]

:::

If you use multiple `Space` children in `Rows`, then the remaining available space of the `Rows` component will be divided evenly among the `Space` children.

::: tip Example

Example of using `Rows` with two `Space` children.

::bagawork-project[link&app&code=StartPage&baga=eNqVkUFLAzEQhf9KmIu7EErVW27iQXoQxPaguIWNyWwbupvEZJa2LPvfzXbpYhUFL2EymffNI68D6T2IDpTTCAJULWNkj8c77xkeCK2OLNVdYQtSASXhkmSgJ7nBLD91CwpIbbBsehi6fWF76DlUrtYYIoi3DowGcc3BymbYdBoHDq6qItILiPm5fk11v+bgE+tCOcIW4+XC8LR7Mj1cvrh+aM13v89uH2fvUu02wbVW37vahawMqMt8pram1gFtNioKWiXujNKRlYurhtEWWWVCJBbcPs3/wHhjd2XOz/Kllwr5H7CIyln9G01+tPI/NNqa8CusNg2W+ajOp6w4HEDczFMIRxC38ymAFTa+Th84BLHuPwH21cbL]

:::

The `Space` component doesn't show anything, so you can't see it on the screen. But if you give it a background color, you can easily see what space it occupies. While developing, it's a very good idea to give each component a unique color, so you can easily see what space it occupies.

::: tip Example

Example of using `Rows` with three `Space` children.

::bagawork-project[link&app&code=StartPage&baga=eNqFUs9rwjAU/lfCu6yFIm675TZ2GB4GY3rYWIXG5FWDaZIl6VRK//elFotOnZfw8vL9gi8NMGuBNsCNQKDAFfOevO6erCW4DaiFJ3Fucp0H7pAFnAbmwhtbYpLut3lwGGqnyfDQbdtct9BmUBol0HmgXw1IAfQ+A82qzmkPhwxMWXoMH0DHh/kzzu08Axu1Tpi92KS/nAQevIfQ3eUo9Ust/+Z9Nxs/WjC+XjpTa/FslHFJ4VAU6YivpBIOddIz8jCLuqMQj6SY3FUkrJCU0vlAnNlE/JmMlXpdpNmBPrWM4znKS/WD7gh3wcYjN1pc82HfNbvts0OlOv4t3CK66P/jhJV0V9MoWWGR9ux0+AYZbIE+jGO/O6CP46HbGVZWxW66juftL39B6ZA=]

:::



## The `Columns` component
The GUI component called `Columns` is a layout that positions its children as columns:

* The first child is positioned to the left
* The second child is positioned to the right of the first child
* The third child is positioned to the right of the second child
* And so on...

All children are as tall as the `Columns` component, and their width is by default just big enough to surround their content. The `Columns` component's children should be passed as individual arguments to the configuration method `children()` (separate the children/arguments by `,` (comma)).

::: tip Example

Example of how to use the `Columns` components. All GUI components are given a background color, so one easily can see the space they occupy.

::bagawork-project[link&app&code=StartPage&baga=eNptkEFLxDAQhf9KmVMLoax6y00ExYMgbA+KXWhMprth0yQmU9il9L+bbrG42kuYmcz35vEGEN4DH0A6hcBBGhFj9nK+9z7DE6FVMUv1UNuaZEBBuCUR6FXsMS8u05oCUh9stnxM07G2I4wMWmcUhgj8YwCtgN8wsKKbLl3WgYFr24j0BnzzU7+netwx8EnripzFnufmyvByezE9Nb9cP/X6r98HZ/rOxvJTyOM+uN6qNHEhbwKqpijlQRsV0OYzVFOVpEtKT9486hAp7fxDvbbHpmAryBals2qNEV+9WGeqgw6riNEdNsVMFEvcDE7AbzcpxzPwu82SYYWdNymDKcvd+A1SJ7F7]

:::

### Positioning children
Just as with the `Rows` component, you can insert extra `Space` children to push apart the other children.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNptUMFqwzAM/ZWgUwImdNvNt7HDGHQw1h42lkI8W0lNHdvYCrSE/PuchoZ168VIz3pPT28A4T3wAaRTCBykETFmr6dH7zM8EloVs1QPla1IBhSEGxKB3kSLeXFGKwpIfbDZ8jGhY2VHGBk0zigMEfjXAFoBv2NgRTdtOo8DA9c0EekD+OpSf6Z63DHwSeuKOYu9zM2V4WX3Ynpqfrl+7vVfv0/O9J2N5beQhza43qqEuJDXAVVdlHKvjQpo85lU0TZJl5SevF5jQ2nkH9Nre6gLdmFsvJDIbvDfdbu/KWB0h3UxM4olRwZH4PerFNAJ+MNqCWeLnTfpuCmk3fgD6jGi4g==]

:::

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNplUMFqwzAM/ZWgUwImZNvNt9HD2GEwaA8tcyGerbShiW1sBVpC/n1OQ82yXYzek/Xek0aQzgEfQVmNwEF1MoTs4/bqXIZXQqNDFutRGEHKoyTckvT0KU+YF3dWkEcavMlSY2YnYSaYGDS20+gD8K8RWg38iYGR/ex0/w4MbNMEpD3w6lEfYj0dGbiotZpcxN4XsAqcvFPoGfxK/Ta0f/NubDf0JpTfUl1O3g5GR8b6vPao66JU57bTHk2+DAnaOqmQPdAuGpUUn7zeoCFchv5pudZc6oKtNBZQpDMxuAJ/ruL+N+AvVdp9h73rYvb5BsfpB2qqlsE=]

:::



## Combining Layouts
So far you might not be that impressed. Not many applications have a GUI consisting of only rows or of only columns like that. But fear not; here's the secret to success: one can use a layout component as a child in another layout component! This way, a wide vararity GUIs can be implemented.


::: tip Example

Example of how to combine the `Rows` component and the `Columns` component to create a layout with a bottom navigation view (learn how to make it functional later).

::bagawork-project[link&app&code=StartPage&baga=eNqVkj1rwzAQQP+KuKU2iJCPTVvpUDKUliZDSx2wIl8SEVkSktwkGP/3yjExSeOhXcTdSXr3kK4Gbi2wGoQpEBgIxb0nL6dHawkeA+rCkxjXmc6CcMgDLgJ34Y1vMUnP1Sw4DJXTpN9oq02mG2gobIwq0HlgXzXIAtiEguZl2+l8HCiYzcZj+AA2vsSfMW5WFGxk3dzsYPMuuRHue/fSbXJl/VzJ377v5uBHay72W2cqXTwZZVySOyzydCR2UhUOddLdyMLCcoH0ki1jl1GIS5LPH0oSdkhKLjURRsfuIQLuuFbqfZ7SYV48U5V6wEbJEod0fgNulF5tkEaTyZDGNj7hlcZfONMhjpfqG90/SbMh0tqZg74HXdK0C9J+qCgcgU3HcVpOwGbjflKWWFoVf7qdmFXzA+OGB7M=]

:::

Most real GUIs are built on rows and columns like this, so this is a very powerful technique.



## That's it!
Good work, now you have learned the basics about using layouts and building more fancy GUIs! 🥳 It takes some practice before you're good at seeing GUIs as rows and columns, but you actually don't need more than this to create a wide variety of layouts. Just look at your web browser; all GUI components in it are arranged as rows and columns!