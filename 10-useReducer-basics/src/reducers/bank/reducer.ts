import { BankAction } from './actions';
import { BankState } from './state';

export const bankReducer = (
  state: BankState,
  action: BankAction
): BankState => {
  return {
    balance: 500,
  };
};
