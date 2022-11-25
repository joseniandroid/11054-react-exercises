import { Child3 } from './Child3';
import styles from './Child.module.css';

export const Child2 = () => {
  return (
    <div className={styles.childBox2}>
      <Child3 />
    </div>
  );
};
