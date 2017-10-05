// @flow
import { createUserManager } from 'redux-oidc';
import { AsyncStorage } from 'react-native';
import ReactNativePersistantStore from './ReactNativePersistantStore';
import ReactNativePopupNavigator from './ReactNativePopupNavigator';
import { open, addOnLoadStartListener, close } from './AuthWebViewManager';

const stateStore = new ReactNativePersistantStore({ prefix: 'oidc.stateStore.', asyncStorage: AsyncStorage });
const userStore = new ReactNativePersistantStore({ prefix: 'oidc.userStore.', asyncStorage: AsyncStorage });

const popupNavigator = new ReactNativePopupNavigator({
  open,
  addOnLoadStartListener,
  close
});

const userManagerConfig = {
  client_id: 'foo',
  redirect_uri: 'http://localhost:3002/callback',
  response_type: 'id_token token',
  scope: 'openid email',
  authority: 'http://localhost:3000',
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: false,
  stateStore,
  userStore,
  popupNavigator
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
