import { useState } from 'react';

export const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
};
