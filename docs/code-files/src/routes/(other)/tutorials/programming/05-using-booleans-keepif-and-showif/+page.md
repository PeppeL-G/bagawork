<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Using booleans, `keepIf()` and `showIf()`
This tutorial will teach you how to use boolean values in JavaScript, and conditionally keep/remove or show/hide GUI components.


## The boolean datatype
An app often needs to do different things depending on if an answer to a question is *yes* or *no*. Examples of that are:

* In a message app: Do you have 0 messages?
	* If *yes*, show the text *You have no messages*
	* If *no*, show a list with the messages
* In a healthapp: Is the entered age negative?
	* If *yes*, show the text *The age must be greater than or equal to 0*
	* If *no*, show the text *The entered age is OK*

To represent these *yes* and *no* answers, we can use the boolean datatype in JavaScript. This datatype only have two possible values:

* `true` means *yes*
* `false` means *no*

So instead of thinking of it like the question *Do you have 0 messages?*, this datatype thinks of it like a statement that is correct (`true`) or incorrect (`false`), i.e.:

* In a message app: You have 0 messages
	* If `true`, show the text *You have no messages*
	* If `false`, show a list with the messages
* In a healthapp: The entered age is negative
	* If `true`, show the text *The age must be greater than or equal to 0*
	* If `false`, show the text *The entered age is OK*

`true` and `false`, like all values in JavaScript, can be stored in app variables and page variables just like strings and numbers.

::: warning Don't use `

Don't surround `true` with the `` ` `` character! If you do, you create the string that contains the characters `t`, `r`, `u` and `e`, and not the boolean value `true` that means that something is correct.

This also goes for `false`, of course.

:::

::: tip Example

Example of an app that uses a boolean page variable.

::bagawork-project[app&link&code=StartPage&baga=eNrFk2Fr2zAQhv+KdgxqgzFJxmAYRnHGKPmwMdbCWpZCNPucmCmSkM6sxvi/T6pnr07d4sJgH2x0unvvTvdIDXCtIWkgUzlCApng1rJPdao1wztCmVvm1s1Wbsl/mUFOeEnc0Be+xyDsPGSQKiPZ4PC7bSdqoY2gUCJHYyH53kCZQ7KMQPKjr3gvgQhUUVika0gW/frGrdvbCLTLN1J2yTadMWp8qD80742h+9JelEaw94xMheMjXVTl6WG+ql82zg6lyA3KoHNt6VLzDKPeunJ1YnK/YDckf93ouDPaXRhN69YVkZJ/lJuzI+Psh6pf7cL4wGUu0AQ6diPY2LWqw+dUe1dmQuar97rwAYwt9VmH0/bNus4LLiw+jvbeqfB+igPoCO4gWS0cwRqSN4uB3hUetXBDHlEcgUvtz02R5pV4hp6SayyU+XvpRp3+K4ypQVarit3fMUZurmz57vxJkB+UqI5yosBp4Am9z8pB87MJZCVEGM2U3aCdp5uGr2RakLslExP0z7Rjszph81E6SbrH/03m24HTmfVwDHPVz+c9ruViemDjoLczglZzMq2eyPSww5cwuW1/AxaEDKE=]

:::

::: tip Naming convention

A constant/variable that stores a boolean value usually has a name that starts with `is` or `has` to indicate that, like:

* `isGirl`
* `isGameOver`
* `isAlive`
* `hasDied`
* `hasBeatenTheGame`

:::




## Conditionally keeping components
Using boolean values we can conditionally keep/remove GUI components using the configuration method `keepIf()`. When you call this method, you should pass it a boolean value, and if that value is `false`, the component will be removed, and not used in the GUI.

::: tip Example

Example of an app that uses `keepIf()`.

::bagawork-project[app&link&code=StartPage&baga=eNrFVF1r2zAU/SsXvTQGYxKXwfDLcMcYeWgZa2ArSyGafd2YypLQx9oQ/N8n2akXGSekTzMY60r33nN07sF7QqUk2Z4UokSSkYJRreF2l0sJ+GqQlxrcer/ma+PfQiE1eG+oMt/oE86i/sQoNFZxGA78btsXtaSNSSVYiUqT7Nee1CXJFjHhtPGIXQmJiagqjeYnyeZv6we3bh9jIl2/oLJvtuyDgPiAP5D3wYj9V1uPeX8XLzoptjUrFfJZf7Q2K9cEgicxbmu2WSSw2tYauoRCNFJw5AZKgZpfuR3KGDwjymU1i4AacHEMWkBt4KV2Z78RrMYSqHZfS1myieJj0ORQXFGmMTqAptOg0t0bNXSpYMSAOwZU2Ig/HpOXwIXpCHQ5O2Edc89bo+vgITwg1NwFCM4fp+gZZTF60+T6LD2feo7dCTmiwEcxeSVZOncG2ZHsej6YY4WNZG6wgUkCX+T6eVnlpWVnzCH4DVZC/fP0Efa7rXMvaYGhaL1MucJO8c7CTmDKYfHx05HAYeVnwWzDJwDGiWtzY427wwHmTmyixGsz45axKL6w7AH1ZXVTA/IS5pVBNaWg/wv0s0lHs/nCXUn+hP97Mj+21FxpPxwFDv30TALFFvNpwcKkDxckpZd0Sk90Omb4npk8tn8BSewlug==]

:::

Directly passing `true` or `false` to `keepIf()` is of course not that meaningful. Instead, you can use an app/page variable to pass a boolean value to `keepIf()`, so you pass different values to `keepIf()` depending on what value is stored in the app/page variable.

::: tip Example

Example of an app that uses a boolean page variable to conditionally keep/remove a GUI component.

::bagawork-project[app&link&code=StartPage&baga=eNrFk2Fr2zAQhv+KJga1wYQkYzAMozhjFH/YGGthDUshmn1OTBVJSDKrMf7vO9WzG3lOm8FgH2wk6973TvecG8qUonFDM5kDjWnGmTHkU50oReDBgsgNwXWzERvrnkwDs3BtmbZf2A6CsDuxGmylBRkO3Ne2E7W0jWgheQ7a0Ph7Q8ucxouICnZwGR8lNKKyKAzYWxrP+/Ua1+1dRBX6ecrOLO02XuFD/qF4txmqL81VqTl5T6yuwL/SVVWOL/NV/jSzbF/yXIMIuqONvVYsg6jf3WCemcVXsB3MXzdq1m3abTgVuZYVYRoIIzsMerUNZ/cAKi2CXvek8rOtKmul+O2SXhzQ4YesncGeiZyDRgdsXGpWsg6fU/V5R7Lj3OERwo3tXYce9aXifQvGDfwZ7U6nwvveD+MR0QcaL+fIvabxm/nA/AYOiiMaj72HOzH3aZHkFX+GuRQrKKR+GlWv0n8FP0GcNWJ9nExisa9k8e5yewrkB8mrg5hIMA4c0fssEZrrTSAqfjQmL8jWYM7TTcOXIiksTslEB93P3bFZjth8FChJdvC/yXzbM3thHBxNMPtpJl7HFvPphvlBb88IWp7jtDzhdFzh3zC5a38BTgofkA==]

:::



## Computations with booleans
In the previous example, we kept a special `Text` component using:

```js
Text.text(`You are a girl!`).keepIf(p.isGirl)
```

But how can we keep a special `Text` component if the user on the other hand is a boy (i.e. when `p.isGirl` is `false`)? Just as we can use mathemtical operations with numbers, there are some operations we can use with boolean values. The simplest is the `==` operation, which checks if the value to left of `==` is equal to the value to the right of it. If they are equal, the result of the operation is `true`, and if they are not equal, the result is instead `false`.

So, to check if the user is a boy, we can compare `p.isGirl` with `false` using the `==` operator.

::: tip Example

Example showing different texts to boys and girls.

::bagawork-project[app&link&code=StartPage&baga=eNrFVGFr2zAU/CvaY1AbTEgyBsMQhlNK8YeNsRbW0BSi2c+JqSIJSWY1xv99cl07kee0GQz2wUay3t07vTtcAZUSwgoSkSKEkDCqNflSRlISfDLIU03sulrztWmeRCE1eGOoMt/oFj2/PTEKTaE46Q+ar3ULqqEOIBMsRaUhvK8gTyGcBcDpvun4DIEARJZpNHcQTrv1yq7rhwCk5XOQLVncbhzhff9efLPp1ef6OleMLIhRBbpXui7y4WW+i196kuxylirkXnu0NjeSJhh0u1vbZ2Lsy9v05O8rOWk39cYfq1yJglCFhJKtLXq38SePiDLOvA73BuqnKEdAZLEgGWUaD2hX67IwRvAXtvhif2DaUZ4yVJbKjj3WS1H6r6E61QPYsXL/KABr07H2Ez5obiX/Wd2cjpV3zvXhCuAJwvnUpqaE8MO0T8wt7iWzxjrJccIS6cc4i9KCvZIYwZeYCXUIuqP0X0UnsraW1t7nXBNj50pmnz5vThl5KVix5yMNhoUD974Ka1ozG48X7Chkb8BWqM/DjZsveJQZm5KRCTa/htab+cCbK24h0Rb/tzM/dtRc6MYcRWz30544E5tNxwfmFn08o2h+DtP8BNOxwr/x5KH+DcnWNOA=]

:::

::: warning Use ==

It's common for beginners to forget to use `==` when checking for equality, and instead write `=`, but then the code will not work as they indend to. The code might still run if you use `=` to check for equality (remember, `=` means the variable to the left should be assigned the value to the right), so it's really important to remember to write `==` when checking for equality.

:::






## Computations resulting in a boolean value
The `==` operation can not only be used on booleans; you can use it to compare numbers or strings too. There are also some additional operations that results in a boolean value that can be used on numbers and strings:

<table border="1">
	<thead>
		<tr>
			<th>Operation</th>
			<th>Symbol</th>
			<th>Example</th>
			<th>Result</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Equality</td>
			<td><code>==</code></td>
			<td><code>5 == 4</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td>Inequality</td>
			<td><code>!=</code></td>
			<td><code>5 != 4</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td>Less than</td>
			<td><code>&lt;</code></td>
			<td><code>5 &lt; 4</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td>Less than or equal to</td>
			<td><code>&lt;=</code></td>
			<td><code>5 &lt;= 4</code></td>
			<td><code>false</code></td>
		</tr>
	</tbody>
</table>

::: tip Example

Example showing different `Text` component based on the number in a page variable.

::bagawork-project[app&link&code=StartPage&baga=eNrFVG1rnEAQ/iuTJVCl9tArhVYixbSl+KGlNIE2qYHb6Hgn0V1Z1zaH+N+7G3N6e/XSawnkgzLrzDzz8jxrS2hVEb8lCU+R+CQpaF3Dp3VYVYC3Ellag7LbmMVSP4lAKvFMUiG/0CVadu+RAmUjGAwO/bXrkzrSOSTjRYqiJv6PluQp8T2HMFrqincpxCE8y2qU34nvbuwLZXdXDqkUnpHZg0X9wWh8qD80rw9j97xhEgUE4JoDfWzy3VG+8l/1LFnlRSqQWb0rlmcVTdDZnM5VlZlUL2tx3Faze/gOrFw+q4Hhksr8Jx7ZC3t2g1hFmTUEwQm49hTQJQo+FR8EexK2K4+JHpwEMDjGxL0DRLplCtf5ElhTXqM4GsHeqG7/ivWOF03JJnYWy9NGSs7uC71HtfMSmVT4K8rSAoUaM918HeF3C+zgRGwKJ2d/4Ni9YW9pMpZDvYH3cdUvAvCM4AF0Ivi5GdwpKd8Sf+4qGa+J/9IdJHyOZVUorRlSNtQb1jdRFqZN8YCEOTvFjIvx5hmNPpaaQ4Gw5g3cXTSQar3gvX67+A/qH6Tws1a63o3FmqI4mPkLrA/L23hM6jkLM8Xc1Ab1v6rnZr7DzQdNdrjEp2bm24rqi6rIEaCq7+fE2JjnTi/MDHp1QND8EKT5HqTtDv+Fk6vuNwq+awA=]

:::



## Conditionally showing components
The configuration method `keepIf()` removes the component if the argument you pass to it is `false`. Although this often is really useful, it sometimes has a drawback: other GUI components on the screen might not be posistioned where you want them to be. 

::: tip Example

Example showing how some `Text` components "jump around" on the screen when clicking on the button.

::bagawork-project[app&link&code=StartPage&baga=eNrFk2Fr2zAQhv+Kdl9qM2Nil8EwK8UdY8uHjbEWtrIUKuxzYypLQjrThuD/PrlOnCo4WwqFfbCQfHrvTu8jrYFrDdkaClUiZFAIbi37usq1ZvhIKEvL3Hy9kAvqv8IgJ7wkbug7v8MgHCJkkFoj2Rjo/3aDqIMugkqJEo2F7Pca6hKyJALJm77ikwQiUFVlkX5BNtvOr928u4lAu3yeckg2HxZe42P9sfl+setetZLQsDOW+Af63Nb7R/mhHmxcLGtRGpTBEFrQpeYFRtvVlasSkxuC2y81oyUafHMbxveIel4FCftwxnS8KRpOqtQD4wbZSrXnO2H6b+Gc8YZVtcR4Jzs9IPN7vmiJlNyk+eZGl2DJZSnQBDqupTOkQUlbefiM5ILG8OjWWI+93bg6Yo/gEbJ05niuIDudjSyvsNHCme4x9TDm9n5e5WUr/sJSyQuslNldQa/R18KaD3DY041zhLlkyXuH6oC5H5VoGzlRYH/jPgflKPTeBLIVIoyOlF2jPU43TVPJvHLkphzsH+3AJt1j86mHnd/h/ybzc8npxPZwDHPVDzPxHEtm04b5m94dsSk9JlN6INPzDl/C5Kb7AxRjDuU=]

:::

To avoid this, we want the components not shown on the screen to still occupy the space they would occupy if they wouldn't have been removed. To accomplish this, we can use the configuration `showIf()` instead of `keepIf()`. `showIf()` works the same way as `keepIf()`, but the component will still occupy space when it's not shown.

::: tip Example

Example showing how some `Text` components always occupy space on the screen, but they are not always shown.

::bagawork-project[app&link&code=StartPage&baga=eNrFk2Fr2zAQhv+Kdl9qM2Nil8EwLcUtpc2HjbEG2tIUKuxzbSZLQpJJQ/B/n1wnThWcNoXBPlhIPr13p/eRVkClhGQFmcgREsgY1Zr8WKZSEnwxyHNN7Hw153PTfZlCavDGUGV+0Wf0/D5iFJpGcTIEur9tL2qhDaAQLEelIXlYQZVDEgXAad1VfJVAAKIoNJo7SCab+b2dt48BSJvPUfbJpv3CaXyoPzTfLbbdi4YbVOSURO6Brppq9yi/xUKHWVmxXCH3+tDc3EiaYbBZzWyV0NjBe7quiClR4ZcnP9SlWEwLLyInp0SG66L+qEosCFVIlqI52wrjj4VTQmtSVBzDrex4j8zt+bwxRvB1mp92tAlKynOGypNhxa0hNXKzkftvSM7NEB7cGuqRr2tXB+wBvEASTyzPJSTHk4HlDGvJrOkOUwdjqv9MizRv2DssBT/HQqjtFXQa/VdY0x4Oeb1xljDlJPpuUe0x90KwpuYjBXY37nIQlkLnjccbxvzgQNk96sN04zQFTwtLbszB7tH2bOIdNpcd7PQZ/zeZ25KaI93BUcRW38/EcSyajBvmbvp2wKb4kEzxnkxvO/wMk8f2L2+iDzk=]

:::

If you should use `keepIf()` or `showIf()` in your app does of course depends on how you want your app to work.


## That's it!
Hurray, now you know how to conditionally keep/remove and show/hide GUI components! 🥳 Good work!