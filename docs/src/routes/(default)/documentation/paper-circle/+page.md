<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperCircle`
On this page you find the documentation for the paper figure `PaperCircle`.





## Introduction
`PaperCircle` is a figure that you can use to draw a circle in a :docs[Paper] component.

::: tip Example

::bagawork-project[app&baga=eNpdUMFKxDAU/JXyTi3Esu2CLLnpHsSDIOpBsQsbk9caTJOQpLCl9N9tt9vgesqbeZN5wwzArAU6ADcCgQJXzPvkqb+zNsFTQC18Ms1DpavAHbKAr4G58MwaTLMzWwWHoXM6iYuZHSs9wkigNkqg80A/B5ACaEFAs3a+dJYDAVPXHsM70JttuaIPoLtiPBCwk93V58XvcQFXmeP5mHsGf4I/dPJ/5Htzypm3yMMLC9KkxYYkxSbL+bdUIl2k1WRq0eXcGCeknhvofcA2ir8Y/2mc6bTYG2VcejSO6QaPFxuHOjpdvPbScYVkZbNlyGJvBE5Ay3JLoJ/e3e3axBu2Vk0B5kYO4y+bqJnr]

:::





## `backgroundColor()` - Setting the background color
Use the configuration method `backgroundColor()` to tell the `PaperCircle` figure which color it should have. Pass it the name of the color in English as a string, such as `` `red` ``, or `` `blue` ``.

If you don't call `backgroundColor()`, `` `black` `` will be used as the default color.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNplUMFqwzAM/ZWgUwJeaFoYxbcth7HDYGw7bCyFuLbahqW2kR2WEPLvS5rWrNtJetLT0+P1IKwF3oM0CoGDrIVz0VN3Z22ErUetXDT2faELLwmFx1cvyD+LPcbJaVp4Qt+QjsJimg6FHmBgsDO1QnLAP3uoFPCMgRbH6dOJDgzMbufQvwO/WS0v6AP4Ohs2DOwod3U86z3O4MpzeB98T+CX8Yem+mv53rSpcBalfxG+MnG2YFG2SFJ5qGoVz9RiFLVIqTSGVKWnBDrn8RjI7mC+87B0cZJuhfzak2m0yk1tKC4NCb3H8ixMqIP2WT2vSNb4/5BQlQm7kJO5SULADFrgy+WKQTfW9e0lsjc82noyM0a3GX4A8uapPw==]

:::




## `radius()` - Setting the radius
Use the configuration method `radius()` to tell the `PaperCircle` figure which radius it should have. Pass it the radius as a number. 

If you don't call `radius()`, the radius will be 25% of the coordinate system's width/height (whichever that is smallest).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNpdUEFqwzAQ/IrZkw2qiR0oQbfWh9JDobQ9tNSBqNImEbUlsZJpgvHfa8eJaHrS7s5oZpgehHPAe5BWIXCQjfA+eTreOZfgIaBRPhnnvjZ1kIQi4GsQFJ7FDtPsdK0DYejIJBGYrkNtBhgYbG2jkDzwzx60Al4wMKKdnE50YGC3W4/hHfjNsrxsH8BXxbBm4Ea5q8+z3uO8XGWO9jH3tPwJ/tDp/5Hv7SEX3qEMLyJomxYLlhSLLJd73ah0ptajqEPKpbWktJkaOPqAbST7vf2pIujTLP8S8ntHtjOqso2ldGNJmB1uzsKEJmqf1StNssGchNKdT4uMXfBsHrLYKYMD8LJcMjiO7+r20tIbtq6Z/Me21sMvLvGj3g==]

:::





## `center()` - Setting the center position
Use the configuration method `center()` to tell the `PaperCircle` figure where the center of the circle should be. Pass it two numbers:

* The X coordinate of the center
* The Y coordinate of the center

If you don't call `center()`, the circle will be positioned in the center of the coordinate system.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNpdkF9LwzAUxb9KuU8txLKuICNv2gfxQRD1QbGDxeRuK3ZJuEmxpfS7265rcD7l/jn53cPpQVgLvAdpFAIHWQvnoqfuztoIW49auWis+1KXXhIKj69ekH8WB4yT87T0hL4hHYXFNB1KPcDAYG9qheSAf/ZQKeAZAy1O06WzHBiY/d6hfwd+k6+X7gP4Jhu2DOyIu/o88x7n5spzOB98T80f4w9N9d/yvWlT4SxK/yJ8ZeJsxaJslaTyWNUqnqXlCLVIqTSGVKWnBDrn8RTE7mh+irB0cZJ+Cfl9INNoVZjaULwzJPQBdxcwoQ7sC72oSNaYStQeKc5ZlCdskSRzkYRYGbTA1+ucQTe+m9slqDc82XqyMAa2HX4B+m6kWA==]

:::