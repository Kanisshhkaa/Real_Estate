export default function AgentsSingle(){
    return(
        <>
        <>
  {/*/ Intro Single star /*/}
  <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Margaret Stone</h1>
            <span className="color-text-a">Agent Immobiliari</span>
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
              <li className="breadcrumb-item">
                <a href="#">Agents</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Margaret Stone
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/*/ Intro Single End /*/}
  {/*/ Agent Single Star /*/}
  <section className="agent-single">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-md-6">
              <div className="agent-avatar-box">
                <img
                  src="/img/agent-7.jpg"
                  alt=""
                  className="agent-avatar img-fluid"
                />
              </div>
            </div>
            <div className="col-md-5 section-md-t3">
              <div className="agent-info-box">
                <div className="agent-title">
                  <div className="title-box-d">
                    <h3 className="title-d">
                      Margaret Stone
                      <br /> Escala
                    </h3>
                  </div>
                </div>
                <div className="agent-content mb-3">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh. Praesent sapien massa, convallis
                    a pellentesque nec, egestas non nisi. Vivamus suscipit
                    tortor eget felis porttitor volutpat. Vivamus suscipit
                    tortor eget felis porttitor volutpat.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong>
                      <span className="color-text-a"> +54 356 945234 </span>
                    </p>
                    <p>
                      <strong>Mobile: </strong>
                      <span className="color-text-a"> 999 123 456 789</span>
                    </p>
                    <p>
                      <strong>Email: </strong>
                      <span className="color-text-a"> agents@example.com</span>
                    </p>
                    <p>
                      <strong>skype: </strong>
                      <span className="color-text-a"> Margaret.Es</span>
                    </p>
                    <p>
                      <strong>Email: </strong>
                      <span className="color-text-a"> agents@example.com</span>
                    </p>
                  </div>
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
        <div className="col-md-12 section-t8">
          <div className="title-box-d">
            <h3 className="title-d">My Properties (6)</h3>
          </div>
        </div>
        <div className="row property-grid grid">
          <div className="col-sm-12">
            <div className="grid-option">
              <form>
                <select className="custom-select">
                  <option selected="">All</option>
                  <option value={1}>New to Old</option>
                  <option value={2}>For Rent</option>
                  <option value={3}>For Sale</option>
                </select>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img
                  src="/img/property-1.jpg"
                  alt=""
                  className="img-a img-fluid"
                />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">
                        204 Mount
                        <br /> Olive Road Two
                      </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">
                      Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>
                          340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img
                  src="/img/property-3.jpg"
                  alt=""
                  className="img-a img-fluid"
                />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">
                        204 Mount
                        <br /> Olive Road Two
                      </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">
                      Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>
                          340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img
                  src="/img/property-6.jpg"
                  alt=""
                  className="img-a img-fluid"
                />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">
                        204 Mount
                        <br /> Olive Road Two
                      </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">
                      Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>
                          340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img
                  src="/img/property-7.jpg"
                  alt=""
                  className="img-a img-fluid"
                />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">
                        204 Mount
                        <br /> Olive Road Two
                      </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">
                      Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>
                          340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img
                  src="/img/property-8.jpg"
                  alt=""
                  className="img-a img-fluid"
                />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">
                        204 Mount
                        <br /> Olive Road Two
                      </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">
                      Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>
                          340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img
                  src="/img/property-10.jpg"
                  alt=""
                  className="img-a img-fluid"
                />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">
                        204 Mount
                        <br /> Olive Road Two
                      </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">
                      Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>
                          340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ Agent Single End /*/}
</>

        </>
    )
}