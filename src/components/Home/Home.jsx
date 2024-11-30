import p1Image from '../../../images/product/p1.png'
import p4Image from '../../../images/product/p4.png'
import p5Image from '../../../images/product/p5.png'
import p6Image from '../../../images/product/p6.png'
import p2Image from '../../../images/product/p2.png'
import p7Image from '../../../images/product/p7.png'
import p8Image from '../../../images/product/p8.png'
import p9Image from '../../../images/product/p9.png'
import pImage7 from '../../../images/background/p7.png'
import adsImage from '../../../images/logo/ads.jpg';
import slideProduct1Image from '../../../images/background/slide-product.png';
import slideProduct2Image from '../../../images/background/slide-product1.png';
import productImage from '../../../images/background/slide-product2.png';
import sponsor1 from '../../../images/partner/sponser1.jpg';
import sponsor2 from '../../../images/partner/sponser2.jpg';
import sponsor3 from '../../../images/partner/sponser3.jpg';
import sponsor4 from '../../../images/partner/sponser4.jpg';
import sponsor5 from '../../../images/partner/sponser5.jpg';
import sponsor6 from '../../../images/partner/sponser6.jpg';
import sponsor7 from '../../../images/partner/sponser7.jpg';
import sponsor8 from '../../../images/partner/sponser8.jpg';
import sponsor9 from '../../../images/partner/sponser9.jpg';
import sponsor10 from '../../../images/partner/sponser10.jpg';
import Slider from "react-slick";
import SimpleSlider from '../SimpleSlider/SimpleSlider'

export default function Home() {
  
  const sponsors = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5,
    sponsor6, sponsor7, sponsor8, sponsor9, sponsor10
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  };

  const settingProducts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <SimpleSlider/>
      {/* categore */}
      <section className="category">
        <div className="container">
          <div className="row m-0">
            <div className="col-md-6 mt-40">
              <div className="all-category category-one">
                <h3><a href="#">Decoration</a></h3>
                <img src={p1Image} alt="Decoration" />
              </div>
            </div>
            <div className="col-md-6 mt-40">
              <div className="all-category category-two">
                <h3><a href="#">Lamps</a></h3>
                <img src={p4Image} alt="Lamps" />
              </div>
            </div>
            <div className="col-md-12 mt-40">
              <div className="all-category category-three">
                <h3 className="text-right"><a href="#">Indoor Furniture</a></h3>
                <img src={p2Image} alt="Indoor Furniture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* featured-products */}
      <section className="featured-products my-5">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-5 col-md-12">
              <img src={adsImage} width="100%" height={"83%"} className="ads-img" alt="Ads" />
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="products-slide">
                <h3>Featured Products</h3>
                <Slider {...settings}>
                <div className="item">
                                <div className="row m-0">
                                    <div className="col-md-7 order-6 order-md-first order-sm-last">
                                        <a href="" className="titel">Decoration home</a>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <ul className="star p-0 m-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <h6>$140.50</h6>
                                        <ul className="control mt-3 p-0">
                                            <li>
                                                <a href="#" className="btn-color1">Add To Cart</a>
                                            </li>
                                            <li className="favorit"><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li className="favorit"><a href="#"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 product-img order-md-last order-sm-first mt-10">
                                        <img src={slideProduct1Image} className="mx-auto d-block" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row m-0">
                                    <div className="col-md-7 order-6 order-md-first order-sm-last">
                                        <a href="" className="titel">Decoration home</a>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <ul className="star p-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <h6>$140.50</h6>
                                        <ul className="control mt-30 p-0">
                                            <li>
                                                <a href="#" className="btn-color1">Add To Cart</a>
                                            </li>
                                            <li className="favorit"><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li className="favorit"><a href="#"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 product-img order-md-last order-sm-first mt-10">
                                        <img src={slideProduct2Image} className="mx-auto d-block" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row m-0">
                                    <div className="col-md-7 order-6 order-md-first order-sm-last">
                                        <a href="" className="titel">Decoration home</a>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <ul className="star p-0 m-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <h6>$140.50</h6>
                                        <ul className="control mt-3 p-0">
                                            <li>
                                                <a href="#" className="btn-color1">Add To Cart</a>
                                            </li>
                                            <li className="favorit"><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li className="favorit"><a href="#"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 product-img order-md-last order-sm-first mt-10">
                                        <img src={productImage} className="mx-auto d-block" alt=""/>
                                    </div>
                                </div>
                            </div>
    
                          </Slider>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>

          {/* slider Products */}
          <section className="product">
        <div className="container">
            <h3 className="text-center"> Products </h3>
            <ul className="nav mt-3" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="Furniture-tab" data-toggle="tab" href="#Furniture" role="tab" aria-controls="Furniture" aria-selected="true">Furniture</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="Lighting-tab" data-toggle="tab" href="#Lighting" role="tab" aria-controls="Lighting" aria-selected="false">Lighting</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="Kitchen-tab" data-toggle="tab" href="#Kitchen" role="tab" aria-controls="Kitchen" aria-selected="false">Kitchen</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="Office-tab" data-toggle="tab" href="#Office" role="tab" aria-controls="Office" aria-selected="false">Office</a>
                </li>
            </ul>
            <div className="slider-container">
      <Slider {...settingProducts}>
      <div className="item">
                            <div className="product-grid mx-3">
                                <div className="product-image2">
                                    <a href="#">
                                        <img className="pic-1" src={p7Image}/>
                                        <img className="pic-2" src={p8Image}/>
                                    </a>
                                    <ul className="social">
                                        <li><a data-toggle="modal" data-target="#view-product" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <h6 className="price-cart mb-0" href="">$59.99</h6>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Chair Home</a></h3>
                                    <span className="price">
                                        <ul className="star p-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="product-grid mx-3">
                                <div className="product-image2">
                                    <a href="#">
                                        <img className="pic-1" src={p8Image}/>
                                        <img className="pic-2" src={p9Image}/>
                                    </a>
                                    <ul className="social">
                                        <li><a data-toggle="modal" data-target="#view-product" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <h6 className="price-cart mb-0" href="">$59.99</h6>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Chair Home</a></h3>
                                    <span className="price">
                                        <ul className="star p-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="product-grid mx-3">
                                <div className="product-image2">
                                    <a href="#">
                                        <img className="pic-1" src={p1Image}/>
                                        <img className="pic-2" src={p5Image}/>
                                    </a>
                                    <ul className="social">
                                        <li><a data-toggle="modal" data-target="#view-product" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <h6 className="price-cart mb-0" href="">$59.99</h6>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Chair Home</a></h3>
                                    <span className="price">
                                        <ul className="star p-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="product-grid mx-3">
                                <div className="product-image2">
                                    <a href="#">
                                        <img className="pic-1" src={p2Image}/>
                                        <img className="pic-2" src={p4Image}/>
                                    </a>
                                    <ul className="social">
                                        <li><a data-toggle="modal" data-target="#view-product" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <h6 className="price-cart mb-0" href="">$59.99</h6>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Chair Home</a></h3>
                                    <span className="price">
                                        <ul className="star p-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="product-grid mx-3">
                                <div className="product-image2">
                                    <a href="#">
                                        <img className="pic-1" src={p4Image}/>
                                        <img className="pic-2" src={p6Image}/>
                                    </a>
                                    <ul className="social">
                                        <li><a data-toggle="modal" data-target="#view-product" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <h6 className="price-cart mb-0" href="">$59.99</h6>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Chair Home</a></h3>
                                    <span className="price">
                                        <ul className="star p-0">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>

                        </div>
       
      </Slider>
    </div>
            </div>
    </section>

    
     

      {/* count down */}
      <section className="count my-5">
        <div>
          <div className="row text-center m-0">
            <div className="col-md-6 d-flex align-items-center count-content">
              <div className="col-12 mb-4 p-0">
                <h4 id="head">Deal Of The Day</h4>
                <p>We have open mega sale off up to 69% for all items</p>
                <ul className="mb-3">
                  <li><span id="days"></span>days</li>
                  <li><span id="hours"></span>Hours</li>
                  <li><span id="minutes"></span>Minutes</li>
                  <li><span id="seconds"></span>Seconds</li>
                </ul>
                <a href="#" className="btn-color">Shop Now <i className="fa fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
            <div className="col-md-6 count-img">
              <img src={pImage7} width="62%" className="d-block mx-auto" alt=""/>
            </div>
          </div>
        </div>
      </section>

      {/* sponser */}
      <section className="sponser pt-3 pb-4">
        <div className="container">
          <div className="row m-0 all-brands">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="col brand-item">
                <img src={sponsor} className="mx-auto d-block" alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* follow in instagram */}
      <section className="Follow-Instagram mt-2 pb-4">
        <div className="container">
          <div className="col-12">
            <h3 className="text-center">Follow Us On Instagram</h3>
          </div>
          <div className="row text-center justify-content-center mt-30">
            <div id="myfurniturecom" className="instagram_feed"></div>
          </div>
        </div>
      </section>

            
  
      {/* <!-- subscribe --> */}
    <div className="subscribe">
        <div className="container">
            <div className="row m-0 d-flex align-content-center justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 text-center">
                    <h3>Subscribe Now</h3>
                    <p>Subscribe and take 15% off on any product</p>
                    <form action="">
                        <div className="row m-0">
                            <div className="col-sm-8 h-100 p-0">
                                <div className="form-group mb-0">
                                    <input type="Email" className="form-control" placeholder="Email@example.com"/>
                                </div>
                            </div>
                            <div className="col-sm-4 h-100 p-0">
                                <button className="btn btn-color">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
