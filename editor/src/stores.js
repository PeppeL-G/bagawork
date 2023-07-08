import { writable } from 'svelte/store'

// These should be populated with correct values
// when the editor starts.
export const app = writable({})
export const folders = writable([])
export const pages = writable([])
export const pageTemplates = writable([])