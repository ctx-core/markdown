import { Writable$, writable$ } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
const key = 'markdown_frontmatter'
export interface markdown_frontmatter_Ctx {
	markdown_frontmatter?:Writable$<string|undefined>
}
export const markdown_frontmatter_b = _b<markdown_frontmatter_Ctx, typeof key>(key, ()=>
	writable$(undefined))
export {
	markdown_frontmatter_b as b__frontmatter
}
