import { useEffect, useState } from 'react';
import Img from '../../assets/camiseta1.webp';

import "../../css/App.css";

export const Cartitem = () => {

  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const temporaryPrice = 52.90;

  useEffect(() => {
    setCalculatedPrice(quantity * temporaryPrice)
  }, [quantity])

  const handleChangeQuantity = (type) => {
    if(type === 'plus') {
      return setQuantity(current => current + 1);
    } else if(type === 'minus') {
      return setQuantity(current => current - 1);
    } else {
      return;
    }
  }
  
  return (
    <div className="cart-item-container">
      <img src={Img} alt="" />
      <div className="cart-item-info">
        <h4>T-shirt Ursinhos Carinhosos</h4>
        <span>Tamanho único</span>
        <div className="cart-item-sum">
          <div className="cart-input-wrapper">
            <button onClick={() => handleChangeQuantity('minus')}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => handleChangeQuantity('plus')}>+</button>
          </div>
          <span>R$ {calculatedPrice}</span>
        </div>
      </div>

    </div>
  )
}
