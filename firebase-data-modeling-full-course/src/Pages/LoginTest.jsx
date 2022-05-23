import { auth } from "../plugins/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthenticationComponent } from "../context/authentication";


const LoginTest = () => {

  function autenticar() {
    signInWithEmailAndPassword(auth, /*<email goes here>, <password goes here?*/)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  function desautenticar() {
    signOut(auth)
    .then(() => {
      // Signed in 
      alert("usuario deslogado");
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }


  return (
    <>
      <AuthenticationComponent>
        <h1>User is authenticated </h1>
      </AuthenticationComponent>
      <button onClick={() => {autenticar()}}>Logar</button>
      <button onClick={() => {desautenticar()}}>Deslogar</button>
    </>
  );
}

export default LoginTest
