import React, {useEffect, useState} from "react";
function Counter() {
    // Define a state variable 'count' and a function 'setCount' to update it
    const [count, setCount] = useState(0);
  
    // Function to increment the count
    function Increment (){
      setCount(count + 10);
    };
  
    // Function to decrement the count
    function Decrement()  {
      setCount(count - 5);
    };
  
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    );
  }
  
  export default Counter;