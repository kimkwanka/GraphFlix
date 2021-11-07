import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './index';

const preloadedUser = {
  ...JSON.parse(localStorage.getItem('user') || '{}'),
  isLoggedIn: true,
};

const preloadedState = preloadedUser.token ? { user: preloadedUser } : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export type IDispatch = typeof store.dispatch;

export default store;
