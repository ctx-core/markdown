import { be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { markdown_Ctx } from './markdown_Ctx'
const key = 'markdown_frontmatter$'
export const markdown_frontmatter$_b = be_<markdown_Ctx, typeof key>(key, ()=>
	writable$(undefined))
export type markdown_frontmatter$_T = Writable$<string|undefined>
