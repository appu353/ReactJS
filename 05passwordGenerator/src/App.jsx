import { useCallback, useState, useRef, useEffect } from "react";

function App() {
  //collected all the variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef = useRef(null); //Used this ref to show the selected text while copying

  //Function for generating password:-for optimization we used useCallBack for memorizing all function or its parts
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 0; i < length; i++) {
      // we are looping this till length bcz password length is reflecting inside length bracket.
      let char = Math.floor(Math.random() * str.length + 1); // we are receiving index of str variable
      pass += str.charAt(char); // storing char in pass from char index and concatinating it to form password.
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //here we have given setPassword bcz we will give password it will keep chnaging

  //Copying to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //select all
    passwordRef.current?.setSelectionRange(0, 999); //select in range
    window.navigator.clipboard.writeText(password); //here we are using window object bcz we can access it in core react but not in next.js
  }, [password]);

  //This hook will be called once page is loaded for the very first time.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//Notes:-
//The useCallback() hook helps us to memoize the functions so that it prevents the re-creating of functions on every re-render.

//The function we passed to the useCallback hook is only re-created when one of its dependencies are changed.
//In above code we cant control rendering feature in react, supose we have removed useCallBack from function passwordGenerator still it will throw an error.
//One approach is that we can place button and on click we can call this function. Another method is to use another hook which is useEffect.
//Dependencies:- setPassword is not responsible to run function, it will keep if anything is coming from setPassword in cache. Any chnages is happened in charAllowed and numberAllowed will also be kept in cache.
//Here dependencies will be used for optimizations. UseCallBack is used for optimzations, we can make this project without using this dependencies also.

//useEffect is a React Hook that lets you synchronize a component with an external system.
//No need to store this hook to variable, One we need is callback, another is dependencies array on which this hook will depend:-.useEffect(setup, dependencies?)
//In above project if we will change length then again it will call,  numberAllowed, charAllowed all are depencies in this case.setPassword we are using for optimazations.
//Here if anything is happening with dependencies, it will run that frunction again.
//If we will click on any of them function will get called again.
//UseEffect and useCallBack dependencies, both are different.One for optimization and another one is for running functions.

//Another challenge is to copy it to clipboard,bcz here button and input both are different entity. For that we have to use another hook :-UseRef.
//Whenever we have to take reference from anything we have to use UseRef hook.
