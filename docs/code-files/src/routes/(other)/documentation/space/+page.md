<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Space`
On this page you find the documentation for the GUI Component `Space`.

## Introduction
The `Space` component is a layout that can contain one optional child. If a child is provided, the child will occupy the same space as the `Space` component (with the exception of the padding added to the `Space` component).

You pass the child to the `Space` component as its main content.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVULFqwzAQ/RVzkw0itAkZqs10SDMUCsnQUgesWmdjIktCkmmM0b9Xjohbk6mT3t29d/eeRmBaAx2hUhyBQiWYtcnrkGud4MWh5DYJeCxk4SqDzOHBMePeWINpdu0WzqDrjUzmwdT1hfTgCdRKcDQW6OcILQf6SECybrp0pQMBVdcW3TvQhxv+CNifCOiwa6GMy/axWBieb8+mp+KP613f3vnVrMLVF6vOjVG95M9KKJOWAwqhvstspRnnrWzSbZZGXeGOYXtavkyMQLiTirbDMiORnc3fQOACdL1ZExjCu326ZTtip0Xwtsi4iJXb877OeS/cP3JFk+XvfX/yP2mfqxI=]

:::

::: tip Common usage

A common usage of the `Space` component is to just occupy space, so other children in a layout are positioned as desired. For examples, see the documentation for the [`Columns`](./columns) and [`Rows`](./rows) components.

:::