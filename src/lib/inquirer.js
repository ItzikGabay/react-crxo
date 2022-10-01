import inquirer from 'inquirer';
import appConfig from './config.js';
import { getDefaultFilesTypesOptions, validateInputValue } from './utils.js';

export const componentPrompt = () => {
  return inquirer.prompt([
    {
      name: 'inputComponentName',
      message: 'The new component name? 💼 :',
      validate: input => validateInputValue(input),
    },
    {
      type: 'checkbox',
      name: 'generateFileTypes',
      message: 'Which files types to generate?',
      choices: getDefaultFilesTypesOptions(),
    },
    {
      type: 'list',
      name: 'componentTemplate',
      message: 'Which template?',
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
    {
      type: 'list',
      name: 'nameConvention',
      message: 'Which convention?',
      choices: [
        {
          name: 'ComponentName (default)',
          default: true,
        },
        {
          name: 'componentName',
          disabled: true,
        },
        {
          name: 'component-name',
          disabled: true,
        },
      ],
    },
  ]);
};
