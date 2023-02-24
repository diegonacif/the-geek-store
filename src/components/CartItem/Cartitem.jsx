import Img from '../../assets/camiseta1.webp';

import "../../css/App.css";

export const Cartitem = () => {
  return (
    <div className="cart-item-container">
      <img src={Img} alt="" />
      <div className="cart-item-info">
        <h4>T-shirt Ursinhos Carinhosos</h4>
        <span>R$ 999,90</span>
        <div className="cart-item-sum">
          <input type="number" />
          <span>Sub-total: R$ 9999,90</span>
        </div>
      </div>

    </div>
  )
}
