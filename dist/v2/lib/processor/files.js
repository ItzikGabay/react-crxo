export var getExtensionsConfig = function (_a) {
    var _b;
    var engine = _a.engine;
    return _b = {},
        _b[availableExtensions.folder] = {
            type: 'folder',
            label: 'folder',
            defaultEnabled: true,
            endingWithEngineType: false,
            hasComponentName: true,
            extension: 'folder',
        },
        _b[availableExtensions.index] = {
            type: 'index',
            label: 'index file',
            defaultEnabled: true,
            endingWithEngineType: true,
            hasComponentName: false,
            extension: 'index',
        },
        _b[availableExtensions.baseModule] = {
            type: 'base-module',
            label: "base module (".concat(engine, ")"),
            defaultEnabled: false,
            endingWithEngineType: false,
            hasComponentName: true,
            extension: engine,
        },
        _b[availableExtensions.react] = {
            type: 'react',
            label: "react component (".concat(engine, "x)"),
            defaultEnabled: true,
            endingWithEngineType: false,
            hasComponentName: true,
            extension: "".concat(engine, "x"),
        },
        _b[availableExtensions.css] = {
            type: 'css',
            label: 'css',
            defaultEnabled: false,
            endingWithEngineType: false,
            hasComponentName: true,
            extension: 'css',
        },
        _b[availableExtensions.cssModule] = {
            type: 'css-module',
            label: 'css-module',
            defaultEnabled: false,
            endingWithEngineType: false,
            hasComponentName: true,
            extension: 'module.css',
        },
        _b[availableExtensions.scssModule] = {
            type: 'scss-module',
            label: 'scss-module',
            defaultEnabled: false,
            endingWithEngineType: false,
            hasComponentName: true,
            extension: 'module.scss',
        },
        _b[availableExtensions.controller] = {
            type: 'controller',
            label: 'controller',
            defaultEnabled: false,
            endingWithEngineType: true,
            hasComponentName: true,
            extension: 'controller',
        },
        _b[availableExtensions.utils] = {
            type: 'utils',
            label: 'utils',
            defaultEnabled: false,
            endingWithEngineType: true,
            hasComponentName: true,
            extension: 'utils',
        },
        _b[availableExtensions.types] = {
            type: 'types',
            label: 'types',
            defaultEnabled: false,
            endingWithEngineType: true,
            hasComponentName: true,
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
