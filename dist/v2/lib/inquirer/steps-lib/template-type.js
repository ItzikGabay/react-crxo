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
var getTemplateTypeStepChoices = function () {
    // that's a function for using dynamic values in the future
    return [
        {
            name: 'Lite',
            value: 'lite',
        },
        {
            name: 'Regular',
            value: 'regular',
        },
        {
            name: 'Extended',
            value: 'extended',
        },
    ];
};
var TemplateTypeStepConfig = {
    name: 'templateType',
    message: 'Which template type do you want to use?',
    type: 'list',
};
export var templateTypeStep = function () {
    return __assign(__assign({}, TemplateTypeStepConfig), { choices: getTemplateTypeStepChoices() });
};
