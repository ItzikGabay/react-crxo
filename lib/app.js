#! /usr/bin/env node

import utils, {
  getProcessArguments,
  validateArguments,
} from './utils/index.js';
import language from './utils/language.js';
import appConfig from './config.js';
import { getComponentConfiguration } from './inquirer.js';

const init = () => {
  const output = getProcessArguments();
  const isValidArguments = validateArguments(output);

  if (!isValidArguments.isValid) {
    return console.log(isValidArguments.error);
  }

  const { mode, path, name, processArguments } = output;

  const isInteractiveMode = mode === '--interactive' || mode === '--i';
  const isSilentMode = mode === 'create' || mode === '-c';
  const outputFilesList = appConfig.interactive.options;

  if (isSilentMode && processArguments && !isInteractiveMode) {
    if (mode !== '-c' && mode !== 'create') {
      return console.log(language.INVALID_USAGE_ERR);
    }

    if (name.includes('--debug')) {
      return console.log('Finishing debug session.');
    }

    processArguments.includes('--js') && outputFilesList.push('JS');
    processArguments.includes('--index') && outputFilesList.push('INDEX');
    processArguments.includes('--small') && outputFilesList.push('small');

    return utils.createFiles(name, path, outputFilesList);
  }

  getComponentConfiguration()
    .then(({ userInputComponentName, filesCreationSelect }) => {
      utils.createFiles(userInputComponentName, '', filesCreationSelect);
    })
    .catch(error => {
      if (error.isTtyError) {
        return console.log(language.ERROR_RENDERING_ERR);
      }
      return console.log(language.SOMETHING_WRONG_ERR);
    });
};

init();
