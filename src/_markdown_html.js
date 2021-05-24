import marked from 'marked';
import { _is_override_code } from './_is_override_code';
/**
 * Returns html from the given markdown
 */
export function _markdown_html(markdown) {
    const renderer = new marked.Renderer();
    renderer.code = override_code;
    return marked(markdown, { renderer });
    function override_code(code, infostring) {
        return (_is_override_code(infostring)
            ? ''
            : code);
    }
}
export { _markdown_html as _html__markdown };
