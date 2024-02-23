// import 'sass/component/_sixthpage.scss';
import '../../sass/component/_sixthpage.scss';
import rectangle_27 from 'images/Rectangle_27.jpeg';
import rectangle_28 from 'images/Rectangle_28.jpeg';

export const SixPage = () => {
  const texts = [
    'Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на создании высококачественной одежды для мужчин, женщин и детей.',
    'Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на создании высококачественной одежды для мужчин, женщин и детей.',
  ];
  return (
    <div id="Технология" className="mainPage6">
      <section className="container6">
        <h3 className="h3_tag6">Технология</h3>
        <div className="main6">
          <article className="general6">
            <div className="general6__tag6">Технология</div>
            {texts.map((text, index) => (
              <p key={index} className="paragraph6">
                {text}
              </p>
            ))}
          </article>
          <div className="forImage6">
            <img src={rectangle_27} alt="#" />
          </div>
        </div>
      </section>
      <div className="picture6">
        <section className="table6">
          <div className="table6__tag6">Закажите у нас </div>
          <p className="table6__paragraph6">
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className="table6__button6">
            <a href="tel:+996703310147">Связатся</a>
          </button>
        </section>
        <div className="pictureLast">
          <img src={rectangle_28} alt="#" />
        </div>
      </div>
    </div>
  );
};
