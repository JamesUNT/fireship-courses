
   import { useContext } from "react";
   import CountContext from './Parent.js'
   
   export const GrandChildWithCountContext = () => {
    const context = useContext(CountContext);
  
    return (
      <>
        <h1>Count Context</h1>
        <div>{context.count.name}</div>
        <div>{context.count.age}</div>
        <button onClick={() => context.increaseCount() /* context.setCount({...context.count, age: context.count.age + 1}) */}>count age</button>
      </>
    )
  }
