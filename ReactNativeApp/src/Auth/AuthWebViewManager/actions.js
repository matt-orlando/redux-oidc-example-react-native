// @flow
const actionTypes = {
  SHOW: 'Auth.AuthWebViewManager.ShowWebView',
  HIDE: 'Auth.AuthWebViewManager.HideWebView'
};

export const showWebView = function(url: string) {
  return {
    type: actionTypes.SHOW,
    payload: url
  };
};

export const hideWebView = function() {
  return {
    type: actionTypes.HIDE
  };
};

export default actionTypes;
