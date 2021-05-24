const override_code_infostring_h1 = {
    'js module': true,
    'js exec': true,
    'js exec frontmatter': true,
};
export function _is_override_code(infostring) {
    return override_code_infostring_h1[infostring];
}
export { _is_override_code as _is__code__override };
