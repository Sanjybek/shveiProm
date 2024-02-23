import './style.scss';
import picture1 from '../../picture/card_info.png';
import picture2 from '../../picture/card_info 2.png';
import picture3 from '../../picture/card_info 3png.png';
import picture4 from '../../picture/card_info 4.png';
import svg from '../../picture/svg1.svg';
import svg2 from '../../picture/Frame 36.svg';
import svg3 from '../../picture/Frame 34 (2).svg';
import svg4 from '../../picture/Frame 34 (1).svg';
const InfoCards = () => {
  return (
    <section className="section__info">
      <div className="container">
        <div className="info">
          <h3 className="info__title">Наши премущества</h3>
          <div className="info__cards">
            <div className="info__card">
              <img className="info__picture_min" src={picture2} alt="" />
              <p className="info__text">Подбираем ткань, фурнитуру вместе с вами</p>
            </div>
            <div className="info__card">
              <img className="info__picture" src={picture1} alt="" />
              <p className="info__text">Профессиональное планирование</p>
            </div>
            <div className="info__card">
              <img className="info__picture" src={picture3} alt="" />
              <p className="info__text">Квалифицированные специалисты</p>
            </div>
            <div className="info__card">
              <img className="info__picture_min" src={picture4} alt="" />
              <p className="info__text">Современное оборудование</p>
            </div>
          </div>

          <div className="info__cards">
            <div className="info__second_card">
              <img src={svg} alt="" />
              <h4 className="info__second_title">Подбираем ткань, фурнитуру вместе с вами</h4>
              <p className="info__second_text">
                Мы не просто примем заказ, но и поможем вам с выбором ткани, фурнитуры для вашей одежды, также расскажем
                о всех минусах и плюсах выбранных материалов.
              </p>
            </div>
            <div className="info__second_card">
              <img src={svg4} alt="" />

              <h4 className="info__second_title">Подбираем ткань, фурнитуру вместе с вами</h4>

              <p className="info__second_text">
                Наша команда начинает работу над вашим заказом с профессионального планирования. Мы учитываем каждый
                этап производства и вычисляем оптимальное время выполнения заказа.
              </p>
            </div>
            <div className="info__second_card">
              <img src={svg2} alt="" />
              <h4 className="info__second_title">Квалифицированные специалисты</h4>
              <p className="info__second_text">
                Во время производства каждого изделия проводится контроль качества на разных этапах, начиная с раскроя и
                заканчивая окончательной отделкой. Это позволяет выявлять и устранять дефекты на самых ранних этапах.
              </p>
            </div>
            <div className="info__second_card">
              <img src={svg3} alt="" />
              <h4 className="info__second_title">Современное оборудование</h4>
              <p className="info__second_text">
                Мы оснащены промышленными швейными машинами разных типов, включая прямострочные, оверлочные, и остальные
                спец машинки, чтобы точно соответствовать различным швейным задачам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
