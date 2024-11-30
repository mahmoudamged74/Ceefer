import  { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background1 from "../../../images/background/shadow-bg1.png";
import background2 from "../../../images/background/slide-product1.png";
import background3 from "../../../images/background/shadow-bg2.png";
import background4 from "../../../images/background/slide-product2.png";
import background5 from "../../../images/background/shadow-bg.png";
import background6 from "../../../images/background/slide-product.png";



export default function SimpleSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (_, next) => {
      setActiveSlide(next); 
    }
    
  };

  return (
    
    <Slider {...settings}>
      {/* الشريحة الأولى */}
      <div className={`carousel-slide slide1 ${activeSlide === 0 ? 'animate-slide1 animate-text' : ''}`}>
        <div className="content container">
          <div className="text">
            <h6>New Collection A-R 222</h6>
            <h4 className="fw-bold">Modern And Pleasant<br />Cafe Seating Design</h4>
            <p>GET 30% OFF WHEN USE CODE: ASHREN30</p>
            <a href="#" className="btn btn-color">Shop Now <i className="fa fa-long-arrow-alt-right"></i></a>
          </div>
          <div className="images">
            <img src={background1} className="foreground-image image1-slide1" alt="slide" />
            <img src={background2} className="background-image image2-slide1" alt="slide" />
          </div>
        </div>
      </div>

      {/* الشريحة الثانية */}
      <div className={`carousel-slide slide2 ${activeSlide === 1 ? 'animate-slide2 animate-text' : ''}`}>
        <div className="content container">
          <div className="text">
            <h6>New Collection A-R 222</h6>
            <h4 className="fw-bold">Modern And Pleasant<br />Cafe Seating Design</h4>
            <p>GET 30% OFF WHEN USE CODE: ASHREN30</p>
            <a href="#" className="btn btn-color">Shop Now <i className="fa fa-long-arrow-alt-right"></i></a>
          </div>
          <div className="images">
            <img src={background3} className="foreground-image image1-slide2" alt="slide" />
            <img src={background4} className="background-image image2-slide2" alt="slide" />
          </div>
        </div>
      </div>

      {/* الشريحة الثالثة */}
      <div className={`carousel-slide slide3 ${activeSlide === 2 ? 'animate-slide3 animate-text' : ''}`}>
        <div className="content container">
          <div className="text">
            <h6>New Collection A-R 222</h6>
            <h4 className="fw-bold">Modern And Pleasant<br />Cafe Seating Design</h4>
            <p>GET 30% OFF WHEN USE CODE: ASHREN30</p>
            <a href="#" className="btn btn-color">Shop Now <i className="fa fa-long-arrow-alt-right"></i></a>
          </div>
          <div className="images">
            <img src={background5} className="foreground-image image1-slide3" alt="slide" />
            <img src={background6} className="background-image image2-slide3" alt="slide" />
          </div>
        </div>
      </div>
    </Slider>
  );
}
