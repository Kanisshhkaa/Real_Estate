import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"; 
import { Link } from "react-router-dom";

export default function Home(){
  const[mydata,setmydata]=useState([])
  const[propertyData,setpropertyData]=useState([])
  const[agentsData,setagentsData]=useState([])
  
  useEffect(()=>{
    ApiServices.getCategoryData()
    .then((res)=>{
      setmydata(res.data.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[])

  useEffect(()=>{
    ApiServices.getAdvisor()
    .then((res)=>{
      setagentsData(res.data.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[])

  useEffect(()=>{
    ApiServices.getProperties()
    .then((res)=>{
      setpropertyData(res.data.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[])
    return(
        <>
      <>
  {/*/ Carousel Star /*/}
  <div className="intro intro-carousel">
    <div id="carousel">
      <div
        className="carousel-item-a intro-item bg-image"
        style={{ backgroundImage: "url(/img/slide-1.jpg)" }}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Mount
                      <br /> Olive Road Two
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a">rent | $ 12.000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
  {/*/ Carousel end /*/}
  {/*/ Services Star /*/}
  <section className="section-services section-t8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Our Services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="fa fa-gamepad" />
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Lifestyle</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
              We believe a home is more than just walls—it's where your lifestyle begins. Our real estate projects are thoughtfully designed with modern amenities, green spaces, and vibrant communities that enhance everyday living. From wellness to leisure, we help you find a space that suits the life you want to live.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="#" className="link-c link-icon">
                Read more
                <span className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="fa fa-usd" />
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Loans</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
              Navigating property financing can be overwhelming, but we make it simple. Our loan assistance service connects you with trusted banking partners, competitive rates, and step-by-step guidance. Whether you're a first-time buyer or an investor, we help you secure the right loan with ease.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="#" className="link-c link-icon">
                Read more
                <span className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="fa fa-home" />
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Sell</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
              Buying or selling a property should be smooth, transparent, and rewarding. Our expert sales team ensures hassle-free transactions, accurate market pricing, and personalized support. From listings to legalities, we manage it all—so you can focus on what matters most.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="#" className="link-c link-icon">
                Read more
                <span className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ Services End /*/}


    {/*/ Category Start /*/}
    <section className="section-services section-t8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Category</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        
        {
          mydata.map((el)=>(
            <>
            <div className="col-md-4 col-sm-12">
            <div className="card mt-4" style={{ width: "22rem" , height:'450px' }}>
           <div className="category-content" style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px 20px'}}>
           <img src={BASE_IMAGE_URL+el.categoryImage} height={'250px'} className="rounded-3  card-img-top" alt="..." />
           
           </div>
           <div className="card-body">
             <h5 className="card-title">{el.categoryName}</h5>
             <p className="card-text">
               {el.description}
             </p>
             <Link to={'/ViewCatgeoryProperty/'+ el._id} className="btn btn-primary">
               Explore Properties
             </Link>
           </div>
      </div>
            </div>

            </>
          ))
        }
      </div>
    </div>
  </section>
  {/*/ Services End /*/}

  {/*/ Property Star /*/}
  {/*/ Property Star /*/}
<section className="section-property section-t8">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title-wrap d-flex justify-content-between">
          <div className="title-box">
            <h2 className="title-a">Latest Properties</h2>
          </div>
          <div className="title-link">
            <a href="property-grid.html">
              All Property
              <span className="ion-ios-arrow-forward" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Property Cards Section */}
    <div className="row">
    {propertyData.map((el) => {
  if (el.status === "Accept" && el.dealerstatus === "Active") {
    return (
      <div className="col-md-4 col-sm-12" key={el._id}>
        <div className="card-box-a card-shadow mt-4" style={{ height: '300px', marginTop: '20px' }}>
        <span
                 className="badge bg-danger position-absolute"
                 style={{ top: '10px', left: '10px', fontSize: '1rem', padding: '6px 10px',color:'white' }}
               >
                 {el.propertyType}
               </span>
          <div className="img-box-a">
            <img
              src={BASE_IMAGE_URL + el.propertyImage}
              alt={el.name}
              className="img-a img-fluid"
            />
          </div>
          <div className="card-overlay">
            <div className="card-overlay-a-content">
              <div className="card-header-a">
                <h2 className="card-title-a">
                  <a href="property-single.html">{el.name}</a>
                </h2>
              </div>
              <div className="card-body-a">
                <div className="price-box d-flex">
                  <span className="price-a">rent | {el.price}</span>
                </div>
                <Link to={`/ViewSingleProperty/${el._id}`} className="link-a">
                  Click here to view
                  <span className="ion-ios-arrow-forward" />
                </Link>
              </div>
              <div className="card-footer-a">
                <ul className="card-info d-flex justify-content-around">
                  <li>
                    <h4 className="card-info-title">Area</h4>
                    <span>
                      {el.area}
                      <sup>2</sup>
                    </span>
                  </li>
                  <li>
                    <h4 className="card-info-title">Rooms</h4>
                    <span>{el.rooms}</span>
                  </li>
                  <li>
                    <h4 className="card-info-title">Baths</h4>
                    <span>{el.washroom}</span>
                  </li>
                  <li>
                    <h4 className="card-info-title">Garages</h4>
                    <span>{el.garage}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null; // Don't render anything if conditions don't match
})}

    </div>
  </div>
</section>
{/*/ Property End /*/}

  {/*/ Property End /*/}
  {/*/ Agents Star /*/}
  <section className="section-agents section-t8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Best Advisors</h2>
            </div>
            <div className="title-link">
              <a href="agents-grid.html">
                All Advisors
                <span className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        
         {agentsData.map((el)=>(
          <>
           <div className="col-md-4">
           <div className="card-box-d">
            <div className="card-img-d">
              <img src={BASE_IMAGE_URL+el.advisorImage} alt="" className="img-d img-fluid" />
            </div>
            <div className="card-overlay card-overlay-hover">
              <div className="card-header-d">
                <div className="card-title-d align-self-center">
                  <h3 className="title-d">
                    <a href="agent-single.html" className="link-two">
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
         ))}
       
        
      </div>
    </div>
  </section>
  {/*/ Agents End /*/}
  {/*/ News Star /*/}
  <section className="section-news section-t8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Latest News</h2>
            </div>
            <div className="title-link">
              <a href="blog-grid.html">
                All News
                <span className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="new-carousel">
        <div className="carousel-item-c">
          <div className="card-box-b card-shadow news-box">
            <div className="img-box-b">
              <img src="/img/post-2.jpg" alt="" className="img-b img-fluid" />
            </div>
            <div className="card-overlay">
              <div className="card-header-b">
                <div className="card-category-b">
                  <a href="#" className="category-b">
                    House
                  </a>
                </div>
                <div className="card-title-b">
                  <h2 className="title-2">
                    <a href="blog-single.html">
                      House is comming
                      <br /> new
                    </a>
                  </h2>
                </div>
                <div className="card-date">
                  <span className="date-b">18 Sep. 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  {/*/ News End /*/}
  {/*/ Testimonials Star /*/}
  <section className="section-testimonials section-t8 nav-arrow-a">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Testimonials</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonial-carousel">
        <div className="carousel-item-a">
          <div className="testimonials-box">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="testimonial-img">
                  <img
                    src="/img/testimonial-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="testimonial-ico">
                  <span className="ion-ios-quote" />
                </div>
                <div className="testimonials-content">
                  <p className="testimonial-text">
                  <p className="testimonial-text">
  Working with this team was a truly seamless experience. They listened to our needs, guided us every step of the way, and helped us find the perfect home that matched both our lifestyle and budget. Their attention to detail and commitment to client satisfaction sets them apart.
</p>

                  </p>
                </div>
                <div className="testimonial-author-box">
                  <img
                    src="/img/mini-testimonial-1.jpg"
                    alt=""
                    className="testimonial-avatar"
                  />
                  <h5 className="testimonial-author">Albert &amp; Erika</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  {/*/ Testimonials End /*/}
</>


        </>
    )
}