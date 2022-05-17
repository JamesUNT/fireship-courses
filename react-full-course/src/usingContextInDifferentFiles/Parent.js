import {  useState, createContext } from "react";
import { ChildWithCountContext } from './Child'

const CountContext = createContext(null);

const ParentWithCountContext = () => {
    const [count, setCount] = useState(10);

  return (
    <CountContext.Provider value={[count, setCount]}>
      <ChildWithCountContext />
    </CountContext.Provider>
  )
}

export {CountContext, ParentWithCountContext}