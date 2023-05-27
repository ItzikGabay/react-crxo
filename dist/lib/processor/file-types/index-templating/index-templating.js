var IndexTemplating = /** @class */ (function () {
    function IndexTemplating(name) {
        this.name = name;
    }
    IndexTemplating.prototype.addIndexImports = function () {
        return "export { ".concat(this.name, " } from './").concat(this.name, "';\n");
    };
    IndexTemplating.prototype.createIndex = function () {
        return this.addIndexImports();
    };
    return IndexTemplating;
}());
export { IndexTemplating };
