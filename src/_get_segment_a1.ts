// See https://github.com/sveltejs/sapper.svelte.dev/blob/master/src/routes/guide/_process_markdown.js
import { join, resolve } from 'path'
import type { markdown_opts_type } from './markdown_opts_type'
import { _markdown_name_a1 } from './_markdown_name_a1'
import { _resolve_md_file_path_txt } from './_resolve_md_file_path_txt'
/**
 * Returns a GET [HTTP_Handler](#HTTP_Handler)
 * that responds with a body__markdown_name_a1__path or a body__ctx__parse__md__path
 * @param opts
 * @returns {Function}
 */
export function _get_segment_a1(opts:markdown_opts_type) {
	const { dir } = opts
	return async (req, res)=>{
		const { params } = req
		const { segment_a1 } = params
		const path = segment_a1.join('/')
		const source_path = join(dir, path)
		const resolve_source_path = resolve(source_path)
		const resolve_dir = resolve(dir)
		const path_valid =
			resolve_source_path.slice(0, resolve_dir.length) === resolve_dir
		if (!path_valid) {
			res.writeHead(403)
			res.end('Forbidden')
			return
		}
		const headers = {
			'Content-Type': 'application/json',
		}
		const NODE_ENV = process.env.NODE_ENV
		if (
			NODE_ENV !== 'dev'
			&& NODE_ENV !== 'development'
		) {
			headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
		}
		const markdown_name_a1 = await _markdown_name_a1({ dir: resolve_source_path })
		if (markdown_name_a1) {
			res.writeHead(200, headers)
			res.end(JSON.stringify({
				markdown_name_a1,
			}))
			return
		}
		const resolve_md_file_path_txt =
			await _resolve_md_file_path_txt(`${resolve_source_path}.md`)
		if (resolve_md_file_path_txt) {
			res.writeHead(200, headers)
			res.end(JSON.stringify({
				source_path: `${source_path}.md`,
				path: `${path}.md`,
			}))
			return
		}
		res.writeHead(404, headers)
		res.end(JSON.stringify({
			status: 404,
			message: 'Not Found',
		}))
	}
}
export {
	_get_segment_a1 as _get__a1__segment
}
