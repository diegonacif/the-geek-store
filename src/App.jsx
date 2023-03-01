import { useContext } from 'react';
import { AdminButton } from './components/AdminButton/AdminButton';
import { Banners } from './components/Banners/Banners';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NewsCards } from './components/NewsCards/NewsCards';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import { SearchInput } from './components/SearchInput/SearchInput';
import { WhatsappButton } from './components/WhatsappButton/WhatsappButton';
import { AuthEmailContext } from './contexts/AuthEmailProvider';
import './css/App.css';

export const App = () => {

  // Email Context
  const { 
    isSignedIn,
  } = useContext(AuthEmailContext);

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
      <WhatsappButton />
      {/* {
        isSignedIn && <AdminButton />
      } */}
    </div>
  )
}
