import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import uzbekFoods from "../assets/uzbek-foods.jpg";
import delivery from "../assets/delivery.jpg";
import halalBrand from "../assets/ban-1.png";
import img4 from "../assets/ban-4.jpg";
const Banner = () => {
  return (
    <div className="carouselMain">
      <div className="carouselImg">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          interval={3000}
        >
          <div>
            <img src={uzbekFoods} alt="Osh" />
          </div>
          <div>
            <img src={delivery} alt="delivery" />
          </div>
          <div>
            <img src={halalBrand} alt="delivery" />
          </div>
          <div>
            <img src={img4} alt="delivery" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
