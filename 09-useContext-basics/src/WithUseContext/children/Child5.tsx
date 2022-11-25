import { ChildProps } from './Child1';
import styles from './Child.module.css';

export const Child5 = ({ count }: ChildProps) => {
  return (
    <div className={styles.childBox5}>
      <h1 className={styles.boxHeader}>{count}</h1>
    </div>
  );
};
