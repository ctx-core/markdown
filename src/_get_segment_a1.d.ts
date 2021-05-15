import type { Request, Response } from 'express';
import type { markdown_opts_type } from './markdown_opts_type';
/**
 * Returns a GET [HTTP_Handler](#HTTP_Handler)
 * that responds with a body__markdown_name_a1__path or a body__ctx__parse__md__path
 * @param opts
 * @returns {Function}
 */
export declare function _get_segment_a1(opts: markdown_opts_type): (req: Request<_get_segment_a1_req_I>, res: Response) => Promise<void>;
export declare type _get_segment_a1_req_I = Record<string, {
    [key: string]: string;
} | string[]>;
export { _get_segment_a1 as _get__a1__segment };
