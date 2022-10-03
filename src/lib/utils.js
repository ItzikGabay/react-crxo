import fs from 'fs';
import path from 'path';
import appConfig from './config.js';
import language from './language.js';
import { JSXtemplate, CSStemplate } from '../react-library/template.js';

function upperFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function uppercasedString(str) {
  const words = str.split('-');
  return words.map(word => upperFirstLetter(word)).join('');
}

function underscoredString(str) {
  const words = str.split('-');
  return words.map(word => word).join('_');
}

function _cleanPath(_path) {
  if (_path === './' || _path === '.') {
    _path = '';
  }

  if (_path[0] === '/') {
    _path = _path.slice(1);
  }

  if (_path.includes('./')) {
    _path = _path.replace(/^\.\//, '') + '/';
  } else {
    _path += '/';
  }
  return _path;
}

function extractData(componentName, userInputPath = '') {
  const cnUppercased = uppercasedString(componentName);
  const cnLowercased = underscoredString(componentName);
  const cleanUserInputPath = _cleanPath(userInputPath);
  let folderPath = `${path.resolve(cnUppercased)}/${cleanUserInputPath}`;

  if (folderPath[folderPath.length - 1] === '/' && userInputPath.length < 3) {
    folderPath = folderPath.slice(0, -1);
  }

  if (userInputPath.length > 3) {
    folderPath = `${path.resolve()}/${userInputPath}${componentName}/`;
  }

  return {
    folderPath,
    componentName,
    cnUppercased,
    cnLowercased,
    indexFilePath: `${folderPath}index.js`,
    filePathWithoutExtension: `${folderPath}${cnUppercased}`,
  };
}

export function createFiles(
  name,
  filesToCreate,
  componentTemplate,
  nameConvention,
  filesPath = '',
) {
  const {
    folderPath,
    indexFilePath,
    filePathWithoutExtension,
    cnUppercased,
    cnLowercased,
    componentName,
  } = extractData(name, filesPath);

  filesToCreate.forEach(fileType => {
    switch (fileType) {
      case 'folder':
        fs.mkdirSync(folderPath);
        break;
      case 'index':
        fs.writeFileSync(indexFilePath, '');
        break;
      case 'js':
        fs.writeFileSync(`${filePathWithoutExtension}.js`, '');
        break;
      case 'jsx':
        fs.writeFileSync(
          `${filePathWithoutExtension}.jsx`,
          JSXtemplate(
            cnLowercased,
            cnUppercased,
            filesToCreate.includes('scss') ? 'scss' : 'css',
            componentTemplate,
          ),
        );
        break;
      case 'css':
        fs.writeFileSync(
          `${filePathWithoutExtension}.module.css`,
          CSStemplate(cnLowercased, 'css'),
        );
        break;
      case 'scss':
        fs.writeFileSync(
          `${filePathWithoutExtension}.module.scss`,
          CSStemplate(cnLowercased, 'scss'),
        );
        break;
    }
  });

  console.log(
    `[crxo][success] component "${componentName}" generated at "${folderPath}"`,
  );
}

export function getProcessArguments() {
  let [...processArguments] = process.argv;

  // If the user did not insert the path,
  // We will use the default path and pass
  // the config option(--tag) to the next index in order
  // to get it inserted in the proccessArguments after we slicing it.
  if (processArguments[4].includes('--')) {
    processArguments[5] = processArguments[4];
    processArguments[4] = '.';
  }

  return {
    mode: processArguments[2] || '',
    name: processArguments[3] || '',
    path: processArguments[4] || '',
    processArguments: processArguments.slice(5),
  };
}

export function validateArguments({ mode, path, name, processArguments }) {
  if (mode === '--interactive' || mode === '--i') {
    return { isValid: true };
  }

  if (!mode || !path || !name) {
    return { valid: false, error: language.INVALID_USAGE_ERR };
  }

  if (mode === '' || path === '' || name === '') {
    return { valid: false, error: language.INVALID_CHARACTER_NUM_ERR };
  }

  if (name.includes('--') || name.includes('#') || path.includes('--')) {
    // TODO: Add regex instead
    return { valid: false, error: language.INVALID_CHARACTER_ERR };
  }

  return { isValid: true };
}

export function getDefaultFilesTypesOptions() {
  const allTypes = [
    ...appConfig.interactive.defaultOptions,
    ...appConfig.interactive.extrasOptions,
  ];

  return allTypes.map(type => {
    return {
      name: type,
      checked: appConfig.interactive.defaultOptions.includes(type),
    };
  });
}

export function validateInputValue(input) {
  return /^[a-zA-Z0-9-]*$/.test(input) && input.length > 1;
}

export function getApplicationModes(mode) {
  const isInteractiveMode = mode === '--interactive' || mode === '--i';
  const isSilentMode = mode === 'create' || mode === '-c';

  return {
    isInteractiveMode,
    isSilentMode,
  };
}
