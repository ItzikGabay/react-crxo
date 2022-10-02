import { addTemplateImports, addTemplateHooks } from './imports.js';

export const JSXtemplate = (name, uppercased, cssType, templateType) => {
  return `${addTemplateImports(templateType, uppercased, cssType)}
const ${uppercased} = () => {
  ${addTemplateHooks()}
  return (
    <div className={styles.container}>
      <p className={styles.title}>Component created successfully.</p>
    </div>
  );
};

export default ${uppercased};`;
};

export const CSStemplate = (name, cssType) => {
  return `.${cssType === 'css' ? name + '__' : ''}container {
    font-size: 200px;
}`;
};
