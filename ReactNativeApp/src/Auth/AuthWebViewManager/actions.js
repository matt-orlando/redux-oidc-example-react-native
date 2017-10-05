// @flow
const actionTypes = {
  SHOW: 'Framework.AuthWebViewManager.ShowWebView',
  HIDE: 'Framework.AuthWebViewManager.HideWebView'
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
