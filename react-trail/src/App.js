import React,{useState} from 'react';


function App(){
 const [count,setCount] = useState(0);
//  console.log(state);

function addtocart(){
  setCount(count +1);
}
function removefromcart(){
  setCount(count -1);
}
return(
    <div>
      <h1>{count}</h1>
    <button onClick={addtocart}>Add</button>
    <button onClick={removefromcart}>Remove</button>
    </div>
    // document.getElementById("root")
  );
}

export default App

