import CoreLayout from 'layouts/CoreLayout';
import LoginRoute from './Login';
import LogoutRoute from './Logout';
import HomeRoute from './Home';
import TestRoute from './Test';

export const createRoutes = (store) => ({
  path: '/',
  onEnter: (nextState, replace, cb) => {
    const { global: { loaded } } = store.getState();
    if (loaded) {
      cb();
      return;
    }
    const getMe = require('./resolver').default;

    getMe(store).then(() => cb());
  },
  childRoutes: [
    // user must be not logged in
    {
      onEnter: (nextState, replace, cb) => {
        const { global: { user } } = store.getState();
        if (user) {
          replace('/');
        }
        cb();
      },
      childRoutes: [
        LoginRoute(store),
      ],
    },
    // user logout route without CoreLayout
    {
      onEnter: (nextState, replace, cb) => {
        const { global: { user } } = store.getState();
        if (!user) {
          replace('/login');
        }
        cb();
      },
      childRoutes: [
        LogoutRoute(store),
      ],
    },
    // user must be logged in
    {
      onEnter: (nextState, replace, cb) => {
        const { global: { user } } = store.getState();
        if (!user) {
          replace('/login');
        }
        cb();
      },
      component: CoreLayout,
      indexRoute: {
        onEnter: (nextState, replace, cb) => {
          replace('/home');
          cb();
        },
      },
      childRoutes: [
        HomeRoute(store),
        TestRoute(store),
      ],
    },
  ],
});

export default createRoutes;
