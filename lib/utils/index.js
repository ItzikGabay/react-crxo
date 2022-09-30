import path from 'path';
import { shortJsx, shortCss } from '../../react-library/short.js';
import fs from 'fs';
import language from '../language.js';

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
  const original = componentName;
  userInputPath = _cleanPath(userInputPath);
  let folder_path = `${path.resolve(original)}/${userInputPath}`;
  const uppercased = uppercasedString(original);
  const underscored = underscoredString(original);

  if (folder_path[folder_path.length - 1] === '/' && userInputPath.length < 3) {
    folder_path = folder_path.slice(0, -1);
  }

  if (userInputPath.length > 3) {
    folder_path = `${path.resolve()}/${userInputPath}${original}/`;
  }

  return {
    file_path: `${folder_path}${original}`,
    index_path: `${folder_path}index`,
    folder_path,
    original,
    uppercased,
    underscored,
  };
}

export function createFiles(name, filesPath, filesToCreate) {
  const {
    file_path,
    folder_path,
    index_path,
    uppercased,
    underscored,
    original,
  } = utils.extractData(name, filesPath);

  filesToCreate.forEach(fileType => {
    switch (fileType) {
      case 'folder':
        fs.mkdirSync(folder_path);
        break;
      case 'index':
        fs.writeFileSync(`${index_path}.js`, '');
        break;
      case 'js':
        fs.writeFileSync(`${file_path}.js`, '');
        break;
      case 'jsx':
        fs.writeFileSync(`${file_path}.jsx`, shortJsx(underscored, uppercased));
        break;
      case 'css':
        fs.writeFileSync(`${file_path}.module.css`, shortCss(underscored));
        break;
    }
  });

  console.log(`Component "${original}" created at ${folder_path}.`);
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

const utils = {
  extractData,
};

export default utils;
