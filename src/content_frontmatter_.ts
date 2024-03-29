import type { MarkdownFrontmatter } from './MarkdownFrontmatter.js'
/**
 * Returns `{ metadata, content }`
 */
export function content_frontmatter_(markdown:string):content_frontmatter_type {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown)
	if (!match) return { frontmatter: {}, content: markdown } as content_frontmatter_type
	const frontmatter_txt = match && match[1]
	const content = match && match[0] && markdown.slice(match[0].length)
	const frontmatter:MarkdownFrontmatter = {}
	if (frontmatter_txt) {
		frontmatter_txt.split('\n').forEach((pair:string)=>{
			const colon_idx:number = pair.indexOf(':')
			frontmatter[pair.slice(0, colon_idx).trim()] = pair
				.slice(colon_idx + 1)
				.trim()
		})
	}
	return { frontmatter, content } as content_frontmatter_type
}
export {
	content_frontmatter_ as _content_frontmatter,
	content_frontmatter_ as _frontmatter__content,
	content_frontmatter_ as _h1__frontmatter__content__markdown,
}
export interface content_frontmatter_type {
	frontmatter:MarkdownFrontmatter
	content:string
}
