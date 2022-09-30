import inquirer from 'inquirer';
import appConfig from './config.js';
import { getDefaultFilesTypesOptions, validateInputValue } from './utils.js';

export const componentPrompt = () => {
  return inquirer.prompt([
    {
      name: 'inputComponentName',
      message: 'What is the component name (e.g exampleComponent) 💼 :',
      validate: input => validateInputValue(input),
    },
    {
      type: 'checkbox',
      name: 'generateFileTypes',
      message: 'Which files to create?',
      choices: getDefaultFilesTypesOptions(),
    },
    {
      type: 'list',
      name: 'componentTemplate',
      message: 'Which file do you want to create?',
      choices: [
        {
          name: 'Lite template (no state, no props) - (Enabled) 🚀',
          default: true,
          value: 'lite',
        },
        {
          name: 'Regular template (state, props) - SOON',
          disabled: true,
          value: 'regular',
        },
        {
          name: 'Large template (effects, classes) - SOON',
          disabled: true,
          value: 'large',
        },
        {
          name: 'button - SOON',
          disabled: true,
          value: 'button',
        },
        {
          name: 'input - SOON',
          disabled: true,
          value: 'input',
        },
        {
          name: 'text - SOON',
          disabled: true,
          value: 'text',
        },
      ],
    },
  ]);
};
