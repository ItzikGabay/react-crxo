export function addTemplateImports(templateType, name, cssType) {
  let importsValue = '';

  if (templateType === 'lite' || templateType === 'regular') {
    importsValue += `import styles from "./${name}.${
      cssType === 'css' ? 'module.css' : 'module.scss'
    }";`;
    importsValue += '\n';
  }

  if (templateType === 'regular') {
    importsValue += "import { useState, useEffect } from 'react';";
    importsValue += '\n';
  }

  return importsValue;
}

export function addTemplateHooks(templateType) {
  let hooksValue = '';

  if (templateType !== 'regular') {
    hooksValue += `const [state, setState] = useState(null);
    
    useEffect(() => {
        setState('ok');
    }, []);`;
    hooksValue += '\n';
  }

  return hooksValue;
}
