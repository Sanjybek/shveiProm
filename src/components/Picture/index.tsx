import './style.scss';
import image1 from '../../picture/image1.png';
import image2 from '../../picture/image2.png';
import image3 from '../../picture/image3.png';
import image4 from '../../picture/image4.png';

const Picture = () => {
  const images: string[] = [image1, image2, image3, image4];
  return (
    <section id="Каталог">
      <div className="container">
        <div className="pictures">
          <h3 className="pictures__title">Каталог</h3>
          <div className="pictures__grid ">
            <div className="pictures__block">
              <img className="picture" src={image1} />
            </div>
            <div className="pictures__grid pictures__second_grid">
              {images.map((image, index) => (
                <img key={index} className="picture_2" src={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Picture;
