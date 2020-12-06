#!/usr/bin/env node

const package = require('./package.json');
const { Command } = require('commander');

const [, , ...args] = process.argv;
const program = new Command();
program.version(package.version);

program
  .command('new <project>')
  .description('create a new node-gr project')
  .action((projectName) => require('./commands/new.command')(projectName, package.version));

program.parse(process.argv);
