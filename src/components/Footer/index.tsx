import svg from '../../picture/Frame 55.svg';
import './style.scss';
import phone from '../../picture/ic_round-phone.svg';
import location from '../../picture/Frame 53.svg';

const Footer = () => {
  return (
    <footer id="Контакты">
      <div className="container">
        <nav className="footer">
          <img className="footer__logo" src={svg} alt={svg} />
          <div className="footer__block">
            <a className="footer__location_tel" href="tel:+996703310147">
              <img src={phone} />
              +996 559 332 187
            </a>
            <a href="#location" className="footer__location_tel">
              <img src={location} />
              Г. Бишкек, Ул. Переулок Лагерный
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
