import { ARGS_ERROR, DB_TYPE } from '../constants/args.constants.js';
import { printError } from '../services/log.service.js';

const setDbms = (args) => {
	if (!args.dbms) {
		printError(ARGS_ERROR.dbms);
	};
	if (args.dbms != DB_TYPE.MSSQLServer && args.dbms != DB_TYPE.PostgreSQL) {
		printError(ARGS_ERROR.dbtype);
	};
	return args.dbms
}

const setServer = (args) => {
	if (!args.server) {
		printError(ARGS_ERROR.server);
	} else {
		return args.server;
	};
}

const setDbname = (args) => {
	if (!args.dbname) {
		printError(ARGS_ERROR.dbname);
	} else {
		return args.dbname;
	};
}

const setDbUser = (args) => {
	if (!args.dbuser) {
		printError(ARGS_ERROR.dbuser);
	} else {
		return args.dbuser;
	}
}

const setDbPwd = (args) => {
	if (!args.dbpwd) {
		printError(ARGS_ERROR.dbpwd);
	} else {
		return args.dbpwd;
	}
}

const setCfPath = (args) => {
	if (!args.cfpath) {
		printError(ARGS_ERROR.cfpath);
	} else {
		return args.cfpath;
	}
}

const setCfeName = (args) => {
	if (!args.cfename) {
		printError(ARGS_ERROR.cfename);
	} else {
		return args.cfename;
	}
}

const setCfePath = (args) => {
	if (!args.cfepath) {
		printError(ARGS_ERROR.cfepath);
	} else {
		return args.cfepath;
	}
}

export { setDbms, setServer, setDbUser, setDbPwd, setDbname, setCfPath, setCfeName, setCfePath }