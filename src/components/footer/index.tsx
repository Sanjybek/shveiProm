// import 'sass/component/_footer.scss';
import '../../sass/component/_footer.scss';
import first from 'images/picture_55 (2).svg';
import second from 'images/Frame_52.jpeg';
import third from 'images/Frame_53.jpeg';

export const Footer = () => {
  return (
    <section className="containerFooter">
      <article className="forPictureFooter">
        <img src={first} alt="#" />
      </article>
      <div className="mainFoot">
        <article className="mainFoot__tag">
          <div className="mainFoot__image">
            <img src={second} alt="#" />
          </div>
          <button className="mainFoot__button">
            <a href="tel:+996703310147">+996 703 310 147</a>
          </button>
        </article>
        <article className="mainFoot__tag">
          <div className="mainFoot__image">
            <img src={third} alt="#" />
          </div>
          <button className="mainFoot__button">Г. Бишкек, Ул. Переулок Лагерный</button>
        </article>
      </div>
    </section>
  );
};
