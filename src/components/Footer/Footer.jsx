
import logoo from "../../../images/logo/logo-wh.png"
import app from "../../../images/logo/app-store.png"
import google from "../../../images/logo/google-play.png"


export default function Footer() {

  return  <>
    
    <footer className='py-5'>
        <div className="container">
            <div className="row m-0">
                <div className="col-lg-3 col-md-6 box">
                    <div className="h-100 py-4">
                        <img src={logoo} alt="" width="150px" className="mb-3"/>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 box">
                    <div className="h-100 py-4">
                        <h4 className='fw-bold'>Contact</h4>
                        <ul className="list-unstyled">
                            <li>Cairo - Naser city</li>
                            <li>Egypt</li>
                            <li>0100 000 0000</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 box">
                    <div className="h-100 py-4">
                        <h4 className='fw-bold'>Information</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 box box-border">
                    <div className="h-100 py-4">
                        <h4 className='fw-bold'>Extras</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Brands</a></li>
                            <li><a href="#">Gift Certificates</a></li>
                            <li><a href="#">Specials</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row m-0 d-flex align-items-center pt-15 pb-15 bottom-footer">
                <div className="col-md-6">
                    <ul className="list-social m-0">
                        <li>
                            <img src={app} width="150px" alt=""/>
                        </li>
                        <li>
                            <img src={google} width="150px" alt=""/>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-social float-right m-0">
                        <li className="icon facebook-icon">
                            <i className="fab fa-facebook-f"></i>
                        </li>
                        <li className="icon twitter-icon">
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li className="icon instagram-icon">
                            <i className="fab fa-instagram"></i>
                        </li>
                        <li className="icon google-icon">
                            <i className="fab fa-google-plus-g"></i>
                        </li>
                        <li className="icon rrs-icon">
                            <i className="fa-solid fa-rss"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
    <section className="copy-right text-center">
        <div className="container">
            <span>&copy; 2019 All Rights Reser</span>
        </div>
    </section>


</>
}
