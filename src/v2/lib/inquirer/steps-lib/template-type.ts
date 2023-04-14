import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getTemplateTypeStepChoices = (): InputQuestion => {
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

const TemplateTypeStepConfig: InquirerStepPartialConfig = {
  name: 'templateType',
  message: 'Which template type do you want to use?',
  type: 'list',
};

export const templateTypeStep = (): InquirerStepConfig => {
  return {
    ...TemplateTypeStepConfig,
    choices: getTemplateTypeStepChoices(),
  };
};
