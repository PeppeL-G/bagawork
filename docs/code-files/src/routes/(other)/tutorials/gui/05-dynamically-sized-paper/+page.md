<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Dynamically sized paper
This tutorial will teach you how to dynamically size the `Paper` component.




## Maximizing the `Paper` component
If you want the `Paper` component to occupy the entire screen, then simply return it as your page's root component:

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUsFqg0AQ/ZVlLlWQYCyF4qWYUkoOLaEJtKEJuNXRhJhd2V1pgvjvXWNio5hgTz0oM+68eW/fMweapuDmEPAQwYUgoVKSl72XpgR3Clkoia7zBVuo8gkEUoVTRYWa0BgNszpRAlUmGKkPyq9FBSqgsCDiSYhCgvuZwzoEd2gBo9uS8QABC3gUSVQf4Nqneq7rYmlBqvc1kNWycdU0hNf8tfiyaal/ztZt3ROaohh80WATC56x8JEnXBh+rIl8s3EXC3bgOrYWuQf31q4FznCbJnp5Q2hDmyc348gLs+SKQM5GGHHx6+sZ9xX5b/xbDoLVOgkFMuOIVNOUBmidupkmHCj9MnxPINnzjBxsJGpFGRneP/im1Y3UZmRb1kHQHlyoUab0HY40r9w3B6U3BsuSxLR6wuYo++FOJ2bDJM68SKHocrD8E6tsnFY2T0xDvBj/O5n3FVU3sgxHEM1+OZOGY0O727Dm0F2PIafPJufCpnOFf8lkWfwA8oekuQ==]

:::

But as mentioned in the previous tutorial, you don't know how wide and tall the paper will be, because you don't know the sizes of the screens your users have on their devices, so drawing something on it will be hard. But *hard* does not mean impossible.




## Setting the coordinate system
On the `Paper` component, you can use the configuration method `coordinateSystem(width, height)` to specify the width and the height of the coordinate system, no matter which size the screen has. For example, by setting the width of the coordinate system to `5`, the right side of the screen will have x = `5`, and any `Paper` child positioned at x = `5` will be drawn at the right side.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUl1LwzAU/SvhvthCKOt0IH2RKiKCiriBDis0trddsUtKkuLG6H83Wd20s4755ENDPu65555zugJWVRCsIBEpQgBJyZQit8uwqgguNPJUEbNfRTzS9kskMo1jzaS+Zzk6bvuiJepacrJ9sLdNC2qgoZCJMkWpIHheQZFC4FPgbG4Z1xCgILJMoX6CYLDZT82+eaFQmX4dZNvsuj10Bt/yb4e3h53pr+pid+57VqH0XlnylktR8/RClEI6cW6IYtdLhJBpwa3wpdI4d0aUjMz1rChTidxpW0V63eWm4OgpO4fjU+K7nhnDOaHkxKVtndvxhsICguHAiF5CcDzYCp7gvCoNY0d4R2uo3q6zMK3LPYIFP8dMyK+cvnHvseNBvKuf8sYVS5BuThND6GmzOHEokSxFTdaxED1jnPinZ7FL+5HG3HrOewh2CyN9Xmuj4ZPmTpgsrDcOr8vSpQfCpqgOw/UFZC0MM42yz0H7Z7fZDHeyueQGEub438k8zpg+UjYcSQz775l0HPMH/YZ1i0YHFA0P6TT8pdP3Cf+SyUvzASUev3g=]

:::

You can verify the new coordinate system is used by using the configuration method `showCoordinates()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUtFKwzAU/ZVwX0whlHU6kL5IFRFBZbiBihMW29ut2CUlSdnG6L+brFrXWWU++dCQm9xzz8k53QAvCgg3EMsEIYQ451qT23VUFARXBkWiid1vJmJi3Bcr5AZHhisz5DOkXn1jFJpSCdJcuNOqBlVQMUhlnqDSED5vIEsgDBgIvnCMWwgwkGmq0TxC2PvcP9l99cKgsPNayHrYdV20hDf8jXhX7Km/KrN93UNeoPL1XC4vpFRJJmybpp7/yuO3mZKlSC5kLhWdziz11PPjpmu01gYXdMDIwB7PszxRKGg9fGK2c28ygb52ymjASOD5Vhg9YeTEY3Wf13KLwQrCfs/asIbwuNdYMMZFkTtdu1a0Xh/pt+s0Ssr8FwukOMdUqq/kdrh/MeheLvX3540KHiP7rMaW0Dd2odNIIVnLkmyDImbOBQlOz6Ye60Zac8uF6CDYb5yY89LYN3zQ3EmbhfOGijLPPXYg7An1YbiugJyFUWpQdTno/vU6m/5eNpfCQqIZ/ncyD3NujrQLRxHL/nMmLceCXrdh7abBAU39Qyb1f5i0q/AvmbxU74iGxjM=]

:::




## Using an aspect ratio
One confusing thing with the previous solution is that one unit in the x direction is not equally big as one unit in the y direction. But, by using the `Paper` component in a `Box` with specific aspect ratio, we can get a maximized `Paper` with that aspect ratio, and also use a coordinate system with that aspect ratio.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU9Fq2zAU/RWhl0kgjJ2usPmlOKWUwjZGU1hLU4hmXSemjiQkmSYE//ukunGjNC3ZUx9srq17zrn3HHuDudY43+BSCcA5LhtuLfq5LrRGsHIghUW+3kzl1IWrNMAdTBw37jefA6H9iTPgWiPRcBDedj2owx3DlWoEGIvz+w2uBc4zhiVfBsVnCGZYVZUFd4vzdFvf+bp7YFh7vgjZk131D9Hgg/4wfHjYm/6yrffnHqtV8peXj3OjWinOVaMMmRkQM5pwq6F019zVipwylKU0KRd1I0hPMPVyGkxiF+rpXCkjauklLKFv+eZ+bE9YDl2TtXWwjFgNyIH4hfpHLSGxYTGS+U6a+L3IV4a+U7btpH1BI9cZXuF8lHo71zg/SQcrb2CpmzDjrqWRi4V9vKoK0TYfWKnkGCplXr+AHe0PjL5WT/btphPNSxi2ufGCifM3MisMoLVq0XPgyC24RNm3s9nr5jHSG90upT1kZdw4dePW+R1eZH4pn0vwhsi2aSg7EnYH9jjc9oRGJilZVA7MIQfDP9NnM9rL5kJ6SDGHz07mz4K7LzaEY5BXfz+TyLEsPWxY3HR6RNPoGKbRO0y7E/5PJg/dP2V4380=]

:::

For example, let's say you want to draw a tic-tac-toe game on a `Paper` component. Then you want to maximize the paper as a square (i.e. width = height), and you want the square to consist of 3 * 3 smaller squares, so using the aspect ratio 3:3 is perfect!

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFks1q4zAUhV9F3M3YIEx+KBRvBqeU0kWHoSlMS1OIal0npo6ukGSaEPzuI1eNJ86kJV11ESNZOudcfydbEFpDuoWcJEIKeSWsZTebTGuGa4dKWubX25maufaXGxQOp04Y91ssMIrDiTPoaqNYd9C+bYKogYZDQZVEYyF93EIpIR1yUGLVJr5JgAMVhUV3D+lgt37w6+aJg/Z+PWUwuw6b3uBdfjd8uzmY/qouD+ee0Dp5FvnLwlCt5AVVZKK5QTmPE2E15u5WuJKiMWfjOMmXZSWjoJ/5NI0msUt6vSAyslQ+wUbx/3YLP7X3y7tb0411uAqmwS3uYeOwhnQ08Dw2kI4HHYs7XOmqTdln0sOQ2ZfrIpN19QkLUhMsyPyrcC/7E1K39GoDAYOqgzDVIke+2935wMT5RzTPDLIN1eytMeaWQrHh+c95zI8rPap6pY4EHF6cuUnt/De8x/wiT7ZlE6m6qmJ+ouwB7Wm63Uncg0QqKxyaYwTbP33oZnTQzaXykmyB393Mn6VwP2xbjmE+/eNOesSGg+PA+pfOTrg0OsVp9IHT/oRf6eSp+QtW/Mrr]

:::



## That's it!
Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!