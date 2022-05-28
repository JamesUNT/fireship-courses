import { useContext } from "react";
import AuthContext from "../context/authentication";


const LoginInfo = () => {

  const usuario = useContext(AuthContext);

  return (
    <>
      <p>email: {usuario.email}</p>
      <p>uid: {usuario.uid}</p>
      <h1>User is authenticated </h1>
    </>
  );
}

export default LoginInfo