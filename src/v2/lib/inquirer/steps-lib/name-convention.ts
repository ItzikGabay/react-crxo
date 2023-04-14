import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getNameConventionChoices = (): InputQuestion => {
  // that's a function for using dynamic values in the future
  return [
    {
      name: 'Choice 1',
      value: 'choice1',
    },
    {
      name: 'Choice 2',
      value: 'choice2',
      disabled: true,
    },
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
