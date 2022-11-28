import { BankAction, BankActionType } from './actions';

import { BankState } from './state';

export const bankReducer = (
  state: BankState,
  action: BankAction
): BankState => {
  switch (action.type) {
    case BankActionType.Deposit:
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case BankActionType.Withdraw:
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};
