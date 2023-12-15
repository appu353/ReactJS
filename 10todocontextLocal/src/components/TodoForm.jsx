import React, { useState } from "react";
import { useTodo } from "../context/TodoContex";

function TodoForm() {
  const [todo, setTodo] = useState(""); //define state of individual todo

  //This form is basically performing addTodo functionality which is in APP.jsx.
  //UseTodo has all context now, we have to extract.
  const { addTodo } = useTodo();

  //Create method now
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    //we have to pass objct from here bcz in addtodo we are using spread operator which means we are passing each value as key pair
    //date we have already given in APP.jsx while defining
    addTodo({ todo: todo, completed: false });

    setTodo(""); //for cleanup bcz above todo has some value
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

//This form is for taking input from user which we can see as UI.
//Each method definition is defined in APP.jsx
