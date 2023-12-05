// Example of creating own React element

//step 4 :-defining customRender Function
function customRender() {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   mainContainer.appendChild(domElement);
  //If 3rd attribute will be present or only one will be there then problem will come so we will use loop.
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue; //if children is present inside props
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

//step 3 :-Created own reactElement sytax and above function will expect reactElement to pass in this syntax
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

//step 1
const mainContainer = document.querySelector("#root"); // selected index.html id

//step 2:=this is custom render not react render
customRender(reactElement, mainContainer); //We are doing custom rendering how react is doing in background
