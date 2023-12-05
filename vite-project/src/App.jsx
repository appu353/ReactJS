import Demo from "./Demo";
function App() {
  //We can inject variable inside return statement inside this {}
  //In JS we were using backtext with dollar symbol but inside return we have to write only evaluated expression not full JS code
  //JS code we can write here.
  const userName = "Aparna";
  return (
    <>
      <Demo />
      <h1>Code in React | create-react-app {userName}</h1>
    </>
  );
}
export default App;
// In return we can export only one element, For more than one we have to wrap it in fragment.
//We can wrape it inside div tag and return multiple tag but this is very common problem and writting div always is not possible
//So we are wraping it in <></> which is called fragment.

// Make sure that we should create file with jsx extension not js. Otherwise It will throw an error.
// And We have to create Function with capital letter, otherwise it will throw an error.
