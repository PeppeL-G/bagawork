<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Sizing GUI Components
This tutorial will teach you how you can change size of GUI components.



## Positioning children
First, some quick repetition.

The child components in `Rows` are as wide as the `Rows` component, and their height are just tall enough to surround their content, and the children are positioned at the top of `Rows`. To position the child components elsewhere in `Rows`, you can insert extra `Space` components in `Rows` to push apart the children. The `Space` cihldren which will share the remaining space available in `Rows` evenly among themselves.

It works the same for the `Columns` component, but the children are instead positioned as columns, and not as rows.

::: tip Example

Try resizing the app below, and notice how the `Space` children gets smaller/bigger, while the three other children stay at the same size.

::bagawork-project[link&app&code=RowsPage-ColumnsPage&baga=eNrdklFLwzAQx79KuacWwtiUieubDhQfBHF7UKzQmNxmWZaEJGUbpd/dZFlHh0P01Zdyd7n7359frwGqNeQNMMURcmCCWps87m60TnDrUHKb+LgpZOGYQepw5qhxT3SJabavFs6gq41MntXGhnootoVsoSWwUIKjsZC/NVBxyEcEJF2HRXsZIKAWC4vuBfJhF7/6uH0noL3WyWQUe4jJid9u9dFySHqe7+vqnNsB+6wENyjT+FS4uRcYOP9Jy7vKWFdmgw/KVkujasmnSiiTlgZ5mZFuYqYpw+9NupKrXldPd4ZMSX5OeIdCqM0vtGujBfb6bmvnlDzoz1XClKjX0vodgWE6jWlgksWR7PiPCGw9zsmEwA7yi/F1SyLuy59w9wT/QPww9V+hh4PqiHf3eB73eDiMuK9G3Z3Pca2Fxxbu/b39AmwOSrw=]

:::



## Sizing children
It's not only `Space` children that can grab some shares of the remaining available space; any child component used in `Rows` and `Columns` can grab some of the remaining available space. But it's only the `Space` children that grabs it by default, and by default they grab equally much of it. But all this can be changed with the configuration method `.size()` on the children. Let's go through how this works in detail.

First, let us ignore the `Space` children, and instead focus on all other children, such as `Text` and `Button`.

By default, all children in `Rows` will be just tall enough to surround their content. If you want them to also grab some of the remaining available space, you can call the method `.size()` on the child, and pass it a number indicating how many shares of the remaining available space it should also occupy. 

::: tip Examples

A few examples.

::bagawork-project[link&app&code=FirstPage-SecondPage-ThirdPage-FourthPage&baga=eNqtlU1v2zAMhv8KoZMNeEY+nM71bRvQYocNw5LDhqVAFFuJtTmSIclLsyD/vZT80bhIsqLIJTYp8iXNB6H2hJYlSfYklRkjCUkLqjV82X0oS2CPholMA77v52JuUsWoYVNDlflG18zznXduFDOVEnDHlXYH1nuYiwM5BGQli4wpTZJfe8IzkgwDIujGVnI6JCBytdLM/CDJuzhurZ9o3YwPDwEpUa+XXQt+ro1e0139rnFrHHV+X/GXPX+XWx2mOS8yxYRXH83NDAVCgz/eohNd+EHveEnTP2slK5F9koVU3kKxbOE3WV+lYCBXYHIGrTrkTKFFiwJCzf/h+ALQEqzdhVCM+F1pA8a6mZDVOgcjQVfKlbKCXEEqBX6gCY96+lgZI0VT/l66JIZxGZSu+dA+vKlz2c/x60S/YxWQR5KMRjcB2ZEkiseHoB75+NLIn/WuOfNn1ZdDd3Mb+peHP8u5BvuKc9qUSEIY2FJhNAxB53bEDRnFNpQLLtZA/1JOi2XBQJc0ZSFMuUgZBqGSFcNgKYpdDQpN2ipquWG1qA6Ao5cjtzUzDiuWQZc3BFkZazTltX+ZG1ZVfWwz6zlPLYpvHbXRZNRSiy5R6+SuCa0TPc1sMHg7tcGgGdzVwL2OG9ZtyXUt/IfdSlbK5D14d851nt7725Ze3NKbXFxznd5V91ynepJf9GZ60evZzfC4niksWSG35/+1mM9rgYJ2Am6dOvJHPbRcI5s+aXo5sTjbzdKDaXd/n2V7G5xGORzE7f6ctJfXjG3KAqHYS+zh8AR7qJ63]

:::

The special thing with the `Space` component is that it has the size `1` by default (it has been made like this because that's often how one wants to use it), while all other components has the size `0` by default (which means they will be ust big enough to surround their content).

So when you use the `Space` component like this:

```js
Space
```

It has the same functionality as being used like this:

```js
Space.size(1)
```

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNp1UEFqwzAQ/IrYkw2qIWkJRrfSQ8mhUJocWuqAVWmdmCiSkGQS1/jvlR1ikpbednZHM6PpgFsLrANhJAIDobj35KV9tJbgKaCWnsS5K3QRhEMecBW4C698i0k6bovgMDROk+kwbPtC99BTqIyS6Dywzw5qCWxGQfPD4DTSgYKpKo/hHdhdnl/QR0SL+35DwUa9m9dnweUZ3ISe/KfgA7hK/tzUvzO/maPPxK5W0qFOzqcirCwXmH1xsd8602j5ZJRxSdmiUuZYpvTCW0ejzNffmMzSv3SHskyzEDlJuSRGiMa2xGgkYVc7SUwVByR+9LoS/cfc1no/sdKpYgonYPP5gkIL7CGfOlvjwar456G7Tf8DlImrIg==]

:::

You can still call `.size()` on `Space` if you want it to claim another amount of shares of the remaning available space.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNptUMtqwzAQ/BWxJxtUQ5ISgm6lh5JDoTQ5tNQBq9I6NlEkIckkrvG/1w9ikqY3ze5oZnYa4NYCa0AYicBAKO49ea2frCV4DqilJ927SXUahEMecBO4C298j1E8TNPgMFROk2nRT9tUt9BSyI2S6DywrwZKCWxGQfNj7zTQgYLJc4/hA9jDanVBnx1aLtodBdvp3fweBdcjuAk9+U/Be3CV/KUq/2Z+NyefiKJU0qGOxlUaNpYLTL65OOydqbR8Nsq4KKtRKXPKYnrhbTujxJc/GM3ie7pDmcVJ6DhRtiZGiMrWxGgkeZmHgpichAKJH7yuREfzQXXxj6ot9WFix1PVFM7A5vMlhRrY42rqbotHq7rb+w537S/eKq2F]

:::

## That's it!
Good work, now you know how to change the size of GUI components! 🥳 Using `Rows` and `Columns` with `.size()` on the children is enough to create almost any layout you want.