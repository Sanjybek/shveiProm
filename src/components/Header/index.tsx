import { Link } from 'react-router-dom';
import svg from '../../picture/Frame 55.svg';
import './style.scss';
const links = [
  { title: 'Про нас', href: '#' },
  { title: 'Каталог', href: '#Каталог' },
  { title: 'Технология', href: '#Технология' },
  { title: 'Контакты', href: '#Контакты' },
];

const Header = () => {
  return (
    <header className="headers">
      <div className="container">
        <nav className="header">
          <img className="header__icon" src={svg} alt={svg} />
          <div className="header__block">
            {links.map((link, index) => (
              <a key={index} className="header__link" href={link.href}>
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
