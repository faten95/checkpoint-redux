import { ADD_TODO, TOGGLE_TODO, EDIT_TODO} from "../action/action";
const todos = [
  { id: 1, description: "First task", isDone: false },
  { id: 2, description: "Second task", isDone: false },
  { id: 3, description: "Third task", isDone: false },
];
const reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
      case ADD_TODO:
         newTodos=[...state];
         newTodos.push(action.payload);
         return newTodos;
      case TOGGLE_TODO:
        return state.map(todo =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
          );

          case EDIT_TODO:
        return state.map(todo =>
            todo.id === action.payload.id ? { ...todo,description:action.payload.description } : todo
          );
      default:
        return state;
    }
  }
  
  export default reducer;