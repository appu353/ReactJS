import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObject = {
    name: "Aparna",
    age: 12,
  };
  let myArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      {/* Calling card component, we can call it any time */}
      <Card username="Aparna" btnText="click me" />
      <Card username="appu" />
      {/* <Card channel="React" someObj={myObject}/>
      <Card anotherObj={myArr}/>  */}
      {
        //This code is for testing tailwind
        /* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://thumbs.dreamstime.com/z/owl-watches-intently-illuminated-full-moon-halloween-night-quiet-bright-rising-over-clouds-illuminates-darkness-33706816.jpg?w=1400"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */
      }
    </>
  );
}

export default App;

//Short notes:-
//Topic covered:-tailwaind and its component,create own component and  reuse it, props and how to handle it and pass default value, how to pass value either its object or array or string.

//JSX will only accept closing tag, as img tag don't have but we have to use slash in the end.
//Props makes component resuable and we can pass value from one component to other.Here we will place card in separate component and we can resuse it.
//We have created separate folder and inside it we have created one component. We are importing that component and calling it inside functions.
//We can call it multiple time. Suppose we have to change name of each card. We can use props, we can pass array or object using props.
//Whatever value we are passing in props while calling component will get displayed.To see the value of props, we have to log it in card component.
//This is how we can pass data from one component to another in React.
