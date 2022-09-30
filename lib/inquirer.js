import inquirer from 'inquirer';
import appConfig from './config.js';

export const getComponentConfiguration = () => {
  return inquirer.prompt([
    {
      name: 'userInputComponentName',
      message: 'What is the component name (e.g exampleComponent) 💼 :',
      validate: input => {
        return /^[a-zA-Z0-9-]*$/.test(input) && input.length > 1;
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
        {
          name: 'scss',
          checked: appConfig.interactive.defaultOptions.includes('scss'),
        },
      ],
    },
    {
      type: 'list',
      name: 'componentSize',
      message: 'Which file do you want to create?',
      choices: [
        'Lite template (no state, no props) - (Enabled) 🚀',
        {
          name: 'Regular template (state, props) - SOON',
          disabled: true,
        },
        {
          name: 'Large template (effects, classes) - SOON',
          disabled: true,
        },
        {
          name: 'button - SOON',
          disabled: true,
        },
        {
          name: 'input - SOON',
          disabled: true,
        },
        {
          name: 'text - SOON',
          disabled: true,
        },
      ],
    },
  ]);
};
