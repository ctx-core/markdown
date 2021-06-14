import type { Request, Response } from 'express';
import type { markdown_opts_I } from './markdown_opts_I';
/**
 * Returns a GET [HTTP_Handler](#HTTP_Handler)
 * that responds with a body__markdown_name_a1__path or a body__ctx__parse__md__path
 * @param opts
 * @returns {Function}
 */
export declare function get_segment_a_(opts: markdown_opts_I): (req: Request<get_segment_a__req_I>, res: Response) => Promise<void>;
export interface get_segment_a__req_I {
    segment_a: string[];
}
export { get_segment_a_ as _get_segment_a1, get_segment_a_ as _get__a1__segment, };
