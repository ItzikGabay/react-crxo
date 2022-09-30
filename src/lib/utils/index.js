import path from 'path';
import { shortJsx, shortCss } from '../../react-library/short.js';
import fs from 'fs';
import language from '../language.js';
import appConfig from '../config.js';

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
  const componentNameUppercased = uppercasedString(componentName);
  const componentNameLowercased = underscoredString(componentName);
  const cleanUserInputPath = _cleanPath(userInputPath);
  let folderPath = `${path.resolve(
    componentNameUppercased,
  )}/${cleanUserInputPath}`;

  if (folderPath[folderPath.length - 1] === '/' && userInputPath.length < 3) {
    folderPath = folderPath.slice(0, -1);
  }

  if (userInputPath.length > 3) {
    folderPath = `${path.resolve()}/${userInputPath}${componentName}/`;
  }

  return {
    folderPath,
    componentName,
    componentNameUppercased,
    componentNameLowercased,
    indexFilePath: `${folderPath}index.js`,
    filePathWithoutExtension: `${folderPath}${componentNameUppercased}`,
  };
}

export function createFiles(name, filesToCreate, filesPath = '') {
  const {
    folderPath,
    indexFilePath,
    filePathWithoutExtension,
    componentNameUppercased,
    componentNameLowercased,
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
          shortJsx(
            componentNameLowercased,
            componentNameUppercased,
            filesToCreate.includes('scss') ? 'scss' : 'css',
          ),
        );
        break;
      case 'css':
        fs.writeFileSync(
          `${filePathWithoutExtension}.module.css`,
          shortCss(componentNameLowercased, 'css'),
        );
        break;
      case 'scss':
        fs.writeFileSync(
          `${filePathWithoutExtension}.module.scss`,
          shortCss(componentNameLowercased, 'scss'),
        );
        break;
    }
  });

  console.log(
    `[crxo][success] component named "${componentName}" generated at "${folderPath}"`,
  );
}

export function getProcessArguments() {
  let [...processArguments] = process.argv;

  return {
    mode: processArguments[2] || '',
    name: processArguments[3] || '',
    path: processArguments[4] || '',
    processArguments: processArguments.slice(5),
  };
}

export function validateArguments({ mode, path, name, processArguments }) {
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