import {
  ADD_DAY, REMOVE_DAY,
} from '../actions/typeConstants';

export const savedDays = (state = [], action) => {
  switch (action.type) {
  case ADD_DAY:
      return [ ...state, action.value ]

  case REMOVE_DAY:
    return [
      ...state.slice(0, action.value),
      ...state.slice(action.value + 1, state.length)
    ];

  default:
    return state;
  }
};
