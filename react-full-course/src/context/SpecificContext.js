import {  createContext } from "react";

const AuthContext = createContext({});


export const NamedContext = ({ children }) => {


    const Login = async () => {
        const response = await api.post('/login', {
          email: 'example@email.com',
          password: '123456',
        });
    }

  return (
    <AuthContext.Provider value={{signed: true, Login}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

/*
 Specific contexts are used to handle specific things that are needed through the entire aplication.
 For example, you need to verify if the user is logged in every page of your e-commerce website.
*/