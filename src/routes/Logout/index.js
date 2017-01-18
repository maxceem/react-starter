import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'logout',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Logout = require('./containers/LogoutContainer').default;
      const reducer = require('./modules/Logout').default;

      injectReducer(store, { key: 'logout', reducer });
      cb(null, Logout);
    }, 'Logout');
  },
});
