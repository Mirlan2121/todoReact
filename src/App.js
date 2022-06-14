import './App.css';
import GetTodo from './componetns/GetTodo';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import CreateTodo from './componetns/CreateTodo';


function App() {

  const [todos, setTodo] = useState([])

  const API = 'https://jsonplaceholder.typicode.com/todos/'

  useEffect(() =>{
      axios.get(API).then((resp) => {
          const dataTodo = resp.data;
          setTodo(dataTodo);
      });

  },[setTodo])



  return (
    <div className="App">

      <GetTodo todos={todos} state={setTodo}/>


      <CreateTodo/>
     
    </div>
  );
}

export default App;
