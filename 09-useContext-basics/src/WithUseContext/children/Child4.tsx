import { Child5 } from './Child5';
import styles from './Child.module.css';

export const Child4 = () => {
  return (
    <div className={styles.childBox4}>
      <Child5 />
    </div>
  );
};
