import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getTemplateTypeStepChoices = (): InputQuestion => {
  // that's a function for using dynamic values in the future
  return [
    {
      name: 'Lite (clean)',
      value: 'lite',
    },
    {
      name: 'Regular (useState)',
      value: 'regular',
    },
    {
      name: 'Extended (not available yet)',
      value: 'extended',
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
