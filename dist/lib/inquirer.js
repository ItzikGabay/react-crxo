import inquirer from 'inquirer';
import { getDefaultFilesTypesOptions } from './utils.js';
import { validateInputValue } from './validation.js';
import { questions } from './language.js';
var _generateInquirerFields = function () {
    return [
        {
            name: 'inputComponentName',
            message: questions.QUESTION_COMPONENT_NAME,
            validate: function (input) { return validateInputValue(input); },
        },
        {
            type: 'checkbox',
            name: 'generateFileTypes',
            message: questions.QUESTION_FILE_TYPES,
            choices: getDefaultFilesTypesOptions(),
        },
        {
            type: 'list',
            name: 'componentTemplate',
            message: questions.QUESTION_TEMPLATE,
            choices: [
                {
                    name: questions.QUESTION_TEMPLATE_LITE,
                    value: 'lite',
                    default: true,
                },
                {
                    name: questions.QUESTION_TEMPLATE_REGULAR,
                    value: 'regular',
                    disabled: false,
                },
                {
                    name: questions.QUESTION_TEMPLATE_LARGE,
                    value: 'large',
                    disabled: true,
                },
                {
                    name: 'button',
                    value: 'button',
                    disabled: true,
                },
                {
                    name: 'input',
                    value: 'input',
                    disabled: true,
                },
                {
                    name: 'text',
                    value: 'text',
                    disabled: true,
                },
            ],
        },
        {
            type: 'list',
            name: 'nameConvention',
            message: questions.QUESTION_CONVENTION,
            choices: [
                {
                    name: questions.QUESTION_CONVENTION_DEFAULT,
                    value: 'default',
                    default: true,
                },
                {
                    name: questions.QUESTION_CONVENTION_CAMEL,
                    disabled: true,
                    value: 'camel',
                },
                {
                    name: questions.QUESTION_CONVENTION_KEBAB,
                    disabled: true,
                    value: 'kebab',
                },
                {
                    name: questions.QUESTION_CONVENTION_SNAKE,
                    disabled: true,
                    value: 'snake',
                },
            ],
        },
    ];
};
export var componentPrompt = function () {
    var fields = _generateInquirerFields();
    return inquirer.prompt(fields);
};
//# sourceMappingURL=inquirer.js.map