import { InquirerStepPartialConfig } from '../types';

const componentNameStepConfig: InquirerStepPartialConfig = {
  name: 'componentName',
  message: 'What is the name of the component?',
  type: 'input',
  validate: (answer: string) => {
    if (answer.length < 1) {
      return 'You must enter a name.';
    }
    return true;
  }
};

export const componentNameStep = (): InquirerStepPartialConfig => {
  return {
    ...componentNameStepConfig,
  };
};
