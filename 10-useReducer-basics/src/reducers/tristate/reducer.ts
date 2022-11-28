import { TriStateAction, TriStateActionType } from './actions';

import { TriState } from './state';

export const triStateReducer = (
  state: TriState,
  action: TriStateAction
): TriState => {
  const countValue = state.counter ?? 0;
  switch (action.type) {
    case TriStateActionType.SetInputText:
      return {
        ...state,
        inputText: action.payload.inputText,
      };

    case TriStateActionType.Increment:
      return {
        ...state,
        counter: countValue + 1,
      };

    case TriStateActionType.Decrement:
      return {
        ...state,
        counter: countValue - 1,
      };

    case TriStateActionType.SetIsDefaultColor:
      return {
        ...state,
        isDefaultColor: !state.isDefaultColor,
      };

    default:
      return state;
  }
};
