import fs from 'fs';
import path from 'path';
import appConfig from './config.js';

import { JSXtemplate, CSStemplate } from '../react-library/template.js';
import { cleanPath, uppercasedString, underscoredString } from './string.js';

function extractData(componentName, userInputPath = '') {
  const cnUppercased = uppercasedString(componentName);
  const cnLowercased = underscoredString(componentName);
  const cleanUserInputPath = cleanPath(userInputPath);
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

  for (let fileType of filesToCreate) {
    if (fileType === 'folder') {
      fs.mkdirSync(folderPath);
    }

    if (fileType === 'index') {
      fs.writeFileSync(indexFilePath, '');
    }

    if (fileType === 'js') {
      fs.writeFileSync(`${filePathWithoutExtension}.js`, '');
    }

    if (fileType === 'controller') {
      fs.writeFileSync(`${filePathWithoutExtension}.controller.js`, '');
    }

    if (fileType === 'css') {
      fs.writeFileSync(
        `${filePathWithoutExtension}.module.css`,
        CSStemplate(cnLowercased, 'css'),
      );
    }

    if (fileType === 'scss') {
      fs.writeFileSync(
        `${filePathWithoutExtension}.module.scss`,
        CSStemplate(cnLowercased, 'scss'),
      );
    }

    if (fileType === 'jsx') {
      fs.writeFileSync(
        `${filePathWithoutExtension}.jsx`,
        JSXtemplate(
          cnLowercased,
          cnUppercased,
          filesToCreate.includes('scss') ? 'scss' : 'css',
          componentTemplate,
        ),
      );
    }
  }

  console.log(
    `[crxo][success] component "${componentName}" generated at "${folderPath}"`,
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
  const isInteractiveMode = mode === '--interactive' || mode === '--i';
  const isSilentMode = mode === 'create' || mode === '-c';

  return {
    isInteractiveMode,
    isSilentMode,
  };
}
