import { basename, extname } from 'path'
import { promisify } from 'util'
import fs from 'fs'
import { filter, map } from '@ctx-core/array'
import type { markdown_opts_type } from './markdown_opts_type'
const exists = promisify(fs.exists)
const lstat = promisify(fs.lstat)
const readdir = promisify(fs.readdir)
/**
 * Returns an array of names for each markdown file in opts
 */
export async function _markdown_name_a1(opts:markdown_opts_type) {
	const { dir } = opts
	if (!await exists(dir)) return
	const stats = await lstat(dir)
	if (!stats.isDirectory()) return
	const ext_name_a1 = await readdir(dir)
	return (
		map(
			filter(ext_name_a1, name=>extname(name) === '.md'),
			name=>basename(name, '.md')
		)
	)
}
export {
	_markdown_name_a1 as _a1__name
}
