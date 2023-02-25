import { Link } from 'react-router-dom';
import { List, ShoppingCart, User } from "phosphor-react"
import '../../css/App.css';

export const Header = () => {
  return (
    <div className="header-container">
      
      <List size={28} color="#f0f0f0" weight="duotone" />
      <span>The Geek Store</span>
      <div className="header-utilities">
        <Link to="/login">
          <User size={28} color="#f0f0f0" weight="duotone" />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={28} color="#f0f0f0" weight="duotone" />
        </Link>
      </div>
    </div>
  )
}