import child_process from 'child_process'

// Run:
// npm run deploy
// in the /docs folder.

const commands = [
	
	// Install all dependencies.
	'npm install',
	
	// Build it.
	'npm run build',
	
	// Commit it.
	'cd ./code-files/build/',
	'git init',
	'git add -A',
	'git commit -m "New deploy."',
	
	// Push it.
	'git push -f https://github.com/PeppeL-G/bagawork.git main:gh-pages',
	
	// Remove files generated in during the build.
	'cd ../../',
	'rm -rf ./code-files/build/',
	'rm -rf ./node_modules/'
	
]

// Execute all commands.
const output = child_process.execSync(commands.join(' && '))
console.log(output.toString('utf8'))