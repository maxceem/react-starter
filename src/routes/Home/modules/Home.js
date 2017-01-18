import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const SAMPLE = 'Home/SAMPLE';

// ------------------------------------
// Actions
// ------------------------------------


export const sample2 = () => async (dispatch, getState) => {
  dispatch; // to pass linting
  getState; // to pass linting
};

export const actions = {
  sample: createAction(SAMPLE),
  sample2,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SAMPLE]: (state, { payload }) => state, // eslint-disable-line no-unused-vars
}, {});
