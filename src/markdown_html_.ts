import marked from 'marked'
import { is_override_code_ } from './is_override_code_'
/**
 * Returns html from the given markdown
 */
export function markdown_html_(markdown:string) {
	const renderer = new marked.Renderer()
	renderer.code = override_code
	return marked(markdown, { renderer })
	function override_code(code:string, infostring:string) {
		return (
			is_override_code_(infostring)
			? ''
			: code
		)
	}
}
export {
	markdown_html_ as _markdown_html,
	markdown_html_ as _html__markdown,
}
