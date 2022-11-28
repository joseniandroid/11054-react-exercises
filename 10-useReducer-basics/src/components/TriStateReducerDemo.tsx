import { useState } from 'react';

export const TriStateReducerDemo = () => {
  const [inputText, setInputText] = useState('');
  const [count, setCount] = useState(0);
  const [isDefaultColor, setIsDefaultColor] = useState(true);

  return (
    <main style={{ color: isDefaultColor ? 'black' : 'red' }}>
      <h2>TriState Reducer Demo</h2>
      <input
        type='text'
        placeholder='Enter text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <h3>{count}</h3>
      <h3>{inputText}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setIsDefaultColor(!isDefaultColor)}>
          Toggle Color
        </button>
      </div>
    </main>
  );
};
