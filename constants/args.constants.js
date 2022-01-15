const ARGS_KEY = {
	cfpath: 'cfpath',
	cfepath: 'cfepath',
	dbms: 'dbms',
	server: 'server',
	dbname: 'dbname',
	dbuser: 'dbuser',
	dbpwd: 'dbpwd',
	name: 'name',
	user: 'user',
	password: 'password'
};

const ARGS_SUCCESS = {
	cfpath: 'Путь к исходникам конфигурации сохранен!',
	cfepath: 'Путь к исходникам расширения сохранен!',
	dbms: 'Тип базы данных сохранен!',
	server: 'Адрес сервера сохранен!',
	dbname: 'Имя базы данных сохранено!',
	dbuser: 'Имя пользователя базы данных сохранено!',
	dbpwd: 'Пароль пользователя базы данных сохранен!',
	name: 'Имя базы 1C сохранено!',
	user: 'Имя пользователя 1С сохранено!',
	password: 'Пароль пользователя 1С сохранен!'
};

const ARGS_ERROR = {
	cfpath: 'Не передан Путь к исходниках конфигурации. Необходимо передать -cfpath C:/|//путь/к/исходникам/конфигурации/cf/ !!!',
	cfepath: 'Не передан Путь к исходникам расширения. Необходимо передать -cfepath C:/|//путь/к/исходникам/конфигурации/cf/ !!!',
	dbms: 'Не передан Тип базы данных. Необходимо передать -dbms MSSQLServer|PostgreSQL !!!',
	dbtype: 'He верно указан тип базы данных. Необходимо передать либо MSSQLServer либо PostgreSQL !!!',
	server: 'Не передан Адрес сервера базы данных. Необходимо передать -server адрес\\сервера !!!',
	dbname: 'Не передано Имя базы данных. Необходимо передать -dbname base_name !!!',
	dbuser: 'Не передано Имя пользователя базы данных. Необходимо передать -dbuser sa !!!',
	dbpwd: 'Не передан Пароль пользователя базы данных. Необходимо передать -dbpwd qwerty !!!',
	name: 'Не передано Имя базы 1C. Необходимо передать -name ERP_BASE !!!',
	user: 'Не передано Имя пользователя 1С. Необходимо передать -user Администратор !!!',
	password: 'Не передан Пароль пользователя 1С. Необходимо передать -password 123 !!!'

};

const DB_TYPE = {
	MSSQLServer: 'MSSQLServer',
	PostgreSQL: 'PostgreSQL'
};

export { ARGS_KEY, ARGS_SUCCESS, ARGS_ERROR, DB_TYPE };