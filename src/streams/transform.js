import { Transform } from 'stream';

class Reverse extends Transform {
	_transform(chunk, options, callback) {
		this.push(chunk.reverse());
		callback();
	}
}

const transform = async () => {
    const reverse = new Reverse();
	process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();