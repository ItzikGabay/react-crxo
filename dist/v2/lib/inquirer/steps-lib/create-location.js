var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import inquirer from 'inquirer';
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt';
import { basename } from 'path';
inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);
function isFolderHidden(pathStr) {
    var filename = basename(pathStr);
    return filename.startsWith('.');
}
var createLocationStepConfig = {
    name: 'stepTemplate',
    message: 'This is a step template',
    type: 'file-tree-selection',
    onlyShowDir: true,
    enableGoUpperDirectory: true,
    onlyShowValid: true,
    validate: function (input) {
        if (isFolderHidden(input)) {
            return false;
        }
        return true;
    }
};
export var createLocationStep = function () {
    return __assign({}, createLocationStepConfig);
};
//# sourceMappingURL=create-location.js.map