import { existsSync, readdir, statSync } from "fs";

const list = async () => {
    const path = 'files';

	if (!existsSync(path)) {
		throw new Error('FS operation failed');
	}

	readdir(path, (err, files) => {
		console.log(files);
	})
};

await list();