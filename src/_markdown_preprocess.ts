import { _markup } from './_markup'
export function _markdown_preprocess(builder_opts = {}) {
	return {
		markup: _markup(builder_opts),
	}
}
export {
	_markdown_preprocess as _preprocess__markdown
}