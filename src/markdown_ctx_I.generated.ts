import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { markdown_frontmatter_T } from './markdown_frontmatter_b'
import { markdown_frontmatter_b } from './markdown_frontmatter_b'
export interface markdown_ctx_I {
	markdown_frontmatter?:markdown_frontmatter_T
	markdown_b_h?:markdown_b_h_T
}
export interface markdown_b_h_T {
	get markdown_frontmatter():markdown_frontmatter_T
}
export function markdown_b_h_b(ctx:markdown_ctx_I):B<markdown_ctx_I, 'markdown_b_h'> {
	return _b('markdown_b_h', ()=>{
		return {
			get markdown_frontmatter() { return markdown_frontmatter_b(ctx) }
		}
	})
}