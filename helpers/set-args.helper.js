import { ARGS_ERROR, DB_TYPE } from '../constants/args.constants.js';
import { printError } from '../services/log.service.js';
import { yaxunitFilePath } from '../services/storage.service.js';

const setDbms = (args) => {
	if (!args.dbms) {
		printError(ARGS_ERROR.dbms);
	}
	if (args.dbms != DB_TYPE.MSSQLServer && args.dbms != DB_TYPE.PostgreSQL) {
		printError(ARGS_ERROR.dbtype);
	}
	return args.dbms;
};

const setServer = (args) => {
	if (!args.server) {
		printError(ARGS_ERROR.server);
		throw new Error();
	} else {
		return args.server;
	}
};

const setDbname = (args) => {
	if (!args.dbname) {
		printError(ARGS_ERROR.dbname);
		throw new Error();
	} else {
		return args.dbname;
	}
};

const setDbUser = (args) => {
	if (!args.dbuser) {
		printError(ARGS_ERROR.dbuser);
		throw new Error();
	} else {
		return args.dbuser;
	}
};

const setDbPwd = (args) => {
	if (!args.dbpwd) {
		printError(ARGS_ERROR.dbpwd);
		throw new Error();
	} else {
		return args.dbpwd;
	}
};

const setCfPath = (args) => {
	if (!args.cfpath) {
		printError(ARGS_ERROR.cfpath);
		throw new Error();
	} else {
		return args.cfpath;
	}
};

const setCfeName = (args) => {
	if (!args.cfename) {
		printError(ARGS_ERROR.cfename);
		throw new Error();
	} else {
		return args.cfename;
	}
};

const setCfePath = (args) => {
	if (!args.cfepath) {
		printError(ARGS_ERROR.cfepath);
		throw new Error();
	} else {
		return args.cfepath;
	}
};

const setSqlBackupPath = (args) => {
	if (!args.sqlbackuppath) {
		printError(ARGS_ERROR.sqlbackuppath);
		throw new Error();
	} else {
		return args.sqlbackuppath;
	}
};

const setYaxunitFilePath = async () => {
	return await yaxunitFilePath;
};

const setPlatformPath = (args) => {
	if (!args.onecpath) {
		printError(ARGS_ERROR.onecpath);
		throw new Error();
	} else {
		return args.onecpath;
	}
};

const setOnecUser = (args) => {
	if (!args.user) {
		printError(ARGS_ERROR.user);
		throw new Error();
	} else {
		return args.name;
	}
};

const setOnecPassword = (args) => {
	if (!args.password) {
		printError(ARGS_ERROR.password);
		throw new Error();
	} else {
		return args.password;
	}
};

const setOnecServer = (args) => {
	if (!args.onecserver) {
		printError(ARGS_ERROR.onecserver);
		throw new Error();
	} else {
		return args.onecserver;
	}
};

const setOnecBase = (args) => {
	if (!args.onecbase) {
		printError(ARGS_ERROR.onecbase);
		throw new Error();
	} else {
		return args.onecbase;
	}
};

export {
	setDbms,
	setServer,
	setDbUser,
	setDbPwd,
	setDbname,
	setCfPath,
	setCfeName,
	setCfePath,
	setSqlBackupPath,
	setYaxunitFilePath,
	setPlatformPath,
	setOnecUser,
	setOnecPassword,
	setOnecServer,
	setOnecBase,
};
