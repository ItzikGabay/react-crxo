import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getStepTemplateChoices = (): InputQuestion => {
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

const stepTemplateConfig: InquirerStepPartialConfig = {
  name: 'stepTemplate',
  message: 'This is a step template',
  type: 'list',
};

export const templateStep = (): InquirerStepConfig => {
  return {
    ...stepTemplateConfig,
    choices: getStepTemplateChoices(),
  };
};

// TODO: Think about how to make this more dynamic in the future:
// Maybe a function that returns an the end result object
// or even a to use class instead with extending base templating or injected-with-data templates classes
