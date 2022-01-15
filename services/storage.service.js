import { homedir } from 'os';
import { join } from 'path';
import { promises, rmdir } from 'fs';

const filePath = join(homedir(), 'ibcmd-runner-data.json');
const wortDirPath = join(homedir(), './ibcmd_work_directory')

const saveKeyValue = async (key, value) => {
	let data = {};
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
};

const getWorkDirectory = async () => {
	if (await !isExist(wortDirPath)) {
		await promises.mkdir(wortDirPath);
	} else {
		await promises.rmdir(wortDirPath);
		await promises.mkdir(wortDirPath);
	}
	return wortDirPath;
}

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
		return data
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

export { saveKeyValue, getKeyValue, getAllValue, getWorkDirectory };