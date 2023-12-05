import Demo from "./Demo";

function App() {
  return (
    <>
      <Demo />
      <h1>Code in React |Aparna</h1>
    </>
  );
}

export default App;
// In return we can export only one element, For more than one we have to wrap it in fragment.
//We can wrape it inside div tag and return multiple tag but this is very common problem and writting div always is not possible
//So we are wraping it in <></> which is called fragment.
