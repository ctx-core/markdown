const override_code_infostring_h: override_code_infostring_h_T = {
	'js module': true,
	'js exec': true,
	'js exec frontmatter': true,
}
export function is_override_code_(infostring: string) {
	return override_code_infostring_h[infostring]
}
export {
	is_override_code_ as _is_override_code,
	is_override_code_ as _is__code__override,
}
interface override_code_infostring_h_T extends Record<string, boolean> {}
