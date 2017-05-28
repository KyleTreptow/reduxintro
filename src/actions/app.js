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

export function todoViewActive(){ return (dispatch) => { dispatch({type: "TODO_VIEW_ACTIVE"}) }; }
export function completedViewActive(){ return (dispatch) => { dispatch({type: "COMPLETED_VIEW_ACTIVE"}) }; }
export function allViewActive(){ return (dispatch) => { dispatch({type: "ALL_VIEW_ACTIVE"}) }; }