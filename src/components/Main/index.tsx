import './style.scss';
import picture from '../../picture/fon_picture.png';
import { Button } from '../Button';
const Main = () => {
  return (
    <section className="sections">
      <div className="container">
        <div className="main">
          <div className="main__picture">
            <img className="picture" src={picture} alt={picture} />
          </div>
          <div>
            <div className="main__texts">
              <h1 className="main__title">Швейный цех который работает для вас </h1>
              <p className="main__text">
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
