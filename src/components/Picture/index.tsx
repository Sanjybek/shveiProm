import React from 'react';
import style from './style.module.scss';
import image1 from '../../picture/image1.png';
import image2 from '../../picture/image2.png';
import image3 from '../../picture/image3.png';
import image4 from '../../picture/image4.png';

const Picture = () => {
  return (
    <section id="Каталог">
      <div className={style.container}>
        <div className={style.pictures}>
          <h3 className={style.pictures__title}>Каталог</h3>
          <div className={style.pictures__grid}>
            <div className={style.pictures__block}>
              <img className={style.picture} src={image1} alt="" />
            </div>
            <div className={style.pictures__grid}>
              <img className={style.picture_2} src={image2} alt="" />
              <img className={style.picture_2} src={image3} alt="" />
              <img className={style.picture_2} src={image4} alt="" />
              <img className={style.picture_2} src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Picture;
