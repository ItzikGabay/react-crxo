var language = Object.freeze({
    INVALID_CHARACTER_NUM_ERR: 'Invalid usage. you cannot use empty value.',
    INVALID_USAGE_ERR: 'Invalid usage. please use crxo -c [path] [name] [options]',
    INVALID_CHARACTER_ERR: 'Invalid usage. you cannot use special characters in the name or the path.',
    ERROR_RENDERING_ERR: "Couldn't be rendered in the current environment.",
    SOMETHING_WRONG_ERR: 'Something went wrong. please try again.',
    NO_ARGUMENTS_ERR: 'No arguments provided.',
    NO_CMP_NAME_ERR: 'No component name found. Please provide a component name.',
    PROVIDE_VALID_NAME_ERR: 'Please provide a valid component name.',
    DIR_ALREADY_EXISTS_ERR: 'Directory already exists. Please provide a new name.',
    INTERNAL_ERR: 'Internal error. Please try again: ',
    THANK_YOU_MSG: 'Thank you for using crxo!',
});
export var questions = Object.freeze({
    QUESTION_COMPONENT_NAME: 'Whats is the component name?',
    QUESTION_FILE_TYPES: 'Which files do you want to generate?',
    QUESTION_TEMPLATE: 'Which template do you want to use?',
    QUESTION_TEMPLATE_LITE: '(lite) - no state, no props',
    QUESTION_TEMPLATE_REGULAR: '(basic) - useState, useEffect',
    QUESTION_TEMPLATE_LARGE: '(extended) basic + getServerSideProps',
    QUESTION_CONVENTION: 'Which convention do you want to use?',
    QUESTION_CONVENTION_DEFAULT: 'ComponentName (default)',
    QUESTION_CONVENTION_CAMEL: 'componentName',
    QUESTION_CONVENTION_KEBAB: 'component-name',
    QUESTION_CONVENTION_SNAKE: 'component_name',
});
export default language;
//# sourceMappingURL=language.js.map