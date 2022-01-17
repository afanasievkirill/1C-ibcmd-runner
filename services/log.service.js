import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (data) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + data);
};

const printVersion = () => {
    console.log(chalk.bgGray(' VERSION ') + ' ' + '1.0.1');
};

const printData = (message) => {
    console.log(chalk.bgBlue(' DATA ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
            jobs:
            -help        : Вызов справки.
            -version     : получение версии.
            -param       : Вызов списка текущих параметров.
            -load        : Обновление конфигурации из XML.
            -loadext     : Обновление расширения из XML.
            -update      : Применение изменений конфигурации.
            -updateext   : Применение изменений расширения.
            params:
            -cfpath []   : Путь к исходникам конфигурации.
            -cfepath []  : Путь к исходникам расширения.
            -dbms []     : Тип сервера базы данных.
            -server []   : Адрес сервера.
            -dbname []   : Имя базы данных.
            -dbuser []   : Логин сервера базы данных.
            -dbpwd []    : Пароль сервера базы данных.
            -name []     : Имя базы 1С.
            -user []     : Логин пользователя 1С.
            -password [] : Пароль пользователя 1С.	
            `
    );
};

const printArgs = (args) => {
    console.log(dedent`${chalk.bgCyan(' CURRENT ARGS ')}
    ${JSON.stringify(args, null, 4)}
    `);
};

export { printHelp, printError, printSuccess, printData, printArgs, printVersion }