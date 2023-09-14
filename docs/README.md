# Docs
Contains a SvelteKit app with documentation for how to use the Bagawork framework.

## Publish instructions
To publish a new version of this app to GitHub Pages:

1. `cd docs`
2. `code package.json`
3. Update `"@bagawork/core": "^X.Y.Z"` if needed
4. Update `"@bagawork/web-components": "^X.Y.Z"` if needed
5. Update `"@bagawork/editor": "^X.Y.Z"` if needed
6. Save
7. `npm run deploy`