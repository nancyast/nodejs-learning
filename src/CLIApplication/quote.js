#!/usr/bin/env node

const fetch = require('node-fetch');
const chalk = require('chalk');

const url = 'https://quotes.rest/qod';

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(chalk.yellow(data.contents.quotes[0].quote));
  })
  .catch(console.log);

// The first line tells the program loader to parse this file with NodeJS.
// The rest of the file is just normal JavaScript.
// chmode +x Allow executing file as program, change permission of file from -rw-r--r-- to -rwxr-xr-x
// type src/CLIApplication/quote.js to run this file.
