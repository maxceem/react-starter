import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';

// ------------------------------------
// Constants
// ------------------------------------


// ------------------------------------
// Actions
// ------------------------------------
export const handleLogout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'global/LOADED', payload: null });
  dispatch(push('/login'));
};

export const actions = {
  handleLogout,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({

}, {});
