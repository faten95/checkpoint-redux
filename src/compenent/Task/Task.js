import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edtiTodo } from "../../action/action";
import {toggleTodo} from '../../action/action'

const Task = ({ todo }) => {
  const [edittask, setEdittask] = useState(false);
  const [description, setDescription] = useState(todo.description);
  const dispatch = useDispatch();
  // const handleOnChange = (e) => {
  //     setDescription(e.target.value)
  // }
  return (
    <div style={{display: "flex", flexDirection: "row" ,margin: "20px"}}>

        {edittask ? (
          <input
            className="form-control"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        ) : (
          <h5 onClick={() => dispatch(toggleTodo(todo.id))}  style={{marginRight: "20px", textDecoration: todo.isDone ? 'line-through' : 'none' }}
          >{todo.description}</h5>
        )}
    
      <Button
        variant="primary"
        onClick={() => {
          dispatch(edtiTodo(todo.id, description));
          setEdittask(!edittask);
        }}
      >
        {edittask ? "Update" : "Edit"}
      </Button>

    </div>
  );
};
// {/* <input  value={description} className= "form-control" type="text"/> : */}
// OnChange ={handleOnChange}
// onClick={onClick}
//            style={{ textDecoration: isDone ? 'line-through' : 'none' }}
export default Task;
