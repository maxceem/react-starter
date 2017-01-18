import { asyncConnect } from 'redux-connect';
import { actions } from '../modules/Logout';

import LogoutView from '../components/LogoutView';

const resolve = [{
  promise: () => Promise.resolve(),
}];

const mapState = (state) => state.logout;

export default asyncConnect(resolve, mapState, actions)(LogoutView);
