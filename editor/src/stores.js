import { writable } from 'svelte/store'

// These should be populated with correct values when the editor starts.
// Which the correct values are depends on if you want to start on a
// project from scratch, or continue on an old one.
export const editorSettings = writable({})
export const app = writable({})
export const folders = writable([])
export const pages = writable([])
export const pageTemplates = writable([])