import { _b } from '@ctx-core/object'
import { writable } from 'svelte/store'
export const b__frontmatter = _b('__frontmatter', ()=>
	writable(null))
export const __frontmatter = b__frontmatter()

