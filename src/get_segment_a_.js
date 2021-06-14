// See https://github.com/sveltejs/sapper.svelte.dev/blob/master/src/routes/guide/_process_markdown.js
import { join, resolve } from 'path';
import { markdown_name_a_ } from './markdown_name_a_';
import { resolve_md_file_path_txt_ } from './resolve_md_file_path_txt_';
/**
 * Returns a GET [HTTP_Handler](#HTTP_Handler)
 * that responds with a body__markdown_name_a1__path or a body__ctx__parse__md__path
 * @param opts
 * @returns {Function}
 */
export function get_segment_a_(opts) {
    const { dir } = opts;
    return async (req, res) => {
        const { params } = req;
        // params.segment_a
        const segment_a = params.segment_a;
        const path = segment_a.join('/');
        const source_path = join(dir, path);
        const resolve_source_path = resolve(source_path);
        const resolve_dir = resolve(dir);
        const path_valid = resolve_source_path.slice(0, resolve_dir.length) === resolve_dir;
        if (!path_valid) {
            res.writeHead(403);
            res.end('Forbidden');
            return;
        }
        const headers = {
            'Content-Type': 'application/json',
        };
        const NODE_ENV = process.env.NODE_ENV;
        if (NODE_ENV !== 'dev'
            && NODE_ENV !== 'development') {
            headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}`; // 5 minutes
        }
        const markdown_name_a = await markdown_name_a_({ dir: resolve_source_path });
        if (markdown_name_a) {
            res.writeHead(200, headers);
            res.end(JSON.stringify({
                markdown_name_a,
            }));
            return;
        }
        const resolve_md_file_path_txt = await resolve_md_file_path_txt_(`${resolve_source_path}.md`);
        if (resolve_md_file_path_txt) {
            res.writeHead(200, headers);
            res.end(JSON.stringify({
                source_path: `${source_path}.md`,
                path: `${path}.md`,
            }));
            return;
        }
        res.writeHead(404, headers);
        res.end(JSON.stringify({
            status: 404,
            message: 'Not Found',
        }));
    };
}
export { get_segment_a_ as _get_segment_a1, get_segment_a_ as _get__a1__segment, };
//# sourceMappingURL=src/get_segment_a_.js.map