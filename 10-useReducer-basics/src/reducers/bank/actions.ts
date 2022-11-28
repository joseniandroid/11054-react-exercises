export enum BankActionType {
  Withdraw = 'WITHDRAW',
  Deposit = 'DEPOSIT',
}

export type BankAction = {
  type: BankActionType;
  payload: number;
};

export const deposit = (amount: number): BankAction => ({
  type: BankActionType.Deposit,
  payload: amount,
});

export const withdraw = (amount: number): BankAction => ({
  type: BankActionType.Withdraw,
  payload: amount,
});
