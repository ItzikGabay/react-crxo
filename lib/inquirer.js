import inquirer from 'inquirer';
import appConfig from './config.js';
import {
  getDefaultFilesTypesOptions,
  validateInputValue,
} from './utils/index.js';

export const getComponentConfiguration = () => {
  return inquirer.prompt([
    {
      name: 'userInputComponentName',
      message: 'What is the component name (e.g exampleComponent) 💼 :',
      validate: input => validateInputValue(input),
    },
    {
      type: 'checkbox',
      name: 'filterToCreateSelection',
      message: 'Which files to create?',
      choices: getDefaultFilesTypesOptions(),
    },
    {
      type: 'list',
      name: 'componentTemplate',
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
