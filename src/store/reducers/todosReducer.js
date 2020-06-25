import { TodoActionTypes } from '../actions';


const todos = (state = [], action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TodoActionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TodoActionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case TodoActionTypes.CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};

export default todos;
