import path from 'path';
import appConfig from './config.js';
import { cleanPath, uppercasedString, underscoredString } from './string.js';

export function getApplicationModes(mode) {
  const isInteractiveMode = mode === 'interactive' || mode === '-i' || !mode;
  const isSilentMode = mode === 'create' || mode === '-c';

  return {
    isInteractiveMode,
    isSilentMode,
  };
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

export function extractComponentPaths(componentName, userInputPath) {
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

export const convertFlatObjectToNestedObject = obj => {
  const result = {};

  Object.keys(obj).map(key => {
    result[key] = {
      value: obj[key],
    };
  });

  return result;
};
