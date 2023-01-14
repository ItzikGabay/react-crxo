import fs from 'fs';
import path from 'path';
import appConfig from './config.js';

import { JSXtemplate, CSStemplate } from '../react-library/template.js';
import { cleanPath, uppercasedString, underscoredString } from './string.js';

function extractComponentPaths(componentName, userInputPath = '') {
  const cnWithoutSpecialChar = uppercasedString(componentName);
  const cnWithCssSupport = underscoredString(componentName);
  const cleanUserInputPath = cleanPath(userInputPath);

  let folderPath = `${path.resolve(
    cnWithoutSpecialChar,
  )}/${cleanUserInputPath}`;

  if (folderPath[folderPath.length - 1] === '/' && userInputPath.length < 3) {
    folderPath = folderPath.slice(0, -1);
  }

  if (userInputPath.length > 3) {
    folderPath = `${path.resolve()}/${userInputPath}${componentName}/`;
  }

  return {
    folder: folderPath,
    name: componentName,
    cnNormalized: cnWithoutSpecialChar,
    index: `${folderPath}index.js`,
    clean: `${folderPath}${cnWithoutSpecialChar}`,
    cnWithCssSupport,
  };
}

const createComponentFileType = (name, type, data) => {
  if (!data) {
    data = '';
  }

  if (type === 'index') {
    return fs.writeFileSync(name, data);
  }

  if (type.includes('module')) {
    return fs.writeFileSync(`${name}.${type}`, data);
  }

  if (type === 'jsx' || type === 'js') {
    return fs.writeFileSync(`${name}.${type}`, data);
  }

  return fs.writeFileSync(`${name}.${type}.js`, data);
};

export function createFiles(
  name,
  filesToCreate,
  componentTemplate,
  nameConvention,
  filesPath = '',
) {
  const cmpPaths = extractComponentPaths(name, filesPath);

  for (let fileType of filesToCreate) {
    if (fileType === 'folder') {
      fs.mkdirSync(cmpPaths.folder);
    }

    if (fileType === 'index') {
      createComponentFileType(cmpPaths.index, fileType);
    }

    if (fileType === 'js' || fileType === 'controller') {
      createComponentFileType(cmpPaths.clean, fileType);
    }

    if (fileType === 'css' || fileType === 'scss') {
      const styleType = `module.${fileType}`;
      const template = CSStemplate(cmpPaths.cnWithCssSupport, fileType);

      createComponentFileType(cmpPaths.clean, styleType, template);
    }

    if (fileType === 'jsx') {
      const styleType = filesToCreate.includes('scss') ? 'scss' : 'css';

      const template = JSXtemplate(
        cmpPaths.cnWithCssSupport,
        cmpPaths.cnNormalized,
        styleType,
        componentTemplate,
      );

      createComponentFileType(cmpPaths.clean, fileType, template);
    }
  }

  console.log(
    `[crxo][success] component "${cmpPaths.name}" generated at "${cmpPaths.folder}"`,
  );
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

export function getApplicationModes(mode) {
  const isInteractiveMode = mode === 'interactive' || mode === '-i' || !mode;
  const isSilentMode = mode === 'create' || mode === '-c';

  return {
    isInteractiveMode,
    isSilentMode,
  };
}
