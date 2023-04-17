export var getExtensionsConfig = function (engine) {
    var isTypescript = engine === 'ts';
    var engineTypeLabel = isTypescript ? 'ts' : 'js';
    return {
        folder: {
            type: 'folder',
            label: 'folder',
            extensions: 'folder',
            defaultEnabled: true,
        },
        javascript: {
            label: engineTypeLabel,
            type: engineTypeLabel,
            extensions: engineTypeLabel,
            defaultEnabled: false,
        },
        react: {
            type: 'react',
            label: "react component (".concat(engineTypeLabel, "x)"),
            extensions: "".concat(engineTypeLabel, "x"),
            defaultEnabled: true,
        },
        css: {
            type: 'css',
            label: 'css',
            extensions: 'css',
            defaultEnabled: false,
        },
        cssModule: {
            type: 'css-module',
            label: 'css-module',
            extensions: 'module.css',
            defaultEnabled: false,
        },
        scssModule: {
            type: 'scss-module',
            label: 'scss-module',
            extensions: 'module.scss',
            defaultEnabled: false,
        },
        controller: {
            type: 'controller',
            label: 'controller',
            extensions: 'controller',
            defaultEnabled: false,
        },
        utils: {
            type: 'utils',
            label: 'utils',
            extensions: 'utils',
            defaultEnabled: false,
        },
        types: {
            type: 'types',
            label: 'types',
            extensions: 'types',
            defaultEnabled: false,
        },
    };
};
//# sourceMappingURL=files.js.map