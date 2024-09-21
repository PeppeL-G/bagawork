<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Font`
On this page you find the documentation for the `Font` class.


## Introduction
The `Font` class represents information about how text should be formatted, such as:

* The color of the text
* The size of the text
* The boldness of the text
* Etc.

::: tip Example

::bagawork-project[app&baga=eNqVj0FLxDAQhf9KnFMCoeiKoLn1ou5BENyDYhcamqkE06QkKexa8t9Nt2zZevOSvHl5mflmBNn3IEZonEIQ0BgZAnk5ln1P8BDRqkCyHitbxcajjPgWpY+v8gspO7lV9BgHb8nyMLmpsgkSh9YZhT6A+BxBKxA3HKzspkmnOHBwbRswvoO4PuuPrNOeQ597rX7OzbZzsQJeZi/QU3FB/TTov7y7HC1aZyN9zEcR9A/Se1Y0zjhPa4+qZoWO0uiGMlbEnKb1M3okOpDgOiSTdVWzZV0OBxCb2w2HY77vHs477LDrTWZY7bLCL8P3ti3VYOJ/+WesC4i0T7+EO6KU]

:::




## `bold()` - Making the text bold
Use the configuration method `bold()` to make the text bold.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KepMNwjQpHarNS9oMhUIztNSBqNapmNiSkM6QYPTfK8fExN26SHdPd+99GkA6B2KA2ioEAXUrQ2Cv59I5hidCowJL9VCZimqPkvCdpKc3+YNZflEr8ki9N2x+GNVYmQiRg7atQh9AfA3QKBArDkZ2Y9JlHDhYrQPSB4j7a/2Z6rjn4JLXYnMy207NAnjOnqHH5ob6uW/+8u7SaKGtoWyTjuI7mWd5XlCSs8MLemRNYMF2yEbp7pDP/+JwArF+WHM4p/vx6Qq7w861KWwBveAsw3GrS9W39F/QCesGIu7jL0rTmrQ=]

:::




## `color()` - Setting the text color
Use the configuration method `color()` to specify which color the text should have. Pass it a string containing the name of the color in English, such as `` `red` `` or `` `blue` ``.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KepMNwrQpHarNS5sMhUIztNQBC+tUTGxJSGdIMPrvlWNi4m5dpHfvTvc+jSCdAzFCYxWCgKaTIbC3c+kcwxOhUYElPVamosajJPwg6eld/mCWX9yKPNLgDVsakxsrEyFy0LZT6AOI7xFaBeKBg5H9lHQZBw5W64D0CeL+qr+SjgcOLu1avZyX7eZiBbxkL9BTcUP9OrR/efdptNDWUPaSjqKxnfVZ7VHVeV5Qamb1Fj2yNrBge2STdVfny+84nEBsHjcczul+er4i77F3XYpcoa9oy3Dc6VINHf0Xd8a6gYiH+As6g50t]

:::




## `italic()` - Making the text italic
Use the configuration method `italic()` to make the text italic.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj0FLxDAQhf9KnFMLoeiKB3PrRd2DILgHxS5saCYSTNOQTGGXkv9uumXL1puX5M2bybwvI0jvQYzQ9gpBQGtljOz1VHvP8EjoVGRZj41rqA0oCd9JBnqT31iUZ7ehgDQEx5bG5KbGJUgcdG8VhgjiawSjQNxxcLKbks7jwKHXOiJ9gLi96M+s056Dz7tWL+dl27lYAS/ZC/RUXFE/D+Yv7y6PVrp3VDzlozIkrWmLsqwoN4rDCwZkJrLYd8gm6+ZQLj/jcASxud9wOOX74fGCu8PO2xy3wl6R1vFnq2s1WPov6ox1BZH26Rea25uJ]

:::




## `size()` - Setting the text size
Use the configuration method `size()` to specify how tall the text should be. Pass it a number representing how many millimeters tall the text should be, such as `` `10` `` or `` `15` ``.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KepMNwiQpHarNS9oMhUIztNSBCOtUTG1JSGdIavTfK8fExN26SO/ene59GkA6B2KA2ioEAXUrQ2Av59I5hidCowJLeqhMRbVHSfhG0tOr/MIsv7gVeaTeGzY3RjdWJkLkoG2r0AcQnwM0CsSag5HdmHQZBw5W64D0DmJ11R9JxwMHl3YtXk7LdlOxAJ6zZ+ixuKF+6pu/vPs0WmhrKNumowjND2brVZ4XlBrZ8Rk9siawYDtko3V3zOefcTiB2NxvOJzT/fB4xd1j59oUt8BekJbhe6dL1bf0X9QJ6wYiHuIvXPWbLw==]

:::




## `underline()` - Making the text underlined
Use the configuration method `underline()` to make the text underlined.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj01LxDAQhv9KnFMLoeiKB3PrRd2DILgHxS5saCZSTJOQTGGXkv9uumXL1puX5J3P95kRpPcgRmidQhDQGhkjez3V3jM8EloVWdZjYxtqA0rCd5KB3uQ3FuU521BAGoJlS2HKpsYmSBy0MwpDBPE1QqdA3HGwsp+czu3AwWkdkT5A3F70Z9Zpz8HnXavJedl2DlbAi/cCPQVX1M9D95d3l1sr7SwVT/mpBpt3m87mu8qKcq04vGBA1kUWXY9sSt0cyuU4DkcQm/sNh1P+Hx4vxDvsvcmOK/IVbB1/trpWg6H/0s5YVxBpn34BoZOc2Q==]

:::