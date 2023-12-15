import React, { createContext, useContext } from "react";

//From create context we have to pass variable, and function declaration, whatever the functinality will be performed by this app.
//definition of function will be provided in APP.JSX
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {}, // adding todo
  updatedTodo: (id, todo) => {}, //update todo
  deleteTodo: (id) => {}, //delete
  toggleComplete: () => {}, // for check uncheck
});

export const useTodo = () => {
  return useContext(TodoContext); // always pass context whenever we are returing useContext, so that it should know which context to return.
};

export const TodoProvider = TodoContext.Provider;

//Shorts notes:-for using context API , nothing we have to install.
//It is directly available in react in form of hooks and API.
