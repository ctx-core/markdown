/**
 * Returns a markup preprocessor for svelte-rollup.
 */
export declare function _markup(builder_opts?: builder_opts_type): (opts: any) => Promise<{
    code: string;
    map: null;
} | undefined>;
export declare const markup: (opts: any) => Promise<{
    code: string;
    map: null;
} | undefined>;
declare type builder_opts_type = {
    extension?: string;
    _match?: ({ filename: string }: {
        filename: any;
    }) => boolean;
};
export { markup as markup__markdown };
