import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import bannerImage1 from "../../assets/banner.avif";
import bannerImage2 from "../../assets/mahakumb-triveni-sangal-jal.png";
import bannerImage3 from "../../assets/mahakumb-triveni-sangal-jal-vitran-abhiyan.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const images = [ `${bannerImage2}`, `${bannerImage3}`];

  // eslint-disable-next-line react/prop-types
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-white text-3xl"
        />
      </div>
    );
  };

  // eslint-disable-next-line react/prop-types
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-3xl" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div> */}

            {/* Content */}
            {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-orange-500 px-4">
              <h1 className="text-3xl md:text-5xl  font-bold mb-4">
                Gangajal from Triveni Sangam, delivered at your doorstep.
              </h1>
              <button className="text-lg px-6 py-3 mt-4 hover:bg-white hover:text-orange-400 font-semibold rounded-full shadow-md bg-orange-500 text-white transition duration-300 border cursor-pointer">
                Book Now
              </button>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
