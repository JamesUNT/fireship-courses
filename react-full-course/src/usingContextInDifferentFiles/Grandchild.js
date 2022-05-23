
   import { useContext } from "react";
   import CountContext from './Parent.js'
   
   export const GrandChildWithCountContext = () => {
    const context = useContext(CountContext);
  
    return (
      <>
        <h1>Count Context</h1>
        <div>name: {context.count.name}</div>
        <div>age: {context.count.age}</div>
        <div>likes: {context.count.likes.snack}</div>
        <div>how much: {context.count.likes.quantity}</div>
        <button onClick={() => context.increaseCountAndSnacks() /* context.setCount({...context.count, age: context.count.age + 1}) */}>count age</button>
      </>
    )
  }
