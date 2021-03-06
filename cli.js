#!/usr/bin/env node
import { run } from './services/ibcmd.service.js'
import { getArgs } from './helpers/args.helper.js';
import { printHelp, printArgs, printVersion } from './services/log.service.js';
import { setParams } from './helpers/storage.helper.js';
import { getAllValue } from './services/storage.service.js';
import { getLoadLine, getUpdateLine, getLoadExtLine, getUpdateExtLine } from './helpers/ibcmd.helper.js';

const initCli = async () => {
	const args = getArgs(process.argv);
	if (args) {
		await setParams(args);
	};
	if (args.help) {
		return printHelp();
	};
	if (args.version) {
		return printVersion();
	}
	const data = await getAllValue();
	if (args.param) {
		const data = await getAllValue();
		return printArgs(data);
	};
	if (args.load) {
		const line = await getLoadLine(data);
		if (line) {
			return run(data.user, data.password, line);
		};
	};
	if (args.update) {
		const line = await getUpdateLine(data);
		if (line) {
			return run(data.user, data.password, line);
		};
	};
	if (args.loadext) {
		const line = await getLoadExtLine(data);
		console.log(line)
		if (line) {
			return run(data.user, data.password, line);
		};
	};
	if (args.updateext) {
		const line = await getUpdateExtLine(data);
		console.log(line)
		if (line) {
			return run(data.user, data.password, line);
		};
	};
}

initCli();