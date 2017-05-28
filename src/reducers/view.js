//handles the views between tabs

const initialState = {
	todoView: true,
	completedView: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TODO_VIEW_ACTIVE':
      return {
        ...state,
        todoView: true,
        completedView: false
      };
    case 'COMPLETED_VIEW_ACTIVE':
      return {
        ...state,
        todoView: false,
        completedView: true
      };
    case 'ALL_VIEW_ACTIVE':
      return {
        ...state,
        todoView: true,
        completedView: true
      };
    default:
      return state;
  }
}
