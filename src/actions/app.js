import {reset} from 'redux-form';

export function toggleActive(id){
  return (dispatch) => {
    dispatch({ type: "TOGGLE_ACTIVE", payload: id });
  };
}

export function formSubmit(data){
  return (dispatch) => {
    dispatch({type: "NEW_TODO", payload: data.todo })
    dispatch(reset('todo'));
  };
}