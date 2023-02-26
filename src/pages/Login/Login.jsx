import { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { AuthEmailContext } from "../../contexts/AuthEmailProvider";
import { Eye, EyeSlash, LockKeyOpen, UserCircle, XCircle } from "phosphor-react"
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [loginMode, setLoginMode] = useState("login");
  const navigate = useNavigate();

  // Hook Form Controller
  const {
    watch,
    register,
    setValue,
    getValues
  } = useForm({
    mode: "all"
  });

  // Email Context
  const { 
    setLoginEmail,
    setLoginPassword,
    setLoginReset,
    setRegisterEmail,
    setRegisterPassword,
    registerUser,
    loginUser,
    logoutUser,
    isSignedIn,
    passwordReset,
    errorMsg
  } = useContext(AuthEmailContext);

  // Back to main page when logged in
  useEffect(() => {
    isSignedIn ? navigate("/") : null;
  }, [isSignedIn])

  // Inputs data going to auth context
  useEffect(() => {
    setLoginEmail(watch("email"));
    setLoginPassword(watch("password"));
    setLoginReset(watch("emailReset"));
    setRegisterEmail(watch("registerEmail"));
    setRegisterPassword(watch("registerPassword"));

  }, [watch()]);

  // Reset State
  function handleResetState(mode) {
    setValue("email", "");
    setValue("emailReset", "");
    setValue("password", "");
    setValue("registerEmail", "");
    setValue("registerPassword", "");
    setValue("confirmRegisterPassword", "");

    if (mode === "forgotPassword") {
      setLoginMode("forgotPassword");
    } else if (mode === "register") {
      setLoginMode("register");
    } else if (mode === "login") {
      setLoginMode("login");
    } else {
      console.log("Invalid mode");
    }
  }

  // Handle functions
  function handleRegister() {
    registerUser();
    handleResetState("login");
  }
  function handleForgotPassword() {
    passwordReset();
    handleResetState("login");
  }
  function handleLogin() {
    loginUser();
    handleResetState("login");
  }


  return (
    <div className="login-container">
      <header>
        <span>The Geek Store</span>
      </header>
      <section className="login-wrapper">
        {
          loginMode === "login" ?
          // Login Mode
          <>
            <XCircle 
              size={36} 
              color="#1cbdc8" 
              weight="duotone" id="close-button" 
              onClick={() => navigate("/")} 
            />
            <h3>Faça login para continuar</h3>
            <div className="input-wrapper">
              <div className="input-row">
                <UserCircle size={28} color="#1b1b1b" weight="duotone" className="login-icons" />
                <input 
                  type="text" 
                  placeholder="E-mail" 
                  {...register("email")}
                />
              </div>
              <div className="input-row">
                <LockKeyOpen size={28} color="#1b1b1b" weight="duotone" className="login-icons" />
                <input 
                  type={isPasswordShown ? "text" : "password"} 
                  placeholder="Senha" 
                  {...register("password")}
                />
                {
                  isPasswordShown ?
                  <Eye 
                    size={24} 
                    color="#1b1b1b" 
                    weight="duotone" 
                    className="password-eye-icon" 
                    onClick={() => setIsPasswordShown(false)}
                  /> :
                  <EyeSlash 
                    size={24} 
                    color="#1b1b1b" 
                    weight="duotone" 
                    className="password-eye-icon" 
                    onClick={() => setIsPasswordShown(true)}
                  />
                }
              </div>
            </div>
            <span id="forgot-password" onClick={() => handleResetState("forgotPassword")}>Esqueci a senha</span>
            <span id="register" onClick={() => handleResetState("register")}>Cadastrar-se agora</span>
            <button onClick={() => loginUser()}>Confirmar</button>
          </> :
          loginMode === "forgotPassword" ?
          // Forgot Password Mode
          <>
            <XCircle 
              size={36} 
              color="#1cbdc8" 
              weight="duotone" id="close-button" 
              onClick={() => handleResetState("login")} 
            />
            <h3>Insira seu e-mail e clique em Enviar</h3>
            <div className="input-wrapper">
              <div className="input-row">
                <UserCircle size={28} color="#1b1b1b" weight="duotone" className="login-icons" />
                <input 
                  type="text" 
                  placeholder="E-mail" 
                  {...register("emailReset")}
                />
              </div>
              
            </div>
            <button onClick={() => handleForgotPassword()}>Enviar</button>
          </> :
          loginMode === "register" ?
          // Register Mode
          <>
            <XCircle 
              size={36} 
              color="#1cbdc8" 
              weight="duotone" id="close-button" 
              onClick={() => handleResetState("login")} 
            />
            <h3>Faça seu registro</h3>
            <div className="input-wrapper">
              <div className="input-row">
                <UserCircle size={28} color="#1b1b1b" weight="duotone" className="login-icons" />
                <input 
                  type="text" 
                  placeholder="E-mail" 
                  {...register("registerEmail")}
                />
              </div>
              <div className="input-row">
                <LockKeyOpen size={28} color="#1b1b1b" weight="duotone" className="login-icons" />
                <input 
                  type={isPasswordShown ? "text" : "password"} 
                  placeholder="Senha" 
                  {...register("registerPassword")}
                />
                {
                  isPasswordShown ?
                  <Eye 
                    size={24} 
                    color="#1b1b1b" 
                    weight="duotone" 
                    className="password-eye-icon" 
                    onClick={() => setIsPasswordShown(false)}
                  /> :
                  <EyeSlash 
                    size={24} 
                    color="#1b1b1b" 
                    weight="duotone" 
                    className="password-eye-icon" 
                    onClick={() => setIsPasswordShown(true)}
                  />
                }
              </div>
              <div className="input-row">
                <LockKeyOpen size={28} color="#1b1b1b" weight="duotone" className="login-icons" />
                <input 
                  type={isPasswordShown ? "text" : "password"} 
                  placeholder="Confirme a senha" 
                  {...register("confirmRegisterPassword")}
                />
              </div>
            </div>
            <button onClick={() => handleRegister()}>Registrar-se</button>
          </> :
          null
        }
      </section>
    </div>
  )
}