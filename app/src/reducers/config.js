import {
  GET_CONFIG,
} from '../actions/typeConstants';

const initialState = { open: false };

export const getConfig = (state = initialState, action) => {
  switch (action.type) {
  case GET_CONFIG:
      return { ...state, open: true };
  default:
      return state;
  }
};