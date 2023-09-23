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

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFrgzAUxv8VeSeFrKDCKLnJDqOHwWA9bMyCmXk6aUxcEllF/N8XK3V1bQ+7JPle3u+9j68H1jRAe8gVR6CQC2aM99QlTePhwaLkxnPvPpWpzTUyiy+WafvMSvSDYzW1Gm2rpTd/jNUhlQMMBAolOGoD9L2HigMNCUhWj5uO7UBAFYVB+wr0Lo5O6g3oOhx2BBo3bgFP8zaTWHie18++R3Fm/LGt/lp+UKKtpVl9sHxfatVK7ipK+1mHQqjvLFjln5XgGqU/canduukr6w4/c71e6HouaFHVmAXkBhJdQ9hXy24j8TWkdFHMSDCHTuAANIpiAp271/enGLdYN8LFsIhzkWBi9psi4a2w/4jwzGn2a2LYDT+pmNT4]

:::




## Handling overflow
If the width of all children together is greater than the width of the `Columns` component, the `Columns` component will become scrollable, so the user can scroll the children horizontally. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVklFrgzAQx7+K3JNCVlC3rstb2cPow2CwPmzMgpk5O2lMXBJZi/jdl7bU1a0yfDHeeb/LD/k3wKoKaAOZ4ggUMsGM8R5386rycGtRcuO59yaRic00MovPlmn7xNboB4duYjXaWkuv+7DvtolsoSWQK8FRG6BvDRQcaEhAsnJ/02EcCKg8N2hfgF7F0al6BToL2xWByq3rwcd9i2PRc+6u77z3xZn4Q138Vr5Xoi6lmbyzbLPWqpbcdZT20x0Kob7SYJJ9FIJrlP6RS+zSbZ9Y9/BTN+uFbuYPLYoS04AMINElhH3WbBiJLyFr9yuGkevxYjfjxabjxW7Hi83Gi939KxZ0MSWwBRpFMYGdO2fTU/CWWFbCBacXwF7m5mazyOe8FnZE6M5M0x+JdtV+A+/mRDo=]

:::


## Resizing children
By default, all children are wide enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining horizontal space available in the `Columns` component should be distributed among the children to make them even wider (if remaining space exists). The number you pass to it indicates how many shares of the available horizontal space the child should occupy:

* `0`: the child will be wide enough to surround its content (default value)
* `1`: the child will be wide enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 1 share of that space
* `2`: the child will be wide enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 2 shares of that space
* Etc.

Try resizing the screen for the app in the example below to see how it works.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMFqhDAQ/RWZk0IqqFCW3KSHsodCoXtoqQumZrSyMbFJhN2K/964ol3L7qGXTObNvJk3rwfWtkB7KBRHoFAIZoz3dErb1sOjRcmN5/59JjNbaGQWXyzT9plV6AdnNLMabaeltxRGdMjkAAOBUgmO2gB976HmQCMCkjXjpnM7EFBladC+Ar1L4jl7A7qJhj2B1o1bkad52ylZaV7WL7rH5EL4Y1f/lfygRNdIExafteAapT9VM7tzM0LrHj93PV6UB+EHKw6VVp3kDlHaz0XdoMNN/Y1+FJAb1PgalX11LL9JSa5RKnf4vC2ZqcFiNYEj0DhOCJxc3NzP5u2waYU7fmXiyrfUHLZlyjth/2HcheL8V8SwH34A3dXP1g==]

:::




## Positioning children
If the width of all children together is smaller than the width of the `Columns` component, the children will, by default, be positioned to the left. If you want them to be positioned elsewhere you can insert extra `Space` children.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFrgzAUxv8VeSeFrKDCKLnJDqOHwWA9bMyCmXk6aUxcEllF/N8XK3V1bQ+7JPle3u+9j68H1jRAe8gVR6CQC2aM99QlTePhwaLkxnPvPpWpzTUyiy+WafvMSvSDYzW1Gm2rpTd/jNUhlQMMBAolOGoD9L2HigMNCUhWj5uO7UBAFYVB+wr0Lo5O6g3oOhx2BBo3bgFP8zaTWHie18++R3Fm/LGt/lp+UKKtpVl9sHxfatVK7ipK+1mHQqjvLFjln5XgGqU/canduukr6w4/c71e6HouaFHVmAXkBhJdQ9hXy24j8TWkdFHMSDCHTuAANIpiAp271/enGLdYN8LFsIhzkWBi9psi4a2w/4jwzGn2a2LYDT+pmNT4]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkcFrgzAUxv8VeSeFrFCFUXKTHUYPg0F72JgFM/PspDHJksgq4v++tEWnW3vYJcn3kt97H186YFoD7aBQHIFCIZi1wVObah3g0aHkNvDnLpOZKwwyhxvHjHtmewyjczVzBl1jZDBenKp9JnvoCZRKcDQW6FsHFQe6JCBZfZp0fg4EVFladC9A75J4UK9AV8t+R0D7djP40m99ETPP4/jR90lMjD821W/LD0o0tbSLd1Yc9kY1kvuKMmHeohDqK48WxUcluEEZXrjMbTQrkAxq62ctnF/C3JPB0hN/eomqxjy6hcTXEPbZsNtIcg3Z+2AmyNRmNH4IgSPQOE4ItH5f3Q8Rb7HWwkc0i3qWbmoP6zLljXD/iHfiO/8x0e/6bz6735w=]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkcFrgzAUxv8VeSeFrKDCKLmVHUYPg0F72JgFM/N00phkSWQV8X9fbKmrW3vYJcn3kt97H196YFoD7aFQHIFCIZi1wVO30jrAg0PJbeDPfSYzVxhkDjeOGffMKgyjYzVzBl1rZDBdjNUhkwMMBEolOBoL9K2HmgONCUjWjJOOz4GAKkuL7gXoXZqc1SvQZTzsCGjfbgaf+q1PYuZ5Gj/5HsWF8ce2/m35QYm2kXbxzop9ZVQrua8oE+YdCqG+8mhRfNSCG5ThicvcRrMCyVlt/ayF80uYezKIPfGnl6gbzKNbSHINYZ8tu42k15DKBzMh0fQFBA5AkyQl0Pl9eX8OdYuNFj6UWbizPFd2vy5XvBXuH4FeOM1/TAy74RvhEdpK]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUEFqwzAQ/IrZkw2qIQ6UoFvooQRaKE0OLXXAqrR2TGRJSDJNMP575YS4cZtLL5JmtTM7Ox0wY4B2wLVAoMAlcy56Pi6NifDgUQkXhXeXq9xzi8zj2jPrX1iFcXKq5t6ib62Kxo+h2ueqh55AqaVA64B+dFALoDMCijXDpFM7ENBl6dC/Ab2bZxf0DnQx67cETJCbkM96qzOYeB7Hj74HcGX8sa1/W37Qsm2USz8Z31dWt0qEirZxcUQp9VeRpHxXS2FRxWde7jdBPfXhiIsnLH1o+UOWdYNFQi6MtWEcyQ3+a13tbgpUYclRIBnjJHAAmmVzAsdwL+4vAW2wMTIsOAlqks3S7VflUrTS/yOcK6fFj4l+238DtSnIbg==]

:::