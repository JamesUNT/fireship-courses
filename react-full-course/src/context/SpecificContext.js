import {  createContext, useState } from "react";

const AuthContext = createContext({});


export const NamedContext = ({ children }) => {

  const [login, setLogin] = useState({ // State managed by any component who is inside the provider context.
    name: "Jeffey",
    age: 23,
    signed: false
  });

  return (
    <>
      {
        login.signed == true 
        ? <AuthContext.Provider value={{login, setLogin}}>
            {children}
          </AuthContext.Provider>
        : <h1> User not authenticated. </h1>
      }
    </>
  )
}

export default AuthContext

/*
 Specific contexts are used to handle specific things that are needed through the entire aplication.
 For example, you need to verify if the user is logged in every page of your e-commerce website.
*/