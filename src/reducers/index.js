import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todo from './todo'; 
import view from './view'; 

const appReducer = combineReducers({
  todo,
  view,
  form
});

export default function (state, action) {
  return appReducer(state, action);
}



