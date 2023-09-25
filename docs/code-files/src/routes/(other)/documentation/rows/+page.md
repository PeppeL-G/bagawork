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

The child components are always as wide as the `Rows` component. Their height is, by default, just tall enough to surround their content.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuckGYRqHDtVmOpQMhdJmaKkDVq2zayJLriSTGKP/XjkhbtwmQxfdh+65e3kHYG0LdIBCcQQKhWDGBI992rYB7i1KbgKfD5nMbKGRWXyxTNsnVmEYHbqZ1Wg7LYPpY+y6TDpwBEolOGoD9H2AmgNdEJCsGS8dxoGAKkuD9hXozSl/87nbEGj9rhl5XLY6FjPB0+1J9FicqX7o6t96n9XOxB+s2FZadZLfK6F0mPcohNrlUVx81oJrlOERyuzar46tf8Lco8HCz/yhRd1gHpErSHIJYV8du44sLyGV92FCosluAnugyTIh0Pt4e3fycI1NK7wHMy9n9qVmuypT3gn7D//OlOY/ItzGfQOattN1]

:::




## `children()` - Setting the children
Use the configuration method `children()` to tell the `Rows` component which its child components should be. Pass it the child components as individual arguments (as many/few as you want).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNp1kFFrgzAUhf+K3CeFTFBhlLyNPYw9DMrWh41ZMDNXJ41JlkRaEf/7YqWyru1Lkntzv3MPZwCmNdABSsURKJSCWRu89A9aB3hwKLkN/HvIZe5Kg8zhm2PGrVmNYXTs5s6g64wMlo+pO+ZyhJFApQRHY4F+DtBwoAkBydpp03EcCKiqsujegd5l6an6ALpKxi0B7eXO4FnveS7OPC/rF99T8cf4U9f8t/yq9jb+YuWuNqqT/FEJZcKiRyHUvoji8rsR3KAMZyh3Gy8dO3+EhUeDxM9c0KJpsYjIDSS9hrCfjt1GsmtI7XNYkGhJnMABaJpmBHp/r+5PGW6w1cJnMGW5HX8BGfmwsg==]

:::

If the height of all children together is greater than the height of the `Rows` component, the `Rows` component will become scrollable, so the user can scroll the children vertically. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVksFOhDAQQH+FzAmSSgLoir0ZD8aDidE9aGQTKgxILC2Wkl1C+HfLkiW7usRwaTvTvpmXZjpgVQW0g0SmCBQSzuraemxvq8rCnUaR1pY5d5GIdKKQaXzRTOknlqPt7LORVqgbJazpYsj2keihJ5BJnqKqgb53UKRAPQKClUOn/XMgILOsRv0K9CLwD9Eb0NDrNwQqU+4EHus9jMGJ89R+8h6CI/H7pvit/Cy3tfvBkq9cyUakd5JLZcctci63seMmnwVPFQp7hCK9NqVdbRY7NqjlmTd/aF6UGDtkBvHPIey7YfNIcA7JzT/MI5fLxa6Wi62Wi10vFwuXi938K+ZMM0pgB9T3AwKt2cPVYerWWFbcTM0wfZv+BziCIJA=]

:::

In other words: you don't need to do anything special to handle overflow; the `Rows` component will automatically become scrollable if it needs to.




## Positioning the children
The children in the `Rows` component are positioned at the top. If you want them to be positioned elsewhere you can insert extra `Space` children to "push apart" the other children.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuckGYRqHDtVmOpQMhdJmaKkDVq2zayJLriSTGKP/XjkhbtwmQxfdh+65e3kHYG0LdIBCcQQKhWDGBI992rYB7i1KbgKfD5nMbKGRWXyxTNsnVmEYHbqZ1Wg7LYPpY+y6TDpwBEolOGoD9H2AmgNdEJCsGS8dxoGAKkuD9hXozSl/87nbEGj9rhl5XLY6FjPB0+1J9FicqX7o6t96n9XOxB+s2FZadZLfK6F0mPcohNrlUVx81oJrlOERyuzar46tf8Lco8HCz/yhRd1gHpErSHIJYV8du44sLyGV92FCosluAnugyTIh0Pt4e3fycI1NK7wHMy9n9qVmuypT3gn7D//OlOY/ItzGfQOattN1]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqNkcFKxDAQhl+lzKmFUNwuHsxNPIgHQdw9KHahMZnWYprEJGW3lL676ZYW113BSzIzmf+bn0kPzBigPXAtEChwyZyLHrtbYyI8eFTCRSHuc5V7bpF53Hhm/ROrME6O1dxb9K1V0fIwVodcDTAQKLUUaB3Qtx5qAXRFQLFmnHRsBwK6LB36F6BXc/wa4mFHwATWiXKCPUzJieFl9mJ6TH64vm/r336f9d6l74x/Vla3StxpqW1cdCil3hdJyj9qKSyqeBLlfhvQqQ9HXARptAo9Z2pZN1gkZJZsDONI/gBklwDsq2X/BawvAaqwowWQLF9B4AA0W2cEunBf38z73WJjZNjPuOfd8A3+irq7]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkVFrgzAQx7+K3JNCkNWyh/kmexh9GIy1DxuzYGZOJ41JlkRaEb/7YqWubh10L8ndJfe7P//rgCoFcQe5ZAgx5Jwa4z22iVIeHiwKZjwXd6lIba6RWlxbqu0TLdEPjtXUarSNFt70MFT7VPTQEygkZ6gNxG8dVAziBQFB62HS8TsQkEVh0L5AfHOKX13cbwkox5p1jrDVmMwET7Mn0UNypvqhqX7qfZZ7E77TfFdq2Qh2L7nUftYi53KfBWH+UXGmUfhjU2rXiuZITtnGDQqtO/zMgbyF6/jF4lWNWUCuAkSXAPSzodcClpcApXPsD0AwrYnAAeJoGRFo3X17d/J+g7XizrvZDma2J2a3KhLWcPsP3890Z98i+m3/BZGu6L0=]

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






## `child.size()` - Resizing the children
By default, all children (except :docs[space] children, read more about this later) are tall enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining horizontal space available in the `Rows` component should be distributed among them to make them even taller (if any remaining space exists). The number you pass to it indicates how many shares of the available horizontal space the child should occupy:

* `0`: the child will be tall enough to surround its content (default value for all children, except :docs[space] children)
* `1`: the child will be tall enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 1 share of that space (default value for :docs[space] children)
* `2`: the child will be tall enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 2 shares of that space
* Etc.

The reason :docs[space] children has the deafult size `1` is because you very often want it to have that size, but feel free to call `size()` also on :docs[space] children if you want them to have anonother size.

::: tip Example

Resize the screen for the app, and note how the size for the first and last child changes because they use the configuration method `size()`.

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1vgzAQhv8KugkkCxWiDmVDHaoMlao2Q6sSCRcfFMXY1DZKKOK/1wRBQ5oMXXwfvufu1dsBrWuIOsgkQ4gg41Rr57GN69rBg0HBtGPzLhGJyRRSgy+GKvNEC3S9YzcxCk2jhDN/DN0+ET30BHLJGSoN0XsHJYMoICBoNVw6jgMBmecazStEN1P+ZvN+S6C2uxbkuGw9FgvB8+1Z9FCcqH5oynO9z3Kv/Q+a7QolG8HuJZfKTVvkXO5Tz88+S84UCneEErOxq31jHze1qBPYmT80Lyu0fV1+oxt45AoaXkLpV0PTq8jqElJYP6Zr4YR6s/0EDhCFq5BAa+Pt3eTpBquaW08W3i7sjPVunces4eYffp4oTn9F9Nv+B12E2Ew=]

:::