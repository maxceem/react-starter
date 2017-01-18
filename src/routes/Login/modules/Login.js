import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import APIService from '../../../services/APIService';

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_ERROR = 'Login/LOGIN_ERROR';
export const LOGIN_SUCCESS = 'Login/LOGIN_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------


export const handleLoginSubmit = (values, dispatch) => new Promise((resolve) => {
  APIService.login(values).then(({ user, token }) => {
    localStorage.token = token;
    dispatch({ type: LOGIN_SUCCESS });
    dispatch({ type: 'global/LOADED', payload: user });
    dispatch(push('/'));
    resolve();
    return null;
  }).catch(() => {
    dispatch({ type: LOGIN_ERROR });
    resolve();
  });
});

export const actions = {

};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [LOGIN_ERROR]: (state) => ({ ...state, invalidLogin: true }),
  [LOGIN_SUCCESS]: (state) => ({ ...state, invalidLogin: false }),
}, {
  invalidLogin: false,
});
