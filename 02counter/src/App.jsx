// Why you need hooks and project
import { useState } from "react";
import "./App.css";

function App() {
  //We can pass anything as parameter. Counter is variable and setCounter is method which will help us to update variable
  let [counter, setCounter] = useState(15);

  //let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter); //sending updated counter value using this function

    //We can also increase counter directly inside parameter
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Code in React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
//Short summary:-
//React will control UI updation, if UI is complex.Uisng JS we can update value but not on UI
//Suppose we are clicking in one button, value will get updated in all places.
//React provide several hooks, each hook can only perform specific task.
//UseState:-It will propagate changes in UI or basically inside DOM.
//Usestate will return an array, one counter(any name) and another is function call it setCounter(anyName)
