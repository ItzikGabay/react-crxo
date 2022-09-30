#! /usr/bin/env node

import { getComponentConfiguration } from './lib/inquirer.js';
import {
  getProcessArguments,
  validateArguments,
  createFiles,
} from './lib/utils/index.js';

import language from './lib/language.js';
import appConfig from './lib/config.js';

const init = () => {
  const output = getProcessArguments();
  const isValidArguments = validateArguments(output);

  if (!isValidArguments.isValid) {
    return console.log(isValidArguments.error);
  }

  const { mode, path, name, processArguments } = output;

  const isInteractiveMode = mode === '--interactive' || mode === '--i';
  const isSilentMode = mode === 'create' || mode === '-c';
  const outputFilesList = [...appConfig.interactive.defaultOptions];

  if (isSilentMode && processArguments && !isInteractiveMode) {
    if (mode !== '-c' && mode !== 'create') {
      return console.log(language.INVALID_USAGE_ERR);
    }

    appConfig.interactive.extrasOptions.forEach(option => {
      if (processArguments.includes(`--${option}`)) {
        outputFilesList.push(option);
      }
    });

    return createFiles(name, path, outputFilesList);
  } else {
    getComponentConfiguration()
      .then(({ userInputComponentName, filesCreationSelect }) => {
        createFiles(userInputComponentName, '', filesCreationSelect);
      })
      .catch(error => {
        if (error.isTtyError) {
          return console.log(language.ERROR_RENDERING_ERR);
        }
        return console.log(language.SOMETHING_WRONG_ERR);
      });
  }
};

init();
