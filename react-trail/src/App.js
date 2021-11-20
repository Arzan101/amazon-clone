import React,{useState} from 'react';


function App(){
 const state = useState();
 console.log(state);

function cart(){
  //count++
}
return(
    <div>
      <h1>0</h1>
    <button onClick={cart}>Add</button>
    </div>
    // document.getElementById("root")
  );
}

export default App

