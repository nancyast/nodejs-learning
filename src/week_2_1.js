const chalk = require('chalk');
const readline = require('readline');

const prompt = question => {
  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  return new Promise(function(resolve) {
    read.question(question, function(answer) {
      read.close();
      resolve(answer);
    });
  });
};

const main = () => {
  const questions = [`What's your name?`, `What's your year of birth?`, `What's your home town?`];

  prompt(questions[0] + ' ').then(name => {
    prompt(questions[1] + ' ').then(birthday => {
      prompt(questions[2] + ' ').then(hometown => {
        const date = new Date();
        const greet = `Thank you. Hello ${chalk.red(name)}, so you are ${chalk.yellow(
          date.getFullYear() - Number(birthday),
        )} years old and from ${chalk.green(hometown)}`;
        console.log(greet);
      });
    });
  });
};

main();
