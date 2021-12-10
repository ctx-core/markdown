import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'markdown_frontmatter$'
export const markdown_frontmatter$_b:B<markdown_frontmatter$_T> = be_(key, ()=>
	writable$(undefined))
export type markdown_frontmatter$_T = Writable$<string|undefined>
