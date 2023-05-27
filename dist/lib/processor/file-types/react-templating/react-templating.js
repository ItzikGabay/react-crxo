import { availableExtensions } from "../../files.js";
var availableTemplateTypes = {
    lite: 'lite',
    regular: 'regular',
    extended: 'extended',
};
var ReactTemplating = /** @class */ (function () {
    function ReactTemplating(config) {
        this.name = config.componentName;
        this.config = config;
    }
    ReactTemplating.prototype.convertToPascalCase = function (name) {
        // we're splitting by '' to get each letter as a separate item in the array
        // then we capitalize the first letter of each item
        // then we join the array back to a string
        return name
            .split('-')
            .map(function (splittedName) { return splittedName[0].toUpperCase() + splittedName.slice(1); })
            .join('');
    };
    Object.defineProperty(ReactTemplating.prototype, "getComponentName", {
        get: function () {
            return this.convertToPascalCase(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactTemplating.prototype, "hasCSSModule", {
        get: function () {
            return this.config.filesTypes.some(function (file) { return file.type === availableExtensions.cssModule; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactTemplating.prototype, "hasSCSSModule", {
        get: function () {
            return this.config.filesTypes.some(function (file) { return file.type === availableExtensions.scssModule; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactTemplating.prototype, "hasCSS", {
        get: function () {
            return this.config.filesTypes.some(function (file) { return file.type === availableExtensions.css; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactTemplating.prototype, "getCSSEngineExtension", {
        get: function () {
            if (this.hasSCSSModule) {
                return 'module.scss';
            }
            if (this.hasCSS) {
                return 'css';
            }
            if (this.hasCSSModule) {
                return 'module.css';
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactTemplating.prototype, "getDivClassName", {
        get: function () {
            if (!this.getCSSEngineExtension) {
                return '';
            }
            return this.hasCSS ? "className='container'" : 'className={styles.container}';
        },
        enumerable: false,
        configurable: true
    });
    ReactTemplating.prototype.addReactComponentImports = function () {
        return ("import React".concat(this.config.templateType !== availableTemplateTypes.lite ? ', { useState }' : '', " from 'react';\n") +
            (this.getCSSEngineExtension
                ? "import ".concat(this.hasCSS ? '' : 'styles from ', "'./").concat(this.name, ".").concat(this.getCSSEngineExtension, "';\n") : ''));
    };
    ReactTemplating.prototype.addReactComponentState = function () {
        return this.config.templateType !== availableTemplateTypes.lite ? "const [state, setState] = useState(null);\n\n" : '';
    };
    ReactTemplating.prototype.addReactComponentBody = function () {
        return ("export const ".concat(this.getComponentName, " = () => {\n") +
            this.addReactComponentState() +
            '   return (\n' +
            "      <div ".concat(this.getDivClassName, ">\n") +
            "          <h1>".concat(this.getComponentName, "</h1>\n") +
            '      </div>\n' +
            '     );\n' +
            '};\n');
    };
    ReactTemplating.prototype.createReactComponent = function () {
        return (this.addReactComponentImports() +
            '\n' +
            this.addReactComponentBody());
    };
    return ReactTemplating;
}());
export { ReactTemplating };
