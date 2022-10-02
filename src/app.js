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
  const isValidArguments = validateArguments({
    mode,
    path,
    name,
    processArguments,
  });

  // Silent mode
  if (isSilentMode && processArguments && !isInteractiveMode) {
    const outputFilesList = [...appConfig.interactive.defaultOptions];

    if (!isValidArguments.isValid) {
      throw new Error(isValidArguments.error);
    }
    if (mode !== '-c' && mode !== 'create') {
      throw new Error(language.INVALID_USAGE_ERR);
    }

    appConfig.interactive.extrasOptions.forEach(option => {
      if (processArguments.includes(`--${option}`)) {
        if (outputFilesList.includes('css') && option === 'scss') {
          outputFilesList.splice(outputFilesList.indexOf('css'), 1);
        }
        outputFilesList.push(option);
      }
    });

    return createFiles(
      name,
      outputFilesList,
      appConfig.interactive.defaultComponentTemplate,
      appConfig.interactive.defaultNameConvention,
      path,
    );
  }

  // Interactive mode
  try {
    const output = await componentPrompt();
    createFiles(
      output.inputComponentName,
      output.generateFileTypes,
      output.componentTemplate,
      output.nameConvention,
    );
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
