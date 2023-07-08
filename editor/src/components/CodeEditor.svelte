<script>
	
	export let code
	
	import {EditorView, keymap} from "@codemirror/view"
	import {EditorState} from "@codemirror/state"
	import {basicSetup} from "@codemirror/basic-setup"
	import {javascript} from "@codemirror/lang-javascript"
	import {defaultTabBinding} from "@codemirror/commands"
	import {indentUnit} from "@codemirror/language"
	import { onMount } from "svelte"
	
	let editorDiv
	let editorView
	
	onMount(() => {
		
		editorView = new EditorView({
			state: EditorState.create({
				doc: code,
				extensions: [
					basicSetup,
					keymap.of([
						defaultTabBinding
					]),
					javascript(),
					indentUnit.of("\t")
				]
			}),
			parent: editorDiv,
		})
		
	})
	
	export function getCode(){
		return editorView.state.doc.toString()
	}
	
</script>

<div
	class="editor"
	bind:this={editorDiv}
/>

<style scoped>

.editor{
	background-color: white;
	color: black;
}

</style>