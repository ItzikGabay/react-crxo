import { addTemplateImports, addTemplateHooks } from './imports.js';
export var JSXtemplate = function (name, uppercased, cssType, templateType) {
    var templateImports = addTemplateImports(templateType, uppercased, cssType);
    var templateHooks = addTemplateHooks(templateType);
    return "".concat(templateImports, "\nconst ").concat(uppercased, " = () => {\n  ").concat(templateHooks, " return (\n    <section className={styles.container}>\n      <header className={styles.header}>\n          <p>Component created successfully.</p>\n      </header>\n      <main className={styles.main}></main>\n      <footer className={styles.footer}></footer>\n    </section>\n  );\n};\n\nexport default ").concat(uppercased, ";");
};
export var CSStemplate = function () {
    return ".container {\n    color: red;\n    font-size: 40px;\n}";
};
//# sourceMappingURL=template.js.map