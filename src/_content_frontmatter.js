/**
 * Returns `{ metadata, content }`
 */
export function _content_frontmatter(markdown) {
    const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
    if (!match)
        return { frontmatter: {}, content: markdown };
    const frontmatter_txt = match && match[1];
    const content = match && match[0] && markdown.slice(match[0].length);
    const frontmatter = {};
    if (frontmatter_txt) {
        frontmatter_txt.split('\n').forEach((pair) => {
            const colon_idx = pair.indexOf(':');
            frontmatter[pair.slice(0, colon_idx).trim()] = pair
                .slice(colon_idx + 1)
                .trim();
        });
    }
    return { frontmatter, content };
}
export { _content_frontmatter as _frontmatter__content, _content_frontmatter as _h1__frontmatter__content__markdown, };
