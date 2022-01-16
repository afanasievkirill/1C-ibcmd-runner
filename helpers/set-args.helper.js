const setDbms = (args) => {
	if (!args.dbms) {
		return printError(ARGS_ERROR.dbms);
	};
	if (args.dbms != DB_TYPE.MSSQLServer && args.dbms != DB_TYPE.PostgreSQL) {
		return printError(ARGS_ERROR.dbtype);
	};
	return args.dbms
}

const setServer = (args) => {
	if (!args.server) {
		return printError(ARGS_ERROR.server);
	} else {
		return args.server;
	};
}

const setDbname = (args) => {
	if (!args.dbname) {
		return printError(ARGS_ERROR.dbname);
	} else {
		return args.dbname;
	};
}

const setDbUser = (args) => {
	if (!args.dbuser) {
		return printError(ARGS_ERROR.dbuser);
	} else {
		return args.dbuser;
	}
}

const setDbPwd = (args) => {
	if (!args.dbpwd) {
		return printError(ARGS_ERROR.dbpwd);
	} else {
		return args.dbpwd;
	}
}

const setCfPath = (args) => {
	if (!args.cfpath) {
		return printError(ARGS_ERROR.cfpath);
	} else {
		return args.cfpath;
	}
}

export { setDbms, setServer, setDbUser, setDbPwd, setDbname, setCfPath }