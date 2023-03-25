var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import path from 'path';
import appConfig from './config.js';
import { cleanPath, uppercasedString, underscoredString } from './string.js';
export function getApplicationModes(mode) {
    var isInteractiveMode = mode === 'interactive' || mode === '-i' || !mode;
    var isSilentMode = mode === 'create' || mode === '-c';
    return {
        isInteractiveMode: isInteractiveMode,
        isSilentMode: isSilentMode,
    };
}
export function getDefaultFilesTypesOptions() {
    var allTypes = __spreadArray(__spreadArray([], appConfig.interactive.defaultOptions, true), appConfig.interactive.extrasOptions, true);
    return allTypes.map(function (type) {
        return {
            name: type,
            checked: appConfig.interactive.defaultOptions.includes(type),
        };
    });
}
export function extractComponentPaths(componentName, userInputPath) {
    var cnWithoutSpecialChar = uppercasedString(componentName);
    var cnWithCssSupport = underscoredString(componentName);
    var cleanUserInputPath = cleanPath(userInputPath);
    var folderPath = "".concat(path.resolve(cnWithoutSpecialChar), "/").concat(cleanUserInputPath);
    if (folderPath[folderPath.length - 1] === '/' && userInputPath.length < 3) {
        folderPath = folderPath.slice(0, -1);
    }
    if (userInputPath.length > 3) {
        folderPath = "".concat(path.resolve(), "/").concat(userInputPath).concat(componentName, "/");
    }
    return {
        folder: folderPath,
        name: componentName,
        cnNormalized: cnWithoutSpecialChar,
        index: "".concat(folderPath, "index.js"),
        clean: "".concat(folderPath).concat(cnWithoutSpecialChar),
        cnWithCssSupport: cnWithCssSupport,
    };
}
//# sourceMappingURL=utils.js.map