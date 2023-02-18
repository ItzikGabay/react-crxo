import fs from 'fs';
import { CSStemplate, JSXtemplate } from '../react-library/template.js';
import { extractComponentPaths } from './utils.js';

export const createComponentFileType = (name, type, data = '') => {
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

export const generateComponentFiles = filesConfig => {
  console.debug('[debug] ->', { filesConfig });
  const { generateFileTypes, inputComponentName } = filesConfig;

  generateFileTypes.value.forEach(file => {
    generateFileByType(inputComponentName.value, file);
  });
};

const generateFileByType = (name, fileType) => {
  switch (fileType) {
    case 'folder':
  }
};

export function createFiles(
  name,
  filesToCreate,
  componentTemplate,
  nameConvention,
  filesPath = '',
) {
  if (filesPath.includes('--')) {
    filesPath = '';
  }

  const cmpPaths = extractComponentPaths(name, filesPath);

  for (let fileType of filesToCreate) {
    // TODO: Create generator class
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

  console.log(`Component '${cmpPaths.name}' generated at '${cmpPaths.folder}'`);
}
