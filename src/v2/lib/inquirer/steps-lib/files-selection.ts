import { InputQuestion } from 'inquirer';
import { InquirerStepConfig, InquirerStepPartialConfig } from '../types.js';
import { getExtensionsConfig } from '../../processor/files.js';

const getFilesSelectionStepChoices = (props: {
  templateEngine: string;
}): InputQuestion => {
  const isTypescript = props.templateEngine === 'ts';
  const extensionsList = getExtensionsConfig(props.templateEngine);

  // looping through the extensionsConfig object and returning an array of objects
  return Object.values(extensionsList).map((extension: any) => {
    return {
      name: extension.label,
      value: extension.type,
    };
  });
};

const filesSelectionStepConfig: InquirerStepPartialConfig = {
  name: 'filesTypes',
  message: 'Which files types do you want to generate?',
  type: 'checkbox',
};

export const fileSelectionStep = (props: any): InquirerStepConfig => {
  return {
    ...filesSelectionStepConfig,
    choices: getFilesSelectionStepChoices(props.engineType),
  };
};
