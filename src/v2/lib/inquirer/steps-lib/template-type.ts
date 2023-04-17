import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getTemplateTypeStepChoices = (): InputQuestion => {
  // that's a function for using dynamic values in the future
  return [
    {
      name: 'Lite',
      value: 'lite',
    },
    {
      name: 'Regular',
      value: 'regular',
    },
    {
      name: 'Extended',
      value: 'extended',
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
