import * as fs from 'fs';
var FilesService = /** @class */ (function () {
    function FilesService(file, config) {
        this.file = file;
        this.config = config;
    }
    FilesService.prototype.createDirectory = function () {
        return fs.promises.mkdir(this.getPath);
    };
    FilesService.prototype.createExtensionFile = function (content) {
        if (content === void 0) { content = ''; }
        console.log("Generating ".concat(this.file.extension, ".."), this.getFullPath);
        // return fs.promises.writeFile(this.getFullPath, content);
    };
    Object.defineProperty(FilesService.prototype, "isFolderOptionSelected", {
        get: function () {
            return this.config.filesTypes.some(function (fileType) { return fileType.type === 'folder'; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilesService.prototype, "getPath", {
        get: function () {
            // in case they want to create files locally
            if (!this.isFolderOptionSelected) {
                return this.config.outputDirectory;
            }
            return "".concat(this.config.outputDirectory, "/").concat(this.getComponentName);
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