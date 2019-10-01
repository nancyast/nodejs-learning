const prompts = require('prompts');
const chalk = require('chalk');

(async function() {
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

  const answers = await prompts(questions);
  const date = new Date();
  const greet = `Thank you. Hello ${chalk.red(answers.name)}, so you are ${chalk.yellow(
    date.getFullYear() - answers.birthday,
  )} years old and from ${chalk.green(answers.hometown)}`;
  console.log(greet);
})();
