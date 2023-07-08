import { deflate, inflate, } from 'pako'
import { fromUint8Array, toUint8Array } from 'js-base64'

export function getCompressedProject(project) {

	const jsonCode = JSON.stringify(project)
	const compressedIntArray = deflate(jsonCode, { level: 9 })
	const compressedBase64 = fromUint8Array(compressedIntArray)
	return compressedBase64

}

export function getDecompressedProject(compressedProjectString) {

	const compressedIntArray = toUint8Array(compressedProjectString)
	const jsonCode = inflate(compressedIntArray, { to: 'string' })
	const project = JSON.parse(jsonCode)
	return project

}