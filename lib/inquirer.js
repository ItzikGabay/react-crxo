import inquirer from 'inquirer';
import appConfig from './config.js';

export const getComponentConfiguration = () => {
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
      name: 'filterToCreateSelection',
      message: 'Which files to create?',
      choices: [
        {
          name: 'folder',
          checked: appConfig.interactive.defaultOptions.includes('folder'),
        },
        {
          name: 'index',
          checked: appConfig.interactive.defaultOptions.includes('index'),
        },
        {
          name: 'js',
          checked: appConfig.interactive.defaultOptions.includes('js'),
        },
        {
          name: 'jsx',
          checked: appConfig.interactive.defaultOptions.includes('jsx'),
        },
        {
          name: 'css',
          checked: appConfig.interactive.defaultOptions.includes('css'),
        },
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
