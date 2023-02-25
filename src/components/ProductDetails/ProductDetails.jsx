import { Header } from '../Header/Header';

import imgTest from '../../assets/camiseta1.webp';

export const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <Header />
      <section>
        <h2>Produto Exemplo</h2>
        <img src={imgTest} alt="" />
        <div>
          <div>
            <span>R$ 1200,00</span>
            <span>R$ 999,90</span>
          </div>
          <span>até 3x de R$ 333,30 sem juros</span>
        </div>
      </section>
    </div>
  )
}