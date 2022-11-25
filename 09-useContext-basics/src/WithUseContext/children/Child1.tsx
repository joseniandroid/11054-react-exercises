import { Child2 } from './Child2';
import styles from './Child.module.css';

export type ChildProps = {
  count: number;
};

export const Child1 = ({ count }: ChildProps) => {
  return (
    <div className={styles.childBox1}>
      <Child2 count={count} />
      <h1 className={styles.boxHeader}>{count}</h1>
    </div>
  );
};
