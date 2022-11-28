import { bankReducer, initialState } from '../reducers/bank';
import { useReducer, useState } from 'react';

export const BankReducerDemo = () => {
  const [state, dispatch] = useReducer(bankReducer, initialState);
  return <h2>{state.balance}</h2>;
};
