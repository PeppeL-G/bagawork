# @bagawork/editor
Contains an Editor implemented in [Svelte](https://svelte.dev/) one can use to create Bagawork apps.

## Publish instructions
To publish a new version of this npm package:

1. `cd editor`
2. `code package.json`
3. Update `"@bagawork/core": "^X.Y.Z"` if needed
3. Update `"@bagawork/web-components": "^X.Y.Z"` if needed
4. Update `"version": "X.Y.Z"`
5. Save
6. `npm publish --access public`