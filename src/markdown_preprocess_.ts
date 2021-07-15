import { markup_ } from './markup_.js'
export function markdown_preprocess_(builder_opts = {}) {
	return {
		markup: markup_(builder_opts),
	}
}
export {
	markdown_preprocess_ as _markdown_preprocess,
	markdown_preprocess_ as _preprocess__markdown,
}
