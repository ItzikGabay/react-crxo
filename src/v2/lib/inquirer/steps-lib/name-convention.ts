import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getNameConventionChoices = (): InputQuestion => {
  // that's a function for using dynamic values in the future
  return [
    {
      name: 'camelCase',
      value: 'camel_case',
    },
    {
      name: 'PascalCase',
      value: 'pascal_case',
    },
    {
      name: 'kebab-case',
      value: 'kebab_case',
    }
  ];
};

const nameConventionConfig: InquirerStepPartialConfig = {
  name: 'nameConvention',
  message: 'Which name convention do you want to use?',
  type: 'list',
};

export const nameConventionStep = (): InquirerStepConfig => {
  return {
    ...nameConventionConfig,
    choices: getNameConventionChoices(),
  };
};
