import style from './style.module.scss';
import picture from '../../picture/fon_picture.png';
import Button from '../Button';
const Main = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.main__picture}>
            <img className={style.picture} src={picture} alt={picture} />
          </div>
          <div>
            <div className={style.main__texts}>
              <h1 className={style.main__title}>Швейный цех который работает для вас </h1>
              <p className={style.main__text}>
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
