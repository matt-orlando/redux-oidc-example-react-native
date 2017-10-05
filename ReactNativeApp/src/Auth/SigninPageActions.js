// @flow
export const SIGNIN_PAGE_ERROR = 'SIGNIN_PAGE_ERROR';
export const SIGNIN_PAGE_CLEAR = 'SIGNIN_PAGE_CLEAR';

export const signinPageError = (message: string) => {
  return {
    type: SIGNIN_PAGE_ERROR,
    payload: message
  };
};

export const signinPageClear = () => {
  return {
    type: SIGNIN_PAGE_CLEAR
  };
}
