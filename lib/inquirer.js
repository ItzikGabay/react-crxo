import inquirer from 'inquirer';

const main = () => {
  return inquirer.prompt([
    {
      name: 'userInputComponentName',
      message: 'What is the component name (e.g exampleComponent) 💼 :',
      validate: input => {
        return /^[a-zA-Z0-9-]*$/.test(input);
      },
    },
    {
      type: 'checkbox',
      name: 'filesCreationSelect',
      message: 'Which files to create?',
      choices: [
        { name: 'Folder', checked: true },
        { name: 'index', checked: false },
        { name: 'JS', checked: false },
        { name: 'JSX', checked: true },
        { name: 'CSS', checked: true },
      ],
    },
    {
      type: 'list',
      name: 'componentSize',
      message: 'Which file do you want to create?',
      choices: [
        '(Enabled) Choost the lite template (no state, no props)',
        {
          name: 'Choost the simple template (state, props) - soon',
          disabled: true,
        },
        {
          name: 'Choost the simple template (effects, classes) - SOON',
          disabled: true,
        },
        {
          name: 'Add a button - SOON',
          disabled: true,
        },
        {
          name: 'Add an input - SOON',
          disabled: true,
        },
        {
          name: 'Add a text - SOON',
          disabled: true,
        },
      ],
    },
  ]);
};

export default main;
