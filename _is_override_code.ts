const override_code_infostring_h1: override_code_infostring_h1_type = {
	'js module': true,
	'js exec': true,
	'js exec frontmatter': true,
}
export function _is_override_code(infostring: string) {
	return override_code_infostring_h1[infostring]
}
export {
	_is_override_code as _is__code__override
}
interface override_code_infostring_h1_type extends Record<string, boolean> {}
