import { Fragment } from 'react';
import '../../sass/component/_sidebar.scss';
import picture1 from 'images/picture_55 (2).svg';
import { SideBarType } from 'types';

export const SideBar = ({ isOpen, closedSideBar }: SideBarType) => {
  const styles = isOpen ? 'sidebar sidebar--open' : 'sidebar sidebar--closed';
  const links = [
    { text: 'Про нас', href: '#Пронас' },
    { text: 'Каталог', href: '#Каталог' },
    { text: 'Технология', href: '#Технология' },
    { text: 'Контакты', href: '#Контакты' },
  ];
  return (
    <Fragment>
      <nav className={`${styles}`}>
        <nav className="sidebar">
          <ul className="sidebar__list">
            <div className="sidebar__logo">
              <img src={picture1} alt="#" onClick={closedSideBar} />
            </div>
            {links.map((link, index) => (
              <li key={index} className="sidebar__list__item" onClick={closedSideBar}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </Fragment>
  );
};
