import { addTemplateImports, addTemplateHooks } from './imports.js';

export const JSXtemplate = (name, uppercased, cssType, templateType) => {
  return `${addTemplateImports(templateType, uppercased, cssType)}
const ${uppercased} = () => {
  ${addTemplateHooks()}
  return (
    <div className={styles.${cssType === 'css' ? name + '__' : ''}container}>
      <div className={styles.${cssType === 'css' ? name + '__' : ''}main}>
        <p className={styles.${
          cssType === 'css' && name + '__'
        }title}>Component created successfully.</p>
      </div>
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
