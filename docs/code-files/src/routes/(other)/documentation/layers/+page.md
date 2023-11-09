<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Layers`
On this page you find the documentation for the GUI Component `Layers`.



## Introduction
The `Layers` component is a layout that shows its children in front of each others, like layers (the first child is the bottom layer, then the second child is the layer on top of that one, and so on). The children are always as wide and tall as the `Layers` component. 

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFKxDAQhl8lzGkLoeiKB3vrSQoKgntQ7EJjM3WLaRKSKWwpfXfTlq3bPSh7SWYmM/98+XsQ1kLSQ2kkQgKlEt6z5y61luGRUEvPQtznOqfSoSB8JeHoRXzhJpqqOTmk1mm2PIzVIdcDDBwqoyQ6D8lHD7WE5JaDFs24aWoHDqaqPNIbJDen+D3Ew56DDVqryVksm5MV8LJ7gR6TM+rHtr7kfRJdIIvLQ62kQ72ZH3PaBYmYwrEpMiYaRgdkn4bINEyNI3ER8b96pyZW6ylpaikV/jdCxl5qR4uLHI6QbO+2HLpw3z+crNlhY1X42sqilSup/86qVLaKrrDljK/4hRj2ww/n5MKr]

:::



## `children()` - Setting the children
Use the configuration method `children()` to tell the `Layers` component which its child components should be. Pass it the child components as individual arguments (as many/few as you want).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkk9Lw0AQxb/KMBdTWIp/8GBuxYMUFAQ9WEwh2+ykCW52w+5ELSXf3U1S06aePGVmd+e93/CyR1nXGO8xs4owxkxL7+Fpt6hroG8mozyEep+YhDNHkumFpeNnuaVo1p8m7IgbZ2C86E7bxLTYCsytVuQ8xu97LBXGVwKNrDqn/jkKtHnuid8wvvytV6Fu1wLroDWZHMSWQzMBHr1H6K45oX5oynPeR7kLZPOsKLVyZKLhMuHXIDFnW0ezOYcySpcgK9hQURoFXBDobjBUkkE5+eVBwkZmH1tnG6MEeAs720AmzQWDJ4KK5ulMTOSP7++tti5KdVlROjE8OpWmb6pSKU0CvkougmU3ceL718Iy22pcYjUgHYCAPqlTtc22OBE/GBbyfKcNZbLxBD1Zt7TpqHJnDYPN/ygcYWbjzyDwG+Prm2uBu/C9vftN+JWqWoeEJklPwl34j2W+UI3mf6Q7pNivnh4h2nX7A57SCTo=]

:::

Any child that is `null` or `undefined` will not be used.