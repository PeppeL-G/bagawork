/**
 * Publish next version instructions
 * --------------------
 * This script will:
 * 
 * - Publish new versions of the packages to npm
 * - Change the code in the docs app to contain a new release
 * - Create new Git commits
 * - Deploy the docs app
 * 
 * To run this script:
 * 
 * 1. Change the newVersion constant to correct value in the code below
 * 2. Run the following command in this file's parent folder:
 *    node ./scripts/publish-next-version.js
 */
import childProcess from "node:child_process"
import fs from "node:fs"

const newVersion = "?.?.?"

const pathToFrameworkPackageJsonFile = `./framework/package.json`
const pathToEditorPackageJsonFile = `./editor/package.json`
const pathToDocsPackageJsonFile = `./docs/package.json`
const pathToChangelogEntries = `./docs/src/data/changelog-entries.js`

if(newVersion == `?.?.?`){
	console.log(`Must change newVersion from "${newVersion}" to actual new version.`)
	process.exit(1)
}

publishFrameworkPackage()
publishEditorPackage()
deployDocsApp()
createCommit()
restoreScriptFile()

function publishFrameworkPackage() {
	
	updateVersionInPackageJson(
		pathToFrameworkPackageJsonFile,
		newVersion,
	)
	
	publishPackageToNpm(`./framework/`)
	
}

function publishEditorPackage() {
	
	updateVersionInPackageJson(
		pathToEditorPackageJsonFile,
		newVersion,
	)
	updateDependencyInPackageJson(
		pathToEditorPackageJsonFile,
		"@bagawork/framework",
		newVersion,
	)
	
	publishPackageToNpm(`./editor/`)
	
}

function deployDocsApp() {
	
	updateVersionInPackageJson(
		pathToDocsPackageJsonFile,
		newVersion,
	)
	updateDependencyInPackageJson(
		pathToDocsPackageJsonFile,
		"@bagawork/editor",
		newVersion,
	)
	
	let changelogEntriesAsString = fs.readFileSync(
		pathToChangelogEntries,
		{ encoding: "utf8" },
	)
	
	changelogEntriesAsString = changelogEntriesAsString.replace(
		`?.?.?`,
		newVersion,
	)
	changelogEntriesAsString = changelogEntriesAsString.replace(
		`????-??-??`,
		new Date().toISOString().split('T')[0],
	)
	
	const find = `export const changelogEntries = [{`
	const replaceWith = `export const changelogEntries = [{
	version: \`?.?.?\`,
	date: \`????-??-??\`,
	changes: [],
}, {`
	changelogEntriesAsString = changelogEntriesAsString.replace(
		find,
		replaceWith,
	)
	
	fs.writeFileSync(pathToChangelogEntries, changelogEntriesAsString)
	
	childProcess.execSync(
		`npm run deploy`,
		{ cwd: `./docs/` },
	)
	
}

function createCommit(){
	
	const pathToFilesToAdd = [
		pathToFrameworkPackageJsonFile,
		pathToEditorPackageJsonFile,
		pathToDocsPackageJsonFile,
		pathToChangelogEntries,
		`./package-lock.json`,
		`./package.json`
	]
	
	childProcess.execSync(
		`git add ${pathToFilesToAdd.join(' ')}`,
	)
	
	childProcess.execSync(
		`git commit -m "Version ${newVersion}."`,
	)
	
	childProcess.execSync(
		`git push`,
	)
	
}

function restoreScriptFile(){
	
	const pathToScriptFile = `./scripts/publish-next-version.js`
	
	let scriptFileAsString = fs.readFileSync(
		pathToScriptFile,
		{ encoding: "utf8" },
	)
	
	scriptFileAsString = scriptFileAsString.replace(
		/const newVersion = "[0-9]+\.[0-9]+\.[0-9]+"/,
		`const newVersion = "?.?.?"`,
	)
	
	fs.writeFileSync(pathToScriptFile, scriptFileAsString)
	
}

function updateVersionInPackageJson(pathToPackageJsonFile, newVersion) {
	
	let jsonAsString = fs.readFileSync(pathToPackageJsonFile, { encoding: "utf8" })
	
	jsonAsString = jsonAsString.replace(
		/"version": "[0-9]+\.[0-9]+\.[0-9]+"/,
		`"version": "${newVersion}"`,
	)
	
	fs.writeFileSync(pathToPackageJsonFile, jsonAsString)
	
}

function updateDependencyInPackageJson(pathToPackageJsonFile, dependencyName, dependencyNewVersion) {
	
	let jsonAsString = fs.readFileSync(pathToPackageJsonFile, { encoding: "utf8" })
	
	jsonAsString = jsonAsString.replace(
		new RegExp(`"${dependencyName}": "\\^[0-9]+\.[0-9]+\.[0-9]+"`),
		`"${dependencyName}": "^${dependencyNewVersion}"`,
	)
	
	fs.writeFileSync(pathToPackageJsonFile, jsonAsString)
	
}

function publishPackageToNpm(pathToFolderWithPackageJson){
	
	childProcess.execSync(
		`npm publish --access public`,
		{ cwd: pathToFolderWithPackageJson },
	)
	
}