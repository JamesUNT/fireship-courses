import {  createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../plugins/firebase"

const AuthContext = createContext(null);

export const AuthenticationComponent = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
      onAuthStateChanged(auth, user => {
      user
        ? setUser(user) 
        : setUser(null)
      })
    }, [user])

    return (
    <>
        {
        user
        ? <AuthContext.Provider value={user}>
            {children}
          </AuthContext.Provider>
        : <h1> User not authenticated.</h1>
        }
    </>
    )
}

export default AuthContext
