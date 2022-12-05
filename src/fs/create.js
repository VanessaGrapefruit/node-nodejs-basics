import { existsSync, writeFile } from 'fs';

const create = async () => {
    const path = 'files/fresh.txt';
	if (existsSync(path)) {
		throw new Error('FS operation failed');
	}

	writeFile(path, 'I am fresh and young', () => {

	});
};

await create();