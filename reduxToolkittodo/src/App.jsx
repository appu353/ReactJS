import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn about Redux Toolit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
//We can also wrap all components in main.jsx.
//Same as context API, here also we get provider from react-redux.
//Another we need store, we have to import store for that reason only we are exporting store.
