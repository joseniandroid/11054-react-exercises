import { createContext, useState } from 'react';

import { Child1 } from './children';

export const CountContext = createContext(0);

export const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Child1 />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </CountContext.Provider>
  );
};
