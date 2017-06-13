import update from 'react-addons-update';

// seed info
const initialState = {
  "todolist": [
    { name :  'Example Init State 001', completed : false},
    { name :  'Example Init State 002', completed : false},
    { name :  'Example Init State 003', completed : false}
  ]
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVE_TODOS':
      // console.log('------------');
      // console.log('Retrieve Todos Reducer Payload:');
      // console.log(action.payload);
      // console.log('------------');
      let todo_data = action.payload;
      console.log(todo_data)
      return {
        ...state,
        todolist: state.todolist.concat(todo_data)
      };   
    case 'NEW_TODO':
      let new_todo = {"name": action.payload, "completed": false};
      return {
        ...state,
        todolist: state.todolist.concat(new_todo)
      };
    case 'TOGGLE_ACTIVE':
      console.log(state.todolist[action.payload].completed);
      return update(state,{
        todolist:{
          [action.payload]:{
            completed:{$set : !state.todolist[action.payload].completed}
          }
        }
      })
    default:
      return state;
  }
}
