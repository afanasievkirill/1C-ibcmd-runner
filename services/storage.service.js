import { homedir } from 'os';
import { join } from 'path';
import { promises, rmdir } from 'fs';
import { YAXUNIT_CONFIG } from '../constants/yaxunit.constants.js';

const filePath = join(homedir(), 'ibcmd-runner-data.json');
const wortDirPath = join(homedir(), './ibcmd_work_directory');
const yaxunitFilePath = join(homedir(), 'yaxunit-conf.json');

const getMostRecentFile = (dir) => {
	const files = orderReccentFiles(dir);
	return files.file ? files[0].file : undefined;
};

const orderReccentFiles = (dir) => {
	return fs
		.readdirSync(dir)
		.filter((file) => fs.lstatSync(path.join(dir, file)).isFile())
		.map((file) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))
		.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
};

const saveKeyValue = async (key, value) => {
	let data = {};
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
};

const saveYaxunitConfigFile = async () => {
	const data = await YAXUNIT_CONFIG();
	console.log(data);
	await promises.writeFile(yaxunitFilePath, JSON.stringify(data));
};

const getWorkDirectory = async () => {
	if (!isExist(wortDirPath)) {
		await promises.mkdir(wortDirPath);
	}
	return wortDirPath;
};

const getKeyValue = async (key) => {
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file);
		return data[key];
	}
	return undefined;
};

const getAllValue = async () => {
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file);
		return data;
	}
	return undefined;
};

const isExist = async (path) => {
	try {
		await promises.stat(path);
		return true;
	} catch (e) {
		return false;
	}
};

export {
	saveKeyValue,
	getKeyValue,
	getAllValue,
	getWorkDirectory,
	getMostRecentFile,
	saveYaxunitConfigFile,
	yaxunitFilePath,
};
