import rectangle1 from '../../images/Rectangle_15 (1).jpeg';
import rectangle2 from '../../images/Rectangle_16 (1).jpeg';
import rectangle3 from '../../images/Rectangle_17.jpeg';
import rectangle4 from '../../images/Rectangle_18.jpeg';
import rectangle5 from '../../images/Rectangle_19 (1).jpeg';
import '../../sass/components/_fifthpage.scss';
const forLoop = [rectangle2, rectangle3, rectangle4, rectangle5];
export const FifthPage = () => {
  return (
    <article id="Каталог" className="container5">
      <h3 className="h3_tag4">Каталог</h3>
      <div className="general5">
        <div className="forImage5">
          <img src={rectangle1} alt="#" />
        </div>
        <div className="rectangle_25">
          {forLoop.map((image, index) => (
            <div className="pict_1" key={index}>
              <img src={image} alt="#" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
