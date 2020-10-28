import React from 'react';
import {Card} from 'react-bootstrap'
import { useSelector } from "react-redux";
import Task from '../Task/Task';

const ListTask = ({ filterList, status }) => {
    const todos = useSelector((state) => state);
    return (
    
              <div>
            <Card body >
                
            { status === "DONE" || status === "UNDONE" ? filterList.map((todo) =>(
            <Task key={todo.id}
                todo={todo} /> )): todos.map((todo) => (
                      <Task key={todo.id}
                    todo={todo} />
                     ))}
            </Card>
       
        </div>
    );
}


export default ListTask;
