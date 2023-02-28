import { Banners } from './components/Banners/Banners';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NewsCards } from './components/NewsCards/NewsCards';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import { SearchInput } from './components/SearchInput/SearchInput';
import './css/App.css';

export const App = () => {

  return (
    <div className="app-container">
      <Header />
      {
        <div className="search-input-wrapper">
          <SearchInput />
        </div>
      }
      <Banners />
      <NewsCards />
      <ProductsSection category="Camisetas" />
      <ProductsSection category="Canecas" />
      <ProductsSection category="Action Figures" />
      <Footer />
    </div>
  )
}
