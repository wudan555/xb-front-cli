#!/usr/bin/env node
/*
    #! shebang 脚本语言，后面可以指定一个相对路径，用于指明当前这个脚本文件的解释器。
    在这里指明后面的代码使用node为解释器执行后面的代码

*/
const program = require("commander");
const help = require("./lib/core/help.js");
const create = require("./lib/core/create.js");

// 版本号
program.version(require("./package.json").version, "-v --version"); // version默认是存在的

// 帮助和可选信息
help.helpOptions(program);
create.createCommands(program);

program.parse(process.argv);
// console.log(program.opts().dest);
