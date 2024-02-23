import svg from '../../picture/Frame 55.svg';
import './style.scss';
import { useState } from 'react';
const links = [
  { title: 'Про нас', href: '#' },
  { title: 'Каталог', href: '#Каталог' },
  { title: 'Технология', href: '#Технология' },
  { title: 'Контакты', href: '#Контакты' },
];

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    toggleBurger();
  };
  const headerLinks = links.map((link, id) => (
    <a
      key={id}
      href={link.href}
      className={`header__link ${activeLink === id ? 'active' : ''}`}
      onClick={() => handleLinkClick(id)}
    >
      {link.title}
    </a>
  ));
  return (
    <header className="headers">
      <div className="container">
        <nav className="header">
          <img className="header__icon" src={svg} alt={svg} />
          <div className="header__block">{headerLinks}</div>
          <div className="burger">
            <input type="checkbox" id="burger" hidden checked={isBurgerOpen} onChange={toggleBurger} />
            <label htmlFor="burger" className="burger__btn"></label>

            <nav className={`burger__nav ${isBurgerOpen ? 'open' : ''}`}>
              <img className="burger__icon" src={svg} alt={svg} />
              {headerLinks}
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
