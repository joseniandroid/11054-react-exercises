import { Child4 } from './Child4';
import styles from './Child.module.css';

export const Child3 = () => {
  return (
    <div className={styles.childBox3}>
      <Child4 />
    </div>
  );
};
