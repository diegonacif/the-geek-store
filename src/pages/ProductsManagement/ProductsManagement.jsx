import { Header } from '../../components/Header/Header';
import { ProductRegister } from '../../components/ProductRegister/ProductRegister';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import '../../css/App.css';

export const ProductsManagement = () => {
  return (
    <div className="products-management-container">
      <Header />
      <section>
        <ProductRegister />
        {/* <ProductsSection /> */}
      </section>
    </div>
  )
}