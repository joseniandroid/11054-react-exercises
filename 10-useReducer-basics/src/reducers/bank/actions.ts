export enum BankActionType {
  Withdraw = 'WITHDRAW',
  Deposit = 'DEPOSIT',
}

export type BankAction = {
  type: BankActionType;
  payload: number;
};
