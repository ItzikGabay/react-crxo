#! /usr/bin/env node

import { componentPrompt } from './lib/inquirer.js';
import { getApplicationModes } from './lib/utils.js';
import { successLog, warnUser } from './lib/logs.js';
import { validateComponentName } from './lib/validation.js';

import language from './lib/language.js';
import appConfig from './lib/config.js';
import { createFiles } from './lib/fs.js';

const init = async () => {
  const { isSilentMode, isInteractiveMode } = getApplicationModes(
    process.argv[2],
  );

  if (isInteractiveMode) {
    try {
      const output = await componentPrompt();
      createFiles.apply(null, Object.values(output));
    } catch (error) {
      if (error.isTtyError) {
        throw new Error(language.ERROR_RENDERING_ERR);
      }
      throw new Error(language.SOMETHING_WRONG_ERR);
    }

    return;
  }

  if (isSilentMode) {
    const fileTypeList = [...appConfig.interactive.defaultOptions];
    const extraTypesOptions = appConfig.interactive.extrasOptions;
    let [name, path, ...processArguments] = process.argv.slice(3);

    if (!validateComponentName(name)) {
      return warnUser(language.INVALID_USAGE_ERR);
    }

    if (!path) {
      path = '.';
    }

    for (let argument of processArguments) {
      // Remove '--' from the type [e.g. --js => js]
      argument = argument.replace('--', '');

      // In case of scss type, remove the default css from the list
      if (argument === 'scss') {
        fileTypeList.splice(fileTypeList.indexOf('css'), 1);
      }

      // Check if the argument is a valid type
      if (extraTypesOptions.includes(argument)) {
        fileTypeList.push(argument);
      }
    }

    // current only 'regular' or 'lite'
    const componentTemplate = processArguments.includes('--regular')
      ? 'regular'
      : appConfig.interactive.defaultComponentTemplate;

    const output = [
      name,
      fileTypeList,
      componentTemplate,
      appConfig.interactive.defaultNameConvention,
      path,
    ];

    createFiles.apply(null, output);

    return;
  }

  return warnUser(language.INVALID_USAGE_ERR);
};

try {
  await init();
  successLog(language.THANK_YOU_MSG);
} catch (error) {
  if (error.code === 'EEXIST') {
    warnUser(language.DIR_ALREADY_EXISTS_ERR);
  } else {
    warnUser(language.INTERNAL_ERR, error);
    console.log(error);
  }
}
