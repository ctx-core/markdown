/**
 * Returns a markup preprocessor for svelte-rollup.
 */
export declare function _markup(builder_opts?: builder_opts_type): (opts: _markup_match_params_I) => Promise<{
    code: string;
    map: null;
} | undefined>;
export declare const markup: (opts: _markup_match_params_I) => Promise<{
    code: string;
    map: null;
} | undefined>;
export interface _markup_match_params_I {
    filename: string;
    content: string;
}
export interface builder_opts_type {
    extension?: string;
    _match?: (params: _markup_match_params_I) => boolean;
}
export { markup as markup__markdown };
