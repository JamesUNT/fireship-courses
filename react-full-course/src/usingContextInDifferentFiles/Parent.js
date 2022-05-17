import {  useState, createContext } from "react";
import { ChildWithCountContext } from './Child'

const CountContext = createContext();


const ParentWithCountContext = () => {
    const [count, setCount] = useState({
      name: "Jeffey",
      age: 23
    });

    const increaseCount = () => {
      setCount({
        ...count,
        age: count.age + 1
      })
    }

  return (
    <CountContext.Provider value={{count, increaseCount}}>
      <ChildWithCountContext />
    </CountContext.Provider>
  )
}

export {CountContext, ParentWithCountContext}