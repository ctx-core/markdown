/**
 * Returns `{ metadata, content }`
 */
export function content_frontmatter_(markdown) {
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
export { content_frontmatter_ as _content_frontmatter, content_frontmatter_ as _frontmatter__content, content_frontmatter_ as _h1__frontmatter__content__markdown, };
//# sourceMappingURL=src/content_frontmatter_.js.map