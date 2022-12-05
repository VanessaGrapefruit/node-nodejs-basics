import { sep } from 'path'
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http'
import { dirname } from 'path';
import aJson from './files/a.json' assert { type: 'json' };
import bJson from './files/b.json' assert { type: 'json' };
import './files/c.js';
import { fileURLToPath } from 'url';

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = aJson;
} else {
    unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const __filename = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${dirname(__filename)}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

