import { getWorkDirectory } from '../services/storage.service.js';
import { setCfPath, setDbms, setDbname, setDbPwd, setDbUser, setServer } from './set-args.helper.js';

export const getCmd = (args) => {

	return [
		"infobase",
		"config",
		"import",
		`--data=${getWorkDirectory}`,
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