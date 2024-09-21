<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Paper`
On this page you find the documentation for the GUI Component `Paper`.





## Introduction
The `Paper` component is a layout that you yourself specify what it should look like by drawing figures on it, such as lines, circles and rectangles. See the sub-menu `Paper Figures` to learn more about which figures that can be drawn.

::: tip Example

Example showing what the `Paper` component can look like when shown on the screen.

::bagawork-project[app&baga=eNq1ku9rgkAYx/+V496sQKJijeGb4WKMYBtRwRYz8KaPJdmdu3tkRfi/78zlOtMNBnuhPvp8v8+Pj7enLEmovae+CIDa1I+ZUuRx5yQJgS0CDxTR8d7lLuaXL4EhTJFJHLMltNpFBiVgKjkpE/nXrDBlNLNoKOIApKL2655GAbV7FuVsk3c8WKhFRRgqwBdqd4/xXMfZwqKJrvft7B+LjYoyxuBl/3L4/KUy/X0aVeceswRk543566UUKQ+GIhay5QnJ+BK8dsdfRXEggbcKl4sHwwR81IIYzp0SAq9tGephJP06aRxtoKp9iHiNkr2nrFS2DcQW3Wo0l5rdTj+vSm4z2CSx3tkgbyBz1HoUOkEa/4XbRHyoczjThPlQLjTTJTuoby3PkUB2IiWH/0dwxTjpXd+cLG869drphtc0qApdvE0RBf9q8yROSv6inYP6QVwPO7PKo2igvOMI0lnC/4N8XjG8UDlLSXT9ZoTGrr3uic7MDJoy/UZPf9DQtQJrkX0CsNCY7A==]

:::





## Coordinate system
The coordinate system that is used to position the figures to be drawn on the `Paper` component consists of two axes:

* The X-axe:
	* Starts with `0` on the left side of the `Paper` component
	* Increases toward the right
	* Ends (by default) with `10` on the right side of the `Paper` component
* The Y-axe:
	* Starts with `0` on the bottom side of the `Paper` component
	* Increases toward the top
	* Ends (by default) with `10` on the top side of the `Paper` component

See the next sub-chapter for an example of this.


## `showCoordinates()` - Showing the coordinate system
Use the configuation method `showCoordinates()` to tell the `Paper` component that it should show its coordinate system. By calling this method, the `Paper` component will:

* Show some lines to visualize the coordinate system
* Show the coordinates of the mouse in its upper right corner when you move the mouse over the `Paper` component

This method is very useful to call when you are developing your app, and then you remove it just before you publish your app, so your real users won't see the coordinate system.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNpdj01rwzAMhv9K0CkBr9AURvFt9DB2GBS2w8ZSqBYrWVhqGdlhLcH/fU5Lw7qT9Orj1aMR0DnQI9RsCDTUPXqfPZ8enMvoGMgan6V8rGwVaiEM9BJQwhZbyotztQpCYRCbzY2pGisbISpouDckHvTHCJ0BvVRg8TBdOo+DAm4aT+EN9N2qvKp30Otl3Clwye5m+eL3dBE3zPP5mXsSf8Afh+4/8hYdyeIT6+9WeLBmwz1LvmdB29K+WPgv/tkwi+lsMvB5Mb+m4Ai6LFcKTimu76+wr3Rw/TSboHfxF5xkeY4=]

:::




## `coordinateSystem()` - Setting the coordinate system
Use the configuation method `coordinateSystem()` to specify the coordinate system that should be used to position the figures that should be drawn on the `Paper` component. By default, it's `10` units wide and `10` units high, but using this method you can set it to something else.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNpdT8lqwzAQ/RUxJxtUQ2xagm4lh9BDINAeWupAVGnsmtiSkGQaY/TvtRIimp5m3ixvmYEbA2wGoSUCA9Fz58huejaG4Nmjko4s/Vyr2guL3OOr59bveYtZfpnW3qIfrSJpEaehVgEChUb3Eq0D9jlDJ4GtKCg+RKXLOVDQTePQvwN7qMob+gC2XoUDBbPQ3T1f+V6u4M5zkk++I/hjfDt2/y3vuUFbfHFxaq0eldzoXtvsqC1XLR7zQmhtZadi6sl5HLKKkse8cN/6Z5NWLstTYgpnYGVZUZiWun66ZXjDwfTxdslyCL/9D4Fu]

:::

::: tip Tip

Place your `Paper` component in a :docs[Box] component, and give your `Paper` component the same coordinate system as the `Box` has as aspect ratio, and the X and Y units in the coordinate system will always have the same size!

::bagawork-project[app&link&code=StartPage&baga=eNpdUMFqwzAM/ZWgUwJeoCmU4tvWw9ihULYdNpZCPVtJwxLL2A5LCPn3Oc0a1p2kJz09PWkAYQzwASQpBA6yFs5F+/7emAg7j1q5KORDrnMvLQqPL15YfxAlxsmlmnuLvrU6WhpTdcz1CCODgmqF1gH/GKBSwFcMtGimTRc6MKCicOjfgN+tsyt6B75djUcGJsjdDM96TzO48bysX3xP4I/xx7b6b/mBulQ4g9I/C19RnLFok6TyXNUqnol5kDRo008hv0pLrVY7qsnGJ7JCl3gKbCKrKj19pncem18Rd6bv3dJyccJmwWT5DoMOeJatGfQhbjfXe1+xMfU0E+4+jj+PQpCc]

:::





## `children()` - Setting the children
Call the configuration method `children()` to specify which figures the `Paper` component should draw. Pass the figures as arguments. The figures will be drawn in the order they are passed to `children()`.

For more information about the figures that can be drawn, see the sub-meny `Paper Figures`.

::: warning Note!

The `Paper` component is not an ordinary GUI layout:

* It **can only** contain *paper figures*, such as :docs[PaperLine] and :docs[PaperCircle]
* It **can not** contain ordinary GUI components, such as :docs[Text] and :docs[Button]

All *paper figures* starts with the name `Paper` to differentiate them from the ordinary GUI components. Also note that *paper figures* can only be used in the `Paper` component, and never in any ordinary GUI layout.

:::

::: tip Example

::bagawork-project[app&code=StartPage&baga=eNq1ku9rgkAYx/+V496sQKJijeGb4WKMYBtRwRYz8KaPJdmdu3tkRfi/78zlOtMNBnuhPvp8v8+Pj7enLEmovae+CIDa1I+ZUuRx5yQJgS0CDxTR8d7lLuaXL4EhTJFJHLMltNpFBiVgKjkpE/nXrDBlNLNoKOIApKL2655GAbV7FuVsk3c8WKhFRRgqwBdqd4/xXMfZwqKJrvft7B+LjYoyxuBl/3L4/KUy/X0aVeceswRk543566UUKQ+GIhay5QnJ+BK8dsdfRXEggbcKl4sHwwR81IIYzp0SAq9tGephJP06aRxtoKp9iHiNkr2nrFS2DcQW3Wo0l5rdTj+vSm4z2CSx3tkgbyBz1HoUOkEa/4XbRHyoczjThPlQLjTTJTuoby3PkUB2IiWH/0dwxTjpXd+cLG869drphtc0qApdvE0RBf9q8yROSv6inYP6QVwPO7PKo2igvOMI0lnC/4N8XjG8UDlLSXT9ZoTGrr3uic7MDJoy/UZPf9DQtQJrkX0CsNCY7A==]

:::