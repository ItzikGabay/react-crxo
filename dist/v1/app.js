#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { componentPrompt } from './lib/inquirer.js';
import { getApplicationModes } from './lib/utils.js';
import { successLog, warnUser } from './lib/logs.js';
import { validateComponentName } from './lib/validation.js';
import language from './lib/language.js';
import appConfig from './lib/config.js';
import { createFiles } from './lib/fs.js';
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isSilentMode, isInteractiveMode, output, error_1, fileTypeList, extraTypesOptions, _b, name_1, path, processArguments, _i, processArguments_1, argument, componentTemplate, output;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = getApplicationModes(process.argv[2]), isSilentMode = _a.isSilentMode, isInteractiveMode = _a.isInteractiveMode;
                if (!isInteractiveMode) return [3 /*break*/, 5];
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, componentPrompt()];
            case 2:
                output = _c.sent();
                // to apply all arguments as parameters
                createFiles.apply(null, Object.values(output));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                if (error_1.isTtyError) {
                    throw new Error(language.ERROR_RENDERING_ERR);
                }
                throw new Error(language.SOMETHING_WRONG_ERR);
            case 4: return [2 /*return*/, null];
            case 5:
                if (isSilentMode) {
                    fileTypeList = __spreadArray([], appConfig.interactive.defaultOptions, true);
                    extraTypesOptions = appConfig.interactive.extrasOptions;
                    _b = process.argv.slice(3), name_1 = _b[0], path = _b[1], processArguments = _b.slice(2);
                    if (!validateComponentName(name_1)) {
                        return [2 /*return*/, warnUser(language.INVALID_USAGE_ERR)];
                    }
                    if (!path) {
                        path = '.';
                    }
                    for (_i = 0, processArguments_1 = processArguments; _i < processArguments_1.length; _i++) {
                        argument = processArguments_1[_i];
                        // Remove '--' from the type [e.g. --js => js]
                        argument = argument.replace('--', '');
                        // In case of scss type, remove the default css from the list
                        if (argument === 'scss') {
                            fileTypeList.splice(fileTypeList.indexOf('css'), 1);
                        }
                        // Check if the argument is a valid type
                        if (extraTypesOptions.includes(argument)) {
                            fileTypeList.push(argument);
                        }
                    }
                    componentTemplate = processArguments.includes('--regular')
                        ? 'regular'
                        : appConfig.interactive.defaultComponentTemplate;
                    output = [
                        name_1,
                        fileTypeList,
                        componentTemplate,
                        appConfig.interactive.defaultNameConvention,
                        path,
                    ];
                    createFiles.apply(null, output);
                    return [2 /*return*/];
                }
                return [2 /*return*/, warnUser(language.INVALID_USAGE_ERR)];
        }
    });
}); };
try {
    await init();
    successLog(language.THANK_YOU_MSG);
}
catch (error) {
    if (error.code === 'EEXIST') {
        warnUser(language.DIR_ALREADY_EXISTS_ERR);
    }
    else {
        warnUser(language.INTERNAL_ERR, error);
        console.log(error);
    }
}
//# sourceMappingURL=app.js.map