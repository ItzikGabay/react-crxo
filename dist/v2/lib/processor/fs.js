import * as fs from 'fs';
var FilesService = /** @class */ (function () {
    function FilesService(file, config) {
        this.file = file;
        this.config = config;
        // console.debug('[debug] -> FilesService ', { file, config });
    }
    FilesService.prototype.createDirectory = function () {
        return fs.promises.mkdir(this.getPath);
    };
    FilesService.prototype.createExtensionFile = function (content) {
        if (content === void 0) { content = null; }
        console.debug('[debug] -> getFullPath', {
            file: this.file.extension,
            path: this.getFullPath,
        });
        // return fs.promises.writeFile(this.getFullPath, content);
    };
    Object.defineProperty(FilesService.prototype, "getPath", {
        get: function () {
            return this.config.outputDirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilesService.prototype, "getPathWithCleanComponentName", {
        get: function () {
            return "".concat(this.config.outputDirectory, "/").concat(this.config.componentName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilesService.prototype, "getComponentName", {
        get: function () {
            // mostly for index files
            if (!this.file.hasComponentName) {
                return this.file.extension;
            }
            return this.config.componentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilesService.prototype, "getExtension", {
        get: function () {
            // for folders, css, scss, etc
            if (!this.file.endingWithEngineType) {
                return this.file.extension;
            }
            // mostly for index files
            if (!this.file.hasComponentName) {
                return this.config.templateEngine;
            }
            return "".concat(this.file.extension, ".").concat(this.config.templateEngine);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilesService.prototype, "getFullPath", {
        get: function () {
            return "".concat(this.getPath, "/").concat(this.getComponentName, ".").concat(this.getExtension);
        },
        enumerable: false,
        configurable: true
    });
    return FilesService;
}());
export { FilesService };
//# sourceMappingURL=fs.js.map