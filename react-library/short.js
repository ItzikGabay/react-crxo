const shortJsx = (componentName, componentNameUppercased) => {
  return `import React from 'react';
import styles from './${componentName}.module.css';

const ${componentNameUppercased} = () => {
  return (
    <div className={styles["${componentName}-container"]}>
    Working
    </div>
  )
}

export default ${componentNameUppercased}`;
};

const shortCss = (componentName) => {
  return `.${componentName}-container {
    font-size: 200px;
}`;
};

export { shortJsx, shortCss };
