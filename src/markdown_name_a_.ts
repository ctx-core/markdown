import { basename, extname } from 'path'
import { lstat, readdir } from 'fs/promises'
import { filter, map } from '@ctx-core/array'
import type { markdown_opts_I } from './markdown_opts_I'
/**
 * Returns an array of names for each markdown file in opts
 */
export async function markdown_name_a_(opts:markdown_opts_I) {
	const { dir } = opts
	const stats = await lstat(dir)
	if (!stats.isDirectory()) return
	const ext_name_a = await readdir(dir)
	return (
		map(
			filter(ext_name_a, name=>extname(name) === '.md'),
			name=>basename(name, '.md')
		)
	)
}
export {
	markdown_name_a_ as _markdown_name_a1,
	markdown_name_a_ as _a1__name,
}
