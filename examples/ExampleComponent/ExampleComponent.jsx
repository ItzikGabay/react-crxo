import { useState, useEffect } from 'react';
import styles from "./ExampleComponent.module.scss";

const ExampleComponent = () => {
  const [state, setState] = useState(null);
    
    useEffect(() => {
        setState('ok');
    }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Component created successfully.</p>
    </div>
  );
};

export default ExampleComponent;