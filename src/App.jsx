import { Banners } from './components/Banners/Banners';
import { Header } from './components/Header/Header';
import { NewsCards } from './components/NewsCards/NewsCards';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import { SearchInput } from './components/SearchInput/SearchInput';
import './css/App.css';

function App() {

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
      <ProductsSection />
    </div>
  )
}

export default App
