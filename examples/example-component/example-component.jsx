import React from 'react';
import styles from './example-component.module.scss';

const ExampleComponent = () => {
   return (
      <div className={styles.container}>
          <h1>${this.name}</h1>
      </div>
     );
};

export default ExampleComponent;