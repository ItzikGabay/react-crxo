/**
 * Short JSX template.
 */
const shortJsx = (name, uppercased) => {
  return `import styles from "./${name}.module.css";

const ${uppercased} = () => {
  return (
    <div className={styles.${name}__container}>
        <div className={styles.${name}__main}>
          <p className={styles.${name}}__title>Component created successfully.<p>
        </div>
    </div>
  )
}

export default ${uppercased};`;
};

/**
 * Short CSS template.
 */
const shortCss = name => {
  return `.${name}__container {
    font-size: 200px;
}`;
};

export { shortJsx, shortCss };
