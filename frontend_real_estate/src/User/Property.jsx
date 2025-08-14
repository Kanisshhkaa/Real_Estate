import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link} from "react-router-dom"

export default function Property(){
  const[propertyData,setpropertyData]=useState([])
  const [cityId, setcityId] = useState(""); // tracks selected option
  const[city,setcity]=useState([])
  

  useEffect(()=>{
    ApiServices.getCity()
    .then((res)=>{
      setcity(res.data.data)
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
    
  // Update the selected value from dropdown
  const changeType = (e) => {
    setcityId(e.target.value);
  };

  

  // Filter materials based on status, access level, and selected type
  const filteredMaterial = propertyData.filter(
    (el) =>
      el.status == "Accept" &&
    el.dealerstatus == "Active" &&
    (!cityId || el.cityId?.cityName === cityId)

      
  );
    return(
        <>
        <>
  {/*/ Intro Single star /*/}
  <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Our Amazing Properties</h1>
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
                Properties Grid
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/*/ Intro Single End /*/}
  {/*/ Property Grid Star /*/}
  <section className="property-grid grid">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          
            <>
            <div className="grid-option">
            <form>
            <select value={cityId} onChange={changeType} className="custom-select">
  <option value="">Select City</option>
  {city.map((el) => (
    <option key={el._id} value={el.cityName}>{el.cityName}</option>
  ))}
</select>

            </form>
          </div>
            </>
          
        </div>
          {/* Property Cards Section */}
    
      {filteredMaterial.map((el) => (
        <>
        {
          el.status == "Accept"?(
            
            el.dealerstatus == "Active"?(
              <>
              <div className="col-md-4" key={el._id}>
              <div className="card-box-a card-shadow mt-4" style={{height:'300px',marginTop:'20px',width:'280px'}}>
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
                    <span className="price-a">
                      rent | {el.price}
                    </span>
                  </div>
                  <Link to={'/ViewSingleProperty/'+ el._id} className="link-a">
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
               </div></>
            ):(
              <>
              
              </>
            )
            
          ):(
            <></>
          )
        }
        </>
      ))}
    </div>
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
    
  </section>
  {/*/ Property Grid End /*/}
</>

        </>
    )
}