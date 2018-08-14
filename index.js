#!/usr/bin/env node
const program = require('commander');
// 从Github上拉模板文件
const download = require('download-git-repo');

program.version('1.0.0', '-v, --version')
    .command('init <name>')
    .action((name) => {
        console.log(name);
        download('http://xxxxxx:9999:HTML5/H5Template#master', name, {clone: true}, (err) => {
            console.log(err ? 'Error' : 'Success')
        })
    });


program.parse(process.argv);