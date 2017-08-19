import update from 'react-addons-update';

// seed info
const initialState = {
  "todolist": []
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVE_TODOS':
      let todo_data = action.payload;
      return {
        ...state,
        todolist: todo_data
      };
    case 'NEW_TODO':
      let new_todo = {"name": action.payload, "completed": false};
      return {
        ...state,
        todolist: state.todolist.concat(new_todo)
      };
    case 'TOGGLE_ACTIVE':
      console.log(state.todolist[action.payload].completed);
      // return update(state,{
      //   todolist:{
      //     [action.payload]:{
      //       completed:{$set : !state.todolist[action.payload].completed}
      //     }
      //   }
      // })
    default:
      return state;
  }
}
