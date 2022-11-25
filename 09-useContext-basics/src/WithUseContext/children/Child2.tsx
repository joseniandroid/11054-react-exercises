import { Child3 } from './Child3';
import { ChildProps } from './Child1';
import styles from './Child.module.css';

export const Child2 = ({ count }: ChildProps) => {
  return (
    <div className={styles.childBox2}>
      <Child3 count={count} />
    </div>
  );
};
