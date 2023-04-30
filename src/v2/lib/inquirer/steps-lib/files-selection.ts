import { InputQuestion } from 'inquirer';
import {InquirerFileType, InquirerOutput, InquirerStepConfig, InquirerStepPartialConfig} from '../types.js';
import { getExtensionsConfig } from '../../processor/files.js';

interface Extension {
    name: string;
    value: InquirerFileType;
    checked: boolean;
}

const getFilesSelectionStepChoices = (engine: {
  templateEngine: string;
}): InputQuestion => {
  const extensionsList = getExtensionsConfig({engine});

  // looping through the extensionsConfig object and returning an array of objects
  return Object.values(extensionsList).map((extension: InquirerFileType): Extension => {
    return {
      name: extension.label,
      value: extension,
      checked: extension.defaultEnabled,
    };
  });
};

const filesSelectionStepConfig: InquirerStepPartialConfig = {
  name: 'filesTypes',
  message: 'Which files types do you want to generate?',
  type: 'checkbox',
  validate: (answer: string) => {
    if (answer.length < 1) {
      return 'You must choose at least one file type.';
    }
    return true;
  }
};

export const fileSelectionStep = (props: any): InquirerStepConfig => {
  return {
    ...filesSelectionStepConfig,
    choices: getFilesSelectionStepChoices(props.templateEngine),
  };
};
