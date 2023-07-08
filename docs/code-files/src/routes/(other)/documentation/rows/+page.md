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

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuckGURqHDtVmOpQMhdJmaKkDUu2zMZElVZJJjNF/rxwTt26ydNJ9PLp77x2Aaw10gEKVCBQKwa2NnvpM6wiPDmVpoxAPucxdYZA7fHXcuGdeY5ycqrkz6Dojo7kxVn0uPXgClRIlGgv0Y4CmBLoiIHk7bjrhQEBVlUX3BvT2HL+H2O8I6DBr8XMatpmSheB59yx6TH6pfuyav3pf1MHefPJiXxvVyfJBCWVi1qMQ6sCSeGJztw0TYxbgaMWSS140LbKEXNLpNZp/dfwqvb5G1+HemU5mWwkcgabrlEAf3rv7s1dbbLUIty48W9iU2f2myspOuH/4NIlkP/v9zn8DbM7IMg==]

:::

You pass the children to the `Rows` component as its main content.





## Handling overflow
If the height of all children together is greater than the height of the `Rows` component, the `Rows` component will become scrollable, so the user can scroll the children vertically. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkkFrgzAUx7+KvJNCGKtdt9Wb7DB6GIyth41ZSGaiSGPikkgrku++WKmbqzA8+ZL8fO8X8m+BVBVELaSSMogg5URr76mJq8pjR8ME1Z6r20QkJlWMGPZqiDLPJGd+cNpNjGKmVsIbDrpdmwgLFkEmOWVKQ/TRQkEhWiAQpOwmnXBAILNMM/MG0fW5fne13SGoXK/Rn32zTb8YCQ+zB+lu8cv6sS7++r7Ig776JOk+V7IW9EFyqXzcMM7lAQd+zyZm6zr62MHeAgeXPC9KhgN0SYdTNPmqySS9nKJzd99J+maWyWqWye0sk7tZJvezTNb/mgRD1BAcIQqXIYLGfVfrc362rKy4e/9RjkbRifV+k8W05mZGdnpJ/DPf7uw3JTwsXg==]

:::


## Resizing children
By default, all children are tall enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining vertical space available in the `Rows` component should be distributed among the children to make them even taller (if remaining space exists). The number you pass to it indicates how many shares of the available vertical space the child should occupy:

* `0`: the child will be tall enough to surround its content (default value)
* `1`: the child will be tall enough to surround its content, but if more space is available in the `Rows` component, the child will also occupy 1 share of that space
* `2`: the child will be tall enough to surround its content, but if more space is available in the `Rows` component, the child will also occupy 2 shares of that space
* Etc.

Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMFOhDAQ/RUyJ0gaI2w8yI14MHswMboHjWzSCgMhW2htS3aR9N8tS0DZ5eKpM9P35r15PTApIe4hEzlCDBlnWntPXSKlhyeDTa49V/dpk5pMITP4apgyz6xEPzhPU6PQtKrx5o9hatPGgiVQCJ6j0hB/9FDlEIcEGlYPSmc4EBBFodG8QXw71e+utnsC0u1aMMdl27FZGJ61Z9ND88f1Y1td+n0RR33zybJDqUTb5A+CC+XTDjkXRxr4IzY1O7fRpw7shTS4xvOqRjfX1Tf6YUCuWdEai321jK6hN2vo0t09aUQTK5hjJnCCONpEBDr33t1P2e2wltzdvshwEVuiD9siyVtu/pHbaJb+6tu9/QGJXM0J]

:::




## Positioning children
If the height of all children together is smaller than the height of the `Rows` component, the children will, by default, be positioned at the top. If you want them to be positioned elsewhere you can insert extra `Space` children.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuckGURqHDtVmOpQMhdJmaKkDUu2zMZElVZJJjNF/rxwTt26ydNJ9PLp77x2Aaw10gEKVCBQKwa2NnvpM6wiPDmVpoxAPucxdYZA7fHXcuGdeY5ycqrkz6Dojo7kxVn0uPXgClRIlGgv0Y4CmBLoiIHk7bjrhQEBVlUX3BvT2HL+H2O8I6DBr8XMatpmSheB59yx6TH6pfuyav3pf1MHefPJiXxvVyfJBCWVi1qMQ6sCSeGJztw0TYxbgaMWSS140LbKEXNLpNZp/dfwqvb5G1+HemU5mWwkcgabrlEAf3rv7s1dbbLUIty48W9iU2f2myspOuH/4NIlkP/v9zn8DbM7IMg==]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFugzAMhl8F+QRSNK1UO4wb2mHqYdK09rBpVEpGDEINJEuCWoR494UiGKxcdortfLZ//y0wpSBqIZUcIYJUMGO8lyZWysOLxYobz8VtUiU21cgs7i3T9pXl6AfXamI12lpX3vTRV7uk6qAjkEnBURuIPlsoOEQbAhUr+01XHAjILDNo3yG6H+MPF3dHAsrNWnQOw3ZDshA87Z5E98lM9XNd/NX7Js/m7oulp1zLuuJPUkjt0waFkGca+AOb2L1iKZIxO7j5PnWt3oYGt92iKJEGK3S4RrPvmq3S2zU6d9fP6LmuYLKcwAWicBsSaNz78Dj6eMBSCefDws+FhbE57bKY18L+w8NBMv3d3x27H5tX0tY=]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFOhDAQhl+FzAmSxrhsPNgb8WD2YGLcPWhkEyoMhGxpa1uyS0jf3bIEFOXiqTPTb2b++XtgSgHtIZcFAoWcM2OCpy5RKsCLRVGYwMd9KlKba2QW95Zp+8wqDKNrNbUabatFMH8MVZcKB45AKXmB2gB976EugG4ICNYMm644EJBladC+Ar2d4jcfuyMB5WctOsdhuzFZCJ53z6KH5Ifqx7b+rfdFns3NB8tPlZatKB4klzrMOuRcnrMoHNnU7hXLkUzZwc8PM98abLLobzevG8yiFTpeo9lny1bp7Rpd+etnOppNJnABGm9jAp1/7+4n5w7YKO4vXzi4MC0xp12ZFC23/3BtFJl973dH9wXv4M2E]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMFOhDAQ/RUyJ0gao2s82Bt6MHswMS4HjWzSCgMhW9qmLdklpP9uWQKK7sVTZ6bvvXnzBuBaAx2gUCUChUJwa6PnPtU6wpNDWdoo1EMuc1cY5A53jhv3wmuMk/M0dwZdZ2S0fIxTn0sPnkClRInGAv0YoCmB3hCQvB03neFAQFWVRfcG9Hqu30Pt9wR00FoxJ7Ht1KwML7sX02Pzw/VT1/z2+6qO9uqTF4faqE6Wj0ooE7MehVBHlsQTNndZUIxZpjRL/qJF0yJLyIzdaV4gWTMflHOqvUSuwzkLOVlSI3ACurndEOjDe3c/R5Fhq0U4ZRXJKoXUHrZVWnbC/SOGySX73u/3/gv5Zr1s]

:::