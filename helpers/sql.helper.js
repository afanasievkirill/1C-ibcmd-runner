import { setServer, setDbUser, setDbname } from './set-args.helper.js';

const getSqlBackupLine = (args) => {
	return [
		'-S',
		`${setServer(args)}`,
		'- U',
		`${setDbUser(args)}`,
		' - Q',
		'"BACKUP',
		' DATABASE',
		`[${setDbname}]`,
		' TO',
		' DISK',
		' = ',
		`N'/var/opt/mssql/data/demodb.bak'`,
		'WITH',
		' NOFORMAT,',
		' NOINIT,',
		' NAME',
		' = ',
		"'demodb-full',",
		'SKIP,',
		' NOREWIND,',
		' NOUNLOAD,',
		'STATS',
		' =  ',
		'10"',
	];
};

const getSqlRestoreLine = (args) => {
	return [
		'-S',
		`${setServer(args)}`,
		'- U',
		`${setDbUser(args)}`,
		' - Q',
		'"RESTORE',
		' DATABASE',
		`[${setDbname}]`,
		' TO',
		' DISK',
		' = ',
		`N'/var/opt/mssql/data/demodb.bak'`,
		'WITH',
		' NOFORMAT,',
		' NOINIT,',
		' NAME',
		' = ',
		"'demodb-full',",
		'SKIP,',
		' NOREWIND,',
		' NOUNLOAD,',
		'STATS',
		' =  ',
		'10"',
	];
};

export { getSqlBackupLine, getSqlRestoreLine };
