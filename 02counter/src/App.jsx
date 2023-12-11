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
    // setCounter(counter + 1);

    //Video:-08:-A react interview question on counter
    //Interview question:What will be the value. will it increase by 4 times and value be 19?
    //no value will remain same bcz useState will send value in batches for updating varibale or UI bcz react is using fuber or diffing algorithm to control it in better way.
    //This is not increamenting every time bcz everytime only we are inreasing counter variable which is same.
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //What if we want to increase it by four:-we will get callback inside setCounter method,prevCounter contain last updated state
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
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
