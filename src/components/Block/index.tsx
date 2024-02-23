import { Button } from '../Button';
import './style.scss';
const Block = () => {
  return (
    <section className="section__block">
      <div className="container">
        <div className="block1">
          <div className="block1__texts">
            <h4 className="block1__title">Закажите у нас </h4>
            <p className="block1__text">
              Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
              создании высококачественной одежды для мужчин, женщин и детей.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block;
