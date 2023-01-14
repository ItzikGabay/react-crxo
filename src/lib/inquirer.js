import inquirer from 'inquirer';
import { getDefaultFilesTypesOptions } from './utils.js';
import { validateInputValue } from './validation.js';

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
          value: 'lite',
          default: true,
        },
        {
          name: 'Regular template (state, useEffect)',
          value: 'regular',
          disabled: false,
        },
        {
          name: 'Large template (regular + getServerSideProps, more)',
          value: 'large',
          disabled: true,
        },
        {
          name: 'button',
          value: 'button',
          disabled: true,
        },
        {
          name: 'input',
          value: 'input',
          disabled: true,
        },
        {
          name: 'text',
          value: 'text',
          disabled: true,
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
          value: 'default',
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
