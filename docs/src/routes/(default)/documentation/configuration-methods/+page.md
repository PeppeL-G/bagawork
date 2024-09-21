<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# Configuration Methods
On this page you find the documentation for configuration methods than can be used on all GUI components.

## `backgroundColor()` - Setting the background color
Indicates which background color the GUI component should have. Possible values:

* A string containing the name of a color in English, such as `` `red` `` or `` `blue` ``

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUsFqg0AQ/ZXtXKogwVgKxUsxpZQcWkoTaEMNuNUxhphd2V3bhOC/d42JiWJCeupBmNmZNzPvPTdAswzcDYQ8QnAhTKmU5HntZRnBlUIWSaLjjc98VX6hQKpwpKhQr3SGhllVlECVC0bqQvlaVKACCgtinkYoJLifG5hH4PYtYHRZbtxCwAIexxLVB7j2Pp7ouJhakOl5DWQ1bFgljcPr/fXxZdK6/imft+8e6/bqwVe9LxouZoLnLHrgKRdGIDAKzLqsdK8RDElCv5FQoovkgLiqGmvqFqzAdWzNaQ3ujV3zGeMyS/UtDV4NKp5cDGMvytMzfDgbYMzFwYaj3WfYvvEf2QuTeRoJZMae2CijIVr7rFRkR9UTSNY8J1vViUooI/27+8C0upFatHzJOha0G301yJXmsFvzwgOzV2pjsDxNTetC2ATlZbh9xWyIxJkXKxRdCpY/buWN0/LmkWmIN8P/duY9oepaluYIoref9qShWN/uFqzZdHtBk3PJJOfEpOML/+LJtPgFJVy1vQ==]

:::





## `border()` - Adding a border around the component
Use the configuration method `border(thickness, color, sides)` to tell the component that is should have a border around itself.

The border will only be applied on the sides of the component indicated by the `sides` parameter, or all sides if no value for that parameter is provided.

This configuration method can be called multiple times to give
different sides different type of borders.

The parameters:

* `thickness` - A number indicating how many millimeters thick the border should be
* `color` - The English name of a color the border should have, e.g.  `` `blue` ``
* `sides` - A string indicating which sides of the component the bord should be added to. Write:
	* `t` in the string to add it to the **T**op side
	* `b` in the string to add it to the **B**ottom side
	* `l` in the string to add it to the **L**eft side
	* `r` in the string to add it to the **R**ight side

If `sides` is not provided, the border will be added to all sides
(the default value is `` `tblr` ``).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFkl1r2zAUhv/K4dzMBhGSjMDwzXDHKL3oKG2gK0vBqnUcm8iSkWTWEPzfK9WNG4e0ZFe7MEg65z0fz+sd8qbBZIe5FoQJ5pJbC9fbtGmAnh0pYcGfdyu1cuHLDXFHd44bd8PXFMV9xBlyrVEwBMJr14s67BgWWgoyFpM/O6wEJjOGiteh46sEGeqisOR+YzLdnx/8uXtk2Ph6I2Vf7Kq/jAYf+g/Dh8vR9JdtdTz30qf3Dys3eeL5Zm10q8QPLbWJMkMii9/D2vju0YJB9iRbOog4XyXKlmVlIdd1oxUpByW3wGFR1+DKKt9A0EBfA7QCLiXYSpCd9IUGaAyfMZlPPY0tJl+nA4kl1Y30W4yIjCCkdnNVpKKVn5DQ6oIKbd4NPOj9Cadb/ddO8rKSwpCK9ovfNTwntr8Flm8oUkOw1S28+uX35wpm375nMTut9LjbWp1ocJy4chet8zu8tfmls3gS2ESqlTJmZ8oeyJ6n20fiESSt0sL5H+EEwfDL997Mj7z5qbwkXdP/dua+5O6LDeYY8N0/9mREbDY9DWyctDgjaX5OpfkHlQ4n/BdPHrsXFxrKfw==]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU1Fr2zAQ/itCL7NBpElGYfPLcMsYfdgYa2ArS8GKdY5NZZ2RTqwh+L9Pjhs3ztKSPfXBWHff3X2n77O3XDYNT7Y8RwU84bmWzrGvm7RpGDwSGOVYOG+XZkndk1uQBLckLX2Xa4jiHiEL5K1hA9Bl276p5a3gBWoF1vHk95ZXiiczwY2sO8ZdCxcci8IB/eLJdH++C+f2XvAmzBt19sNu+mC0+MA/LN8FR9t/8dXx3otQ3ieWNFnJ/GFt0Rt1jRptlFlQWfwMow3s0aVg2Up7yMKbVv/iH0NeV/UO1/YAp8AVZYuycizHukEDhlgpHVNVUYDton6EY2gYYXOxQiKsmasUMGkU01DQha3WJe1yk374ILfgjzyZT4OOG568nw4aLqBudLj/SMuRfKl7uClS5fUrGqK5ggLts/UH3K8o/AP/uEleVlqFG0Z7MW4bmYPYR50LT/KkFtgGPds5zaiUhs0+fMpicbozGOVrc4LguHBJVz6IaZ5ovmEWTzptIuO1jsWZbXfgzuvbI/FIJDRpQeETOaFg97P03syPvPlsQku6hrd25mcp6Z3rzLEssL/syUix2fS0YOOiyzOK5udMmr8w6XDD//Hkvv0L9v3fqA==]

:::






## `cornerRadius()` - Rounding the corners
Use the configuration method `cornerRadius()` to tell the component how round the corners of the component should be. Pass the amount as an integer representing the number of milimeters. Default is `0`, meaning the corners will be sharp (90 degrees; not round at all).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1rwkAQ/SvLXJpAkGgplFxKLKV4aCkqtFKFbLMTDcbdsB9Ukfz3boxGI6nYUw+B3Z15b+a9ly3QPIdgC7FgCAHEGVWKvGzCPCe41siZIva8nfKpLr9YItU40lTqNzpHx60qWqI2kpO6UL4WFaiAwoNEZAylguBzCymDoOsBp6ty4g4CHogkUag/IPAP54k9FzMPcsvXQFZkg+rSWLyeXy9fXs62fzbp+d5j2149THXni8bLuRSGs0eRCelEElnk1uVYSI5ySFlqlNP1jwVtSZxovEBStSgiONGLVO3o7eMqFxy5JlQi2fEj61TEtVUerCHo+daDDQS3fq1/jKs8s7s3fGhID9VykITMZBf0C97HRMhjbCezL7gzFN+qEy/SjEnkzkHvKKcxeodbKXHvQGjlbYQhu5SsAZST7v1D5HrtSGuyWfGWAeeNU9032mrYj3kVkdspvXG4yTLXuxI2QXUd7lBxGyYJHiYaZZuD5Y9eZdM7y+aJW0g4x/9O5n1B9Y0qw5HETv89k4ZjXb/dsGbT3RVNvWuYer8wnW74l0xmxQ/jcsff]

:::





## `font()` - Formatting text
Use the configuration method `font()` to tell the component how text shown on the screen, such as text set through:

* `Text.text()`
* `Text.textWithBBCode()`
* `Button.text()`
* Etc.

Should be formatted. Pass it an instance of the :docs[Font] class, which you can configure by calling different configuration methods on it (for more information on those methods, see the documentation for the :docs[Font] class).

The font assigned to a GUI component this way will be passed down to all its child components, and their child components, and so on. A child component can override the font it gets from its parent component by calling `.font()` on itself.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk19LwzAUxb9KvC9roZRuIkhfpBOVPSjiBBUnNLa32zBLSpKiY/S7m1idS9fpfPKhIf/OuTe/Q1dAyxLiFWQiR4ghY1QpcrlMypLgm0aeK2LmqwmfaPtlEqnGsaZSX9Mpen5zoiXqSnKyPrC7dSOqoQ6gECxHqSB+XME8h7gfAKcLW/FDAgGIolCo7yGOvuYPZl4/BVAaP0fZmI2ahdP4uv66ebtodX9Rzdt934hXFRaCa+/cDGEmmJBeKjFPfT/MZnOWS+ReI5noW2MeajN46ai3IObaQeoHzumW1zOr0Jp9y+zOlm6Hq+/wDOAN4kFkQC0hPozWkG5xUTLzQAeWwydRL6MiySv2AyTBh1gI+Z3tRu3fEG6hGpc0w64nJhLJUlTkI0qiZ5ST/vHJBg5XeSpYteAdBdoXJ3pYafOGzzJXIvVDy8bjFWN+sKfsAdV+uq6ALMKk0Ci7CNq/oclm0MrmjBtJMsX/TuZuRnVP2XAkMdV3Z+IQ60fdwNxLR3tcGuzjNNjhtNnhXzJ5qt8B5//SeA==]

:::





## `keepIf()` - Conditionally keep/remove the GUI component
By default, all the GUI components you use will be shown. Use the configuration method `keepIf(condition)` to only keep the GUI component if the `condition` you pass to it is `true`. If the `condition` instead is `false`, the GUI component will be removed, and not used at all.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNp9Us1uwjAMfhXP2qGVqqps2iWCA70gDkzTxmHTQCK0LlRr0yhJBajquy+lpYNtcEhkx/5+YrlCLiWyCqMiJmQYZVxrmB3GUgLtDYlYg42rhViY5kSKuKE3w5V54Rty3LZiFJlSCegLzWvdgmqsPUyKLCalkX1WmMbIBh4KnjeKRwh6WCSJJvOOLDjFHzaulx5Ky3eBbMmmbXJhvNfvzTdJ715xERf5c5mvSYVkdkQiGIt4ACMITj2FCCkp1M/XpH8DNuNm29Ud9+zTp0lNyvT3jF6LnfajbZrFioTTlhZmbg37xl7Oar4laClBHDUh1Qzuq+tGan/lehdMX0Rymjg3vA8h8J/cXpIbqwIcdM6zrNO9u8JqgTAcwXXyv7TrdPMPaVgaO++ueUKClB0ZCNp1vX2r2yHOt8rDPbKHwK7LAdlj0K/KnHKZWZ5mZZb1N/cnBIM=]

:::





## `padding()` - Adding space between the border and the content
Use the configuration method `padding(amount, sides)` to tell the component how much space there should be between the border of the component and its content. Default is `0`, meaning no space at all.

The padding will only be applied to the sides of the component indicated by the `sides` parameter, or all sides if no value for that parameter is provided.

This configuration method can be called multiple times to give different sides different amounts of padding.

The parameters:

* `amount` - The amount of padding the component should have
in millimeters
* `sides` - A string indicating which sides of the component the padding should be applied to. Write:
	* `t` in the string to include the **T**op side
	* `b` in the string to include the **B**ottom side
	* `l` in the string to include the **L**eft side
	* `r` in the string to include the **R**ight side

If `sides` is not provided, the padding will be applied to all sides
(the default value is `` `tblr` ``).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFLwzAQ/ivhXmyhjHUykL5IFREfFNGBDjdobK5rMU1CkqJj9L+brlu3jinzyYfC5e6+u/u+ryugSkG0glQyhAhSTo0h98tYKYJfFgUzxMWrmZjZ5ks1UovPlmr7SBfo+W3FarSVFqQrNNm6BdVQB5BJzlAbiN5WUDCIwgAELZuNawgEILPMoH2FaLiNpy6u5wEoN6+HbIfdtY/e4d3+7vjmcXD9bVUc3j1x7W1iZgfvNP1YaFkJdi251F6ikSV+V1aUsUIsvHC8y1mH95JJXhiSylJJgcKSnBoSjsuSbBBECkI5J6ZgaAbtxE6jAL4gGg0d+SVE58OO+ARLxd3RPQF6nGPzcZfFrOK/EJfiCjOpd37t7f5Flif5aQZpXnCmUXhbts+KphhsX410G/6xRrKUFVnbQ2xOBQkvLhM/OI506lalOLLgsHFmryrrOGzWPMjEHzTaeKLi3A9OhE3RnIbbVvyeSFLEmUV9TMHmD2+9GR14cyMcJF7gfzvzklN7ZhpzNHHbf/akp1g4PC5Yv2l8QtPolEmjHybtX/gXT+b1NzudxGM=]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU12L2zAQ/CtCL7VBBNulUPxSfKWUe7ij9ALt0RxYsdYfnCwJaU0vhPz3ynbixsF3pE99MGg1OzvrGXtPuTE03dNCC6ApLSR3jtztMmMIvCAo4Yg/7zdqg/1TWOAID8gtfuMVBOGIoAXsrCIT0N8eRtKBHhgttRRgHU1/7WkjaBozqnjbKw4UyqguSwf4k6bR6fzoz4cnRo2fN2OOw27HYrb4pD8t3xcX23/tmsu91759vNjgasuL58rqTonPWmob5BZEHk6w4UI0qgqSiJEctwtI3CPSniGoTXBWebUgX9eNI4VujVagkNTckSRqW3KcQrQiWAPxVOIaAYQrQbYaUbdDzYaLeIEhocQBtE1V49C8GneZEmH0haZJ5K3e0fR9NNm8htZIb9HM7pnDmXu+LTPRyTds1uoGSm3/fh1n2m+E8F3/dquibqSwoIKTWw+GF8BOVR/U0b/MAtnpjgwfg39xrkj88VMesmWmz7Jr1YLAZeMGbzrvsjrK3Os8XPXeBKqTMmRX0h7BXcc7IeHMJK2yEsEuOdj/T2M2yUU2X5SnZBX872R+1BzfuT4cS7z665nMHIujZcPmTR+uaEqumZS8Mul8w3/J5OnwB3216kk=]

:::







## `showIf()` - Conditionally show/hide the GUI component
By default, all the GUI components you use will be shown. Use the configuration method `showIf(condition)` to only show the GUI component if the `condition` you pass to it is `true`. If the `condition` instead is `false`, the GUI component will still be used (so it will still occupy space), but it will not be shown to the user.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNp9Ul9rgzAQ/yq3Yw8KInZjL6F9WF9KHzrG1oeNtdBUzypoIknEFvG7L1br2m3tQ8Jd7n5/clyNvCiQ1RjKiJBhmHGtYXF4LgqgvSERabBxvRIr055QETf0brgyr3xHjttVjCJTKgFDoX1tOlCDjYexzCJSGtlXjWmEbOSh4HmreISghzKONZkPZMEp/rRxs/awsHwXyI5s3iUXxgf9wXybDO4VF5HMX8p8S2pKpiISwbOIRjCB4NQjxZRiqX6+Vvg3YAtukr7uuGefPk1qVqa/Z/QmK+2HSZpFioTTlVZmaQ37xl7OZpkQdJQgjpqQagb39XUjjb9xvQsmnchqHjs3vI8h8J/cQZIbqwIcdM6zrNe9u8JqgTCewHXyv7TbdPcP6bQ0dt5984wEKTsyEFT1vUOr2yPOt8rDPbKHwK7LAdljMKzKkvIiszztyqybbyduBLs=]

:::