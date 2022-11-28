import {
  decrement,
  increment,
  setInputText,
  triStateReducer,
} from '../reducers/tristate';
import { useReducer, useState } from 'react';

export const TriStateReducerDemo = () => {
  const [state, dispatch] = useReducer(triStateReducer, { counter: 100 });
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
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {/* <button onClick={() => setIsDefaultColor(!isDefaultColor)}>
          Toggle Color
        </button> */}
      </div>
    </main>
  );
};
