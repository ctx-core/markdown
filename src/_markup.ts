import marked from 'marked'
import { extname } from 'path'
import { _content_frontmatter } from './_content_frontmatter'
import { _is_override_code } from './_is_override_code'
const route_exec_js = `
	import { __frontmatter } from '@ctx-core/markdown/store'
	__frontmatter.set(frontmatter)
	`.trim()
/**
 * Returns a markup preprocessor for svelte-rollup.
 */
export function _markup(builder_opts:builder_opts_type = {}) {
	const {
		extension = '.md',
		_match =
			({ filename })=>
				extname(filename) === extension,
	} = builder_opts
	return async opts=>{
		if (!_match(opts)) return
		const { content: markdown } = opts
		const { frontmatter, content } = _content_frontmatter(markdown)
		const renderer = new marked.Renderer()
		let module_js = `
export const frontmatter = ${JSON.stringify(frontmatter)}
		`.trim()
		let exec_js = ''
		const default_code = renderer.code.bind(renderer)
		renderer.code = override_code
		const default_paragraph = renderer.paragraph.bind(renderer)
		renderer.paragraph = override_paragraph
		const default_link = renderer.link.bind(renderer)
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
		function override_code(code, infostring, escaped) {
			if (infostring === 'js module') {
				module_js += `\n${code || ''}`
			}
			if (infostring === 'js exec') {
				exec_js += `\n${code || ''}`
			}
			if (infostring === 'js exec frontmatter') {
				exec_js += `\n${route_exec_js}\n${code || ''}`
			}
			if (_is_override_code(infostring)) return ''
			const html = default_code(code, infostring, escaped)
			return '{@html ' + JSON.stringify(html) + '}'
		}
		function override_paragraph(text) {
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
		function override_link(href, title, text) {
			if (/^svelte:/.exec(href)) {
				return `<${href}>`
			}
			return default_link(href, title, text)
		}
	}
}
export const markup = _markup()
type builder_opts_type = {
	extension?:string
	_match?:({ filename: string })=>boolean
}
export {
	markup as markup__markdown
}