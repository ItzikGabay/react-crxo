import { modesConfig } from './modes.js';
export var consoleAppUsage = function (exitApp) {
    if (exitApp === void 0) { exitApp = true; }
    console.log('Wrong usage. Please make sure you provided mode correctly.');
    Object.values(modesConfig).forEach(function (mode) {
        if (mode.openToUsers) {
            console.log("\t".concat(mode.command, " ").concat(mode.name, " \t ").concat(mode.description));
        }
    });
    console.log("\n\te.g: 'npx crxo -i'");
    if (exitApp) {
        process.exit(1);
    }
};
