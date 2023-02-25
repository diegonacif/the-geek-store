import { ArrowLeft } from "phosphor-react";
import { Cartitem } from "../CartItem/Cartitem";

import "../../css/App.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="cart-container">
      <header>
        <Link to="/">
          <ArrowLeft size={28} color="#154854" weight="duotone" />
        </Link>
        <div className="cart-header-wrapper">
          <h3>Carrinho</h3>
          <span>(1)</span>
        </div>
      </header>
      <section>
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </section>
      <footer>
        <div className="card-sum">
          <span>Sub-total</span>
          <span>R$ 0,00</span>
        </div>
        <button>Continuar (0)</button>
      </footer>
    </div>
  )
}