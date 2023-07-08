# Implementation
On these pages you can learn how Bagawork is implemented, and what you need to do to run Bagawork apps or our :online-editor on your own website.

::: warning Are you lost?

These Implementation pages are only intended for those who want to learn how Bagawork (the framework) is implemented, and for those those who want to run Bagawork apps or our :online-editor on their own website. Those creating Bagawork apps through our :online-editor won't find anything interesting on these Implementation pages.

:::


## npm packages
The Bagawork framework is implemented as three different [npm](https://www.npmjs.com/) packages:

* [@bagawork/core](/implementation/core) contains the logic for describing how a Bagawork app should work
* [@bagawork/web-components](/implementation/web-components) contains HTML Web Components for running and visualizing a Bagawork app on a webpage
* [@bagawork/editor](/implementation/editor) contains a [Svelte](https://svelte.dev) component one can use to run our :online-editor

In addition to those, this documentation website is implemented using the [SvelteKit](https://kit.svelte.dev/) framework.



## Source code
The source code for all @bagawork packages is available in the Git repository <a href="https://github.com/PeppeL-G/bagawork" target="_blank">https://github.com/PeppeL-G/bagawork</a>.