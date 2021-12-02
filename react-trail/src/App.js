import React from 'react';


function StateChange(){

    document.getElementById('root').style.textDecoration('line-through');
 
}
function App() {
  return (
    <div>
     <p>Hello</p>
     <button onClick={StateChange}>Submit</button>
    </div>
  )
}

export default App