export const getExtensionsConfig = ({ engine }: any) => {
  return {
    [availableExtensions.folder]: {
      type: 'folder',
      label: 'folder',
      defaultEnabled: true,
      endingWithEngineType: false,
      extension: 'folder',
    },
    [availableExtensions.index]: {
      type: 'index',
      label: 'index file',
      defaultEnabled: true,
      endingWithEngineType: true,
      extension: 'index',
    },
    [availableExtensions.baseModule]: {
      type: 'base-module',
      label: `base module (${engine})`,
      defaultEnabled: false,
      endingWithEngineType: true,
      extension: engine,
    },
    [availableExtensions.react]: {
      type: 'react',
      label: `react component (${engine}x)`,
      defaultEnabled: true,
      endingWithEngineType: false,
      extension: `${engine}x`,
    },
    [availableExtensions.css]: {
      type: 'css',
      label: 'css',
      defaultEnabled: false,
      endingWithEngineType: false,
      extension: 'css',
    },
    [availableExtensions.cssModule]: {
      type: 'css-module',
      label: 'css-module',
      defaultEnabled: false,
      endingWithEngineType: false,
      extension: 'module.css',
    },
    [availableExtensions.scssModule]: {
      type: 'scss-module',
      label: 'scss-module',
      defaultEnabled: false,
      endingWithEngineType: false,
      extension: 'module.scss',
    },
    [availableExtensions.controller]: {
      type: 'controller',
      label: 'controller',
      defaultEnabled: false,
      endingWithEngineType: true,
      extension: 'controller',
    },
    [availableExtensions.utils]: {
      type: 'utils',
      label: 'utils',
      defaultEnabled: false,
      endingWithEngineType: true,
      extension: 'utils',
    },
    [availableExtensions.types]: {
      type: 'types',
      label: 'types',
      defaultEnabled: false,
      endingWithEngineType: true,
      extension: 'types',
    },
  };
};

export enum availableExtensions {
    folder = 'folder',
    index = 'index',
    baseModule = 'base-module',
    react = 'react',
    css = 'css',
    cssModule = 'css-module',
    scssModule = 'scss-module',
    controller = 'controller',
    utils = 'utils',
    types = 'types',
}