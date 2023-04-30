import { availableExtensions } from './files.js';
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
        return ("import React from 'react';\n" +
            (this.getCSSEngineExtension
                ? "import ".concat(this.hasCSS ? '' : 'styles from ', "'./").concat(this.name, ".").concat(this.getCSSEngineExtension, "';\n") : ''));
    };
    ReactTemplating.prototype.addReactComponentState = function (templateType) {
        return templateType !== availableTemplateTypes.lite ? "const [state, setState] = useState();\n\n" : '';
    };
    ReactTemplating.prototype.addReactComponentBody = function () {
        return ("const ".concat(this.getComponentName, " = () => {\n") +
            this.addReactComponentState(this.config.templateType) +
            '   return (\n' +
            "      <div".concat(this.getDivClassName, ">\n") +
            '          <h1>${this.name}</h1>\n' +
            '      </div>\n' +
            '     );\n' +
            '};\n');
    };
    ReactTemplating.prototype.addReactExport = function () {
        return "export default ".concat(this.getComponentName, ";");
    };
    ReactTemplating.prototype.createReactComponent = function () {
        return (this.addReactComponentImports() +
            '\n' +
            this.addReactComponentBody() +
            '\n' +
            this.addReactExport());
    };
    return ReactTemplating;
}());
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
var IndexTemplating = /** @class */ (function () {
    function IndexTemplating(name) {
        this.name = name;
    }
    IndexTemplating.prototype.addIndexImports = function () {
        return "export ".concat(this.name, " from './").concat(this.name, "';\n");
    };
    IndexTemplating.prototype.createIndex = function () {
        return this.addIndexImports();
    };
    return IndexTemplating;
}());
export var createTemplate = function (file, config) {
    var reactComponent = new ReactTemplating(config);
    var css = new CSSTemplating();
    switch (file.type) {
        case availableExtensions.react:
            return reactComponent.createReactComponent();
        case availableExtensions.css:
            return css.createCSS();
        case availableExtensions.cssModule:
            return css.createCSS();
        case availableExtensions.scssModule:
            return css.createCSS();
        default:
            return '';
    }
};
