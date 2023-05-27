var CSSTemplating = /** @class */ (function () {
    function CSSTemplating() {
    }
    CSSTemplating.prototype.addCSS = function () {
        return ('.container {\n' +
            '   font-size: 40px;\n' +
            '   color: red;\n' +
            '}\n');
    };
    CSSTemplating.prototype.createCSS = function () {
        return this.addCSS();
    };
    return CSSTemplating;
}());
export { CSSTemplating };
