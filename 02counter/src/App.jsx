import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5);

  const addvalue = () => {
    if (counter >=20 ) {
      setcounter = 20
     }
    counter = counter + 1;
    setcounter(counter);
   
  };
  const removevalue = () => {
    if(counter<=0){
      setcounter =0
    }
    setcounter(counter - 1);
    
  };
  return (
    <>
      <h1>let'rock</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter} </button>
      <p>Footer {counter}</p>
    </>
  );
}

export default App;
