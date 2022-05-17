
   import { useContext } from "react";
   import { CountContext } from './Parent.js'
   
   export const GrandChildWithCountContext = () => {
    const [count, setCount] = useContext(CountContext);
  
    return (
      <>
        <h1>Count Context</h1>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>count</button>
      </>
    )
  }
