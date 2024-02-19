import { Link } from 'react-router-dom';
import svg from '../../picture/Frame 55.svg';
import style from './style.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <nav className={style.header}>
          <img src={svg} alt={svg} />
          <div className={style.header__block}>
            <Link className={style.header__link} to={'/'}>
              Про нас
            </Link>
            <a className={style.header__link} href={'#Каталог'}>
              Каталог
            </a>
            <a className={style.header__link} href={'#Технология'}>
              Технология
            </a>
            <a className={style.header__link} href={'#Контакты'}>
              Контакты
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
