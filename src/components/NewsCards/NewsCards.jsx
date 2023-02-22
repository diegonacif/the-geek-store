import '../../css/App.css';

export const NewsCards = () => {
  return (
    <div className="news-cards-container">
      <div className="new-card-wrapper potter">
        <span>NOVA LINHA DE PRODUTOS</span>
        <h2>HARRY POTTER</h2>
        <button>CONFIRA</button>
      </div>
      <div className="new-card-wrapper lotr">
        <span>NOVA LINHA DE PRODUTOS</span>
        <h2>SENHOR DOS ANÉIS</h2>
        <button>CONFIRA</button>
      </div>
      <div className="new-card-wrapper cdz">
        <span>NOVA LINHA DE PRODUTOS</span>
        <h2>CAVALEIROS DO ZODÍACO</h2>
        <button>CONFIRA</button>
      </div>
    </div>
  )
}