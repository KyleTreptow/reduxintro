import update from 'react-addons-update';

// seed info
const initialState = {
  "todolist": [
    {"name": "Mow the lawn", "completed": false},
    {"name": "Take a Shower", "completed": false},
    {"name": "Cut your hair", "completed": false},
    {"name": "Eat lunch", "completed": false},
  ]
};

// empty
// const initialState = {
//   "todolist": []
// };

export default function (state = initialState, action) {
  switch (action.type) {
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
