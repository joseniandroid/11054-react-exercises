import { TriStateAction, TriStateActionType } from './actions';

import { TriState } from './state';

export const triStateReducer = (
  state: TriState,
  action: TriStateAction
): TriState => {
  switch (action.type) {
    case TriStateActionType.SetInputText:
      return {
        ...state,
        inputText: action.payload.inputText,
      };

    default:
      return state;
  }
};
