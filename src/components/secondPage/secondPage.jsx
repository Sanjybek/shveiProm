import '../../sass/components/_secondpage.scss';
import pictire_3 from '../../images/picture_2.jpeg';

const descriptions = [
  'Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на создании высококачественной одежды для мужчин, женщин и детей.',
  'Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на создании высококачественной одежды для мужчин, женщин и детей.',
];

export const SecondPage = () => {
  return (
    <div className="container2">
      <div className="main2">
        <div className="description2">
          <article className="description2__tag2">Почему мы?</article>
          {descriptions.map((description, index) => (
            <p key={index} className="description2__text2">
              {description}
            </p>
          ))}
        </div>
        <div className="forImage2">
          <img src={pictire_3} alt="#" />
        </div>
      </div>
    </div>
  );
};
