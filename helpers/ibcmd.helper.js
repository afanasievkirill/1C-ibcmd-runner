import { getWorkDirectory } from '../services/storage.service.js';
import { setCfPath, setDbms, setDbname, setDbPwd, setDbUser, setServer, setCfePath } from './set-args.helper.js';

const getLoadLine = async (args) => {

	return [
		"infobase",
		"config",
		"import",
		`--data=${await getWorkDirectory()}`,
		"--dbms",
		`${setDbms(args)}`,
		"--db-server",
		`${setServer(args)}`,
		"--db-name",
		`${setDbname(args)}`,
		"--db-user",
		`${setDbUser(args)}`,
		"--db-pwd",
		`${setDbPwd(args)}`,
		`${setCfPath(args)}`
	];
}

const getUpdateLine = async (args) => {
	return [
		"infobase",
		"config",
		"apply",
		`--data=${await getWorkDirectory()}`,
		"--dbms",
		`${setDbms(args)}`,
		"--db-server",
		`${setServer(args)}`,
		"--db-name",
		`${setDbname(args)}`,
		"--db-user",
		`${setDbUser(args)}`,
		"--db-pwd",
		`${setDbPwd(args)}`,

	]
}

const getLoadExtLine = async (args) => {
	return [
		"infobase",
		"config",
		"load",
		`--data=${await getWorkDirectory()}`,
		"--dbms",
		`${setDbms(args)}`,
		"--db-server",
		`${setServer(args)}`,
		"--db-name",
		`${setDbname(args)}`,
		"--db-user",
		`${setDbUser(args)}`,
		"--db-pwd",
		`${setDbPwd(args)}`,
		`--extension=${setCfeName(args)}`,
		`${setCfePath(args)}`
	]
}

export { getLoadLine, getUpdateLine, getLoadExtLine }