import marked from 'marked'
import { extname } from 'path'
import { content_frontmatter_ } from './content_frontmatter_.js'
import { is_override_code_ } from './is_override_code_.js'
const route_exec_js = `
import { getContext } from 'svelte'
import { markdown_frontmatter$_b } from '@ctx-core/markdown'
const ctx = getContext('ctx')
markdown_frontmatter$_b(ctx).set(frontmatter)
`.trim()
/**
 * Returns a markup preprocessor for svelte-rollup.
 */
export function markup_(builder_opts:builder_opts_T = {}) {
	const {
		extension = '.md',
		match_ = ({ filename }:markup_match_params__I)=>extname(filename) === extension,
	} = builder_opts
	return async (opts:markup_match_params__I)=>{
		if (!match_(opts)) return
		const { content: markdown } = opts
		const { frontmatter, content } = content_frontmatter_(markdown)
		const renderer = new marked.Renderer()
		const parser = new marked.Parser()
		let module_js = `
export const frontmatter = ${JSON.stringify(frontmatter)}
		`.trim()
		let exec_js = ''
		const parser_o = { parser }
		const default_code = renderer.code.bind(parser_o)
		renderer.code = override_code
		const default_paragraph = renderer.paragraph.bind(parser_o)
		renderer.paragraph = override_paragraph
		const default_link = renderer.link.bind(parser_o)
		renderer.link = override_link
		const content_html = marked(content, { renderer })
		const code = `
${
			module_js
			? `
<script context=module>
${module_js}
</script>
			`.trim()
			: ''
		}
<script>
${exec_js}
</script>
${content_html}
		`.trim()
		return {
			code,
			map: null,
		}
		function override_code(code:string, infostring:string, escaped:boolean) {
			if (infostring === 'js module') {
				module_js += `\n${code || ''}`
			}
			if (infostring === 'js exec') {
				exec_js += `\n${code || ''}`
			}
			if (infostring === 'js exec frontmatter') {
				exec_js += `\n${route_exec_js}\n${code || ''}`
			}
			if (is_override_code_(infostring)) return ''
			const html = default_code(code, infostring, escaped)
			return '{@html ' + JSON.stringify(html) + '}'
		}
		function override_paragraph(text:string) {
			if (
				/^\s*\{#/.test(text)
				|| /^\s*\{:/.test(text)
				|| /^\s*\{\//.test(text)
				|| /^\s*<svelte:/.test(text)
			) {
				return `${text}\n`
			}
			return default_paragraph(text)
		}
		function override_link(href:string, title:string, text:string) {
			if (/^svelte:/.exec(href)) {
				return `<${href}>`
			}
			return default_link(href, title, text)
		}
	}
}
export const markup = markup_()
export interface markup_match_params__I {
	filename:string
	content:string
}
export interface builder_opts_T {
	extension?:string
	match_?:(params:markup_match_params__I)=>boolean
}
export {
	markup_ as _markup,
	markup as markup__markdown,
}
