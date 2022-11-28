import { setInputText, triStateReducer } from '../reducers/tristate';
import { useReducer, useState } from 'react';

export const TriStateReducerDemo = () => {
  const [state, dispatch] = useReducer(triStateReducer, {});
  const { counter, inputText, isDefaultColor } = state;

  return (
    <main style={{ color: isDefaultColor ? 'black' : 'red' }}>
      <h2>TriState Reducer Demo</h2>
      <input
        type='text'
        placeholder='Enter text'
        value={inputText}
        onChange={(e) => dispatch(setInputText(e.target.value))}
      />
      <h3>{counter}</h3>
      <h3>{inputText}</h3>
      <div>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setIsDefaultColor(!isDefaultColor)}>
          Toggle Color
        </button> */}
      </div>
    </main>
  );
};
