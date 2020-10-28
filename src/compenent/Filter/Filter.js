import React, {useEffect} from 'react';
import {Card, Button} from 'react-bootstrap'

const Filter = ({setFilterList, todos, status, setStatus}) => {

  const filterTodo=()=>{
    switch(status){
      case "ALL" : return setFilterList(todos)
      case "DONE" : return setFilterList(todos.filter(todo=>todo.isDone===true))
      case "UNDONE" : return setFilterList(todos.filter(todo=>todo.isDone===false))
      default : return todos;
    }
  }
  useEffect(() => {
    filterTodo()
  }, [status,todos])

    return (
       
              <div>
            <Card body>  <Button  style={{ marginRight: "20px"}} variant="outline-primary" onClick={()=>setStatus("ALL")}> ALL </Button>
            <Button  style={{ marginRight: "20px"}} onClick={()=>setStatus("DONE")} variant="outline-success"> Done </Button>
            <Button variant="outline-dark" onClick={()=>setStatus("UNDONE")}> Not_Done </Button>
      </Card>
       
        </div>
    );
}

export default Filter;
