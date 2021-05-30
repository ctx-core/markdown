import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { markdown_Ctx } from './markdown_Ctx'
const key = 'markdown_frontmatter$'
export const markdown_frontmatter$_b = _b<markdown_Ctx, typeof key>(key, ()=>
	writable$(undefined))
export type markdown_frontmatter$_T = Writable$<string|undefined>
