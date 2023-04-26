export var getExtensionsConfig = function (_a) {
    var _b;
    var engine = _a.engine;
    return _b = {},
        _b[availableExtensions.folder] = {
            type: 'folder',
            label: 'folder',
            defaultEnabled: true,
            endingWithEngineType: false,
            extension: 'folder',
        },
        _b[availableExtensions.index] = {
            type: 'index',
            label: 'index file',
            defaultEnabled: true,
            endingWithEngineType: true,
            extension: 'index',
        },
        _b[availableExtensions.baseModule] = {
            type: 'base-module',
            label: "base module (".concat(engine, ")"),
            defaultEnabled: false,
            endingWithEngineType: true,
            extension: engine,
        },
        _b[availableExtensions.react] = {
            type: 'react',
            label: "react component (".concat(engine, "x)"),
            defaultEnabled: true,
            endingWithEngineType: false,
            extension: "".concat(engine, "x"),
        },
        _b[availableExtensions.css] = {
            type: 'css',
            label: 'css',
            defaultEnabled: false,
            endingWithEngineType: false,
            extension: 'css',
        },
        _b[availableExtensions.cssModule] = {
            type: 'css-module',
            label: 'css-module',
            defaultEnabled: false,
            endingWithEngineType: false,
            extension: 'module.css',
        },
        _b[availableExtensions.scssModule] = {
            type: 'scss-module',
            label: 'scss-module',
            defaultEnabled: false,
            endingWithEngineType: false,
            extension: 'module.scss',
        },
        _b[availableExtensions.controller] = {
            type: 'controller',
            label: 'controller',
            defaultEnabled: false,
            endingWithEngineType: true,
            extension: 'controller',
        },
        _b[availableExtensions.utils] = {
            type: 'utils',
            label: 'utils',
            defaultEnabled: false,
            endingWithEngineType: true,
            extension: 'utils',
        },
        _b[availableExtensions.types] = {
            type: 'types',
            label: 'types',
            defaultEnabled: false,
            endingWithEngineType: true,
            extension: 'types',
        },
        _b;
};
export var availableExtensions;
(function (availableExtensions) {
    availableExtensions["folder"] = "folder";
    availableExtensions["index"] = "index";
    availableExtensions["baseModule"] = "base-module";
    availableExtensions["react"] = "react";
    availableExtensions["css"] = "css";
    availableExtensions["cssModule"] = "css-module";
    availableExtensions["scssModule"] = "scss-module";
    availableExtensions["controller"] = "controller";
    availableExtensions["utils"] = "utils";
    availableExtensions["types"] = "types";
})(availableExtensions || (availableExtensions = {}));
//# sourceMappingURL=files.js.map