import { existsSync, unlink } from "fs";

const remove = async () => {
    const file = 'files/fileToRemove.txt';
	if (!existsSync(file)) {
		throw new Error('FS operation failed');
	}

	unlink(file, () => {});
};

await remove();