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
import { getExtensionsConfig } from '../../processor/files.js';
var getFilesSelectionStepChoices = function (props) {
    var extensionsList = getExtensionsConfig(props.templateEngine);
    // looping through the extensionsConfig object and returning an array of objects
    var items = Object.values(extensionsList).map(function (extension) {
        return {
            name: extension.label,
            value: extension.type,
            checked: extension.defaultEnabled,
        };
    });
    return items;
};
var filesSelectionStepConfig = {
    name: 'filesTypes',
    message: 'Which files types do you want to generate?',
    type: 'checkbox',
    validate: function (answer) {
        if (answer.length < 1) {
            return 'You must choose at least one file type.';
        }
        return true;
    }
};
export var fileSelectionStep = function (props) {
    return __assign(__assign({}, filesSelectionStepConfig), { choices: getFilesSelectionStepChoices(props.engineType) });
};
//# sourceMappingURL=files-selection.js.map