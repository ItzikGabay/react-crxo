export var convertColorNameToColor = function (colorName) {
    var colors = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
    };
    if (!colors[colorName]) {
        return colors.red;
    }
    return colors[colorName];
};
export var consoleUser = function (color, output) {
    color = convertColorNameToColor(color);
    console.log("".concat(color).concat(output, "\u001B[0m"));
};
export var successLog = function (output) {
    consoleUser('green', output);
};
export var warnUser = function (message) {
    consoleUser('red', message);
};
//# sourceMappingURL=logs.js.map