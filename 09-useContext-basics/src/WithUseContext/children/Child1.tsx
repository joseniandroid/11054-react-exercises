import { Child2 } from './Child2';
import { CountContext } from '../Parent';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child1 = () => {
  const count = useContext(CountContext);

  return (
    <div className={styles.childBox1}>
      <Child2 />
      <h1 className={styles.boxHeader}>{count}</h1>
    </div>
  );
};
