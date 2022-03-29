/**
 * Short JSX template.
 */
const shortJsx = (componentName, componentNameUppercased) => {
  return `import stylesheet from "./${componentName}.module.css";

const ${componentNameUppercased} = () => {
  return (
    <div className={stylesheet.${componentName}__container}>
        <div className={stylesheet.${componentName}__main}>
          Component created successfully.
        </div>
    </div>
  )
}

export default ${componentNameUppercased};`;
};

/**
 * Short CSS template.
 */
const shortCss = (componentName) => {
  return `.${componentName}__container {
    font-size: 200px;
}`;
};

export { shortJsx, shortCss };
