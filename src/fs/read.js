import { existsSync, readFile } from "fs";

const read = async () => {
    const file = 'files/fileToRead.txt';

	if (!existsSync(file)) {
		throw new Error('FS operation failed');
	}

	readFile(file, null, (_, data) => {
		console.log(data.toString());
	})
};

await read();