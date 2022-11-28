import {
  BankAction,
  BankActionType,
  bankReducer,
  initialState,
} from '../reducers/bank';
import { useReducer, useState } from 'react';

export const BankReducerDemo = () => {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(bankReducer, initialState);

  const handleDeposit = (amount: number) => {
    const depositAction: BankAction = {
      type: BankActionType.Deposit,
      payload: amount,
    };
    dispatch(depositAction);
  };

  const handleWithdrawal = (amount: number) => {
    dispatch({
      type: BankActionType.Withdraw,
      payload: amount,
    });
  };

  const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountValue = parseInt(e.target.value);
    setAmount(amountValue);
  };

  return (
    <>
      <h2>{state.balance}</h2>
      <input type='number' value={amount} onChange={handleSetAmount} />

      <div style={{ marginTop: '1em' }}>
        <button onClick={() => handleDeposit(amount)}>Deposit</button>
        <span style={{ marginLeft: '1em' }}></span>
        <button onClick={() => handleWithdrawal(amount)}>Withdraw</button>
      </div>
    </>
  );
};
