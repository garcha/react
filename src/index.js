import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
  fetching:false,
  fetched: false,
  users: [],
  error: null,
};

const reducer = (state={}, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECEIVE_USERS": {
      return {...state,
        fetching: false,
        fetch: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})
  axios.get("http://rest.learncode.academy/api/jazz/users")
    .then((response) => {
      dispatch({type: "RECEIVE_USERS", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err})
    })
  //do something async
})







// store.dispatch({type: 'CHANGE_AGE', payload: 31})
// store.dispatch({type: 'CHANGE_AGE', payload: 32})
// store.dispatch({type: 'E'})

// store.subscribe(() => {
//   console.log("store changed", store.getState())
// })

// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case "CHANGE_NAME": {
//       state = {...state, name: action.payload};
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = {...state, age: action.payload};
//       break;
//     }
//   }
//   return state;
// };
//
// const tweetsReducer = (state=[], action) => {
//
//   return state;
// };
//
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer,
// })

// const logger = (store) => (next) => (action) => {
//   console.log("action fired", action);
//   next(action);
// }
//
// const error = (store) => (next) => (action) => {
//   try {
//     next(action);
//   }catch(e){
//     console.log("error", e);
//   }
// }
