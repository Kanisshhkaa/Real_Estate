import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"

export default function AgentsGrid(){
  const[data,setdata]=useState([])
  useEffect(()=>{
    ApiServices.getAdvisor()
    .then((res)=>{
      setdata(res.data.data)
    })
  })
    return(
        <>
        <>
  {/*/ Intro Single star /*/}
  <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Our Amazing Agents</h1>
            <span className="color-text-a">Grid Properties</span>
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
                Agents Grid
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/*/ Intro Single End /*/}
  {/*/ Agents Grid Star /*/}
  <section className="agents-grid grid">
    <div className="container">
      <div className="row">
       {
        data.map((el)=>(
          <>
           <div className="col-md-4">
          <div className="card-box-d">
            <div className="card-img-d">
              <img src={BASE_IMAGE_URL+ el.advisorImage} height={'250px'} alt="" className="img-d" />
            </div>
            <div className="card-overlay card-overlay-hover">
              <div className="card-header-d">
                <div className="card-title-d align-self-center">
                  <h3 className="title-d">
                    <a href="#" className="link-two">
                      {el.name}
                      <br />
                    </a>
                  </h3>
                </div>
              </div>
              <div className="card-body-d">
                <p className="content-d color-text-a">
                  Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                  dictum porta two.
                </p>
                <div className="info-agents color-a">
                  <p>
                    <strong>Phone: </strong> {el.contact}
                  </p>
                  <p>
                    <strong>Email: </strong> {el.email}
                  </p>
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
          </>
        ))
       }
       
      </div>
      <div className="row">
        <div className="col-sm-12">
          <nav className="pagination-a">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                  <span className="ion-ios-arrow-back" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item next">
                <a className="page-link" href="#">
                  <span className="ion-ios-arrow-forward" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/*/ Agents Grid End /*/}
</>

        </>
    )
}