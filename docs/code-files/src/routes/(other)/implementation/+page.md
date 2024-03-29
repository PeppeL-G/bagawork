# Implementation
On these pages you can learn how Bagawork is implemented, and what you need to do to run Bagawork apps or our :online-editor on your own website.

::: warning Are you lost?

These Implementation pages are only intended for those who want to learn how Bagawork (the framework) is implemented, and for those those who want to run Bagawork apps or our :online-editor on their own website. Those creating Bagawork apps through our :online-editor won't find anything interesting on these Implementation pages.

:::


## npm packages
The Bagawork framework is implemented as two different [npm](https://www.npmjs.com/) packages:

* [@bagawork/framework](/implementation/framework) contains the things needed to run a BagaWork app
* [@bagawork/editor](/implementation/editor) contains a [Svelte](https://svelte.dev) component one can use to run our :online-editor

They all follow the [SemVer](https://semver.org/) versioning convention, and they all use the same version number, i.e. when the version number of one package is updated, the other one is updated to the same one version number, even if nothing has changed in it. So if you use both of these packages, always use the same version number in them!

Changes made in each version is documented on the [Changelog](../changelog/) page.



## Source code
The source code for all @bagawork packages is available in the Git repository <a href="https://github.com/PeppeL-G/bagawork" target="_blank">https://github.com/PeppeL-G/bagawork</a>.