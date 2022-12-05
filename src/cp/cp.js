import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
	const cp = fork('./files/script.js', args, { stdio: 'pipe' });

	process.stdin.on('data', (data) => {
		process.stdout.write(`send to child process: ${data.toString()}`);
		cp.stdin.write(data);
	});
	cp.stdout.on('data', (data) => {
		process.stdout.write(`recieve from child process: ${data.toString()}`);
		process.stdout.write(data);
	});
};

spawnChildProcess();