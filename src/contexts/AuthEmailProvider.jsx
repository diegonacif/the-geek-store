import { createContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
  } from 'firebase/auth'
import { auth } from '../services/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useSessionStorage } from 'usehooks-ts'

export const AuthEmailContext = createContext({});

export const AuthEmailProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const [userMail, setUserMail] = useSessionStorage('mail', 0);
  // const [accessToken, setAccessToken] = useSessionStorage('access_token', 0);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginReset, setLoginReset] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  console.log(registerEmail, registerPassword)

  const [userState, loading, error] = useAuthState(auth);

  onAuthStateChanged(auth, (currentUser) => {
    if (loading) {
      console.log("loading user state")
      setIsLoading(true);
    } else {
      setUser(currentUser);
      setIsSignedIn(!!currentUser);
      setIsLoading(false);
    }
  })

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail, 
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
      );
      // setUserMail(user?.user.email);
      // setAccessToken(user?.user.accessToken);
      // console.log({email: user?.user.email, accessToken: user?.user.accessToken});
      console.log("logged in");

    } catch (error) {
      console.log(error.message);
    }
  }
  const logoutUser = async () => {
    try {
      await signOut(auth);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  }

  const passwordReset = async () => {
    sendPasswordResetEmail(auth, loginReset)
      .then(() => {
        console.log("password reset sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error({ "errorCode": errorCode, "errorMessage": errorMessage })
      });
  }

  return (
    <AuthEmailContext.Provider value={{ 
      registerEmail, 
      setRegisterEmail, 
      registerPassword, 
      setRegisterPassword,
      setLoginEmail,
      setLoginPassword,
      setLoginReset,
      registerUser,
      loginUser,
      logoutUser,
      passwordReset,
      isSignedIn,
      errorMsg,
      isLoading
    }}>
      {children}
    </AuthEmailContext.Provider>
  )
}