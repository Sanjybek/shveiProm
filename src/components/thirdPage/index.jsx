import '../../sass/components/_thirdpage.scss';
import picture_4 from '../../images/picture_4.jpeg';
import picture_5 from '../../images/picture_5.jpeg';
import picture_6 from '../../images/picture_6.jpeg';
import picture_7 from '../../images/picture_7.jpeg';

export const ThirdPage = () => {
  const sections = [
    { imageSrc: picture_5, text: 'Профессиональное планирование' },
    { imageSrc: picture_6, text: 'Квалифицированные специалисты' },
  ];
  return (
    <article className="container3">
      <h3 className="h3_tag_third">Наши премущества</h3>
      <div className="forBody3">
        <section className="main3">
          <div className="main3__image3">
            <img src={picture_4} alt="#" />
          </div>
          <p className="text3">Подбираем ткань, фурнитуру вместе с вами</p>
        </section>
        {sections.map((section, index) => (
          <section key={index} className="generate3">
            <div className="generate3__image3">
              <img src={section.imageSrc} alt="#" />
            </div>
            <p className="text3">{section.text}</p>
          </section>
        ))}
        <section className="main3">
          <div className="main3__image3">
            <img src={picture_7} alt="#" />
          </div>
          <p className="text3">Современное оборудование</p>
        </section>
      </div>
    </article>
  );
};
