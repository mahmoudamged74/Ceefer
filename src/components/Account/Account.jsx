import  { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Account() {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <>
      <section className="top-background">
        <div className="container">
          <div className="back-color pt-50 text-center">
            <h3>Profile</h3>
            <ul className="p-0 m-0">
              <li>
                <NavLink className="text-white" to="/">Home</NavLink>
              </li>
              <li className="icon">
                <i className="fa fa-chevron-right"></i>
              </li>
              <li>
                <a className="text-white" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="profile col-12">
        <div className="container p-0">
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="tab-profile">
                <div className="row pt-10 m-0">
                  <div className="col-lg-12 d-flex align-items-center mt-30">
                    <div className="avatar-upload">
                      <div className="avatar-preview">
                        <div
                          id="imagePreview"
                          style={{
                            backgroundImage: "url(assets/images/user/Team1.png)",
                          }}
                        ></div>
                      </div>
                      <div className="avatar-edit">
                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                        <label htmlFor="imageUpload" title="Edit">
                          Edit Photo
                        </label>
                      </div>
                    </div>
                    <div className="information">
                      <p className="pt-5 pb-5 mb-0 text-center">Mahmoud Amged</p>
                      <small>Last Active 12:55 PM</small>
                    </div>
                  </div>

                  <div className="col-12 p-0 tabs-side m-0">
                    <div className="nav" id="v-pills-tab" role="tablist">
                      <a
                        className={`nav-link ${activeTab === "Account" ? "active" : ""}`}
                        onClick={() => setActiveTab("Account")}
                      >
                        Account
                      </a>
                      <a
                        className={`nav-link ${activeTab === "Request" ? "active" : ""}`}
                        onClick={() => setActiveTab("Request")}
                      >
                        Current orders
                      </a>
                      <a
                        className={`nav-link ${activeTab === "Previous" ? "active" : ""}`}
                        onClick={() => setActiveTab("Previous")}
                      >
                        Previous requests
                      </a>
                      <a
                        className={`nav-link ${activeTab === "Address" ? "active" : ""}`}
                        onClick={() => setActiveTab("Address")}
                      >
                        Address book
                      </a>
                      <a className="nav-link">Sign Out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-30">
              <div className="col-12 pb-20 text-tabs">
                <div className="tab-content" id="v-pills-tabContent">
                  {activeTab === "Account" && (
                    <div className="tab-pane fade show active">
                      <h5 className="mb-15">My Account</h5>
                      <form action="" className="mt-20">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="FullName">Full Name</label>
                              <input type="text" className="form-control" id="FullName" value="Mahmoud Amged" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="Phone">Phone Number</label>
                              <input type="text" className="form-control" id="Phone" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="Email">Email</label>
                              <input type="email" className="form-control" id="Email" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="Company">Company</label>
                              <input type="text" className="form-control" id="Company" />
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-color1 mt-30 mb-10">Update Info</button>
                      </form>
                    </div>
                  )}

                  {activeTab === "Request" && (
                    <div className="tab-pane fade orders">
                      <table className="table mt-5">
                        <thead className="thead-light">
                          <tr>
                            <th>#</th>
                            <th>Order Number</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>01020214</td>
                            <td>$180</td>
                            <td>11-11-2019</td>
                            <td>
                              <a href="#" className="check-icon">
                                <i className="far fa-info-circle"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "Previous" && (
                    <div className="tab-pane fade orders">
                      <h5>Previous Requests</h5>
                      <p>No requests available.</p>
                    </div>
                  )}

                  {activeTab === "Address" && (
                    <div className="tab-pane fade">
                      <h5>Address Book</h5>
                      <form>
                        <div className="form-group">
                          <label htmlFor="Address">Street Address</label>
                          <input type="text" className="form-control" id="Address" />
                        </div>
                        <button className="btn btn-color1 mt-30 mb-10">Save Address</button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
