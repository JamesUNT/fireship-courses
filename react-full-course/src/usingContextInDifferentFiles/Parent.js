import {  useState, createContext, useContext } from "react";
import { ChildWithCountContext } from './Child'

// the value inside the hook is a default value, which can be access by 
// any component who is not inside the provider but have the context.
const CountContext = createContext({
  name: "Thiago",
  age: 22
});

const ChildWithNoProvider = () => {
  const context = useContext(CountContext);
  return <h2>Child with no provider: {context.name}, age: {context.age}</h2>;
}

export const ParentWithCountContext = () => {
    const [count, setCount] = useState({ // State managed by any component who is inside the provider context.
      name: "Jeffey",
      age: 23,
      likes: {
        snack: "candy",
        quantity: 10
      }
    });

    const increaseCountAndSnacks = () => {
      setCount({
        ...count,
        age: count.age + 1,
        likes: {
          ...count.likes,
          quantity: count.likes.quantity + 10
        }
      })
    }

  return (
    <>
      <CountContext.Provider value={{count, setCount, increaseCountAndSnacks}}>
        <ChildWithCountContext />
      </CountContext.Provider>
      <ChildWithNoProvider />
    </>
  )
}

export default CountContext