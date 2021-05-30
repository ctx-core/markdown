import fs from 'fs'
import { extname, resolve } from 'path'
import { promisify } from 'util'
const exists = promisify(fs.exists)
const lstat = promisify(fs.lstat)
export async function resolve_md_file_path_txt_(path_txt: string) {
	if (extname(path_txt) !== '.md') return false
	const resolve_path_txt = resolve(path_txt)
	if (!(await exists(resolve_path_txt))) return false
	const stats = await lstat(resolve_path_txt)
	if (!stats.isFile()) return
	return resolve_path_txt
}
export {
	resolve_md_file_path_txt_ as _resolve_md_file_path_txt,
	resolve_md_file_path_txt_ as _txt__file_path__md__resolve,
}
