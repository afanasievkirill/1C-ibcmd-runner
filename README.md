# 1C-ibcmd-runner
Библиотека взаимодействия с Автономным сервером 1С.

<a id="markdown-описание" name="описание"></a>
## Описание

Библиотека упрощает взаимодействие с CLI Автономного сервера 1С и решает проблему Интерактивного ввода логина и пароля информационной базы 1С. Подробнее о проблеме можно прочитать в комментариях к статье по ссылке [Infostart](https://infostart.ru/1c/articles/1168516/).

<a id="markdown-установка" name="установка"></a>
## Установка

```
$ npm install -g 1c-ibcmd-runner
```
или

```
$ yarn add -g 1c-ibcmd-runner
```

<a id="markdown-настройка" name="настройка"></a>

Пример файла с переменными.

```cmd
{
	"cfpath": "путь к папке с файлами исходниками конфигурации в формате XML.",
	"cfepath": "путь к папке с файлами исходниками расширения в формате XML.",
	"dbms": "тип СУБД",
	"server": "адрес сервера",
	"dbname": "имя базы в СУБД",
	"dbuser": "пользователь СУБД",
	"dbpwd": "пароль пользователя СУБД",
	"name": "имя базы в кластере 1С",
	"user": "имя пользователя 1С",
	"password": "пароль пользователя 1С",
	"cfename": "имя расширения"
}
```

Библиотека поддерживает 2 режима работы:
1. Хранение переменных в файле пользователя. Для операционной системы Windows путь будет равен C:\users\user-name\ibcmd-runner-data.json
2. Передача пути к файлу с переменными

<a id="markdown-использование" name="использование"></a>

## Использование

Ключ `-help` выведет справку по параметрам.

```cmd
1c-cli -help
```