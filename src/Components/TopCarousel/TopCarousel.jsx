import OneSlider from './OneSlider'
import './TopCarousel.css'
import images from './images'
import Slider from "react-slick";

const setArrow = window.innerWidth < 600 ? false : true;

const TopCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        // speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        arrows: setArrow,
      };
    return (
     <>
        <div className="box">
        <Slider {...settings}>
            {images.map( (item, i) => <OneSlider key={i} item={item} /> )}
        </Slider>
        </div>
     </>
  )
}

export default TopCarousel