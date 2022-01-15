import { run } from './services/ibcmd.service.js'
import { getArgs } from './helpers/args.helper.js';
import { printHelp, printArgs } from './services/log.service.js';
import { setParams } from './helpers/storage.helper.js';
import { getAllValue } from './services/storage.service.js';
import { getCmd } from './helpers/ibcmd.helper.js';

const initCli = async () => {
	const args = getArgs(process.argv);
	if (args) {
		await setParams(args);
	};
	if (args.help) {
		return printHelp();
	};
	if (args.param) {
		const data = await getAllValue();
		return printArgs(data);
	};
	if (args.load) {
		const data = await getAllValue();
		const line = getCmd(data);
		if (line) {
			return run(data.user, data.password, line);
		};
	};
}

initCli();