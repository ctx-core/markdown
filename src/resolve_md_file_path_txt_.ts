import type { Stats } from 'fs'
import { lstat } from 'fs/promises'
import { extname, resolve } from 'path'
export async function resolve_md_file_path_txt_(path_txt:string) {
	if (extname(path_txt) !== '.md') return false
	const resolve_path_txt = resolve(path_txt)
	let stats:Stats
	try {
		stats = await lstat(resolve_path_txt)
	} catch (err) {
		return false
	}
	if (!stats.isFile()) return
	return resolve_path_txt
}
export {
	resolve_md_file_path_txt_ as _resolve_md_file_path_txt,
	resolve_md_file_path_txt_ as _txt__file_path__md__resolve,
}
