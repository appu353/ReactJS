import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //todos is an array already conatining multiple value
  const [todos, setTodos] = useState([]); //for storing todos context and updating it to UI, by default state of usestate is empty array

  //adding todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  //parameter todo is single todo which we have to update, it will check with prev todo id
  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  //Filter will filter out all data except matching id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //Here we have taken all value and overwrite it  using spread operator and then after looping we will change the value of completed for toogle
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //useEffect method will helps to query and fetch value from localeStorage once application
  //is loaded for the very first time.It may be possible that value will already be present inside todo array
  useEffect(() => {
    //We just have to pass key for getting item and parse it to json bcz values are stored in string.
    const todos = JSON.parse(localStorage.getItem("todos"));
    //check todos empty or not
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //for storing item to localestorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

//Short notes:-https://www.w3schools.com/jsref/prop_win_localstorage.asp(Localsrorage)
//Once we stored value in local storage, value will get converted to string.
//so while fetching we have to convert or deconvert.
