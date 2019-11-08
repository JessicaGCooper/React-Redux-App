import axios from 'axios';

export const FETCH_ROCKETS_START = 'FETCH_ROCKETS_START';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';

export const fetchRockets = () => dispatch => {
  dispatch({ type: FETCH_ROCKETS_START })
  axios
    .get('https://api.spacexdata.com/v3/rockets')
    .then(res => {
        console.log(res)
      dispatch({ type: FETCH_ROCKETS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log('error', err.response);
      dispatch({
        type: FETCH_ROCKETS_FAILURE,
        payload: `${err.response} ${err.response}`
      });
    });
};

// Notes for use later
// redux thunk flow
// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action);//forward action untouched to reducer (reducers need actions as objects)
//     } else if (typeof action === 'function') {
//         action() //stop action and call the function/action & get access to 'dispatch' to use in async action
//     }
// }