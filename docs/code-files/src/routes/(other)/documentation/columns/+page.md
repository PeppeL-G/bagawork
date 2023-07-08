<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Columns`
On this page you find the documentation for the GUI Component `Columns`.



## Introduction
The `Columns` component is a layout that positions its child components as columns:

* The first child is to the left
* The second child is to the right of the first child
* The third child is to the right of the second child
* Etc.

The child components are always as tall as the `Columns` component. Their width is, by default, just wide enough to surround their content. You pass the `Columns` component its children as its main content.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkE1rhDAQhv+KzEkhLahQltykh7KHQqF7aKkLSU0U2Zik+aAr4n9vXFlbu3vZU+bjycw77wBUa8ADVIpxwFAJam303BdaR/zouGQ2CvFQytJVhlPHXx017oU2PE5O1dIZ7ryR0dKYqmMpRxgR1EowbizgjwFaBjhFIGk3bTrhgEDVteXuDfBdnp2zd8CbdNwj0GHc6vM8bzsnK83L+kX3lPwR/uTb/5IflfCdtPeftDo0RnnJQkWZmPRcCPVNknjGS7cLQ2MSulFKkktetB0nCbqks2s0/fL0Kp1fo5tw8kIni7kIjoCzLEfQh3fzcLZrxzstwrkr21ZOFfawrQvmhbvBqlkk+d0/7scfSg/JtQ==]

:::




## Handling overflow
If the width of all children together is greater than the width of the `Columns` component, the `Columns` component will become scrollable, so the user can scroll the children horizontally. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVksFqhDAQhl9F5qSQFtR2a3OTHsoeCoXuoaUumJoosjGxSaQr4rs3rqytXaF4ijP5MvMJfwekrgF3kEnKAEPGidbOUxvXtcOOhgmqHfvdJSIxmWLEsBdDlHkmBXO9UzcxiplGCWe6GLp9InroEeSSU6Y04PcOSgrYRyBINWw64YBA5rlm5hXwVRicqzfAkd/vEdR23OzxOG87FjPnaf3kPRS/xB+b8q/yg+RNJfT1B8kOhZKNoLYjlZu2jHP5lXruiCdmZ4e6qb11/NS75HlZsdRDl3SwRJPPhizS4RJd2F9epG9WmdyuMtmsMrlbZRKtMrn/18SbAofgCDgIQgStPaPNOUI7VtXcRmAWpVl6Yn3Y5jFtuFkRn1Ey/dnf7/tv8RUtRQ==]

:::


## Resizing children
By default, all children are wide enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining horizontal space available in the `Columns` component should be distributed among the children to make them even wider (if remaining space exists). The number you pass to it indicates how many shares of the available horizontal space the child should occupy:

* `0`: the child will be wide enough to surround its content (default value)
* `1`: the child will be wide enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 1 share of that space
* `2`: the child will be wide enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 2 shares of that space
* Etc.

Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUE1rhDAQ/SsyJ4W0oEJZcpMeyh4Khe6hpS6YmiiyMUnzAbuV/PfGFW1tvfSUzJt58968AYhSgAeoJWWAoebEmOjxUigVsbNlgpoo/IdSlLbWjFj2bIm2T6RlcXJFS6uZdVpES2NEfSk8eASN5JRpA/htgI4CThEI0o9K13FAIJvGMPsC+CbP5uoV8C71RwQqrFuRp337qVh5XuQX32Pxw/iD635bvpfc9cLEE1jaQ6DGVUCjtEpu30l9arV0ggZE6rjiXc8CbrpPFqcJ+svKtljkw5Fqazrfmm7DgbNGPrOSJVIEZ8BZliO4hHd3N4d0YL3i4chVWKt8CnPaNwV13P4joMls9a3vj/4L+WjEkw==]

:::




## Positioning children
If the width of all children together is smaller than the width of the `Columns` component, the children will, by default, be positioned to the left. If you want them to be positioned elsewhere you can insert extra `Space` children.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkE1rhDAQhv+KzEkhLahQltykh7KHQqF7aKkLSU0U2Zik+aAr4n9vXFlbu3vZU+bjycw77wBUa8ADVIpxwFAJam303BdaR/zouGQ2CvFQytJVhlPHXx017oU2PE5O1dIZ7ryR0dKYqmMpRxgR1EowbizgjwFaBjhFIGk3bTrhgEDVteXuDfBdnp2zd8CbdNwj0GHc6vM8bzsnK83L+kX3lPwR/uTb/5IflfCdtPeftDo0RnnJQkWZmPRcCPVNknjGS7cLQ2MSulFKkktetB0nCbqks2s0/fL0Kp1fo5tw8kIni7kIjoCzLEfQh3fzcLZrxzstwrkr21ZOFfawrQvmhbvBqlkk+d0/7scfSg/JtQ==]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkEFrhDAQhf+KzEkhLahQltykh7KHQmH30FIXTHUU2ZikSaQr4n9vXNGurZeekjf5Mu/xemBKAe0hlwUChZwzY7znLlHKw4tFURjP3ftUpDbXyCweLNP2hVXoB9dpajXaVgtveRinQyoGGAiUkheoDdD3HuoCaEhAsGZ0uuJAQJalQfsK9C6OZvUGdBcOJwLKrVt9nvbtJ7HKvNgvuUdxE/yprX9HfpS8bYS5/2D5udKyFYWbSO1nHXIuv7LAn/DUHhTLkczq6Cz8zLFemAV/f/O6wSzYoKMtmn22bJOOt+jKFXBD3+YKluIJXIBGUUygc+fuYa7yiI3iropVpasWE3Pel0nRcvuPGqfI2Y//cBq+Aacw1Fk=]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkEFrhDAQhf+KzEkhLahQltykh7KHQmH30FIXTHUU2ZikSaQr4n9vXNHW1suekpl8M+/l9cCUAtpDLgsECjlnxnjPXaKUhxeLojCeu/epSG2ukVk8WKbtC6vQD67d1Gq0rRbe8jB2h1QMMBAoJS9QG6DvPdQF0JCAYM2odMWBgCxLg/YV6F0czdUb0F04nAgot241PO3bT8XK8yK/+B6LX8af2vqv5UfJ20aY+w+WnystW1G4jtR+1iHn8isL/AlP7UGxHMlcHZ2EnznWC7Pg/zSvG8yCDTraotlnyzbpeIuuXAALHSxRE7gAjaKYQOfO3cMc3hEbxd3nVyGuckvMeV8mRcvtDcFNJrMf/eE0fAPmj88H]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMFKxDAQ/ZUypxaisF2QJbfiQRYUxN2DYhcS22ktmyYhSXFLyb+b3dJq1YunZGbee/PmDcC1BjpAoUoECoXg1kYPfaZ1hCeHsrRR+A+5zF1hkDvcOW7cI68xTi7d3Bl0nZHRPDh3fS49eAKVEiUaC/R1gKYEuiIgeXvedIEDAVVVFt0z0Kt1OlUvQDcrfyCgg9yCPOptx2LheV4/+z4X34zfdc1Py7dKdK2012+8ONZGdbIMHWVi1qMQ6oMl8QjP3T6IxuweK8eS33DRtMgSMoF3mhdIltSnpn7/k1uHi2ZuMmdH4AQ0TdcE+vBubqY09thqEa5ZpLIIIrPHbZWVnXD/SGI0yb72+4P/BMfIvx4=]

:::