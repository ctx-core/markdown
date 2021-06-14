import type { MarkdownFrontmatter } from './MarkdownFrontmatter';
/**
 * Returns `{ metadata, content }`
 */
export declare function content_frontmatter_(markdown: string): content_frontmatter_type;
export { content_frontmatter_ as _content_frontmatter, content_frontmatter_ as _frontmatter__content, content_frontmatter_ as _h1__frontmatter__content__markdown, };
export interface content_frontmatter_type {
    frontmatter: MarkdownFrontmatter;
    content: string;
}
