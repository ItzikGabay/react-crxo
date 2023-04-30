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
var componentNameStepConfig = {
    name: 'componentName',
    message: 'What is the name of the component?',
    type: 'input',
    validate: function (answer) {
        if (answer.length < 1) {
            return 'You must enter a name.';
        }
        return true;
    }
};
export var componentNameStep = function () {
    return __assign({}, componentNameStepConfig);
};
