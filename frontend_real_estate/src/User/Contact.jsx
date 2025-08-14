import { useState } from "react";
import ApiServices from "../ApiServices/ApiServices";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const addData = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    ApiServices.addQuery(data)
      .then((res) => {
        toast.success(res.data.message || "Message sent successfully!");
        setname("");
        setemail("");
        setsubject("");
        setmessage("");
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong!");
      });
  };

  return (
    <>
      {/* Intro Section */}
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Get in Touch</h1>
                <span className="color-text-a">
                  Whether you're ready to buy, sell, invest, or simply have questions—our team is here to help.
                  Reach out to us and let’s begin your real estate journey together.
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-map box">
              <div id="map" className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                width="100%"
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>
              </div>
            </div>

            <div className="col-sm-12 section-t8">
              <div className="row">
                {/* Contact Form */}
                <div className="col-md-7">
                  <form
                    onSubmit={addData}
                    className="form-a contactForm"
                    method="post"
                    role="form"
                  >
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className="form-control form-control-lg form-control-a"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control form-control-lg form-control-a"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(e) => setsubject(e.target.value)}
                            className="form-control form-control-lg form-control-a"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setmessage(e.target.value)}
                            className="form-control"
                            rows={8}
                            placeholder="Write your message"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-a">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="col-md-5 section-md-t3">
                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="ion-ios-paper-plane" />
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Say Hello</h4>
                      </div>
                      <p className="mb-1">
                        Email: <span className="color-a">hello@dreamspacerealty.com</span>
                      </p>
                      <p className="mb-1">
                        Phone: <span className="color-a">+1 800 234 5678</span>
                      </p>
                    </div>
                  </div>

                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="ion-ios-pin" />
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Visit Us</h4>
                      </div>
                      <p className="mb-1">
                        DreamSpace Realty HQ, Times Square,<br />
                        New York, NY 10036, USA
                      </p>
                    </div>
                  </div>

                  <div className="icon-box">
                    <div className="icon-box-icon">
                      <span className="ion-ios-redo" />
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Follow Us</h4>
                      </div>
                      <div className="socials-footer">
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
                              <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="fa fa-youtube" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Info Box */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
