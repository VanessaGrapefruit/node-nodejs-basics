import { existsSync, readdir, copyFile, mkdirSync, statSync } from "fs";
import { join } from 'path';

const copy = async () => {
	const origin = 'files';
	const target = 'files_copy';

    if (!existsSync(origin) || existsSync(target)) {
		throw new Error('FS operation failed');
	}
	copyDirectory();

	function copyDirectory(fragment = '') {
		const path = join(origin, fragment);
		const stats = statSync(path);
		if (stats.isDirectory()) {
			readdir(path, (err, files) => {
				mkdirSync(join(target, fragment));
				files.forEach(file => copyDirectory(join(fragment, file)));
			});
		} else if (stats.isFile()) {
			copyFile(path, join(target, fragment), () => {});
		}
	}
};

copy();