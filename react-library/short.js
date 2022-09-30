/**
 * Short JSX template.
 */
const shortJsx = (name, uppercased, cssType) => {
  return `import styles from "./${name}.${
    cssType === 'css' ? 'module.css' : 'module.scss'
  }";

const ${uppercased} = () => {
  return (
    <div className={styles.${cssType === 'css' ? name + '__' : ''}container}>
        <div className={styles.${cssType === 'css' ? name + '__' : ''}main}>
          <p className={styles.${
            cssType === 'css' && name + '__'
          }title}>Component created successfully.</p>
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
