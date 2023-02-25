import { useState } from "react";
import { Eye, EyeSlash, LockKeyOpen, UserCircle } from "phosphor-react"

export const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <div className="login-container">
      <section className="login-wrapper">
        <h3>Faça login para continuar</h3>
        <div className="input-wrapper">
          <div className="input-row">
            <UserCircle size={28} color="#154854" weight="duotone" className="login-icons" />
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="input-row">
            <LockKeyOpen size={28} color="#154854" weight="duotone" className="login-icons" />
            <input type={isPasswordShown ? "text" : "password"} placeholder="Senha" />
            {
              isPasswordShown ?
              <Eye 
                size={24} 
                color="#154854" 
                weight="duotone" 
                className="password-eye-icon" 
                onClick={() => setIsPasswordShown(false)}
              /> :
              <EyeSlash 
                size={24} 
                color="#154854" 
                weight="duotone" 
                className="password-eye-icon" 
                onClick={() => setIsPasswordShown(true)}
              />
            }
          </div>
        </div>
        <button>Confirmar</button>
      </section>
    </div>
  )
}