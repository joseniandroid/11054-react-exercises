import { CountContext } from '../Parent';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child5 = () => {
  const count = useContext(CountContext);
  return (
    <div className={styles.childBox5}>
      <h1 className={styles.boxHeader}>{count}</h1>
    </div>
  );
};
