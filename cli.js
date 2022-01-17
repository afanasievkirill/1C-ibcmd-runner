#!/usr/bin/env node
import { run } from './services/ibcmd.service.js'
import { getArgs } from './helpers/args.helper.js';
import { printHelp, printArgs, printVersion } from './services/log.service.js';
import { setParams } from './helpers/storage.helper.js';
import { getAllValue } from './services/storage.service.js';
import { getCmd } from './helpers/ibcmd.helper.js';

const initCli = () => {
	const args = getArgs(process.argv);
	if (args) {
		setParams(args);
	};
	if (args.help) {
		return printHelp();
	};
	if (args.version) {
		return printVersion();
	}
	if (args.param) {
		const data = getAllValue();
		return printArgs(data);
	};
	if (args.load) {
		const data = getAllValue();
		const line = getCmd(data);
		if (line) {
			return run(data.user, data.password, line);
		};
	};
}

initCli();