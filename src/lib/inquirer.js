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
          name: 'Lite template (no state, no props)',
          default: true,
          value: 'lite',
        },
        {
          name: 'Regular template (state, useEffect)',
          disabled: false,
          value: 'regular',
        },
        {
          name: 'Large template (regular + getServerSideProps, more)',
          disabled: true,
          value: 'large',
        },
        {
          name: 'button',
          disabled: true,
          value: 'button',
        },
        {
          name: 'input',
          disabled: true,
          value: 'input',
        },
        {
          name: 'text',
          disabled: true,
          value: 'text',
        },
      ],
    },
  ]);
};
