var _a;
import { getUserFilesSpecifications } from '../inquirer/process.js';
export var inputArgumnets = process.argv.slice(2);
var availableModes = {
    silent: '-s',
    interactive: '-i',
    test: '-t',
};
export var modesConfig = {
    silent: {
        name: 'silent',
        description: 'Silent mode',
        command: availableModes.silent,
        openToUsers: true,
        input: getUserFilesSpecifications,
    },
    interactive: {
        name: 'interactive',
        description: 'Interactive mode',
        command: availableModes.interactive,
        openToUsers: true,
        input: getUserFilesSpecifications,
    },
    test: {
        name: 'test',
        description: 'Test mode',
        command: availableModes.test,
        openToUsers: false,
        input: getUserFilesSpecifications,
    },
};
// In order to match the input argument with the mode,
// we need to have a reference to the modes.
export var modesReference = (_a = {},
    _a[availableModes.silent] = modesConfig.silent,
    _a[availableModes.interactive] = modesConfig.interactive,
    _a[availableModes.test] = modesConfig.test,
    _a);
