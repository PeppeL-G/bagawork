export const changelogEntries = [{
	version: `?.?.?`,
	date: `????-??-??`,
	changes: [],
}, {
	version: `0.0.43`,
	date: `2024-10-24`,
	changes: [
		`Gave created app icons an SVG viewBox to specify they are squared`,
	],
}, {
	version: `0.0.42`,
	date: `2024-10-23`,
	changes: [
		`Framework: Added the method App.createIcon()`,
		`Framework: Added the runtimeSetting onIconCreated()`,
		`Editor: Added type definitions for App.createIcon()`,
		`Editor: Added the "Icon" tab to preview the created app icon`,
		`Docs: Added docs for App.createIcon()`,
		`Docs: Added docs for for runtimeSettings.onIconCreated()`,
		`Docs: On the run app page, use the app icon as the favicon`,
		`Framework: Changed how PaperCircle.radius() and PaperLine.thickness() work so they can be implemented without CSS (to make app icons work outside web browsers)`,
		`Docs: Updated the docs for PaperCircle.radius() and PaperLine.thickness()`,
	],
}, {
	version: `0.0.41`,
	date: `2024-10-23`,
	changes: [
		`Docs: Added the example GUI Horizontal Scrolling`,
		`Editor: Improved the GUI in edit page modal`,
		`Framework: Fixed bug occurring when Rows.children() hasn't been called`,
		`Editor: Added type definitions for Box`,
		`Docs: Added the page glossary`,
		`Docs: Added categories to changelog entries`,
	],
}, {
	version: `0.0.40`,
	date: `2024-10-23`,
	changes: [
		`Failed to publish`,
	],
}, {
	version: `0.0.39`,
	date: `2024-10-07`,
	changes: [
		`Renamed Button.handler() to Button.onClick()`,
		`Renamed EnterNumber.handler() to EnterNumber.onChange()`,
		`Renamed EnterText.handler() to EnterText.onChange()`,
		`Added the method Font.strikethrough()`,
		`Removed debugging functionality`,
		`Added the function log()`,
		`Added the docs page log()`,
		`Added a log panel in the editor`,
		`Reworked the GUI in the editor`,
		`Improved documentation on state and update`,
	],
}, {
	version: `0.0.38`,
	date: `2024-09-24`,
	changes: [
		`Added the class Font`,
		`Added the method Component.font()`,
		`Added the docs page Font`,
		`Made EnterText.handler() and EnterText.store() run on every input change`,
		`Made EnterNumber.handler() and EnterNumber.store() run on every input change`,
		`Added the speaker variable`,
		`Added the docs page speaker`,
	],
}, {
	version: `0.0.37`,
	date: `2024-09-17`,
	changes: [
		`Improved how Box components are handled in Rows and Columns components`,
	],
}, {
	version: `0.0.36`,
	date: `2024-09-13`,
	changes: [
		`Added the method Button.stay()`,
		`Added the Updater component`,
		`Added the runUpdater() function`,
		`In the editor, made it possible to resize the app screen when editing app/page/template`,
		`Changed the default coordinate system in the Paper component to 10x10`,
		`Added the docs page PaperCircle`,
		`Added the docs page PaperLine`,
		`Added the docs page PaperRectangle`,
		`Made layout components update their child elements accordingly when the children are created anew with the Updater component`,
		`Fixed a bug in the EnterText component (the height was not 100%)`,
	],
}, {
	version: `0.0.31`,
	date: `2024-08-24`,
	changes: [
		`Added the tutorial "Formatting Text with BBCode"`,
		`Added a link to run app on the start page in a new window`,
		`Fixed bug where some links on the website triggers a full page load instead of functioning as an SPA`,
		`Marked the app screens as not translatable on the website`,
		`Improved Box (no more flashing!), and minor implementation improvements to other components`,
	],
}, {
	version: `0.0.30`,
	date: `2024-05-20`,
	changes: [
		`Fixed deployment bug`,
	],
}, {
	version: `0.0.29`,
	date: `2024-05-20`,
	changes: [
		`Fixed deployment bug`,
	],
}, {
	version: `0.0.28`,
	date: `2024-05-20`,
	changes: [
		`Added exercises to the "Programming" tutorials`,
		`Added the method Text.textWithBBCode()`,
		`Added the method Button.textWithBBCode()`,
		`Added the docs page BBCode`,
	],
}, {
	version: `0.0.27`,
	date: `2024-05-06`,
	changes: [
		`Added the example app Personal Website`,
		`Added the method EnterNumber.decimals()`,
		`When loading the editor and the BagaCode contains no pages (empty array), don't populate it with default pages`,
		`Added exercises to the "Fundamentals" tutorials`,
		`All links on this website that leads to another website or to our online editor open in new window/tab`,
	],
}, {
	version: `0.0.26`,
	date: `2024-04-11`,
	changes: [
		`Validate args passed to framework methods`,
		`Added the example game Tic Tac Toe`,
		`Added the example game 21 Sticks`,
		`Added the example game Chess`,
		`Added favicons (bad logo until a proper one is made)`,
		`Added motivation page`,
		`Added the component EnterNumber`,
	],
}, {
	version: `0.0.25`,
	date: `2024-02-03`,
	changes: [
		`Added the tutorial "Dynamically sized paper"`,
		`Added Paper.coordinateSystem()`,
		`Fixed lag problems with Box component`,
	],
}, {
	version: `0.0.24`,
	date: `2024-01-13`,
	changes: [
		`Added the example app Glossaries`,
		`Added the addXXX() methods to the Time class`,
		`Added the components Paper, PaperLine, PaperCircle and PaperRectangle`,
		`Added the tutorial Paper`,
		`Merged the npm packages @bagawork/core and @bagawork/web-components into @bagawork/framework, and stopped using web components`,
	],
}, {
	version: `0.0.23`,
	date: `2023-12-28`,
	changes: [
		`Fixed bug where the editor didn't show created after directions`,
		`Updated example app Quiz to use new Direction syntax`,
		`Added intellisense and link to the Image component`,
		`Added the tutorial Styling`,
		`Improved docs for the Box component`,
		`Improved docs for the Image component`,
		`Added the tutorial Layouts`,
		`Added the tutorial Images`,
	],
}, {
	version: `0.0.22`,
	date: `2023-12-20`,
	changes: [
		`Fixed a bug with Time.setDate() (month was wrong)`,
	],
}, {
	version: `0.0.21`,
	date: `2023-12-20`,
	changes: [
		`Added example to the start page`,
		`Made Time objects comparable`,
		`Added the Direction class`,
		`Added Page.createBeforeDirections()`,
		`Added Page.createAfterDirections()`,
	],
}, {
	version: `0.0.20`,
	date: `2023-12-15`,
	changes: [
		`Fixed bug where a page can't refer to itself`,
		`Added the example app Contacts`,
		`Added arguments to handlers`,
		`Added the Image component`,
	],
}, {
	version: `0.0.19`,
	date: `2023-12-12`,
	changes: [
		`Fixed bug where default navigation (going to the same page) didn't work`,
		`Fixed bug where page templates weren't shown`,
		`Added the EnterText component`,
	],
}, {
	version: `0.0.18`,
	date: `2023-12-11`,
	changes: [
		`Added page arguments`,
	],
}, {
	version: `0.0.17`,
	date: `2023-12-08`,
	changes: [
		`Added the Time class`,
	],
}, {
	version: `0.0.16`,
	date: `2023-12-04`,
	changes: [
		`Added the edit state page in the editor`,
		`In the editor, double check with user when she's deleting a folder that contains pages`,
		`Added functionality to update apps in the framework`,
	],
}, {
	version: `0.0.15`,
	date: `2023-11-29`,
	changes: [
		`Fixed a bug where starting an app with an old app state contained an array didn't work`,
	],
}, {
	version: `0.0.14`,
	date: `2023-11-28`,
	changes: [
		`Re-organized programming tutorials`,
		`Improved the design on the website (light/dark mode + made it viewable on small screens)`,
		`In the editor, made it possible to show a template with the same name as a page is having`,
		`Added the tutorial onBefore()`,
		`Added the tutorial Exercises to Programming section`,
		`Fixed bug with nested array children`,
		`Added the m variables and documentation for the a, m and p variables`
	],
}, {
	version: `0.0.13`,
	date: `2023-11-22`,
	changes: [
		`Fixed failed website publish for 0.0.12`,
	],
}, {
	version: `0.0.12`,
	date: `2023-11-22`,
	changes: [
		`Improved the GUI in the editor`,
		`Added the debug page to the editor`,
		`Added documentation for runtime settings`,
		`Added runtime settings for listening for app state changes, and resume using an old app state`,
	],
}, {
	version: `0.0.11`,
	date: `2023-11-10`,
	changes: [
		`Added the Box component`,
		`Added the settings to change screen preview sizes`,
		`Made the editor and running Baga apps more secure by using a Content Security Policy`,
		`Added the example app Power Point Presentation`,
		`Made pages remember their old values when the user comes back to them`,
		`Renamed showIf() to keepIf(), and added showIf()`,
		`Added the tutorial Using Numbers`,
		`Added the example app Multiplication Table`,
		`Added the tutorial Using booleans, keepIf() and showIf()`,
		`Added the Text Symbols page`,
	],
}, {
	version: `0.0.10`,
	date: `2023-10-09`,
	changes: [
		`Added the example GUI Navigation Drawer`,
		`Added the configuration method showIf(), and updated examples to use it`,
		`Added the run Baga app page (accessed from the editor)`,
	],
}, {
	version: `0.0.9`,
	date: `2023-10-06`,
	changes: [
		`Added the Layers component`,
		`Added the example GUI Navigation Bar`,
		`Children that are null or undefined are not used (instead of crashing)`,
		`Added the example GUI Modal`,
	],
}, {
	version: `0.0.8`,
	date: `2023-10-05`,
	changes: [
		`Improved the documentation for Button, Text, Columns and Rows`,
		`Rewrote docs and tutorials on how to create app/page constants/variables (so intellisense in the editor works)`,
		`Added docs for cornerRadius()`,
		`Changed the Space component to a View instead of Layout`,
		`Added docs for the global configuration method padding()`,
		`Added docs for the global configuration method border()`,
		`Added more intellisense to the editor`,
	],
	}, {
	version: `0.0.7`,
	date: `2023-10-05`,
	changes: [
		`Fixed problems with the script that releases a new version`,
	],
}, {
	version: `0.0.6`,
	date: `2023-10-05`,
	changes: [
		`To simplify, all @bagawork packages and docs website use the same version (update one to a new version, then update all to a new version)`,
		`Added script that updates and publishes all @bagawork packages and that deploy the docs website at the same time`,
	],
}, {
	version: `0.0.5`,
	date: `2023-10-05`,
	changes: [
		`Version 0.0.5 is skipped (see next version)`,
	],
}, {
	version: `0.0.4`,
	date: `2023-09-23`,
	changes: [
		`Rewrote all code containing components to not be invoked as a function, but use a configuration method to set the main content instead`,
		`Updated the editor to v0.0.5`,
	],
}, {
	version: `0.0.3`,
	date: `2023-09-18`,
	changes: [
		`Introduced tutorial sections`,
		`Added the app constant tutorial`,
		`Added the app variable tutorial`,
		`Added the page constant and variable tutorial`,
		`Updated the editor to v0.0.4`,
	],
}, {
	version: `0.0.2`,
	date: `2023-09-14`,
	changes: [
		`On the editor page, read baga code from hash of the URL`,
		`Updated the editor to 0.0.3`,
		`Removed back to close button in editor`,
		`Added the docs plugin`,
		`Added tutorial 5 (going to another page)`,
		`Renamed tutorial 4 (positioning GUI components)`,
		`Added tutorial 6 (sizing GUI components)`,
		`Changed the name of tutorial 3 (configuring GUI components)`,
		`Added tutorial 7 (the app class)`,
		`Added tutorial 8 (exercises)`,
		],
}, {
	version: `0.0.1`,
	date: `2023-07-10`,
	changes: [
		`Made it deployable to GitHub Pages`,
	],
}, {
	version: `0.0.0`,
	date: `2023-07-06`,
	changes: [
		`This is a release to just get things going. Many small bugs probably exists, and breaking changes will most likely be made before 1.0.0`,
	],
}]