export function addTemplateImports(templateType, name, cssType) {
    var importsValue = '';
    if (templateType === 'regular') {
        importsValue += "import { useState, useEffect } from 'react';";
        importsValue += '\n';
    }
    if (templateType === 'lite' || templateType === 'regular') {
        importsValue += "import styles from \"./".concat(name, ".").concat(cssType === 'css' ? 'module.css' : 'module.scss', "\";");
        importsValue += '\n';
    }
    return importsValue;
}
export function addTemplateHooks(templateType) {
    var hooksValue = '';
    if (templateType === 'regular') {
        hooksValue += "const [state, setState] = useState(null);\n    \n    useEffect(() => {\n        setState('ok');\n    }, []);";
        hooksValue += '\n';
    }
    return hooksValue;
}
