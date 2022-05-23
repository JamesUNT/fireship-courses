import { useContext } from "react";
import { AuthenticationComponent } from "../context/authentication";
import AuthContext from "../context/authentication";


const LoginTest = () => {

  const usuario = useContext(AuthContext);

  return (
    <>
      <AuthenticationComponent>
        <p>email: {usuario.email}</p>
        <p>uid: {usuario.uid}</p>
        <h1>User is authenticated </h1>
      </AuthenticationComponent>
    </>
  );
}

export default LoginTest
