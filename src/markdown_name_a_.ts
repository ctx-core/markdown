import { basename, extname } from 'path'
import { promisify } from 'util'
import fs from 'fs'
import { filter, map } from '@ctx-core/array'
import type { markdown_opts_I } from './markdown_opts_I'
const exists = promisify(fs.exists)
const lstat = promisify(fs.lstat)
const readdir = promisify(fs.readdir)
/**
 * Returns an array of names for each markdown file in opts
 */
export async function markdown_name_a_(opts:markdown_opts_I) {
	const { dir } = opts
	if (!await exists(dir)) return
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
