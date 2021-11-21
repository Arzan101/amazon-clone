//useReducer.js
import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state,action);
  if(action.type==="Add") {
      return state + 1;
  }
  if(action.type === "Remove") {
      return state - 1;
  }
    return state;
}

const UseReducer = () => {
  //const [count,setCount] = useState(0);
 
  const  [state, dispatch] = useReducer(reducer, initialState);
  
return(
  <div>
      <p>{state}</p>
      <button onClick={ () => dispatch({ type: "Add"})  } > AddToCart</button>
      <button onClick={ () => dispatch({ type: "Remove"})  } >RemoveFromCart</button>
  </div> 
)
}


export default UseReducer;