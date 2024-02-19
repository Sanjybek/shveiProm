import style from './style.module.scss';
import infoPicture from '../../picture/info_picture.png';
const Info = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.info__texts}>
            <h3 className={style.info__title}>Почему мы?</h3>
            <p className={style.info__text}>
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
            <p className={style.info__text}>
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
          </div>
          <div className={style.info__picture}>
            <img src={infoPicture} className={style.picture} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
