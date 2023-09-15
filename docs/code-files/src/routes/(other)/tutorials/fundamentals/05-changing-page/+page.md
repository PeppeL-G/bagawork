<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Changing Page
This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to the user.

## Multiple pages
An app who's GUI always look the same is usually not that fun. Therefore, most Bagawork apps consists of multiple different pages, and when we want to show change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!

## Going to another page
To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, Bagawork has the :docs[button] component.

When using the :docs[button] component, you pass it the text that should be in the button as its main content.

::: tip Example

Example of how to show a :docs[button] on a page.

::bagawork-project[link&app&code=StartPage&baga=eNpdT8FqwzAM/RVPpwTMSLebb9tl9DAYXQ4bSyEmUdpAYhtbYS3G/z57XlM6sEBP8nt6z4M0BoSHTvcIArpJOsdez0/GMDwRqt6x2PtGNZSqsygJ30laepMHLMq8IYu0WMXWRZqGTAoQOAx66tE6EF8exh7EhoOSc7r4SwEOehgc0geI6tJ/xj7sOZiod8PMYtsMboyv91fzCfir85dl/O95p79dkScN1ZFXtPVxdCw+OuJV8r4t+eXb80KkVdFumZyZZBnetWXel3/pQ4x1AvFQxUhnEI/VGqfG2UzRToq1Dz8GA4cU]

:::

By default, when clicking on the :docs[button], the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but the page shown on the screen is actually deleted, and then it's created anew. But the new page looks the same as the previous one, so you can't notice that.

To take the user to another page when the user clicks on the :docs[button], you can call the configuration method `.page()` on the :docs[button], and pass it the name of the page the user should come to.

::: tip Example

Example of an app where the user can go between 3 pages.

::bagawork-project[link&app&code=FirstPage-SecondPage-ThirdPage&baga=eNqlksFrgzAUxv8VeSeFMGZtO5rbdljZYTBWDxuzoGjcBJtIElmL5H9fYmaqpe2lB+Hle74v3y9JB1nTAO4gZwUBDHmdCeG9Hh6bxiN7SWghPF13CU2k+XJOMkk2MuPyLfsmfmA7khPZcuo9V1z0DaMqO6RAIShZXRAuAH91UBWAQwQ025kdey9AwMpSEPkB+H6oP3Wttgga7TeZtGYvdjEJ7vZ34c2iOyZft9Vp5nf2K3yrJDLWc37qbNIADZ2nVkpG/XTNPMm8DckZLewvdyagf1QCOxL8n4HScHsddR4hOACOwpVCFmV2DeXodxvLOOkFmPin4hMWJ5xHmYfLHiV8WAwo0TUUZ3cbySjmBZDRvVkQJ5wHWa4W9k5m7qHFZNfUOpJ5cFv1B0MVFmA=]

:::

## That's it!
Good work, now you know how to navigate between the pages in your app! 🥳 But remember that the :docs[button] component is just one way to take the user to another page, there exists more ways you can learn later on.