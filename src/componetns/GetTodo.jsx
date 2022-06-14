import React from 'react';
import Todo from './Todo';

const GetTodo = ({todos, setTodo}) => {

    return (
        <div className="container">

           {
               todos.map(todo => {
                   return (
                     <Todo key={todo.id} product={todo} state={setTodo}/>
                   )
               })
           }
        </div>
    );
};

export default GetTodo;