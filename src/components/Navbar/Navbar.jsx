import { useContext, useState, useEffect } from "react";
import logo from "../../../images/logo/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./../../Context/userContext";

export default function Navbar() {
  const { userLogin, setuserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  function logOut() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("/login");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar p-2 ${isSticky ? "sticky" : ""}`}>
        <div className="col-md-12 navbar-expand-md">
          <div className="container ">
            <div className="row m-0">
              <div className="col-xl-3 col-md-3">
                <img src={logo} alt="logo" />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="col-xl-6 col-md-5 ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto text-center">
                    {userLogin !== null ? (
                      <>
                        <li className="nav-item">
                          <NavLink className="mx-2" to="/">
                            Home
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink className="mx-2" to="products">
                            Shop
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink className="mx-2" to="categories">
                            Categories
                          </NavLink>
                        </li>

                        <li className="nav-item dropdown mx-2 my-0 p-0">
                          <a
                            className="nav-link dropdown-toggle my-0 p-0"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Pages
                          </a>
                          <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="about">
                              About Us
                            </NavLink>
                            <NavLink className="dropdown-item" to="login">
                              Login
                            </NavLink>
                            <NavLink className="dropdown-item" to="cart">
                              Cart
                            </NavLink>
                            <NavLink className="dropdown-item" to="account">
                              Account
                            </NavLink>
                            <NavLink className="dropdown-item" to="content">
                              Content
                            </NavLink>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <NavLink className="mx-2" to="contact">
                            Contact
                          </NavLink>
                        </li>
                      </>
                    ) : null}
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-4">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto text-center">
                    {userLogin !== null ? (
                      <>
                        <li className="nav-item mx-2">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </li>

                        <li className="nav-item mx-2">
                          <i className="fa-regular fa-heart"></i>
                        </li>

                        <li className="nav-item mx-2">
                          <i className="fa fa-shopping-bag"></i>
                        </li>
                        
                      <li onClick={logOut} className="nav-item cursor-pointer mx-2">
                        <span>logout</span>
                      </li>
                   
                      </>
                    ) : null}
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
