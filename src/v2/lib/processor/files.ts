export const getExtensionsConfig = ({ engine }: any) => {
  return {
    folder: {
      type: 'folder',
      label: 'folder',
      extensions: 'folder',
      defaultEnabled: true,
      endingWithEngineType: false,
    },
    javascript: {
      label: engine,
      type: engine,
      extension: engine,
      defaultEnabled: false,
      endingWithEngineType: true,
    },
    react: {
      type: 'react',
      label: `react component (${engine}x)`,
      extension: `${engine}x`,
      defaultEnabled: true,
      endingWithEngineType: false,
    },
    css: {
      type: 'css',
      label: 'css',
      extension: 'css',
      defaultEnabled: false,
      endingWithEngineType: false,
    },
    cssModule: {
      type: 'css-module',
      label: 'css-module',
      extension: 'module.css',
      defaultEnabled: false,
      endingWithEngineType: false,
    },
    scssModule: {
      type: 'scss-module',
      label: 'scss-module',
      extension: 'module.scss',
      defaultEnabled: false,
      endingWithEngineType: false,
    },
    controller: {
      type: 'controller',
      label: 'controller',
      extension: 'controller',
      defaultEnabled: false,
      endingWithEngineType: true,
    },
    utils: {
      type: 'utils',
      label: 'utils',
      extension: 'utils',
      defaultEnabled: false,
      endingWithEngineType: true,
    },
    types: {
      type: 'types',
      label: 'types',
      extension: 'types',
      defaultEnabled: false,
      endingWithEngineType: true,
    },
  };
};
