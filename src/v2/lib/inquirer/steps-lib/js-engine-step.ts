import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types';

const getEngineChoices = (): InputQuestion => {
  return [
    {
      name: 'Typescript',
      value: 'ts',
    },
    {
      name: 'Javascript',
      value: 'js',
    },
  ];
};

const JSEngineConfig: InquirerStepPartialConfig = {
  name: 'templateEngine',
  message: 'Which templating engine do you want to use?',
  type: 'list',
};

export const JsEngineStep = (): InquirerStepConfig => {
  return {
    ...JSEngineConfig,
    choices: getEngineChoices(),
  };
};
