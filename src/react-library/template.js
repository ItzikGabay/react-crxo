import { addTemplateImports, addTemplateHooks } from './imports.js';

export const JSXtemplate = (name, uppercased, cssType, templateType) => {
  return `${addTemplateImports(templateType, uppercased, cssType)}
const ${uppercased} = () => {
  ${addTemplateHooks(templateType)}
  return (
    <div className={styles.container}>
      <p className={styles.title}>Component created successfully.</p>
    </div>
  );
};

export default ${uppercased};`;
};

export const CSStemplate = (name, cssType) => {
  return `.container {
    color: red;
    font-size: 40px;
}`;
};
