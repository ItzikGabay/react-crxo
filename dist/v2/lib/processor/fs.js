import * as fs from "fs";
export var createDirectory = function (path) {
    return fs.promises.mkdir(path);
};
//# sourceMappingURL=fs.js.map