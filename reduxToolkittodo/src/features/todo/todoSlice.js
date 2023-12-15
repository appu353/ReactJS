import { createSlice, nanoid } from "@reduxjs/toolkit"; //naonid generate unique id always

//Initial state
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

//creating slice:-it has its own name property
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //todos is initialstate array, value can be more
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//We have to declare property and function in declartions.
//In context API we are just decalaring function not providing definition
//We have to provide definition of function here which takes two parameter, state and action.
//Suupose we have decalred function outside from here. we can five reference of functions in reducer like this addTodo:sayHello
//State:-It will give us access of all values which is present in current state
//action has some value, suppose for removing value we will need some id, we can take it from actions.
