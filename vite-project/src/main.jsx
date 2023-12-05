import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//We can also create function here and render it:-4th video, Example:-1
function MyApp() {
  return (
    <div>
      <h1>Custom APP| Example</h1>
    </div>
  );
}

//As we are knowing that tag will get converted in below syntax
//so can we render it directly through react render.As we have written this sytax by our own so it was not working
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };
//We can write how react will understand bcz above one is not working
const anotherElementVar = "Heloo";

//This syntax will be injected by babble(Transpiler) :-it will work
const reactElement1 = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google"
  //anotherElementVar :-We can inject var here but we can't write JS code here in if else condition it wont understand.
);
//Another Example:-This will work if we will write whole HTML tag
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // reactElement:-We can't do like this bcz syntax is not correct, in place of key we can write anything here then how react will know .For this we have to createElement as we did in customReact
  // reactElement1
  //anotherElement // it will get converted into object and we will get output

  // MyApp()//We can call like this also bcz js code will be converted into HTML in react. but don't do this
  //<MyApp/>//both are correct but we should not write like above

  <App />
);
