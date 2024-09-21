<script>
	import UpdateApp from './UpdateApp.svelte'
</script>

# Update
This page is used to test that updating an app works as it should.

1. Enter the BagaCode for the "old" app version (use the prefilled one)
2. Interact with the app, and get the variable values you want
3. Copy the current state and paste it as the runtimeSettings state
4. Enter the BagaCode for the new app version. You can use this one:
	* `eNrFVF1r2zAU/StCDGZT19gZg2EowyljlNFttIWtzIUI+7oxkyUjyaxZ8H+vFMcfcp0sfdpDgiTfc67uOcfeYlJVONrilGeAI5xSIiW63sRVheBJAcsk0uttwhJlfimvmQKBLlDQHwkgCm4VEeo7eQTHbYuVAFULhr7RzBybs6aDFEyDSmDqsqXrMcTvGpxdoNDCZPBPzPkUI0DCkfr9EPvyBjcezjnNQEgc/driIsNR6GFGSqPMbkDsYZ7nmvQnjoJufa/XzYOHKz2mhWzJrtqNJfD+TkaYXmaz6XVWfAlfoFL6jkrUO/UEYRkv9cE1UWu/3Tmu7cLnupjqf8P/SD9dFzQTwJz2UaLudFdf6T9n9WbbK9KsXF8Wf8EJXa+rvOS0Lpnszl9SJWrX4sjzRC1rPRHbNzwfuvhrPQbV5hB/6u9wgxcEN8bWWZKx4WOC8dqiOpulmeZzgHcr1wqOh5+0x4FOxAZH74I+DXdQVlTbYqXCCkIsf1/lcVZTdTgLnC0h52J4s6yMv9L424qk4M3EIBaANrxGu8wipcVA4YePq2F0G9nFYsZuu3Ai+FeuFTfaOKymdOzLUdg9yNNwcwYZCeN8/A2YvPatN4uJN5+M9fEj/G9nfqyJeiuNOQLp7oc9sRQLg3nB7KL3JxQtTmFaHGAa3/A1njw0zyyjaEU=`
5. Change the runtimeSettings version to `2` or higher (should perform the update!)

<UpdateApp />