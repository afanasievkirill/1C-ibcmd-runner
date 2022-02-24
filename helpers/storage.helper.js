import { ARGS_ERROR, ARGS_KEY, ARGS_SUCCESS, DB_TYPE } from '../constants/args.constants.js'
import { printError, printSuccess } from '../services/log.service.js'
import { saveKeyValue } from '../services/storage.service.js'

const setParams = async (args) => {
	if (args.cfpath) {
		await setKeyValue(
			ARGS_KEY.cfpath,
			args.cfpath,
			ARGS_SUCCESS.cfpath,
			ARGS_ERROR.cfpath
		);
	};
	if (args.cfepath) {
		await setKeyValue(
			ARGS_KEY.cfepath,
			args.cfepath,
			ARGS_SUCCESS.cfepath,
			ARGS_ERROR.cfepath
		);
	};
	if (args.sqlbackuppath) {
		await setKeyValue(
			ARGS_KEY.sqlbackuppath,
			args.sqlbackuppath,
			ARGS_SUCCESS.sqlbackuppath,
			ARGS_ERROR.sqlbackuppath
		);
	};
	if (args.dbms) {
		await setKeyValue(
			ARGS_KEY.dbms,
			args.dbms,
			ARGS_SUCCESS.dbms,
			ARGS_ERROR.dbms
		);
	};
	if (args.server) {
		await setKeyValue(
			ARGS_KEY.server,
			args.server,
			ARGS_SUCCESS.server,
			ARGS_ERROR.server
		);
	};
	if (args.dbname) {
		await setKeyValue(
			ARGS_KEY.dbname,
			args.dbname,
			ARGS_SUCCESS.dbname,
			ARGS_ERROR.dbname
		);
	};
	if (args.dbuser) {
		await setKeyValue(
			ARGS_KEY.dbuser,
			args.dbuser,
			ARGS_SUCCESS.dbuser,
			ARGS_ERROR.dbuser
		);
	};
	if (args.dbpwd) {
		await setKeyValue(
			ARGS_KEY.dbpwd,
			args.dbpwd,
			ARGS_SUCCESS.dbpwd,
			ARGS_ERROR.dbpwd
		);
	};
	if (args.name) {
		await setKeyValue(
			ARGS_KEY.name,
			args.name,
			ARGS_SUCCESS.name,
			ARGS_ERROR.name
		);
	};
	if (args.user) {
		await setKeyValue(
			ARGS_KEY.user,
			args.user,
			ARGS_SUCCESS.user,
			ARGS_ERROR.user
		);
	};
	if (args.password) {
		await setKeyValue(
			ARGS_KEY.password,
			args.password,
			ARGS_SUCCESS.password,
			ARGS_ERROR.password
		);
	};
	if (args.cfename) {
		await setKeyValue(
			ARGS_KEY.cfename,
			args.cfename,
			ARGS_SUCCESS.cfename,
			ARGS_ERROR.cfename
		);
	};
};

const setKeyValue = async (key, value, success, error) => {
	if (!value.length) {
		printError(error);
	} else {
		await saveKeyValue(key, value);
		printSuccess(success);
	}
};

export { setParams };