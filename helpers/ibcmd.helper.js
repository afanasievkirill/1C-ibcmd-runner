import { printError } from '../services/log.service.js';
import { ARGS_ERROR, DB_TYPE } from '../constants/args.constants.js';
import { getWorkDirectory } from '../services/storage.service.js';

export const getCmd = (args) => {

	if (!args.dbms) {
		return printError(ARGS_ERROR.dbms)
	};
	if (args.dbms != DB_TYPE.MSSQLServer && args.dbms != DB_TYPE.PostgreSQL) {
		return printError(ARGS_ERROR.dbtype)
	};
	if (!args.server) {
		return printError(ARGS_ERROR.server)
	};
	if (!args.dbuser) {
		return printError(ARGS_ERROR.dbuser)
	}
	if (!args.dbpwd) {
		return printError(ARGS_ERROR.dbpwd)
	}
	return [
		"infobase",
		"config",
		"import",
		`--data=${getWorkDirectory}`,
		"--dbms",
		`${args.dbms}`,
		"--db-server",
		`${args.server}`,
		"--db-name",
		`${args.dbname}`,
		"--db-user",
		`${args.dbuser}`,
		"--db-pwd",
		`${args.dbpwd}`,
		`${args.cfpath}`
	];
}