const chalk = require('chalk');
const readline = require('readline');
// const prompts = require('prompts');

function prompt(question) {
  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  return new Promise(function(resolve, reject) {
    read.question(question, function(answer) {
      read.close();
      resolve(answer);
    });
  });
}

const main = () => {
  const questions = [
    {
      type: 'text',
      name: 'name',
      message: `What's your name?`,
    },
    {
      type: 'number',
      name: 'birthday',
      message: `What's your year of birth?`,
    },
    {
      type: 'text',
      name: 'hometown',
      message: `What's your home town?`,
    },
  ];

  prompt(questions[0].message + ' ').then(name => {
    prompt(questions[1].message + ' ').then(birthday => {
      prompt(questions[2].message + ' ').then(hometown => {
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

// (async function() {
//   const questions = [
//     {
//       type: 'text',
//       name: 'name',
//       message: `What's your name?`,
//     },
//     {
//       type: 'number',
//       name: 'birthday',
//       message: `What's your year of birth?`,
//     },
//     {
//       type: 'text',
//       name: 'hometown',
//       message: `What's your home town?`,
//     },
//   ];

//   const answers = await prompts(questions);
//   const date = new Date();
//   const greet = `Thank you. Hello ${chalk.red(answers.name)}, so you are ${chalk.yellow(
//     date.getFullYear() - answers.birthday,
//   )} years old and from ${chalk.green(answers.hometown)}`;
//   console.log(greet);
// })();
