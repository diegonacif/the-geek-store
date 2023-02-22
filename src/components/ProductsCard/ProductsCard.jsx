import camisetaImg from '../../assets/camiseta1.webp';

import '../../css/App.css';

export const ProductsCard = () => {
  return (
    <div className="products-card-container">
      <img src={camisetaImg} alt="" />
      <h4>T-shirt Ursinhos Carinhosos</h4>
      <span id="original-price">R$ 1.200,00</span>
      <span id="reduced-price">R$ 999,90</span>
      <span id="credit-benefits">até <strong>3x</strong> de <strong>R$ 333,33</strong></span>
      <span>sem juros</span>
    </div>
  )
}