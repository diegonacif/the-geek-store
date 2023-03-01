import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Gear, List, ShoppingCart, SignOut, User } from "phosphor-react"
import { AuthEmailContext } from '../../contexts/AuthEmailProvider';
import '../../css/App.css';

export const Header = () => {
  // Email Context
  const { 
    isSignedIn,
    logoutUser
  } = useContext(AuthEmailContext);

  const [isAdmin, setIsAdmin] = useState(false);
  
  function handleIsAdmin(value) {
    return setIsAdmin(current => !current);
  }

  return (
    <div className="header-container">
      
      <List size={28} color="#f0f0f0" weight="duotone" />
      <Link to="/">
        <span>The Geek Store</span>
      </Link>
      <div className="header-utilities">
        {
          isSignedIn === true && isAdmin === false ?
          <Link to="/cart">
            <ShoppingCart size={28} color="#f0f0f0" weight="duotone" />
          </Link> :
          isSignedIn === true && isAdmin === true ?
          <Link to="/products-management">
            <Gear size={28} color="#f0f0f0" weight="duotone" />
          </Link> :
          null
        }
        {
          isSignedIn ?
          <SignOut onClick={() => logoutUser()} size={28} color="#f0f0f0" weight="duotone" /> :
          <Link to="/login">
            <User size={28} color="#f0f0f0" weight="duotone" />
          </Link>
        }
      </div>
      {
        isSignedIn &&
        <div className="admin-button-container">
          <span>Admin ? </span>
          <input type="checkbox" onChange={(e) => {handleIsAdmin(e.target.value)}} />
        </div>
      }
    </div>
  )
}