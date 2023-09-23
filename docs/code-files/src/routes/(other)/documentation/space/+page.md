<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Space`
On this page you find the documentation for the GUI Component `Space`.

## Introduction
The `Space` component is a layout that can contain one optional child. If a child is provided, the child will occupy the same space as the `Space` component (with the exception of the padding added to the `Space` component).

You pass the child to the `Space` component as its main content.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFqwzAMhl8l6JSACVtHD/Ot7LD1MBish42lEM9WslDHNrbDGoLffU5Ds4aeerElWb/0/R6AGQN0AK4FAgUumXPJa78xJsGjRyVcEuOhUIXnFpnHd8+sf2M1ptmpWniLvrMqmR/GaihUgECg0lKgdUC/BmgE0HsCirXjplM7ENBV5dB/AL07x58xDnsCJs5aKKdh2ylZAM+7Z+gxuaB+7porXsM45t+MH2qrOyWetNQ2LXuUUv+WWW6YEI2q03WW859GinRSF34Xd+Q+Hmn5MjbH3qspsmmxzMgkyeYfIXAEunpYEejjvX4829xha2TEXNhdONy4w7baiE76GyxekJb/EGEf/gCDrbEq]

:::

::: tip Common usage

A common usage of the `Space` component is to just occupy space, so other children in a layout are positioned as desired. For examples, see the documentation for the [`Columns`](/documentation/columns) and [`Rows`](/documentation/rows) components.

:::