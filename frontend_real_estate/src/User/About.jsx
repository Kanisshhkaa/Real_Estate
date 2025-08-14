import { useEffect, useState } from "react";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";

export default function About() {
  const [agentsData, setagentsData] = useState([]);

  useEffect(() => {
    ApiServices.getAdvisor()
      .then((res) => {
        setagentsData(res.data.data);
      })
      .catch((err) => {
        console.log("Error fetching advisors:", err);
      });
  }, []);

  return (
    <>
      {/* Intro Section */}
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Your Trusted Real Estate Partner</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about-img-box">
                <img src="/img/slide-about-1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="sinse-box">
                <h3 className="sinse-title">
                  DreamSpace Realty
                  <span />
                  <br /> Since 2017
                </h3>
                <p>Your Vision, Our Mission</p>
              </div>
            </div>
            <div className="col-md-12 section-t8">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <img src="/img/about-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="title-vertical d-flex justify-content-start">
                    <span>Exclusive Property Deals</span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 section-md-t3">
                  <div className="title-box-d">
                    <h3 className="title-d">
                      Shaping
                      <span className="color-d">Dreams</span> into Reality
                    </h3>
                  </div>
                  <p className="color-text-a">
                    At DreamSpace Realty, we are committed to helping individuals and families
                    find the perfect home that fits their lifestyle, budget, and vision. With a passion
                    for excellence and a deep understanding of the property market, we deliver unmatched
                    value and trust.
                  </p>
                  <p className="color-text-a">
                    Whether you're buying your first home, investing in property, or selling a beloved space,
                    our expert team ensures a smooth and transparent experience every step of the way.
                    Discover spaces built for living, growing, and creating unforgettable memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-agents section-t8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Meet Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {agentsData.map((el) => (
              <div className="col-md-4" key={el._id}>
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src={BASE_IMAGE_URL + el.advisorImage}
                      alt={el.name}
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#!" className="link-two">
                            {el.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Helping clients find the perfect property with honest advice and local expertise.
                        Committed to making your real estate journey smooth, smart, and successful.
                      </p>
                      <div className="info-agents color-a">
                        <p><strong>Phone: </strong> {el.contact}</p>
                        <p><strong>Email: </strong> {el.email}</p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-pinterest-p" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-dribbble" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
