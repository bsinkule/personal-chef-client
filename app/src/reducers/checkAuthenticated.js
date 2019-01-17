import {
  CHECK_AUTHENTICATED,
} from '../actions/typeConstants';

const initialState = { authenticated: false };

export const checkAuth = (state = initialState, action) => {
  switch (action.type) {
  case CHECK_AUTHENTICATED:
      return { ...state, authenticated: true };
  default:
      return state;
  }
};