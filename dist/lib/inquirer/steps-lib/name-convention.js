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
            name: 'camelCase',
            value: 'camel_case',
        },
        {
            name: 'PascalCase',
            value: 'pascal_case',
        },
        {
            name: 'kebab-case',
            value: 'kebab_case',
        }
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
