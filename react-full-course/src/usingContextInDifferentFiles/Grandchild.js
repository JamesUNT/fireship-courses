
   import { useContext } from "react";
   import { CountContext } from './Parent.js'
   
   export const GrandChildWithCountContext = () => {
    const { count, increaseCount } = useContext(CountContext);
  
    return (
      <>
        <h1>Count Context</h1>
        <div>{count.name}</div>
        <div>{count.age}</div>
        <button onClick={() => increaseCount()}>count age</button>
      </>
    )
  }
