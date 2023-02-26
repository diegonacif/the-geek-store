import { Link } from 'react-router-dom';
import { List, ShoppingCart, SignOut, User } from "phosphor-react"
import { useContext } from 'react';
import { AuthEmailContext } from '../../contexts/AuthEmailProvider';
import '../../css/App.css';

export const Header = () => {
  // Email Context
  const { 
    isSignedIn,
    logoutUser
  } = useContext(AuthEmailContext);
  return (
    <div className="header-container">
      
      <List size={28} color="#f0f0f0" weight="duotone" />
      <span>The Geek Store</span>
      <div className="header-utilities">
        <Link to="/cart">
          <ShoppingCart size={28} color="#f0f0f0" weight="duotone" />
        </Link>
        {
          isSignedIn ?
          <SignOut onClick={() => logoutUser()} size={28} color="#f0f0f0" weight="duotone" /> :
          <Link to="/login">
            <User size={28} color="#f0f0f0" weight="duotone" />
          </Link>
        }
      </div>
    </div>
  )
}