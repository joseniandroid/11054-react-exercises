import { Child4 } from './Child4';
import { ChildProps } from './Child1';
import styles from './Child.module.css';

export const Child3 = ({ count }: ChildProps) => {
  return (
    <div className={styles.childBox3}>
      <Child4 count={count} />
    </div>
  );
};
