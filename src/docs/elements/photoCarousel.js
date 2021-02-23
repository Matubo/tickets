import NY1 from "../imgs/NY1.jpg";
import NY2 from "../imgs/NY2.jpg";
import NY3 from "../imgs/NY3.jpg";
import NY4 from "../imgs/NY4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ReactComponent } from "react";

function PhotoCarousel() {
  return (
    <div className="photoCarousel">
      <OwlCarousel className="owl-theme" margin={12} autoWidth={true}>
        <div className="photoContainer">
          <img src={NY1} className="photo"></img>
        </div>
        <div className="photoContainer">
          <img src={NY2} className="photo"></img>
        </div>
        <div className="photoContainer">
          <img src={NY3} className="photo"></img>
        </div>
        <div className="photoContainer">
          <img src={NY4} className="photo"></img>
        </div>
      </OwlCarousel>

      <div className="photoBlur"></div>
    </div>
  );
}
export default PhotoCarousel;
