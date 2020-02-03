export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const CLEAR = "CLEAR";

const add = (params) => (dispatch) => {
  dispatch({ type: ADD, payload: params});
};

const del = (params) => (dispatch) => {
  dispatch({ type: DELETE, payload: params});
};

const done = (params) => (dispatch) => {
    dispatch({ type: DONE, payload: params});
  };

const clear = () => (dispatch) => {
    dispatch({ type: CLEAR});
};

export {
  add,
  done,
  del,
  clear,
};
