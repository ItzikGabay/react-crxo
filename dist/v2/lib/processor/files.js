export var getExtensionsConfig = function (engine) {
    var isTypescript = engine === 'ts';
    var engineTypeLabel = isTypescript ? 'ts' : 'js';
    return {
        folder: {
            type: 'folder',
            label: 'folder',
            extensions: 'folder',
        },
        javascript: {
            label: engineTypeLabel,
            type: engineTypeLabel,
            extensions: engineTypeLabel,
        },
        react: {
            type: 'react',
            label: "react component (".concat(engineTypeLabel, "x)"),
            extensions: "".concat(engineTypeLabel, "x"),
        },
        css: {
            type: 'css',
            label: 'css',
            extensions: 'css',
        },
        cssModule: {
            type: 'css-module',
            label: 'css-module',
            extensions: 'module.css',
        },
        scssModule: {
            type: 'scss-module',
            label: 'scss-module',
            extensions: 'module.scss',
        },
        controller: {
            type: 'controller',
            label: 'controller',
            extensions: 'controller',
        },
        utils: {
            type: 'utils',
            label: 'utils',
            extensions: 'utils',
        },
        types: {
            type: 'types',
            label: 'types',
            extensions: 'types',
        },
    };
};
//# sourceMappingURL=files.js.map