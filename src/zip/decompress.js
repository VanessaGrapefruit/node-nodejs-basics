import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

const decompress = async () => {
    const target = createWriteStream('files/fileToCompress.txt');
	const origin = createReadStream('files/archive.gz');
	const gzip = createUnzip();

	origin.pipe(gzip).pipe(target);
};

await decompress();