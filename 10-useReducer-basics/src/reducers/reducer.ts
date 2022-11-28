import { BankAction } from './actions';
import { BankState } from './state';

const bankReducer = (state: BankState, action: BankAction): BankState => {
  return {
    balance: 500,
  };
};
