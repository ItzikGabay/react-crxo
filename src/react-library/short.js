export const shortJsx = (name, uppercased, cssType, templateType) => {
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

export const shortCss = (name, cssType) => {
  return `.${cssType === 'css' ? name + '__' : ''}container {
    font-size: 200px;
}`;
};
