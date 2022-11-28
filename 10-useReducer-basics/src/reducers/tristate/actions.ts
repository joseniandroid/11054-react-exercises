import { TriState } from './state';

export enum TriStateActionType {
  SetInputText = 'SET_INPUT_TEXT',
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
  SetIsDefaultColor = 'SET_IS_DEFAULT_COLOR',
}

export type TriStateAction = {
  type: TriStateActionType;
  payload: TriState;
};

export const setInputText = (inputText: string): TriStateAction => ({
  type: TriStateActionType.SetInputText,
  payload: { inputText },
});

export const increment = (): TriStateAction => ({
  type: TriStateActionType.Increment,
  payload: {},
});

export const decrement = (): TriStateAction => ({
  type: TriStateActionType.Decrement,
  payload: {},
});

export const toggleColor = (): TriStateAction => ({
  type: TriStateActionType.SetIsDefaultColor,
  payload: {},
});
