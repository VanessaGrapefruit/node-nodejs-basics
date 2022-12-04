import { readFile } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    readFile('files/fileToCalculateHashFor.txt', (_, data) => {
		const result = createHash('sha256').update(data.toString()).digest('hex');
		console.log(result);
	})
};

await calculateHash();