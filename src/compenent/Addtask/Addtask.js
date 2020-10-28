import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import {useDispatch } from "react-redux";
import {addTodo} from "../../action/action"

const Addtask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setDescription(e.target.value)
    }
    const handleAdd = () => {
        dispatch(addTodo({id: Math.random(), description: description, isDone: false}))
        setDescription('')
      }
    return (
        
        <div>
            <Card body > 
            <div style={{display: "flex", flexDirection: "row" ,margin: "20px"}}>
            <input style={{marginRight: "10px"}} onChange={handleOnChange} value={description} className= "form-control" type="text" placeholder="You text here"/>
            <Button  onClick={handleAdd} variant="primary" >Add</Button>
            </div>
            </Card>
        </div>
    );
}

export default Addtask;
