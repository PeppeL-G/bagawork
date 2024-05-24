# BagaWork
For information about BagaWork, see [bagawork.com](https://bagawork.com/).


## Repository Structure
This repository contains all code relevant to the BagaWork framework:

* [./docs/](./docs/) - The source code for [bagawork.com](https://bagawork.com/)
* [./editor/](./editor/) - The npm package `@bagawork/editor`
* [./framework/](./framework/) - The npm package `@bagawork/framework`
* [./scripts/](./scripts/) - Scripts for doing some tasks, like publishing next version of BagaWork

For more information, see [bagawork.com/implementation](https://bagawork.com/implementation/) and respective folder in this repository.



## Development Instructions
The [./docs/](./docs/) is used for development. [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) are used to make the `./docs/` app use the versions of `@bagawork/*` in the `./editor/` and `./framework/` folders. Since these two folders aren't in the `./docs/` folder, you have to run `npm install` in the root folder of the repository.

You can run the `./docs/` app using [Docker](https://www.docker.com/) on your computer:

1. In the root folder of the repository:
	1. `docker compose up`

Or by using [Node.js](https://nodejs.org/docs/latest/api/) on your computer:

1. In the root folder of the repository:
	1. `npm install`
	2. `npm run dev`



## Changelog
[bagawork.com/changelog/](https://bagawork.com/changelog/)