import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';

import imgTest from '../../assets/camiseta1.webp';


export const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [parcelValue, setParcelValue] = useState(0);
  const temporaryPrice = 52.90;

  useEffect(() => {
    setCalculatedPrice(quantity * temporaryPrice)
  }, [quantity])

  useEffect(() => {
    setParcelValue(calculatedPrice / 3)
  }, [calculatedPrice])


  const handleChangeQuantity = (type) => {
    if(type === 'plus') {
      return setQuantity(current => current + 1)
    } else if(type === 'minus') {
      return setQuantity(current => current - 1)
    } else {
      return;
    }
  }
  return (
    <div className="product-details-container">
      <Header />
      <section>
        <h2>Produto Exemplo</h2>
        <img src={imgTest} alt="" />
        <div className="product-details-values">
          <div className="product-details-prices">
            <span>R$ 520,90</span>
            <span>R$ {calculatedPrice}</span>
          </div>
          <span>até <strong>3x</strong> de <strong>R$ {parcelValue}</strong> sem juros</span>
        </div>
        <div className="product-details-quantity-wrapper">
          <div className="quantity-row">
            <button onClick={() => handleChangeQuantity('minus')}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => handleChangeQuantity('plus')}>+</button>
          </div>
          <button>COMPRAR</button>
          <span>Estoque: <strong>Disponível</strong></span>
        </div>
        <div className="produt-details-description-wrapper">
          <h4>Descrição do produto:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam eveniet doloremque debitis odio expedita incidunt, inventore porro. Quis autem minus ut perferendis veniam ullam, repudiandae odit dolorum! Alias, corporis.
            Aut cum illo inventore architecto saepe, dolorum exercitationem officiis qui adipisci ratione, necessitatibus praesentium aliquam! Quibusdam officia laboriosam cum repudiandae dicta saepe perspiciatis voluptatem, quia consequuntur dolor earum aliquid sunt!
          </p>
        </div>
      </section>
    </div>
  )
}