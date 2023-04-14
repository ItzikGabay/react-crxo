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
var getEngineChoices = function () {
    return [
        {
            name: 'Javascript',
            value: 'js',
        },
        {
            name: 'Typescript',
            value: 'ts',
        },
        {
            name: 'Havascript',
            value: 'hs',
            disabled: true,
        },
    ];
};
var JSEngineConfig = {
    name: 'templateEngine',
    message: 'Which templating engine do you want to use?',
    type: 'list',
};
export var JsEngineStep = function () {
    return __assign(__assign({}, JSEngineConfig), { choices: getEngineChoices() });
};
//# sourceMappingURL=js-engine-step.js.map