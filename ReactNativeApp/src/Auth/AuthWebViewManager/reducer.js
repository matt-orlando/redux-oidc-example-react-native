// @flow
import actionTypes from './actions';

type StateType = {
  showWebView: boolean,
  url: string
}

const initialState: StateType = {
  showWebView: false,
  url: ''
};

export default function reducers(state: StateType = initialState, action: { type: string, payload: string }) {
  switch (action.type) {
  case actionTypes.SHOW:
    return Object.assign({}, state, {
      showWebView: true,
      url: action.payload
    });
  case actionTypes.HIDE:
    return Object.assign({}, state, {
      showWebView: false,
      url: ''
    });
  default:
    return state;
  }
}
