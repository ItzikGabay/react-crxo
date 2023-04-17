import { InputQuestion } from 'inquirer';

export interface InquirerStepPartialConfig {
  name: string;
  message: string;
  type: string;
  validate?: (answer: any) => boolean | string;
}

export interface InquirerStepConfig extends InquirerStepPartialConfig {
  choices: InputQuestion;
}
