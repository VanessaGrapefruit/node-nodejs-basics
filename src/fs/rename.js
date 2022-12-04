import { existsSync, rename as fsRename } from "fs";

const rename = async () => {
    const originFile = 'files/wrongFilename.txt';
	const targetFile = 'files/properFilename.md';

	if (!existsSync(originFile) || existsSync(targetFile)) {
		throw new Error('FS operation failed');
	}

	fsRename(originFile, targetFile, () => {});
};

await rename();