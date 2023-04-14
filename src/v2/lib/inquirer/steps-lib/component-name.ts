import { InquirerStepPartialConfig } from '../types';

const componentNameStepConfig: InquirerStepPartialConfig = {
  name: 'componentName',
  message: 'What is the name of the component?',
  type: 'input',
};

export const componentNameStep = (): InquirerStepPartialConfig => {
  return {
    ...componentNameStepConfig,
  };
};
