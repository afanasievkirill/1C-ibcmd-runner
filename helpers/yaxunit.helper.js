import {
	setOnecUser,
	setOnecPassword,
	setOnecServer,
	setOnecBase,
	setYaxunitFilePath,
} from './set-args.helper.js';

const getYaxUnitLine = async (args) => {
	return [
		`/N"${setOnecUser(args)}"`,
		`/P"${setOnecPassword(args)}"`,
		`/IBConnectionString``"${setOnecServer(args)}"";Ref=""${setOnecBase(args)}"";"`,
		`/C"RunUnitTests=${setYaxunitFilePath()}"`,
	];
};

export { getYaxUnitLine };
