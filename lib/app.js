#! /usr/bin/env node

import utils from './utils/index.js';
import getComponentConfiguration from './inquirer.js';

// TODO: Move to utils  ->

function getProcessArguments() {
  let [...processArguments] = process.argv;

  return {
    mode: processArguments[2],
    path: processArguments[3],
    name: processArguments[4],
    processArguments: processArguments.slice(5),
  };
}

// TODO: Move to config  ->

const appConfig = {
  interactive: {
    options: ['Folder', 'JSX', 'CSS'],
  },
};

// TODO: Move to translation/language ->

const language = {
  INVALID_USAGE_ERR:
    'ERROR: invalid usage. please use crxo -c <path> <name> <options>',
  INVALID_CHARACTER_ERR:
    'ERROR: invalid usage. you cannot use special characters in the name',
  ERROR_RENDERING_ERR: "Sorry, couldn't be rendered in the current environment",
  SOMETHING_WRONG_ERR: 'Something went wrong. please try again.',
};

const init = () => {
  const { mode, path, name, processArguments } = getProcessArguments();
  const isInteractiveMode = mode === '--interactive' || mode === '--i';
  const isSilentMode = mode === 'create' || mode === '-c';
  const outputFilesList = appConfig.interactive.options;

  console.debug('[debug] -> processArguments', {
    processArguments,
    name,
    path,
  });

  if (isSilentMode) {
    if (processArguments && !isInteractiveMode) {
      if (mode !== '-c' && mode !== 'create') {
        return console.log(language.INVALID_USAGE_ERR);
      }

      if (name.includes('#')) {
        // TODO: Add regex instead
        return console.log(INVALID_CHARACTER);
      }

      processArguments.includes('--js') && outputFilesList.push('JS');
      processArguments.includes('--index') && outputFilesList.push('INDEX');
      processArguments.includes('--small') && outputFilesList.push('small');

      return utils.createFiles(name, path, outputFilesList);
    }
  }

  getComponentConfiguration()
    .then(({ userInputComponentName, filesCreationSelect }) => {
      utils.createFiles(userInputComponentName, '', filesCreationSelect);
    })
    .catch(error => {
      if (error.isTtyError) {
        return console.log(language.ERROR_RENDERING_ERR);
      }
      return console.log(SOMETHING_WRONG);
    });
};

init();
