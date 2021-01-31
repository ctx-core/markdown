import fs from 'fs'
import { extname, resolve } from 'path'
import { promisify } from 'util'
const exists = promisify(fs.exists)
const lstat = promisify(fs.lstat)
export async function _resolve_md_file_path_txt(path_txt: string) {
	if (extname(path_txt) !== '.md') return false
	const resolve_path_txt = resolve(path_txt)
	if (!(await exists(resolve_path_txt))) return false
	const stats = await lstat(resolve_path_txt)
	if (!stats.isFile()) return
	return resolve_path_txt
}
export {
	_resolve_md_file_path_txt as _txt__path__file__md__resolve
}
