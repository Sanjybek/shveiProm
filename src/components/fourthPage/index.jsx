import '../../sass/components/_fourthpage.scss';
import vector_1 from '../../images/frame_1.png';
import vector_2 from '../../images/frame_2.png';
import vector_3 from '../../images/frame_3.png';
import vector_4 from '../../images/frame_4.png';
import rectangle_1 from '../../images/vector.jpeg';
const data = [
  {
    image: vector_1,
    title: 'Подбираем ткань, фурнитуру вместе с вами',
    description:
      ' Мы не просто примем заказ, но и поможем вам с выбором ткани, фурнитуры для вашей одежды, также расскажем всех минусах и плюсах выбранных материалов.',
  },
  {
    image: vector_2,
    title: 'Профессиональное планирование',
    description:
      'Наша команда начинает работу над вашим заказом с профессионального планирования. Мы учитываем каждый этап производства и вычисляем оптимальное время выполнения заказа.',
  },
  {
    image: vector_3,
    title: 'Квалифицированные специалисты',
    description:
      'Во время производства каждого изделия проводится контроль качества на разных этапах, начиная с раскроя и заканчивая окончательной отделкой. Это позволяет выявлять и устранять дефекты на самых ранних этапах.',
  },
  {
    image: vector_4,
    title: 'Современное оборудование',
    description:
      'Мы оснащены промышленными швейными машинами разных типов, включая прямострочные, оверлочные, и остальные спец машинки, чтобы точно соответствовать различным швейным задачам.',
  },
];

export const FourthPage = () => {
  return (
    <div className="mainContainer4">
      <article className="container4">
        {data.map((item, index) => (
          <section className="main4" key={index}>
            <div className="main4__general4">
              <img src={item.image} alt="#" />
              <div className="mainTag4">{item.title}</div>
              <p className="main4__description4">{item.description}</p>
            </div>
          </section>
        ))}
      </article>
      <div className="picture4">
        <section className="table4">
          <div className="table4__tag4">Закажите у нас </div>
          <p className="table4__paragraph4">
            Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
            создании высококачественной одежды для мужчин, женщин и детей.
          </p>
          <button className="table4__button4">
            <a href="tel:+996703310147">Связатся</a>
          </button>
        </section>
        <div className="forImage4">
          <img src={rectangle_1} alt="#" />
        </div>
      </div>
    </div>
  );
};
