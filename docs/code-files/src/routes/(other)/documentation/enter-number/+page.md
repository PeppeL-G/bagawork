<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterNumber`
On this page you find the documentation for the GUI Component `EnterNumber`.

## Introduction
The `EnterNumber` component is a view in which the user can enter a number.

::: tip Example

In this example, the GUI consists of only the `EnterNumber` component, so it covers the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVkD9rwzAQxb+KeFMKGtqEDNXmoZQMLYFmSKgDUa1zCbVlIZ1JgtF3r5wQY3frdO/+vftxHbRzUB2KxhAUikqHIN4umXOCzkzWBJF0l9ucC0+a6YO157X+ptnDtZqzJ269FZZOYtTsezG3EVGibCpDPkB9djgaqCcJq+v+3nUBEk1ZBuIt1ONd75KOewmX3CabN7PVLZlgD9cH9D4Zsb+2x7/UL5bJv7f1F/mBWOIMNV/MJS4pLp/vGBuqXZVsJjgTgiz8rMrMtBX/A2GTRmeHw+hj+/gLxAiN8w==]

:::


::: tip Submit button

A `Button` can be added to the GUI to serve as a submit button (takes the user to the next page when clicked, the same as pressing the enter key in `EnterNumber`), for example:

::bagawork-project[app&link&code=StartPage&baga=eNqVUU1Lw0AU/CvLu5jCEmzFg7lIFZEeFLUFFbeQNXmxxXR32X2hrSFn7/5Ef4nbhLSJePG0875mhtkSpDEQlZDoFCGCJJfOsZvt2BiGG0KVOuZxKZSgxKIknJK0dCffMBjUXUEWqbCKKVyzznA3q4SqoOKQ6TxF6yB6KWGZQjTkoORqp1cfAAedZQ7pCaLjFj97XM05GM/Wu2zIJk3Rs71X31vfFR3v18Xyt+sHvXZB0xE0NTLBtph5kiB+XEg6cmyrC8sm9+fxgP+5fKnzA42gK0Vob4vVK9rQLT8wGA5Ck/v9RW0+iOsFTxiGYYdS0EVBpFUQf39+dfotOoTKYQPR6GTEYevf07M2qRmuvA71E+uFNHbvk2ycFjn9I6Umi7jzqfPqBzp/ybw=]

:::



## Adding an initial number
The number passed as the main content to `EnterNumber` will be used as the initial number in the component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD9rwzAQxb+KeJMLGhqHDtXmoZQMLYVmaKkDUa1zCLVlIZ1pgtF3r5yQ1O7W6d79e/fjBmjnoAZUnSEoVI0OQTwdC+cEHZisCSLpobQlV5400ytrzy96R9nNqVqyJ+69FZa+xaQ59mJpI6JE3TWGfID6GLA3UAsJq9vx3mkBEl1dB+I3qNuLfk86biRccpttns1W52SGfb1+RR+TCftjv/9L/WCZ/HPffpLPFvnyF1viAJUvc4ljinf3F5Y1ta5JXjOmGUYRvlZ1YfqG/8GxTqPZdjt52yb+ABjdjto=]

:::




## Adding a placeholder text
The configuration method `placeholder()` can be used to show a text in the `EnterNumber` component when it's empty. Try typing a number in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFPwzAQhf+KdVOQLERbMeAtA0IZiqjoACKVYuJLW5E4ln0WjSL/d5xULQkbk9/5+d373IM0BkQPZasQBJS1dI6tu9QYhidCrRyLus91TqVFSfhK0tKL3GNyM97mZJG81UzjN5uYgxdyHSBwqNpaoXUgPno4KhALDlo2Q98YAA5tVTmkNxB3F/0eddhxMHHbLHlelp2HGfa1/Yo+DBP2J3/8S/2oCe2zbz7R3ppalngY1yfFaLCu9ZZlm+L3OxxOIJarJYcunvcPF8YtNjFPc9YZXuq+sipVvqZ/8G3j06SY9Idd+AGwW5hc]

:::




## Going to next page
If the `EnterNumber` contains the cursor (has focus), the user can go to next page by pressing the enter key (`↵`). The default next page is the current page. 

Use the `pages()` configuration method to specify which other `Page` the user should come to depending on which number she has entered. The value should be an object, where the keys represent intervals of numbers the user can enter, and the corresponding values indicates which `Page` the user should come to if the user enters a number within that interval. The intervals can be expressed as strings the following ways:

* A single number, for example:
	* `'18'`: The interval `18` to `18` (matches only `18`)
* A minimum number and a maximum number separated by `_`, for example:
	* `'0_18'`: The interval `0` to `18` (matches all numbers between `0` and `18` (inclusive `0` and `18`))

When the interval consists of two numbers, one of them can be `X`. If the first number is `X`, that means no lower limit exists (i.e. `X` = `-∞`), and if the second number is `X`, that means no upper limit exists (i.e. `X` = `∞`). Examples:

* `'X_10'`: The interval `-∞` to `10` (inclusive `10`)
* `'23_X'`: The interval `23` to `∞` (inclusive `23`)

When the interval consists of two numbers, you can also add `E` (short for **E**xclusive) after the numbers to exclude them from the interval. Examples:

* `'10_20'`: The interval `10` to `20` (inclusive `10`, inclusive `20`)
* `'10E_20'`: The interval `10` to `20` (exclusive `10`, inclusive `20`)
* `'10_20E'`: The interval `10` to `20` (inclusive `10`, exclusive `20`)
* `'10E_20E'`: The interval `10` to `20` (exclusive `10`, exclusive `20`)
* `'10E_X'`: The interval `10` to `∞` (exclusive `10`)

Use the configuration method `page()` to specify which `Page` the user should come to if none of the intervals in `pages()` matches the number the user has entered.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVk19rgzAUxb9KuC+zIEOttc63spXRh5XB+tAxS8302sqsSoxbRfzu8w9atSD4luTck/vLSZIBjSIwMrBDB8EA26dxTN7SVRQRvHIMnJgU48wMTG4zpBw/OGX8nZ5QmFWrJmfIExaQAP9IRyy13AxyyEVwQ99BFoPxlYHngCGLENBL2a8ygAih68bI92BIzfizGOcHEaJit56z3mxTT3rYbfcWvZx02F8Tb0i9DjiybXL5Rlavm/wx8qmN56qNYFUFJA0TRsqdvYCkSFlszW7l5Xm3eKLc+8XVCcumfTUWsmZu8gfpKOvrB4M8nz3fKYvFjijrR1mSSnnlJD6/kyXpuC/EF6R9a34LXIRrkY20ECEFQ1W0XKyzU8ayG/BPSHBXlArWwG8NcOZ6jSPrywZnPobTZjMZpHUOEbS5XCEoy6cGQR1DaPOfjNA67xBUpUJYaGqDsBhDaG55MkFjvL+GZQWgLdXmb+3wUrx33v9j/SDin41bnWkyR6d/fsj/ARYNhWA=]

:::



## Storing entered number
If you want to store what the user has entered in `EnterNumber` in your current `Page`, you can use the configuration method `p()`, and pass it the name of the property (as a string) the value should be stored in.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMtOhDAU/ZXmxgWTEKJjXNgdC2NYaDTOwolM0goXJULbKZc4hPTfLUxAcOeq577Ooz1IY4D3kOkcgUNWyaZhD11sDMMTocob5nGfqpQyi5LwhaSlJ/mBwWbspmSRWquYwm+2GA4zlyoHLoRCVznaBvhbD2UO/CoEJetBbzyAEHRRNEivwC8nvPfYHUIwnm11eSZLzsXK9qw+Wx+Khff7tvzr+k4R2se2fkcbmUpm+DnSB2IcsE63liXPYhOZQJRHMcVKSau48Bszn6zQUiD2umU4nGLOLnoTlUcXid/PCOEEfHu9DaHz783tlHCHtVenddJVuLj5Soo4byv6R7qdXw3EQt8d3A8Cya7q]

:::

In the example above, what the user has entered will be stored in `p.iq`. If you want to store it in your `App` class instead, use the configuration method named `a()` in the very same way.




## Handling entered number
If you want to do something more complicated than just storing the number the user has entered, use the configuration method `handler()` to specify a function that will be called to handle the number the user has entered. In the example below, try entering a number, and then press the enter key.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMtOwzAQ/BVrxSGVogqKOJBbDwjlAALRAxWpFDfe0IrEsey1aBT533GeJNw4eR+zM+NpgCsFUQNZJRAiyApuDHuqt0oxvBBKYZivm0QmlGnkhG/ENb3wTwxW3TQhjWS1ZBK/2WzZ7lwiHbgQ8qoQqA1EHw2cBUQ3IUhetnrdAYRQ5blBeofoeqz3vnaHEJRnW1z2ZHHfLGxP6pP1tpl5f7Tnv64fJKF+tuURdT9PaK0KnuGpkwnSDsDqymoWv6arCXTiUhQeoIaq5xi/ndB8GmBLgmLADA64P6cg3VeWDXt21SyQbp3+5hjCBaLN7SaE2r9392M4Oyy9YVqGtMhla77ifCtsQf8IZuehQTrTdwf3A3PbxtM=]

:::