// @flow
import * as actionTypes from './SigninPageActions';

const initialState = {
  message: ''
};

export default (state: Object = initialState, action: { type: string, payload: string }) => {
  switch (action.type) {
    case actionTypes.SIGNIN_PAGE_ERROR:
      return {
        message: action.payload
      };
    case actionTypes.SIGNIN_PAGE_CLEAR:
      return {
        message: ''
      };
    default:
      return state;
  }
};
