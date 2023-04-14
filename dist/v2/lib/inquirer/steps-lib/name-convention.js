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
var getNameConventionChoices = function () {
    // that's a function for using dynamic values in the future
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
var nameConventionConfig = {
    name: 'nameConvention',
    message: 'Which name convention do you want to use?',
    type: 'list',
};
export var nameConventionStep = function () {
    return __assign(__assign({}, nameConventionConfig), { choices: getNameConventionChoices() });
};
//# sourceMappingURL=name-convention.js.map