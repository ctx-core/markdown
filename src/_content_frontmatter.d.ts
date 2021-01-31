import type { MarkdownFrontmatter } from './MarkdownFrontmatter';
/**
 * Returns `{ metadata, content }`
 */
export declare function _content_frontmatter(markdown: string): content_frontmatter_type;
export { _content_frontmatter as _frontmatter__content, _content_frontmatter as _h1__frontmatter__content__markdown, };
export interface content_frontmatter_type {
    frontmatter: MarkdownFrontmatter;
    content: string;
}
