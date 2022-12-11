import { addTemplateImports, addTemplateHooks } from './imports.js';

export const JSXtemplate = (name, uppercased, cssType, templateType) => {
  return `${addTemplateImports(templateType, uppercased, cssType)}
const ${uppercased} = () => {
  ${addTemplateHooks(templateType)}
  return (
    <section className={styles.container}>
      <header className={styles.header}>
          <p>Component created successfully.</p>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </section>
  );
};

export default ${uppercased};`;
};

export const CSStemplate = () => {
  return `.container {
    color: red;
    font-size: 40px;
}`;
};
