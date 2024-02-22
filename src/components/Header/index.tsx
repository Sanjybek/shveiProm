import { Link } from 'react-router-dom';
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
  return (
    <header className="headers">
      <div className="container">
        <nav className="header">
          <img className="header__icon" src={svg} alt={svg} />
          <div className="header__block">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`header__link ${activeLink === index ? 'active' : ''}`}
                onClick={() => handleLinkClick(index)}
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="burger">
            <input type="checkbox" id="burger" hidden checked={isBurgerOpen} onChange={toggleBurger} />
            <label htmlFor="burger" className="burger__btn"></label>

            <nav className={`burger__nav ${isBurgerOpen ? 'open' : ''}`}>
              <img className="burger__icon" src={svg} alt={svg} />
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`header__link ${activeLink === index ? 'active' : ''}`}
                  onClick={() => handleLinkClick(index)}
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
