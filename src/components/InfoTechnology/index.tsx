import './style.scss';
import infoImage from '../../picture/info__image.png';
import { InforPicture } from '../inforPicture/index';
// import InforPicture from 'components/inforPicture';
const InfoTechnology = () => {
  return (
    <section id="Технология">
      <div className="container">
        <div className="blocktex">
          <h3 className="blocktex__title">Технология</h3>
          <div className="infotex">
            <div className="infotex__texts">
              <h3 className="infotex__title">Технология</h3>
              <p className="infotex__text">
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
              <p className="infotex__text">
                Shvei prom - Швейная фабрика для производства брюк — это современное предприятие, специализирующееся на
                создании высококачественной одежды для мужчин, женщин и детей.
              </p>
            </div>
            <div className="infotex__picture">
              <InforPicture src={infoImage} className="picture" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTechnology;
