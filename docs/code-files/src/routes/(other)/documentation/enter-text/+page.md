<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterText`
On this page you find the documentation for the GUI Component `EnterText`.

## Introduction
The `EnterText` component is a view in which the user can enter some text.

::: tip Example

In this example, the GUI consists of only the `EnterText` component, so it covers the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVkDFrwzAQhf+KeFMKGpqEDtXmoYQMhUI8tNSBCOscQhxZSGfqYPTfKyfE2N063Tvd3Xsf6qGdg+pRNoagUNY6BPF+zZwT1DFZE0TSfWELLj1pph1rzx/6SIun22vBnrj1Vlj6EZPhMIuFjYgSVVMb8gHqu8fJQC0lrL4MebcDSDRVFYg/oZ4f+ivpuJdwyW12eTfb3psZ9pg+og/NhH3Tnv5Sv1kmn6f9kVeig1qtVxLXVF9eHxA5XVydTGYws/wsnLdVZtqa/wEwZC8Oh8l/7eMvnj2NLw==]

:::

::: tip Submit button

A `Button` can be added to the GUI to serve as a submit button (takes the user to the next `Page` when clicked, the same as pressing the enter key in `EnterText`), for example:

::bagawork-project[app&link&code=StartPage&baga=eNqVUU1Lw0AU/CvLu5jCEmzFg7lIFZEeBLEFFbeQJXmxxXR32X2hrSFn7/5Ef4mbhLRJ8eJp533NDLMlSGMgKiHRKUIESS6dYw/7qTEMd4QqdczjUihBiUVJOCdp6VG+YzBquoIsUmEVU7hlvWE9q4SqoOKQ6TxF6yB6K2GdQjTmoOSm1msOgIPOMof0AtF5h189rpYcjGcbXLZks7YY2D6oH6zXRc/7fbE+df2kty5oO4LmRibYFQtPEsTPK0lnju11YVnt+Toe8T/Xb3V+JBJ0pwhtTRG69ScG41Focr+9aswHcTNuCMMw7FEKuimItArin6/vXr9Dx1g57CCaXEw47P17edVltcCNV6JhZoOYpu5jlk3TIqd/5NSmEfe+dVn9AlRQywY=]

:::



## Adding an initial text
The text passed as the main content to `EnterText` will be used as the initial text in the component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjs1Kw0AUhV9lelYVZqEVF84uC5EuBMGCLabQIXOjwXQyzNzQljDv7qShNXHn6p77d87XQTsH1aFoDEGhqHUI4uWUOSfoyGRNEEl3uc258KSZ3lh7ftWfNL85T3P2xK23wtJBjJb9LuY2IkqUTW3IB6iPDpWBupOwet/nnR8g0ZRlIF5D3V70Jum4lXDJbfI5mC2HZoJ9Tb+i982I/bmt/lI/WSa/Svfz3buvmMQXeZrtfvEljlCL+4XEKdWHxwvTivauTp4TtglOFr6XZWbamv/BM6CM8uM2/gDz8ZIw]

:::




## Adding a placeholder text
The configuration method `placeholder()` can be used to show a text in the `EnterText` component when it's empty. Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KeJMLorQpHarNQykZAoFmaKkDFvY5DXVkIZ1pgtF/r+SQ1O7WSe/udO99N0BbCzWg6mqCQtVq78XqlFsr6Mhkai+iHgpTcOVIM72ydrzWO8puxm7Bjrh3Rhj6FpNhmoXCBASJpmtrch7qY8C+hrqXMPqQ8sYFSHRN44nfoO4u+j3qsJWw0W22eTZbnosZ9jX9ip6KCftLv/9L/WyY3Cb+v7WtruhzNM/KsS0SZPl7icQRavGwkDjF9/HpgrehQ1zmOeaMLPdfyyav+5b/gZaosnKSH7bhB8AdlrA=]

:::





## Going to next page
If the `EnterNumber` contains the cursor (has focus), the user can go to next page by pressing the enter key (`↵`). The default next page is the current page.

Use the `pages()` configuration method to specify which `Page`s the user should come to depending on what text she enters. The value should be an object, where the key represents the text the user can enter, and the value for each key indicate which `Page` the user should come to if that text has been entered.

Use the configuration method `page()` to specify which `Page` the user should come to if none of the keys in `pages()` matches what the user has entered.

::: tip Example
```js
EnterText
	.placeholder(`Enter name`)
	.page(UglyNamePage)
	.pages({
		Peter: NiceNamePage,
		Lily: () => new BeautifulNamePage(),
	})
```
:::

::: warning Keys with spaces

In JavaScript, when creating an object as in the example above, the keys can't contain white-spaces and some other special characters. If you want to use that, you need to surround the keys with either single quotes (`'`) or double quotes (`"`):

```js
EnterText
	.placeholder(`Enter name`)
	.page(UglyNamePage)
	.pages({
		"This is ok": ThisIsOKPage,
		'This is also OK': ThisIsAlsoOKPage,
	})
```
:::




## Handling entered text
If you want to store what the user has entered in `EnterText` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` that should be used.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj0FrwzAMhf+K0SkFU7aOHeZbDqP0MBislJWmEGMrW1jqGFuhDcH/fU5CQ7LbTn5Psp4+dSCtBdGBqjWCAFVJ79lbm1rL8EZotGdRd5nJSDmUhB8kHb3LL0xWQzUjh9Q4wwxe2azZ90JmAgQORV1pdB7EqYNSg3jkYOSl3zcMAIe6KDzSJ4iHuz5GHc4cbExbTI5hu9EssKftE3pvZuzbpvxL/WoI3T7+X9tKKvwewpN8KDNVUpuv1vYgY2k001kcbiA2TxsObXyfX+6se7zEJFoyLzBT/7MrUt1U9A/OHjHJZ/vDOfwCn2KbWQ==]

:::

In the example above, what the user has entered will be stored in `p.city`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj0FrwzAMhf+K0SkFU7aOHeZbDqP0MBislJWmEGMrW1jqGFuhDcH/fU5CQ7LbTn5Psp4+dSCtBdGBqjWCAFVJ79lbm1rL8EZotGdRd5nJSDmUhB8kHb3LL0xWQzUjh9Q4wwxe2azZ90JmAgQORV1pdB7EqYNSg3jkYOSl3zcMAIe6KDzSJ4iHuz5GHc4cbExbTI5hu9EssKftE3pvZuzbpvxL/WoI3T7+X9tKKvwewpN8KDNVUpuv1vIgY2k001kcbiA2TxsObXyfX+6se7zEJFoyLzBT/7MrUt1U9A/OHjHJZ/vDOfwClnqbSg==]

:::

In the example above, what the user has entered will be stored in `a.city`.

If you want to do something more complicated than just storing the text the user has entered, use the configuration method `handler()` to specify a function that will be called to handle the text the user has entered. In the example below, try entering some text, and then press the enter key.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUcFKxDAQ/ZUwpxaC6IoHAwo9iOxBENyDYhcamqlbzKYhmeKW0n83adnaettTZt7LzHsv6UFaC6KHslEIAkotvWcvXWYtwxOhUZ6Fus9NTqVDSfhG0tGr/MIkHdGcHFLrDDP4wxZk5IbcDDBwqBqt0HkQnz3UCsQNByOPUW8cAA5NVXmkdxDX5/oj1MOegw3bVpPTsu3UrGzP6rP12Cy8P7f1f9dPhtDtwv0JzenKalniYRRJipFmZU1dkc43DtIoHViMJKo4zR4emQwYLcH07xE4nEBsbjccunDe3Z+T7fAY9GidcBUq89/bKlOtpgtSRfWkKBafsB9+ASPDrNU=]

:::