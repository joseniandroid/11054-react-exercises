import { Child5 } from './Child5';
import { ChildProps } from './Child1';
import styles from './Child.module.css';

export const Child4 = ({ count }: ChildProps) => {
  return (
    <div className={styles.childBox4}>
      <Child5 count={count} />
    </div>
  );
};
