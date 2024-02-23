import React from 'react';
import './style.scss';
import { Button } from '../Button';
const OrderBlock = () => {
  return (
    <section className="ordersection">
      <div className="container">
        <div className="block">
          <div className="block__texts">
            <h4 className="block__title">Закажите у нас </h4>
            <p className="block__text">
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

export default OrderBlock;
