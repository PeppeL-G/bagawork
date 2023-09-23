<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Rows`
On this page you find the documentation for the GUI Component `Rows`.



## Introduction
The `Rows` component is a layout that positions its child components as rows:

* The first child is to the top
* The second child is below the first child
* The third child is below the second child
* Etc.

The child components are always as wide as the `Rows` component. Their height is, by default, just tall enough to surround their content. You pass the `Rows` component its children as its main content.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuckGYRqHDtVmOpQMhdJmaKkDVq2zayJLriSTGKP/XjkhbtwmQxfdh+65e3kHYG0LdIBCcQQKhWDGBI992rYB7i1KbgKfD5nMbKGRWXyxTNsnVmEYHbqZ1Wg7LYPpY+y6TDpwBEolOGoD9H2AmgNdEJCsGS8dxoGAKkuD9hXozSl/87nbEGj9rhl5XLY6FjPB0+1J9FicqX7o6t96n9XOxB+s2FZadZLfK6F0mPcohNrlUVx81oJrlOERyuzar46tf8Lco8HCz/yhRd1gHpErSHIJYV8du44sLyGV92FCosluAnugyTIh0Pt4e3fycI1NK7wHMy9n9qVmuypT3gn7D//OlOY/ItzGfQOattN1]

:::

You pass the children to the `Rows` component as its main content.





## Handling overflow
If the height of all children together is greater than the height of the `Rows` component, the `Rows` component will become scrollable, so the user can scroll the children vertically. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkl1rgzAUhv+KnCuFIKtdt9W7sovRi8HYerExC2bm2Elj4pJIK+J/X2ypq1tleJOcfDwnD+GtgRYFhDUkkiGEkHCqtfNYLYrCwb1BwbRj6zoSkUkUUoMvhirzRDfoeofdyCg0pRJOd9DuNpFooCGQSs5QaQjfa8gYhBMCgubtS4frQECmqUbzCuHVqX6zdbMmUNhePfLYbHlc9IS7tzvpdnFm/VBmv32f5U77HzTZbpQsBbuXXCo3rpBzuYs9P/nMOFMo3CMUmZVt7Rs7uLFFnYm984fmWY6xRwaQ4BJCv0o6jEwvIRv7D8PI9Xix2Xixm/Fit+PF7saLzf8V87qAEthDGEwDApWdZ/NT6laYF9ymppe+XuAWertMF6zkZkTizkzjH4lm3XwDz61DUw==]

:::


## Resizing children
By default, all children are tall enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining vertical space available in the `Rows` component should be distributed among the children to make them even taller (if remaining space exists). The number you pass to it indicates how many shares of the available vertical space the child should occupy:

* `0`: the child will be tall enough to surround its content (default value)
* `1`: the child will be tall enough to surround its content, but if more space is available in the `Rows` component, the child will also occupy 1 share of that space
* `2`: the child will be tall enough to surround its content, but if more space is available in the `Rows` component, the child will also occupy 2 shares of that space
* Etc.

Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1vgzAQhv8KugkkCxWiDmVDHaoMlao2Q6sSCRcfFMXY1DZKKOK/1wRBQ5oMXXwfvufu1dsBrWuIOsgkQ4gg41Rr57GN69rBg0HBtGPzLhGJyRRSgy+GKvNEC3S9YzcxCk2jhDN/DN0+ET30BHLJGSoN0XsHJYMoICBoNVw6jgMBmecazStEN1P+ZvN+S6C2uxbkuGw9FgvB8+1Z9FCcqH5oynO9z3Kv/Q+a7QolG8HuJZfKTVvkXO5Tz88+S84UCneEErOxq31jHze1qBPYmT80Lyu0fV1+oxt45AoaXkLpV0PTq8jqElJYP6Zr4YR6s/0EDhCFq5BAa+Pt3eTpBquaW08W3i7sjPVunces4eYffp4oTn9F9Nv+B12E2Ew=]

:::




## Positioning children
If the height of all children together is smaller than the height of the `Rows` component, the children will, by default, be positioned at the top. If you want them to be positioned elsewhere you can insert extra `Space` children.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuckGYRqHDtVmOpQMhdJmaKkDVq2zayJLriSTGKP/XjkhbtwmQxfdh+65e3kHYG0LdIBCcQQKhWDGBI992rYB7i1KbgKfD5nMbKGRWXyxTNsnVmEYHbqZ1Wg7LYPpY+y6TDpwBEolOGoD9H2AmgNdEJCsGS8dxoGAKkuD9hXozSl/87nbEGj9rhl5XLY6FjPB0+1J9FicqX7o6t96n9XOxB+s2FZadZLfK6F0mPcohNrlUVx81oJrlOERyuzar46tf8Lco8HCz/yhRd1gHpErSHIJYV8du44sLyGV92FCosluAnugyTIh0Pt4e3fycI1NK7wHMy9n9qVmuypT3gn7D//OlOY/ItzGfQOattN1]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkcFrgzAUxv8VeSeFUFbLDvNWdhg9DMbaw8YsmJmnk8YkSyKtiP/7YkWna3vYJXkvye97H18aoEpB1EAqGUIEKafGeM/1WikPTxYFM56rm1jENtVILW4t1faF5ugH59PYarSVFt540Z22sWihJZBJzlAbiD4aKBhESwKClt2k83MgILPMoH2D6G6o313d7gkopzUje7FN38wMj7NH010zcf1UFX/9vsqjWXzS9JBrWQn2KLnUflIj5/KYBIv0q+BMo/B7KLZbRVMkQ7dzgxbWLX7ihLylIy60eFFiEtxCwmsI/a7obWR1DcldKhNkajMYv4LACaJwFRKo3X7/MOS7w1Jxl88s51m0a3PYZGtWcfuPbCe+k18T7b79AQFB3hk=]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkDFvgzAQhf8KugkkCzVEHcqGOlQZKlVNhlYlEi4+KIqxXdsoQYj/XhMUGppk6GLfnf29e3odUKUg7iCXDCGGnFNjvOc2UcrDg0XBjOfqLhWpzTVSi2tLtX2hJfrBcZpajbbRwpsehmmfih56AoXkDLWB+KODikG8ICBoPWw6fgcCsigM2jeI7071u6v7LQHltGbkKLYam5nhafdkemjOXD811V+/r3Jvwk+a70otG8EeJZfaz1rkXO6zIMy/Ks40Cn+EUrtWNEdy6jZuUWjd4WdOyFs44kKLVzVmwS0kuobQ74beRpbXkNKlMiHBFD6BA8TRMiLQuvv+4ZToBmvFXSKzZGdhJma3KhLWcPuPNM+cZr8m+m3/A7jB2Mc=]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUD1PwzAQ/SvRTYlkRVDEQLbAgDogIdoBRCrF2JcQ1bEt+6K2ivLfcVs1NLQLi+/D9969ez1wayHrQRiJkIFQ3PvoZZdbG+GWUEsfhbwvdEHCISdcEHf0ymuMk0O3IIfUOR2NH/vuUOgBBgaVURKdh+yzh0ZCdstA83a/6TAODExVeaR3yG5O+UfIhxUDG7gmyCPZ/FhMBI+7R9H74kz1c9f81ftmNj794mJdO9Np+WSUcXG5Q6XMpkxS8d0o6VDHR1BBy0CdUnjicmlsmLjAqqbFMmEnwMJygewK/NEQmfYaQx0uHBmS0UgGW8hmdzMGuxDvH07uLLG1Klw3cWliTO7X8yqXnaJ/OHMmtfwVMayGH7wFxrw=]

:::