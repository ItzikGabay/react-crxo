#! /usr/bin/env node

import { componentPrompt } from './lib/inquirer.js';
import {
  getProcessArguments,
  validateArguments,
  createFiles,
  getApplicationModes,
} from './lib/utils.js';

import language from './lib/language.js';
import appConfig from './lib/config.js';

const init = async () => {
  const { mode, path, name, processArguments } = getProcessArguments();
  const { isSilentMode, isInteractiveMode } = getApplicationModes(mode);

  // Interactive mode
  if (isSilentMode && processArguments && !isInteractiveMode) {
    const outputFilesList = [...appConfig.interactive.defaultOptions];
    const isValidArguments = validateArguments({
      mode,
      path,
      name,
      processArguments,
    });

    if (!isValidArguments.isValid) {
      throw new Error(isValidArguments.error);
    }
    if (mode !== '-c' && mode !== 'create') {
      throw new Error(language.INVALID_USAGE_ERR);
    }

    appConfig.interactive.extrasOptions.forEach(option => {
      if (processArguments.includes(`--${option}`)) {
        outputFilesList.push(option);
      }
    });

    return createFiles(name, outputFilesList, 'regular', path);
  }

  // Silent mode
  try {
    const { inputComponentName, generateFileTypes, componentTemplate } =
      await componentPrompt();
    createFiles(inputComponentName, generateFileTypes, componentTemplate);
  } catch (error) {
    if (error.isTtyError) {
      throw new Error(language.ERROR_RENDERING_ERR);
    }
    throw new Error(language.SOMETHING_WRONG_ERR);
  }
};

try {
  await init();
} catch (error) {
  console.log(error.message);
}
