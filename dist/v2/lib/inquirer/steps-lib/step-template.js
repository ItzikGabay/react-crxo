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
var getStepTemplateChoices = function () {
    return [
        {
            name: 'Choice 1',
            value: 'choice1',
        },
        {
            name: 'Choice 2',
            value: 'choice2',
            disabled: true,
        },
    ];
};
var stepTemplateConfig = {
    name: 'stepTemplate',
    message: 'This is a step template',
    type: 'list',
};
export var stepTemplate = function () {
    return __assign(__assign({}, stepTemplateConfig), { choices: getStepTemplateChoices() });
};
//# sourceMappingURL=step-template.js.map