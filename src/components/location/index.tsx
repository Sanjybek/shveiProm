import './style.scss';
const Location = () => {
  return (
    <section id="location">
      <div className="container">
        <div className="location">
          <h3 className="location__title">Наша локация</h3>
          <div className="location__google">
            <iframe
              className="location__google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1079.990233182685!2d74.57279536269458!3d42.85269971755336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d23c70eb3f%3A0x398e5a3bad5ab708!2z0J_QtdGA0LXRg9C70L7QuiDQm9Cw0LPQtdGA0L3Ri9C5IDQ!5e0!3m2!1sru!2skg!4v1708339595737!5m2!1sru!2skg"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
