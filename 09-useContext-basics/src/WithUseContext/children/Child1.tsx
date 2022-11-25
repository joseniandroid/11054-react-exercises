import { Child2 } from './Child2';
import styles from './Child.module.css';

export const Child1 = () => {
  return (
    <div className={styles.childBox1}>
      <Child2 />
    </div>
  );
};
