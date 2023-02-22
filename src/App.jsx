import { Banners } from './components/Banners/Banners';
import { Header } from './components/Header/Header';
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
    </div>
  )
}

export default App
