import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
    const origin = createReadStream('files/fileToCompress.txt');
	const target = createWriteStream('files/archive.gz');
	const gzip = createGzip();

	origin.pipe(gzip).pipe(target);
};

await compress();