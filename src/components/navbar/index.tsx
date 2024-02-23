// import 'sass/component/_navbar.scss';
import '../../sass/component/_navbar.scss';
import picture1 from 'images/picture_55 (2).svg';
import { NavbarType } from 'types';

export const Navbar = ({ toggleSideBar }: NavbarType) => {
  const links = [
    { text: 'Про нас', href: '#Пронас' },
    { text: 'Каталог', href: '#Каталог' },
    { text: 'Технология', href: '#Технология' },
    { text: 'Контакты', href: '#Контакты' },
  ];
  const buttonComponents = [1, 2, 3];
  return (
    <header className="header">
      <img className="logo" src={picture1} alt="#" />
      <nav className="navbar">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
        <div className="navbar__button" onClick={toggleSideBar}>
          {buttonComponents.map((_, index) => (
            <div key={index} className="navbar__button__component"></div>
          ))}
        </div>
      </nav>
    </header>
  );
};
