import { Header } from '../../components/Header/Header';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import '../../css/App.css';

export const ProductsManagement = () => {
  return (
    <div className="products-management-container">
      <Header />
      <section>
        <ProductsSection />
      </section>
    </div>
  )
}