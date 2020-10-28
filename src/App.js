import React, {useState} from 'react';
import './App.css';
import Addtask from './compenent/Addtask/Addtask';
import {useSelector } from 'react-redux'
import Filter from './compenent/Filter/Filter';
import ListTask from './compenent/ListTask/ListTask';

function App() {
  const todos = useSelector((state) => state);
  const [filterList, setFilterList] = useState(todos);
  const [status, setStatus] = useState("ALL");
  return (
    <div className="App"  >
     <Addtask className="card"  />
     <ListTask className="card" filterList={filterList} status={status} />
     <Filter className="card" 
          setFilterList={setFilterList}
          todos={todos}
          status={status}
          setStatus={setStatus}
     />
    </div>
      
  );
}

export default App;
