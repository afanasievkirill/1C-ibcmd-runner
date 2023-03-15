import { exec, spawn } from 'child_process';
import { printSuccess, printError, printData } from './log.service.js';

const runUnit = (onecPath, jobParams) => {
	exec('chcp 65001', (error, stdout, stderr) => {
		printSuccess(stdout);
	});

	const ls = spawn(`${onecPath}`, jobParams);

	ls.stdout.on('data', (data) => {
		printData(data.toString());
	});

	ls.stderr.on('data', (data) => {
		printError(data.toString());
	});

	ls.on('error', (error) => {
		printError(error.message);
	});

	ls.on('close', (code) => {
		printSuccess(code);
	});
};

export { runUnit };
