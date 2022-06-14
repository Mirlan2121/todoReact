import React, { useEffect, useState } from "react";
import s from "./todo.module.css";
import axios from "axios";

const Todo = ({ product, setTodo }) => {
  const [status, setStatus] = useState("");

  
useEffect(() => {
  async function handleDelete(id) {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => setStatus(`Delete successful ${id}`));
      setTodo([])
  }
})

  console.log(status);

  return (
    <div className={s.todo}>
      <div className={s.todo_block}>
        <h1>{product.id}</h1>
        <div>{product.title}</div>

        <button
          onClick={() => {
            handleDelete(product.id);
          }}
        >
          удалить
        </button>
      </div>
    </div>
  );
};

export default Todo;
