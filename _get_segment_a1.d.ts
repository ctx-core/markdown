import type { markdown_opts_type } from './markdown_opts_type';
/**
 * Returns a GET [HTTP_Handler](#HTTP_Handler)
 * that responds with a body__markdown_name_a1__path or a body__ctx__parse__md__path
 * @param opts
 * @returns {Function}
 */
export declare function _get_segment_a1(opts: markdown_opts_type): (req: any, res: any) => Promise<void>;
export { _get_segment_a1 as _get__a1__segment };
