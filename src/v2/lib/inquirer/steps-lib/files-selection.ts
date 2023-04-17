import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types.js';
import { getExtensionsConfig } from '../../processor/files.js';

const getFilesSelectionStepChoices = (props: {
  templateEngine: string;
}): InputQuestion => {
  const extensionsList = getExtensionsConfig(props.templateEngine);

  // looping through the extensionsConfig object and returning an array of objects
  const items = Object.values(extensionsList).map((extension: any) => {
    return {
      name: extension.label,
      value: extension.type,
      checked: extension.defaultEnabled,
    };
  });

  return items;
};

const filesSelectionStepConfig: InquirerStepPartialConfig = {
  name: 'filesTypes',
  message: 'Which files types do you want to generate?',
  type: 'checkbox',
  validate: (answer: any) => {
    if (answer.length < 1) {
      return 'You must choose at least one file type.';
    }
    return true;
  }
};

export const fileSelectionStep = (props: any): InquirerStepConfig => {
  return {
    ...filesSelectionStepConfig,
    choices: getFilesSelectionStepChoices(props.engineType),
  };
};
