import child_process from 'child_process'

// In the /docs folder, run:
// npm install (if needed)
// npm run deploy

const commands = [
	
	// Build it.
	'npm run build',
	
	// Commit it.
	'cd ./build/',
	'git init',
	'git add -A',
	'git commit -m "New deploy."',
	
	// Push it.
	'git push -f https://github.com/PeppeL-G/bagawork.git main:gh-pages',
	
	// Remove files generated in during the build.
	'cd ../',
	'rm -rf ./build/',
	
]

// Execute all commands.
const output = child_process.execSync(commands.join(' && '))
console.log(output.toString('utf8'))