import fs from 'fs';
import { CSStemplate, JSXtemplate } from '../react-library/template.js';
import { extractComponentPaths } from './utils.js';
export var createComponentFileType = function (name, type, data) {
    if (data === void 0) { data = ''; }
    if (type === 'index') {
        return fs.writeFileSync(name, data);
    }
    if (type.includes('module')) {
        return fs.writeFileSync("".concat(name, ".").concat(type), data);
    }
    if (type === 'jsx' || type === 'js') {
        return fs.writeFileSync("".concat(name, ".").concat(type), data);
    }
    return fs.writeFileSync("".concat(name, ".").concat(type, ".js"), data);
};
export function createFiles(name, filesToCreate, componentTemplate, nameConvention, filesPath) {
    if (filesPath === void 0) { filesPath = ''; }
    if (filesPath.includes('--')) {
        filesPath = '';
    }
    var cmpPaths = extractComponentPaths(name, filesPath);
    for (var _i = 0, filesToCreate_1 = filesToCreate; _i < filesToCreate_1.length; _i++) {
        var fileType = filesToCreate_1[_i];
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
            var styleType = "module.".concat(fileType);
            var template = CSStemplate(cmpPaths.cnWithCssSupport, fileType);
            createComponentFileType(cmpPaths.clean, styleType, template);
        }
        if (fileType === 'jsx') {
            var styleType = filesToCreate.includes('scss') ? 'scss' : 'css';
            var template = JSXtemplate(cmpPaths.cnWithCssSupport, cmpPaths.cnNormalized, styleType, componentTemplate);
            createComponentFileType(cmpPaths.clean, fileType, template);
        }
    }
    console.log("Component '".concat(cmpPaths.name, "' generated at '").concat(cmpPaths.folder, "'"));
}
//# sourceMappingURL=fs.js.map