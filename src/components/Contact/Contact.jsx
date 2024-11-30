import { NavLink } from "react-router-dom";

export default function Contact() {
  return <>

<section className="top-background">
        <div className="container">
            <div className="back-color pt-50 text-center">
                <h3> Contact Us</h3>
                <ul className="p-0 m-0">
                    <li><NavLink className="text-white" to="/">Home</NavLink></li>
                    <li className="icon"><i className="fa fa-chevron-right"></i></li>
                    <li><a className="text-white">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </section>

    <section className="contact-us col-12">
        <div className="container p-0">
            <div className="row m-0">
                <div className="col-md-5 d-flex align-items-center contact-details order-md-first order-sm-last order-6">
                    <div className="col-12 ">
                        <h3 className="text-center mb-40">Contact Us</h3>
                        <ul>
                            <li><a href=""><i className="fa fa-map-marker-alt"></i>Elmonfia Egypt</a></li>
                            <li><a href=""><i className="fa fa-phone"></i>0100 000 0000</a></li>
                            <li><a href=""><i className="fab fa-facebook-f"></i>facebook</a></li>
                            <li><a href=""><i className="fab fab fa-twitter"></i>twitter</a></li>
                            <li><a href=""><i className="fab fa-instagram"></i>instagram</a></li>
                            <li><a href=""><i className="fab fa-google"></i>google</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 order-md-last order-sm-first">
                    <h3 className="text-center pt-30"> Get In Touch</h3>
                    <p className="text-center mb-40">Lets talk for any question</p>
                    <form>
                        <div className="row m-0">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="text-contact">First name</label>
                                    <input type="text" id="contact-name" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="text-contact">Last name</label>
                                    <input type="text" id="contact-name1" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="text-contact">Email</label>
                                    <input type="email" id="contact-email" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="text-contact">Phone</label>
                                    <input type="email" id="phone-contact" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="text-contact">Your Message</label>
                                    <textarea name="" id="text-contact" cols="30" rows="7" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-color1 mb-30 mt-20">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </>
    
  
  
}
