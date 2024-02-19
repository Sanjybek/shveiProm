import React from 'react';
import style from './style.module.scss';
import Button from '../Button';
const OrderBlock = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.block__texts}>
            <h4 className={style.block__title}>Закажите у нас </h4>
            <p className={style.block__text}>
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
