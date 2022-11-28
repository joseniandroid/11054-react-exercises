import { TriState } from './state';

export enum TriStateActionType {
  SetInputText = 'SET_INPUT_TEXT',
  SetCounter = 'SET_COUNTER',
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
