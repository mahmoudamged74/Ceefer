import { NavLink } from "react-router-dom";
import adsImage from '../../../images/logo/ads.jpg';



export default function AboutUs() {
   
    

  return <>
   
    <section className="top-background">
        <div className="container">
            <div className="back-color pt-50 text-center">
                <h3> About</h3>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                    <li className="icon"><i className="fa fa-chevron-right"></i></li>
                    <li><a >About</a></li>
                </ul>
            </div>
        </div>
    </section>
    
    <section className="about-page col-12">
        <div className="container">
            <div className="about-1">
                <div className="row m-0">
                    <div className="col-md-6">
                        <h1>OUR COMPANY</h1>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. </p>
                        <ul>
                            <li>Credibly innovate granular internal</li>
                            <li>Grantedly underconstructions reloaded</li>
                            <li>Interactively procrastinate high-payoff</li>
                            <li>Completely synergize resource taxing relationships</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mt-30">
                        <div className="img-about">
                            <img src={adsImage} width="70%" className="mx-auto d-block" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row my-5 ">
                    <div className="col-md-4 mt-20">
                        <div className="feature">
                            <i className="fa fa-money-bill-wave"></i>
                            <h6>Best price </h6>
                            <p>Our products adventage by best price and with hight Quality.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-20">
                        <div className="feature">
                            <i className="fa fa-headset"></i>
                            <h6>Support Team </h6>
                            <p>Our support team guarantees to respond you within 24 working hours.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-20">
                        <div className="feature">
                            <i className="fa fa-thumbs-up"></i>
                            <h6>High Quality </h6>
                            <p>Our products with height quality of Material and quality 100%. </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>

  
  </>
}
