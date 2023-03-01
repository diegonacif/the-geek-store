import { Link } from 'react-router-dom';
import { EnvelopeSimple, Phone, WhatsappLogo } from 'phosphor-react';
import americanLogo from '../../assets/cards/american-express-logo.png';
import dinnersLogo from '../../assets/cards/dinners-club-logo.png';
import eloLogo from '../../assets/cards/elo-logo.png';
import mastercardLogo from '../../assets/cards/mastercard-logo.png';
import visaLogo from '../../assets/cards/visa-logo.png';
import '../../css/App.css';

export const Footer = () => {
  return (
    <div className="footer-container">
      <section>
        <h4>Sobre a Loja</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime nesciunt dignissimos, ab enim ex eos omnis doloribus! Natus molestias impedit, consectetur placeat nobis et vero iusto quae officiis porro?</p>
      </section>
      <section>
        <h4>Pague com</h4>
        <div className="section-content">
          <div className="section-row">
            <div className="card-wrapper">
              <img src={americanLogo} alt="american express card logo" id="americanLogo" />
            </div>
            <div className="card-wrapper">
              <img src={dinnersLogo} alt="dinners club card logo" id="dinnersLogo" />
            </div>
            <div className="card-wrapper">
              <img src={eloLogo} alt="elo card logo" id="eloLogo" />
            </div>
            <div className="card-wrapper">
              <img src={mastercardLogo} alt="mastercard card logo" id="mastercardLogo" />
            </div>
            <div className="card-wrapper">
              <img src={visaLogo} alt="visa card logo" id="visaLogo" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h4>Institucional</h4>
        <div className="section-content">
          <Link to="#">Fale conosco</Link>
          <Link to="#">Ajuda</Link>
          <Link to="#">Quem somos</Link>
        </div>
      </section>
      <section>
        <h4>Contato</h4>
        <div className="section-content">
          <div className="section-row">
            <Phone size={20} color="#f0f0f0" />
            <span>Telefone: (84) 3333-3333</span>
          </div>
          <div className="section-row">
            <WhatsappLogo size={20} color="#f0f0f0" />
            <span>Whatsapp: (84) 99999-9999</span>
          </div>
          <div className="section-row">
            <EnvelopeSimple size={20} color="#f0f0f0" />
            <span>Email: email@mail.com</span>
          </div>
        </div>
      </section>
    </div>
  )
}