import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// set alert
export const setAlert = (msg, msgType) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      msgType
    }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 4000);
};
