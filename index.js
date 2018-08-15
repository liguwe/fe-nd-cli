#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const config = require('./config');

const downloadFromGithub = require('./lib/downloadFromGithub');

// 显示帮助信息
program.version(require('./package.json').version, '-v, --version')
    .description('newsdog 前端脚手架')
    .option('-n, --name <name>', 'your name', 'GK')
    .option('-a, --age <age>', 'your age', '22')
    .option('-e, --enjoy [enjoy]');

// 新建项目
program.command('new <name>')
    .description('新建项目')
    .option('-b,--branch <branch>', '选择拉去的分支')
    .action(function (name, options) {
        downloadFromGithub(name, options.branch || 'master')
    });


/**
 * 生成React component 或者 生成 Umi Page &  models & services
 * */
program.command('generate <type> [directory...]')
    .alias('g')
    .description('新建项目')
    .option('-p,--path <path>', '生成的内容存放的位置')
    .action(function (type, directory, options) {
        switch (type) {
            case 'com':
            case 'component':
                break;
            case 'page':
                break;
            case 'models':
                break;
            case 'serviser':
                break;
        }
        console.log(type, directory)
    });

// nd server
program.command('server')
    .description('启动开发服务器')
    .option('-p,--path <path>', '生成的内容存放的位置')
    .action(function (type, directory, options) {
        // 读取模板库的package.json文件，确定是启动umi server 还是 egg-script
        console.log(type, directory)
    });

// nd build
program.command('build <type> [directory...]')
    .description('umi打包')
    .option('-p,--path <path>', '生成的内容存放的位置')
    .action(function (type, directory, options) {
        console.log(type, directory)
    });


program.parse(process.argv);