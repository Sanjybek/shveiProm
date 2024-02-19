import style from './style.module.scss';
import infoImage from '../../picture/info__image.png';
const InfoTechnology = () => {
  return (
    <section id="Технология">
      <div className={style.container}>
        <div className={style.block}>
          <h3 className={style.block__title}>Технология</h3>
          <div className={style.info}>
            <div className={style.info__texts}>
              <h3 className={style.info__title}>Технология</h3>
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
              <img src={infoImage} className={style.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTechnology;
