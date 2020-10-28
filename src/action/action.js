export const ADD_TODO = "ADD_TODO"
export const  TOGGLE_TODO =  "TOGGLE_TODO"
export const  EDIT_TODO =  "EDIT_TODO"
export function addTodo(todo) {
  return { type: ADD_TODO, payload: todo };
}
export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: id };
};

export const edtiTodo = (id, description) => ({
  type: EDIT_TODO,
  payload : {id, description}
});