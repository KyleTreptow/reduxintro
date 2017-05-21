import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todo from './todo'; 

const appReducer = combineReducers({
  todo,
  form
});

export default function (state, action) {
  return appReducer(state, action);
}



