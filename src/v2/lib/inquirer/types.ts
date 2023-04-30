import { InputQuestion } from 'inquirer';

export interface InquirerStepPartialConfig {
  name: string;
  message: string;
  type: string;
  validate?: (answer: string) => boolean | string;
}

export interface InquirerStepConfig extends InquirerStepPartialConfig {
  choices: InputQuestion;
}

export interface InquirerOutput {
  componentName: string;
  filesTypes: InquirerFileType[];
  templateType: string;
  outputDirectory: string;
  templateEngine?: string;
}

export interface InquirerFileType {
  type: string;
  label: string;
  defaultEnabled: boolean;
  endingWithEngineType: boolean;
  hasComponentName: boolean;
  extension: string;

}

